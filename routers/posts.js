const express = require('express');
const router = express.Router();
let { posts } = require('../data/db');
console.log(posts);



// - INDEX
router.get("/", (req, res) => {
    res.send("Lista dei post");
});



// - SHOW
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Visualizzazione dettagli del post ${id}`);
});



// - CREATE
router.post('/', (req, res) => {
    res.send(`Creazione di un nuovo post`);
});



// - UPDATE (MOD. TOTALE - put)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Modifica totale del post ${id}`);
});



// - MODIFY (MOD. PARZIALE - patch)
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Modifica parziale del post ${id}`);
});



// - DESTROY
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Cancellazione del post ${id}`);
});




module.exports = router;