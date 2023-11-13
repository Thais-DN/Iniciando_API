const { getTodosLivros, getLivroPorId, insereLivro,  modificaLivro, deletaLivroPorId } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("livro inserido com sucesso")
        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.status(201)
            res.send("Livro modificado com sucesso")
    
        } else {
            res.status(422)
            res.send("Id inválido")
        }
        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        deletaLivroPorId(req.params.id)
        res.send("Deletado com sucesso")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}