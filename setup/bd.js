const cluster    = 'cluster0.zagxe.mongodb.net';
const bd         = 'bd_webnode_comentarios';
const user       = 'pauloricardonoe';
const password   = 'fmddsz8v7wtagzE';
const URLConexao = `mongodb+srv://${user}:${password}@${cluster}/${bd}?retryWrites=true&w=majority`;

module.exports = {mongoUrl: URLConexao}
