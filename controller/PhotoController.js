import Photo from "../model/PhotoModel.js";

const createPhoto = async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    res.status(201).json({
      succedeed: true,
      photo,
    });
  } catch (err) {
    res.status(500).json({
      succedeed: false,
      err: err,
    });
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).json({
      succedeed: true,
      photos,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export { createPhoto, getAllPhotos };
