const { Schema, model } = require("mongoose");

const validEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const validBookSeat = function (bookedSeats) {
  return bookedSeats <= this.numOfSeats;
};

const validateStartDate = function (startDate) {
  const timeNow = new Date();
  return new Date(startDate) >= timeNow;
};
const validateEndDate = function (endDate) {
  return new Date(endDate) > new Date(this.startDate);
};

const BookingSchema = Schema(
  {
    orgainzer: {
      type: String,
      unique: true,
      max: 20,
    },
    name: {
      type: String,
      validate(value) {
        return !value.toLowerCase().includes("event");
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      LowerCase: true,
      validate: [validEmail, "please add a valid Email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    image: {
      type: String,
      required: true,
    },
    numOfSeats: {
      type: Number,
      min: 5,
    },
    bookSeats: {
      type: Number,
      default: 0,
      validate: [validBookSeat, "smaller than the number of seats"],
    },
    startDate: {
      type: Date,
      validate: [validateStartDate, " add valid date"],
    },
    endDate: {
      type: Date,
      validate: [validateEndDate, "add a validate end Date"],
    },
  },
  { timesstamps: true }
);
module.exports = model("BookingDetails", BookingSchema);
