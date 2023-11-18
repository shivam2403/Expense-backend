const { default: mongoose } = require("mongoose");

const ExpenseSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        enum: ['Grocery', 'Transport', 'Food', 'Clothes', 'Medicine', 'Sports', 'Technical'],
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

module.exports=mongoose.model("Expense",ExpenseSchema);