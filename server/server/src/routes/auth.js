import { Router } from "express";
import Register from "../controllers/root/auth/register";
import login from "../controllers/root/auth/login";

const authRoute = Router ();

authRoute.post("/register", Register);
authRoute.post("/login", login);

export default authRoute;