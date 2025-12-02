import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export function generateTokenAndSetCookie(userId, res) {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt-netflix", token, {
    httpOnly: true, // cookie can only be accessed from the server
    secure: ENV_VARS.NODE_ENV !== "development", // cookie can only be sent over HTTPS
    sameSite: "strict", // cross-site cookie access is disallowed
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  });

  return token;
}
