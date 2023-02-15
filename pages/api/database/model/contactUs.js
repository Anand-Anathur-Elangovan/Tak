import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
  {
    name: "string",
    email: "string",
    phone: "string",
    message: "string",
  },
  { timestamps: true }
);

const contactUs =
  mongoose.models.contactus || mongoose.model("contactus", contactUsSchema);
export default contactUs;
