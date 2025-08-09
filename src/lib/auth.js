import jwt from 'jsonwebtoken';
import 'dotenv/config'; // Ensure environment variables are loaded

export const verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) return reject(err);
            resolve(decoded);
        });
    });
};