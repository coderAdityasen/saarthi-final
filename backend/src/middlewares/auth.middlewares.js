import jwt from "jsonwebtoken";
import { User } from "../models/User.Models.js";
import { apierror } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        // Retrieve JWT token from cookies
        const token = req.cookies.accessToken || req.cookies.refreshToken;

        if (!token) {
            // If token is missing, return an error
            return next(new apierror(401, "Unauthorized - Token missing"));
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Check if the user exists in the database
        const user = await User.findById(decoded._id);
        if (!user) {
            // If user not found, return an error
            return next(new apierror(404, "User not found"));
        }

        // Attach user information to the request object for further processing
        req.user = user;

        // Call next middleware
        next();
    } catch (error) {
        // Handle any errors
        return next(new apierror(401, "Unauthorized - Invalid token"));
    }
});
