import express from "express";
import routes from "./src/index.routes.js";
import cors from "cors";

const app = express();
const porta = 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Accept",
    ],
  })
);
app.use(express.json());
app.use(routes);

app.listen(porta, () => {
  console.log(`Example app listening on port ${porta}`);
});
