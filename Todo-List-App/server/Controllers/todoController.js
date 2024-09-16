import Todo from '../models/todomodels'

//add Todo  . . .
const addTodo = async(req , res) => {
    const todo  = new Todo ({
        title : req.body.title, // Extract Title from body 
        text : req.body.text , 
        completed : req.body.completed,
    });

    try {
        const newtodo = await todo.save();  //save todo in data base
        res.status(201).json(newtodo); // send the new create todo in json response
    } catch (err) {
        res.status(400).json({message : err.message }); //Handle any validation in error
    }
};


export default { addTodo };
