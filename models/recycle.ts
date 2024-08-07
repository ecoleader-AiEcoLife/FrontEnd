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

const Recycle = models.Recycle || mongoose.model("Recycle", recycleSchema);

export default Recycle;
