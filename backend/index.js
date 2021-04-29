const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/todo')
const cors = require('cors')
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://phamtrongdong:dongpt@app-todo.4ykgc.mongodb.net/app-todo?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
        console.log('ket noi thanh cong')
    } catch (error) {
        console.log(loi);
    }
}
connectDB()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/todo', router)
const PORT = 4000

app.listen(PORT, () => console.log(`server on port ${PORT}`))