import express from 'express';
const userRouter = express.Router();
import { resolveId } from '../middlewares/index.mjs';
import { addNewUser, getAllUser, getUserById } from '../controller/user_controller.mjs';

userRouter.get("/api/user", getAllUser);
userRouter.get("/api/user/:user_id",resolveId('user_id'), getUserById);
userRouter.post("/api/user", addNewUser);
userRouter.post("/api/zalo-notify", zalo_notify);

export default userRouter;