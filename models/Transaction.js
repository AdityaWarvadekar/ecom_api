const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
    username: {
        type: String,
        required : true,
    },
    prodList: [
        {
            product: {
                type: String,
                required: true
            },
            price : {
                type: String,
                required: true
            }
        }
    ]
})

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;