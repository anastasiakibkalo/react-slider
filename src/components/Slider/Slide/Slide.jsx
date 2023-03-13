import React from "react";
import styles from "./slide.module.scss"

const Slide = ({slidersName, style}) => {
    return (
        <div className={styles.block}  style={style}>{slidersName}</div>
    )
}

export default Slide;