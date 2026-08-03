import pool from '../config/db.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { Users } from '../types/interfaces';
import "dotenv/config";

export const register = async (user:Users) => {
    const hashpassword = await bcrypt.hash(user.password, 10);

    const result = await pool.query(
        "INSERT INTO users (name, email, password) VALUES(?,?,?)",
        [user.name, user.email, hashpassword]
    );
    return result;
}

export const login = async (email: string, password: string) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    const user = (rows as Users[])[0];
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error("JWT secret is not defined");
    }
    const token = jwt.sign({ user_id: user.user_id }, jwtSecret, { expiresIn: "1h" });
    return { user_id: user.user_id, token };
}