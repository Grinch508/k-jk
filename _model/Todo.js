import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    todo: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)

export default Todo