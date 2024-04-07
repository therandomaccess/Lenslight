import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "LensLight",
    })
    .then(() => {
      console.log("Connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default conn;
