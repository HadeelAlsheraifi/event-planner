const bookSchema = require("../model/bookSchema");

exports.fetchBooking = async (req, res) => {
  try {
    const bookingData = await bookSchema.find();
    res.status(200).json(bookingData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFullEvents = async (req, res) => {
  try {
    let bookingData = await bookSchema.find();

    bookingData = bookingData.filter(
      (bookingInfo) => bookingInfo.numOfSeats === bookingInfo.bookSeats
    );

    res.status(200).json(bookingData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.fetchEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingData = await bookSchema.findById(id);
    res.status(200).json(bookingData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const data = req.body;
    const bookingData = await bookSchema.create(data);
    res.status(200).json(bookingData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const foundseat = await bookSchema.findByIdAndDelete(id);
    if (foundseat) {
      res.status(204).end();
    } else {
      res.status(404).json({ msg: "Not Found" });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatebooking = await bookSchema.findByIdAndUpdate(id, data, {
      new: true,
    });
    console.log(updatebooking);
    if (updatebooking) {
      res.status(200).json(updatebooking);
    } else {
      res.status(404).json({ msg: "Not Found 1" });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

exports.getAllOrByDate = async (req, res) => {
  try {
    const date = req.body;
    if (date === undefined) {
      console.log("working");
    } else {
      console.log("Not working");
    }
  } catch (error) {}
};
