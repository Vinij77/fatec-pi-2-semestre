import { Router } from "express";
import userRoute from "./usuario.route.js";
import taskRoute from "./task.route.js"

const router = Router();

router.use("/users", userRoute);
router.use("/tasks", taskRoute)

export default router;
