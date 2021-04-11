const express = require('express');
const router = express.Router();

const bcrypt = require("bcrypt");

const Comentario = require("../models/comentario");

router.post("/", (req, res) => {
  Comentario.findOne({
    email: req.body.email,
    usuario: req.body.usuario,
    comentario: req.body.comentario
  })
    .then(comentario => {
      if (comentario)
        return res.status(400).json({erro: "Comentário já registrado para o usuário"});
      else {
        const newcomment = Comentario({
          usuario: req.body.usuario,
          email: req.body.email,
          senha: req.body.senha,
          comentario: req.body.comentario
        });

        // criptografar a senha
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(newcomment.senha, salt, function(err, hash) {
            if (err) throw err;

            newcomment.senha = hash;

            newcomment
              .save()
              .then(p => res.json(p))
              .catch(erro => console.log("Erro ao gravar comentário: " + erro));
          });
        });
      }
    })
    .catch(erro => console.log(erro));
})

router.get("/", (req, res) => res.json("{}"));

module.exports = router;
