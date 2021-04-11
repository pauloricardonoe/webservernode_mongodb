const express    = require('express');
const bodyparser = require('body-parser');
const mongodb = require('mongoose');
const app        = express();

const port = 3000;

//<editor-fold desc="MongoDB">
const conexao = require('./setup/bd').mongoUrl;

mongodb
  .connect(conexao, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Conexão com o mongodb realizada com sucesso!\n"))
  .catch(erro => console.log(" *** Erro ao conectar ao MongoDB: " + erro));
//</editor-fold>

//<editor-fold desc="Parser Body">
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//</editor-fold>

// Front
app.use('/comentario', express.static(__dirname + '/public/comentario'));

// API
const comentario = require("./routes/comentario");
app.use("/api/comentario", comentario);

//<editor-fold desc="Tratar Erro 404">
app.get('*', (req, res) => {
  res.status(404).send('Recurso não encontrado.');
});
//</editor-fold>

app.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`);
} );
