import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  refreshTokens: {
    type: [String],
  },
  role:
   { type: String, enum: ["citizen", "volunteer", "admin"], default: "citizen" } ,

   phone:{
    type: String 
  },
  district: {
      type:String, // default location for alerts
  } },{ timestamps: true })



userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
  } catch (error) {
    next(error)

  }
})

//password comparison method
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

//generating access tokens
userSchema.methods.generateAccessToken = function () {
  return jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email

  },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({
    _id: this._id,

  },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}


export const User = mongoose.model("User", userSchema)
