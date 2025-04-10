import express from 'express';
import { createTask, getTask, getTasks, updateTask,deleteTask } from '../controllers/task/taskController.js';
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
// protect checks if user is logged in or not protects the login
router.post("/task/create", protect, createTask);
router.get("/tasks", protect,getTasks );
router.get("/task/:id", protect, getTask);
router.patch("/task/:id", protect, updateTask)
router.delete("/task/:id", protect, deleteTask)

export default router;
