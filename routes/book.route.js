const express = require("express");
const {
  fetchBooking,
  createBooking,
  deleteBooking,
  updateBooking,
  fetchEvent,
  getFullEvents,
  getAllOrByDate,
} = require("../controller/book.controller");

const router = express.Router();

router.get("/", fetchBooking);
router.get("/searchById/:id", fetchEvent);
router.post("/", createBooking);
router.delete("/:id", deleteBooking);
router.put("/:id", updateBooking);
router.get("/viewFullEvents", getFullEvents);
router.get("/allOrByDate", getAllOrByDate);

module.exports = router;
