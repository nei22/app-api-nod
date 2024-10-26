const { default: axios } = require('axios')
const express = require('express')
// auth
const router = express.Router()
router.get('/:cep',  async (req, res) => {
  const { cep } = req.params
  const viaCepUrl = `https://viacep.com.br/ws/${cep}/json`
  try {
    const response = await axios.get(viaCepUrl)
    if (response.data.erro) {
      res.status(404).json({ error: 'CEP não encontrado' })
      return
    }
    res.json(response.data)
    
  } catch (error) {
    console.error('error interno: ', error.message)
    res.status(500).json({ error: 'Erro ao buscar CEP' })
  }
})
module.exports = router