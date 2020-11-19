const Alquiler = require("../models/alquiler");

//obtener todos los productos
function getAlquiler(req, res) {
  Alquiler.find({}, (err, alquileres) => {
    if (err)
      return res
        .status(200)
        .send({ message: "Error al consultar la base de datos: ", err });
    if (!alquileres)
      return res.status(404).send({ message: "No existen productos" });

    res.status(200).send({ alquileres });
  });
}

function saveAlquiler(req, res) {
  console.log("POST /api/v1/product");
  console.log(req.body);

  let alquiler = new Alquiler();
  alquiler.direccion = req.body.direccion;
  alquiler.picture = req.body.picture;
  alquiler.price = req.body.price;
  alquiler.category = req.body.category;
  alquiler.description = req.body.description;

  alquiler.save((err, alquilerStored) => {
    if (err)
      res
        .status(500)
        .send({ message: "Error al salvar en la base de datos ", err });

    res.status(200).send({ product: alquilerStored });
  });
}


module.exports = {
  getAlquiler,
  saveAlquiler
  
};
