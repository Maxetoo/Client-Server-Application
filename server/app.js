require('express-async-errors')
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')
const fileUploader = require('express-fileupload')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})
const AuthRouter = require('./routes/authRoute')
const UserRouter = require('./routes/userRoute')
const PersonalMessageRouter = require('./routes/personalMsgRoute')
const GroupMessageRouter = require('./routes/groupMsgRoute')
const BookmarkRouter = require('./routes/bookmarkRoute')
const SingleGroupRouter = require('./routes/singleGroupRoute')
const errorMiddleware = require('./middlewares/errorMiddleware')
const notFoundMiddleware = require('./middlewares/notFoundRoute')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

// app.use(express.static(path.resolve('./frontend/build')))

app.use(helmet.contentSecurityPolicy({
    directives: {
        imgSrc: ["'self'", "data:", "https://ouch-cdn2.icons8.com", "https://res.cloudinary.com/"],
        // ... other directives ...
    }
})); 

 
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'https://ouch-cdn2.icons8.com', 'https://res.cloudinary.com', 'https://img.freepik.com'],
    })
)
app.use(fileUploader({ useTempFiles: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE))
app.use(morgan('tiny')) 


app.get('/docs', (req, res) => {
    res
        .status(200)
        .send(`<h1>Writemi Api</h1><a href="/api-docs">Documentation</a>`)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/personal', PersonalMessageRouter)
app.use('/api/v1/group', GroupMessageRouter)
app.use('/api/v1/bookmark', BookmarkRouter)
app.use('/api/v1/singleGroup', SingleGroupRouter)

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./frontend/build', 'index.html'))
})

// console.log(path.resolve('./frontend', 'index.html'))
app.use(notFoundMiddleware)
app.use(errorMiddleware)
const port = process.env.PORT || 5000

const startApp = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(port, console.log(`app is listening to port ${port}...`))
    } catch (error) {
        console.log(error.message)
    }
}

startApp() 