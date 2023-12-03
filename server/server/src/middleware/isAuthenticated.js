import jwt from "jsonwebtoken";
import config from "../config";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    // Check if the authorization header is present
    if (!token) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // Split the token and get the actual token value
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid authorization header format" });
    }

    const decoded = jwt.verify(tokenParts[1], config.jwtSecret);

    // IMPORTANT!!!!!
    // early guard clause, everything error or negative
    if (!decoded?.id) {
      return res.status(401).json({ message: "Unauthorised" });
    }

    // fetch data from dB
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    
    next();

  } catch (error) {
    res.status(401).json({ message: "Unauthorised", error: error.message });
  }
};

export default isAuthenticated;
