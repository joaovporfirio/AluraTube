import config from "../config.json"
import styled from "styled-components"
import styles from "./header.module.css"


const StyledHeader = styled.div`

    background-color:${({theme}) => theme.backgroundLevel1}

`;


function Header() {
    return (
        <StyledHeader>
            <div className={styles.header_img}>
                
            </div>

            <div className={styles.user_info}>
                <img src={`https://github.com/${config.github}.png`} alt="" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </div>

        </StyledHeader>
    )
}
export default Header