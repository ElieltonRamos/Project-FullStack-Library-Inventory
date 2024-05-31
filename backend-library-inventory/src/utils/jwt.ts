import { sign, verify } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'secret';

export interface Payload {
  id: number;
}

export function generateToken(payload: Payload) {
  const token = sign(payload, secretKey);
  return token;
}

export function verifyToken(token: string) {
  try {
    const payload = verify(token, secretKey) as Payload;
    return payload;
  } catch (err) {
    return 'invalid-token';
  }
}