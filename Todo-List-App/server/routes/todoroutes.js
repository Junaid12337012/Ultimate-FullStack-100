import express from 'express';
import { addTodo } from '../Controllers/todoController.js';


const router = express.Router();

// add new Todo ; 

router.post( '/' , addTodo);

export default router ; 