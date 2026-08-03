import type {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import "dotenv/config";

export interface AuthRequest extends Request {
    user_id?: string;
}

const requireAuth=(req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization; // expects "Bearer <token>"

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user_id = decoded.user_id; 
    next(); 
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }

};

export default requireAuth;
