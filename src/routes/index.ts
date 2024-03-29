import {Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chats-routes.js";

const appRouter= Router();
appRouter.use("/user",userRoutes); //domain/api/v1/user
appRouter.use("/chats",chatRoutes);  //dhatsomain/api/v1/c

export default appRouter;