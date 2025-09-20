import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        // First, check for the token in cookies
        let token = req.cookies?.accessToken;

        // If not found in cookies, check the Authorization header
        if (!token && req.headers.authorization) {
            token = req.headers.authorization.replace("Bearer ", "");
        }

        if (!token) {
            throw new ApiError(401, "Unauthorized, token not found");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshTokens");
        
        if (!user) {
            throw new ApiError(401, "Invalid access token");
        }

        req.user = user;
        next();

    } catch (error) {
         return next(new ApiError(401, error?.message || "Invalid access token"));
    }
});

export { verifyJWT };