import React, {useMemo} from "react";
import Slider from "../Slider/Slider";
import styles from "./main.module.scss"

const Main = () => {

    const sliders = useMemo(
        () => [
            {
                id: 1,
                slidersName: "slide 1",
            },
            {
                id: 2,
                slidersName: "slide 2",
            },
            {
                id: 3,
                slidersName: "slide 3",
            },
            {
                id: 4,
                slidersName: "slide 4",
            },
            {
                id: 5,
                slidersName: "slide 5",
            },
            {
                id: 6,
                slidersName: "slide 6",
            },
            {
                id: 7,
                slidersName: "slide 7",
            },
            {
                id: 8,
                slidersName: "slide 8",
            },
            {
                id: 9,
                slidersName: "slide 9",
            }
        ], []
    )

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>My slider</h1>
                <Slider  sliders={sliders} slidesPreView={2} spaceBetween={20}/>
            </div>
        </div>
    )
}

export default Main