//import mongoose
import mongoose from "mongoose";
//create a schema
const urlSchema = new mongoose.Schema(
  {
    original: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    // createdBy:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
  },
  { timestamps: true }
);
export const Url = mongoose.model("Url", urlSchema);
