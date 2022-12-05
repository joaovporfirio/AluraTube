import React from "react";
import { StyledRegisterVideo } from "./styles";
import {createClient} from "@supabase/supabase-js"

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value
            const name= evento.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm(){
            setValues({})
        }
    }
}



const PROJECT_URL = 'https://fjokbgctjuhvtqymgztv.supabase.co'
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqb2tiZ2N0anVodnRxeW1nenR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3MjYxOTQsImV4cCI6MTk4NTMwMjE5NH0.NyoOUv9FZj0VgBFvzVCHvnd2c6OKMk_OyED2DjsHWCA"
const supabase = createClient( PROJECT_URL, PUBLIC_KEY)

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}



export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(true)
    const formCadastro = useForm({
        initialValues: { titulo: "Primeiro dia do major na triboneira", url: "https://www.youtube.com/watch?v=UOM5dr-8Y9w" }
    })



    return (
        <StyledRegisterVideo>
            <button className=" add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault()

                        supabase.from("video").insert({
                            title:formCadastro.values.titulo,
                            url:formCadastro.values.url,
                            thumb:getThumbnail(formCadastro.values.url),
                            playlist:"jogos",

                        })
                        .then((oqueveio)=>{
                            console.log(oqueveio)
                        })
                        .catch((err)=>{
                            console.log(err)
                        })

                        setFormVisivel(false)
                        formCadastro.clearForm()
                    }}>
                        <div type='button'>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                x
                            </button>
                            <input placeholder="Título do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange} />
                            <input placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange} />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                ) : false}
        </StyledRegisterVideo>
    )
}