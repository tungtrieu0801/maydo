import express from 'express';
const userRouter = express.Router();
import { resolveId } from '../middlewares/index.mjs';
import { getAllUser, getUserById } from '../controller/user_controller.mjs';
userRouter.get("/api/user", getAllUser);
userRouter.get("/api/user/:user_id",resolveId('user_id'), getUserById);

export default userRouter;