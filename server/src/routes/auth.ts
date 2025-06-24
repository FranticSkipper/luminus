import { Router } from "express";
import {
  login,
  logup,
  logout,
  loginByToken,
} from "../controllers/authController";

const router = Router();

router.post("/logup", logup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/login-by-token", loginByToken);

export { router as authRouter };
