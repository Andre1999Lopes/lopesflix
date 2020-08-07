import config from '../config'

const urlVideos = `${config.URL}/videos`

function create(objetoDoVideo){
    return fetch(`${urlVideos}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo)
    })
    .then(async respostaServer => {
        if(respostaServer.ok){
            const resposta = await respostaServer.json()
            return resposta
        }

        throw new Error('Não foi possível cadastrar os dados ://')
    })
}

export default {
	create
}