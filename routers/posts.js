const express = require('express');
const router = express.Router();
let { posts } = require('../data/db');
// console.log(posts);



// - INDEX
router.get("/", (req, res) => {
    // res.send("Lista dei post");

    res.json({
        success: true,
        description: "Lista dei post",
        posts
    });
});



// - SHOW
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.send(`Visualizzazione dettagli del post ${id}`);




    const post = posts.find(post => post.id === id);
    
    if (post) {
        res.json({
            success: true,
            description: `Visualizzazione dettagli del post ${id}`,
            posts
        });
    } else {
        res
            .status(404)
            .json({
                description: "Visualizzazione dettagli del post " + id + " fallita: Post non trovato"
            });
    };
});



// - CREATE
router.post('/', (req, res) => {
    // res.send(`Creazione di un nuovo post`);

    res.json({
        success: true,
        description: `Creazione di un nuovo post`,
        posts
    });
});



// - UPDATE (MOD. TOTALE - put)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.send(`Modifica totale del post ${id}`);




    const post = posts.find(post => post.id === id);


    if (post) {
        res.json({
            success: true,
            description: `Modifica totale del post ${id}`,
            posts
        });
    } else {
        res
            .status(404)
            .json({
                description: "Modifica totale del post " + id + " fallita: Post non trovato"
            });
    };
});



// - MODIFY (MOD. PARZIALE - patch)
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.send(`Modifica parziale del post ${id}`);



    const post = posts.find(post => post.id === id);

    if (post) {
        res.json({
            success: true,
            description: `Modifica parziale del post ${id}`,
            posts
        });
    } else {
        res
            .status(404)
            .json({
                description: "Modifica parziale del post " + id + " fallita: Post non trovato"
            });
    };
});



// - DESTROY
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.send(`Cancellazione del post ${id}`);

    if (posts.find(post => post.id === id)) {
        posts = posts.filter(post => post.id !== id);

        res
            // * STATUS "OK (SENZA CONTENUTO)" perchè non ho contenuto da mostrare indietro
            // .status(204)
            .json({
                success: true,
                description: `Cancellazione del post ${id}`,
                posts
            });
    } else {
        res
            .status(404)
            .json({
                description: "Cancellazione del post " + id + " fallita: Post non trovato"
            });
    };

});




module.exports = router;