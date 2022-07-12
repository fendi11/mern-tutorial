const mongoose = require('mongoose')
const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Users",
          },
        text: {
            type: String,
            require: [true, 'please add a text value']
        },
    },
    {
        timetamps: true,
    }
)
module.exports = mongoose.model('Goals', goalSchema)