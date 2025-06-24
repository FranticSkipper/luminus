import { Request, Response } from "express";
import { findUserByEmail, addUser, findUserById } from "../models/UserStore";

export const logup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Email and password are required" });
  }
  if (findUserByEmail(email)) {
    return res
      .status(409)
      .json({ status: "error", message: "User already exists" });
  }

  const newUser = addUser({ email, password });
  // Never send the password back to the client
  const { password: _, ...userToSend } = newUser;

  res.status(201).json({
    status: "success",
    message: "User registered successfully",
    user: userToSend,
    token: newUser.id, // Use the new user's ID as a session token for this demo
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "error", message: "Email and password are required" });
  }

  const user = findUserByEmail(email);
  // NOTE: In a real app, you should use a library like bcrypt to compare hashed passwords.
  if (!user || user.password !== password) {
    return res
      .status(401)
      .json({ status: "error", message: "Invalid credentials" });
  }

  // Never send the password back to the client
  const { password: _, ...userToSend } = user;

  res.json({
    status: "success",
    user: userToSend,
    token: user.id, // Use the user's ID as a session token for this demo
  });
};

export const loginByToken = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "No token provided" });
  }

  const user = findUserById(token);
  if (!user) {
    return res.status(401).json({ status: "error", message: "Invalid token" });
  }

  const { password: _, ...userToSend } = user;
  res.json({ status: "success", user: userToSend });
};

export const logout = async (req: Request, res: Response) => {
  // In a real token-based system, logout is typically handled client-side
  // by destroying the token. The server can have a token blocklist if needed.
  res.json({ status: "success", message: "Logged out successfully" });
};
