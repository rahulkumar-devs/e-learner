import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMessage extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<IMessage> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  verifiyCode: string;
  isverified: boolean;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  message: IMessage[];
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username is Required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifiyCode: {
    type: String,
    required: [true, "verifycode is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "verifycode expiry is required"],
  },

  isverified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },

  message:[MessageSchema]

},{
    timestamps:true
});

const userModel = (mongoose.models.User as mongoose.Model<IUser>)||(mongoose.model<IUser>("User",userSchema))

export default userModel;

