const express = require('express')

const contatos = require('../model/Contatos')
const { where } = require('sequelize')


const router = express.Router()


router.get('/contatos/listarContatos', (req, res) => {
    contatos.findAll(
        // {
        //     attributes: ['id', 'nome', 'telefone', 'email', 'favorito', 'foto']     // Posso bloquear por conta do timestamps: false no model
        // }
    )
    .then((listcontatos) => {
        
        res.json({
                Data: listcontatos,
                Erro: 0,
                Message: "Contatos listados com Sucesso !",
                Referencia: 1,
                Params: 200
             })

    })
    .catch((error) => {
        res.status(500).json({
            Erro: 1,
            Message: "Erro ao listar contatos",
            Detalhes: error.message
        })
    })
})


router.post('/contatos/cadastrarContato', (req, res) => {

    const {nome, telefone, email, favorito, foto} = req.body

    contatos.create({
            nome,
            telefone,
            email,
            favorito,
            foto
        
        })
        .then(() => {

            res.json({
                Erro: 0,
                Message: "Contato Cadastrado com Sucesso !",
                Referencia: 1,
                Params: 201
            })

        }) 
        .catch ((error) => {
            res.status(500).json({
                Erro: 1,
                Message: "Erro ao cadastrar contato",
                Detalhes: error.message
            })
        })
})



router.delete('/contatos/deletarContato/:id', (req, res) => {

    const id = req.params.id

    contatos.destroy({
        where: {id}
    
    }) .then (() => {
        res.json({
            Erro: 0,
            Message: "Contato Deletado com Sucesso !",
            Referencia: 1,
            Params: 204
        })
    }) .catch ((error) => {
        res.status(500).json({
            Erro: 1,
            Message: "Erro ao deletar contato",
            Detalhes: error.message
        })
    })


})

router.put('/contatos/atualizarContato/:id', (req, res) => {
    
    const id = req.params.id; 
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({
            Erro: 1,
            Message: "Todos os campos são obrigatórios."
        });
    }

    contatos.update(
        { nome, email, telefone }, 
        { where: { id } } 
    )
    .then(() => {
        res.json({
            Erro: 0,
            Message: "Contato atualizado com sucesso!",
            Referencia: 1,
            Params: 204
        });
    })
    .catch((error) => {
        res.status(500).json({
            Erro: 1,
            Message: "Erro ao atualizar contato",
            Detalhes: error.message
        });
    });
});



module.exports = router