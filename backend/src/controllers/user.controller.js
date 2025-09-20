import asyncHandler from '../utils/asyncHandler.js'
import { ApiError } from '../utils/apiError.js'
import { User } from '../models/user.model.js'
//import { uploadOnCloudinary } from '../cloudinary.js'
import { apiResponse } from '../utils/apiResponse.js'
import jwt from 'jsonwebtoken'




//get user details from frontend 
//validate user details - also check if something is not left empty
//check if user already exists:username or email
//upload them to cloudinary,
//create user object - create entry in db
//remove password and refresh token field from response
// check for user creation
// return res


const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId)
    if (!user) {
      console.error("❌ No user found with ID:", userId);
      throw new ApiError(404, "User not found while generating tokens");
    }
    const accessToken = await user.generateAccessToken()
    const refreshToken = await user.generateRefreshToken()

    user.refreshTokens = refreshToken

    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }


  } catch (error) {

    throw new ApiError(500, "Something went wrong while generating access and refresh tokens")
  }
}

const registerUser = asyncHandler(async (req, res) => {


  // if the data is coming from forms or in json format we can find it using req.body

  console.log("Request Body:", req.body); // 👈 Debug line

  //getting user details from frontend
  const { username, email, district, password } = req.body


  /* .some() tests each element of an array against a condition (callback function).
  It returns:
  true → if at least one element in the array passes the condition.
  false → if no element passes the condition.*/

  if ([username, email, password,district].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required")
  }

  // ✅ Compare password and confirmPassword
  // if (password !== confirmPassword) {
  //   throw new ApiError(400, "Password and Confirm Password do not match");
  // }


  // checking if user already exists
  const existedUser = await User.findOne({ email: req.body.email })

  if (existedUser) {
    throw new ApiError(409, "User already exists with this email")
  }

  //  upload them to cloudinary if avatar or cover image is present,


  //create user object - create entry in db

  const user = await User.create({
    username,
    email,
    password,
    role: 'citizen',      // fallback to 'user' if role is undefined
    phone: '',
    district: ''
  })

  //remove password and refresh token field from response

  //select is used to select fields , by default all fields are selected to we use - to remove fields
  const createdUser = await User.findById(user._id).select("-password -refreshTokens")



  // check for user creation
  if (!createdUser) {
    throw new ApiError(500, "User not created due to some internal error")
  }

  // return res
  return res.status(201).json(
    new apiResponse(200, createdUser, "User created successfully")
  )
})






const loginUser = asyncHandler(async (req, res) => {
  // get email and password f
  const { email, password } = req.body;

  // Check if email is provided
  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  // Find the user by email
  const user = await User.findOne({ email });

  // IMPORTANT: Check if the user exists
  if (!user) {
    throw new ApiError(404, "User with this email does not exist");
  }

  // Check if the password is correct
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Generate access and refresh tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id);

  // Fetch the logged-in user without sensitive information
  const loggedInUser = await User.findById(user._id).select("-password -refreshTokens");

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
  };

  // Return the response with cookies and JSON data
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .cookie("accessToken", accessToken, cookieOptions)
    .json(
      new apiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken
        },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {

    console.log("🔎 req.user at logout:", req.user);
 if (!req.user || !req.user._id) {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  return res.status(200).json({ message: "Already logged out" });
}

await User.findByIdAndUpdate(req.user._id, {
  $set: { refreshToken: undefined }
}, { new: true });


  const cookieOptions = {
    httpOnly: true,
    secure: true,
  }
  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new apiResponse(200, {}, "User logged out successfully"))
})

export {
  registerUser,
  generateAccessAndRefreshTokens,
  loginUser,
  logoutUser
}