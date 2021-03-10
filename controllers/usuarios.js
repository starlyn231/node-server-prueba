const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    msg: "get API with controller",
    q,
    nombre,
    apikey,
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;

  res.status(500).json({
    msg: "Put API with controllers",
    id,
  });
};

const usuarioPost = (req, res) => {
  const body = req.body;
  res.json({
    msg: "Post API add controllers",
    body,
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "Delete API add borrar",
  });
};
module.exports = { usuariosGet, usuarioPut, usuarioPost, usuarioDelete };
