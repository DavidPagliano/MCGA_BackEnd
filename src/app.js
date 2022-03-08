import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import pkg from "../package.json";

import contactRoutes from "./routes/contact.routes";
import plansRoutes from "./routes/plans.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import { createRoles, createAdmin} from "./libs/initialSetup";

const app = express();

createRoles();
createAdmin();

app.set("pkg", pkg);
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 4);
// Middlewares
const corsOptions = {
    // origin: "http://localhost:3000",
  };

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/", (req, res) => {
    res.json({
      message: "Welcome to BelieWeb API",
      name: app.get("pkg").name,
      version: app.get("pkg").version,
      description: app.get("pkg").description,
      author: app.get("pkg").author,
    });
  });

app.use("/api/plan", plansRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

export default app;