import mysql from "mysql2/promise";
import "dotenv/config"
function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value; // TS now knows this is definitely a string
}

const pool = mysql.createPool({
  host: requireEnv("DB_HOST"),
  user: requireEnv("DB_USER"),
  password: requireEnv("DB_PASSWORD"),
  database: requireEnv("DB_NAME"),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;