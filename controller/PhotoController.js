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
    res.status(200).render("photos", { photos, link: "photos" });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

const getPhotosById = async (req, res) => {
  try {
    const photo = await Photo.findById({ _id: req.params.id });
    if (!photo) {
      res.status(404).send("Photo not found");
      return;
    }
    res.status(200).render("photo", { photo, link: "photos" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export { createPhoto, getAllPhotos, getPhotosById };
