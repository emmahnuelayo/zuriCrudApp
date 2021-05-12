const Info = require('./../models/infoModel');

//post request (Create)
exports.createInfo = async (req, res) => {
  try {
    const newInfo = await Info.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        info: newInfo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Invalid data sent',
    });
  }
};

//get request (Read)
exports.getAllInfos = async (req, res) => {
  try {
    const infos = await Info.find();

    res.status(200).json({
      status: 'success',
      results: infos.length,
      data: {
        infos,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

//responding to URL parameters
exports.getInfo = async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        info,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};

//patch request (Update)
exports.updateInfo = async (req, res) => {
  try {
    const info = await Info.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        info,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
//delete request (Delete)
exports.deleteInfo = async (req, res) => {
  try {
    await Info.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
