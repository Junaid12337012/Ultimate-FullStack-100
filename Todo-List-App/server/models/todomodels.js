import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    title : {
        type : String ,
        required : [true , 'title is required'],
        maxlength : [ 12 , 'title contain upto 12 leter']
    },
    content : {
        type : String ,
        required : [ true , 'some content must be required']
    },
    completed : {
        type : Boolean ,
        default : false
    }
});

const Todo = mongoose.model('Todo', todoschema);

export default Todo;