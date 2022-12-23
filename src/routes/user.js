const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//POST user (Crear usuario)
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch(() => res.json({message: error }));
});

//GET all users(Obtener usuarios)
router.get("/users", (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch(() => res.json({message: error }));
});

//GET users(Obtener 1 usuario)
router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch(() => res.json({message: error }));
});

//UDPATE users(actualizar 1 usuario)
router.put("/users/:id", (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
    .updateOne({ _id: id },{ $set: {name, age, email}})
    .then((data) => res.json(data))
    .catch(() => res.json({message: error }));
});

//DELETE users(Borrar 1 usuario)
router.delete("/users/:id", (req, res) => {
    const {id} = req.params;
    userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch(() => res.json({message: error }));
});


module.exports = router;