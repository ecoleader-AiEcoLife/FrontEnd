import mongoose, { models, Schema } from "mongoose";

const recycleSchema = new Schema(
  {
    id: {
        type:String,
        required: true,
    },

    title: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    collection:'recycle'
  }
);

// 모델이 이미 존재하는 경우 기존 모델을 사용, 그렇지 않으면 새로 생성
const Recycle = mongoose.models.Recycle || mongoose.model("Recycle", recycleSchema);

export default Recycle;
