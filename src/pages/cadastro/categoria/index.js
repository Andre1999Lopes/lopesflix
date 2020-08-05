import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'
import FormField from '../../../components/FormFields'
import Button from '../../../components/Button'

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }
    const [ categorias, setCategorias ] = useState([])
    const [ values, setValues ] = useState(valoresIniciais)

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor //chave dinâmica
        })
    }

    function handleChange(e){
        setValue(e.target.getAttribute('name'), e.target.value)
    }

    useEffect(() => {
            const URL = 'https://lopesflix.herokuapp.com/categorias'
            fetch(URL).then(async (respostaServer) => {
                const resposta = await respostaServer.json()
                setCategorias([...resposta,])
            })
        })

    return(
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={e => {
                e.preventDefault()
                setCategorias([...categorias, values])
                setValues(valoresIniciais)
            }}>
                <FormField
                    label='Nome da categoria: '
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                    type='text'
                />
               <FormField
                    label='Descrição: '
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                    type='textarea'
                />

                <FormField
                    label='Cor: '
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                    type='color'
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            <ul>
                {categorias.map((categoria, index) => (
                    <li key={`${categoria}${index}`}>{categoria.nome}</li>
                ))}
            </ul>        
            
            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria