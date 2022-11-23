import styled from "styled-components";
import styles from "./timeLine2.module.css";
function timeLine2(props) {

    const youtubersNames = Object.keys(props.youtubers)

    return (
        <div className={styles.yt}>
            {youtubersNames.map((youtubersName) => {
                const channels = props.youtubers[youtubersName]
                // console.log(channels)

                return (
                    <section key={youtubersName}>
                        <h3>{youtubersName}</h3>
                        <div>
                            {channels.map((channel)=> {
                                return(
                                    <a key={channel.url}>
                                        <img src={channel.thumb}/>
                                        <span>
                                            {channel.name}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
export default timeLine2