import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'
import FormField from '../../../components/FormFields'
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm'

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }
    const [ categorias, setCategorias ] = useState([])
    
    const { handleChange, values, clearForm } = useForm(valoresIniciais)

    useEffect(() => {
            const URL = window.location.hostname.includes('localhost') ? 
            'http://localhost:8080/categorias' :
            'https://lopesflix.herokuapp.com/categorias'
            fetch(URL).then(async (respostaServer) => {
                const resposta = await respostaServer.json()
                setCategorias([...resposta,])
            })
        }, [])

    return(
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={e => {
                e.preventDefault()
                setCategorias([...categorias, values])
                clearForm()
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
                    <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
                ))}
            </ul>        
            
            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria