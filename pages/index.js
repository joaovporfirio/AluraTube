import React from "react"
import { CSSReset } from "../components/cssReset"
import Header from "../components/header"
import Menu from "../components/Menu/menu"
import TimeLine from "../components/timeLine"
import TimeLine2 from "../components/timeLine2"

import config from "../config.json"


function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("")
    

    return (

        <>
            <CSSReset />


            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro ={setValorDoFiltro}/>
                <Header></Header>
                <TimeLine searchValue ={valorDoFiltro} playlists={config.playlists}></TimeLine>
                <TimeLine2 youtubers={config.youtubers}></TimeLine2>

            </div >
        </>
    )
}

export default HomePage

