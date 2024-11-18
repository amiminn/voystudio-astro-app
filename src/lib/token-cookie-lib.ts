import jwt from "jsonwebtoken";

const JWT_SECRET = "jEZqJmui4tM1lrlmpDYSCLk7wRwycsat";

interface JwtPayload {
  userId: string;
  role: string;
  iat?: number;
  exp?: number;
}

const validateJwt = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

export function isAuth() {
  const token = "your_jwt_token_here";

  try {
    const payload = validateJwt(token);
    console.log("Token is valid:", payload);
  } catch (error: any) {
    console.error(error.message);
  }
}
