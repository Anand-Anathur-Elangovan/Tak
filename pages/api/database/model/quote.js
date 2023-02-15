import mongoose from "mongoose";

const quoteSchema = mongoose.Schema({
    'name': { type: String, required: true },
    'email_addr': { type: String, required: true },
    'company_name': String,
    'phone_number': Number,
    'street_address': String,
    'city': String,
    'state_province': String,
    'zip_code': Number,
    'country': String
});

const quotes =
  mongoose.models.quoteSchema || mongoose.model("quotes", quoteSchema);
export default quotes;
