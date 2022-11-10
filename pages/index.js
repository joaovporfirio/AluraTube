import { CSSReset } from "../components/cssReset"
import Header from "../components/header"
import Menu from "../components/menu"
import TimeLine from "../components/timeLine"
import config from "../config.json"


function HomePage() {


    return (

        <>
            <CSSReset />


            <div>
                <Menu />
                <Header></Header>
                <TimeLine playlists={config.playlists}></TimeLine>

            </div >
        </>
    )
}

export default HomePage

