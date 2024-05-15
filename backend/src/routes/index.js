import { Router } from "express";
import userRoute from './usuario.route.js'

const router = Router();

router.use('/users', userRoute)

export default router;
