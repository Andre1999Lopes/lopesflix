import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'
import FormField from '../../../components/FormFields'
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import videoRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo(){
	const history = useHistory()
	const [ categorias, setCategorias ] = useState([])
    const categoryTitles = categorias.map(({ titulo }) => titulo)
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: ''
    })

    useEffect(() => {
		categoriasRepository.getAll()
		.then(categoriasServer => {
			setCategorias(categoriasServer)
		})
	}, [])

    return(
        <PageDefault>
            <h1>Cadastro de vídeo</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
				const categoriaSelecionada = categorias.find(categoria => {return categoria.titulo === values.categoria})
                videoRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaSelecionada.id
                })
                .then(() => {
                    history.push('/')
                })
            }}>
                <FormField
                    label='Título do vídeo'
                    name='titulo'
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label='URL do vídeo'
                    name='url'
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label='Categoria do vídeo'
                    name='categoria'
                    value={values.categoria}
                    onChange={handleChange}
					suggestions={categoryTitles}
                />

                <Button type='submit'>
                    Cadastrar
                </Button>
            </form>

            <Link to='/cadastro/categoria'>
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo