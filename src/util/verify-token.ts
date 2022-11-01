import jwt from "jsonwebtoken";

export async function verifyJWT(token: string | undefined) {
  try {
    if (!token) {
      return false;
    }
    const decodedToken = jwt.verify(token, "TOPSECRET");
    console.log("decodedToken", decodedToken);
    if (!decodedToken) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}
