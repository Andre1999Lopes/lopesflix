import config from '../config'

const urlCategorias = `${config.URL}/categorias`

function getAll(){
    return fetch(`${urlCategorias}`)
    .then(async respostaServer => {
        if(respostaServer.ok){
            const resposta = await respostaServer.json()
            return resposta
        }

        throw new Error('Não foi possível cadastrar os dados ://')
    })
}

function getAllWithVideos(){
    return fetch(`${urlCategorias}?_embed=videos`)
    .then(async respostaServer => {
        if(respostaServer.ok){
            const resposta = await respostaServer.json()
            return resposta
        }

        throw new Error('Não foi possível pegar os dados ://')
    })
}

export default {
    getAllWithVideos,
    getAll,
}