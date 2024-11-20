// models/user.ts
import mongoose, { Model, Document, Types } from "mongoose";

// User 문서의 인터페이스 정의에 _id 추가
interface IUser extends Document {
  _id: Types.ObjectId;  // MongoDB ObjectId 타입 명시
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "register",
    versionKey: false,
  }
);

let User: Model<IUser>;

try {
  User = mongoose.models.User as Model<IUser> || mongoose.model<IUser>('User', UserSchema);
} catch (error) {
  User = mongoose.model<IUser>('User', UserSchema);
}

export { User };
export type { IUser };