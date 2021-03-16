const mongoose = require('mongoose');

const { DB_PASSWORD, DB_NAME } = process.env;
const DB_URI = `mongodb+srv://hablaAdmin:${DB_PASSWORD}@habla.jayrp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected!'))
    .catch(err => console.log(err));
