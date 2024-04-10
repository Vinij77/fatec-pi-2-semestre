import { Router } from "express";
const router = Router();

router.get("/", (request, response) => {
  console.log(request.body);
  response.send("Hello World!");
});

export default router;
