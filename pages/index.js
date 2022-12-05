import React from "react"
import Header from "../components/header"
import Menu from "../components/Menu/menu"
import TimeLine from "../components/timeLine"
import TimeLine2 from "../components/timeLine2"
import config from "../config.json"
import { createClient } from "@supabase/supabase-js"


const PROJECT_URL = 'https://fjokbgctjuhvtqymgztv.supabase.co'
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqb2tiZ2N0anVodnRxeW1nenR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3MjYxOTQsImV4cCI6MTk4NTMwMjE5NH0.NyoOUv9FZj0VgBFvzVCHvnd2c6OKMk_OyED2DjsHWCA"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)




function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("")
    const [playlists, setPlaylists] = React.useState({})

    React.useEffect(() => {
        supabase.from("video")
            .select("*")
            .then((dados) => {
                console.log(dados.data)
                dados.data.forEach((video) => {
                    playlists[video.playlist]?.push(video)

                })
                setPlaylists(playlists)
            })
    },[])
    


    return (

        <>


            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header></Header>
                <TimeLine searchValue={valorDoFiltro} playlists={playlists}></TimeLine>
                <TimeLine2 youtubers={config.youtubers}></TimeLine2>

            </div >
        </>
    )
}

export default HomePage

