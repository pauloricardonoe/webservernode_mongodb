const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ComentarioSchema = new Schema({
  usuario: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  comentario: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Comentario = mongoose.model("comentario", ComentarioSchema);
