const { viaCepApi } = require('../services/api')

const obterEnderecoPorCep = async (req, res) => {
    let { cep } = req.body
    const { data } = await viaCepApi.get(`/${cep}/json`)
    return res.status(200).json(data)
}

module.exports = {
    obterEnderecoPorCep
}