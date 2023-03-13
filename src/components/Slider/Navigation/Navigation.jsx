import React, {useCallback, useEffect} from "react";
import cn from "classnames"
import styles from "./navigation.module.scss"

const Navigation = ({isActiveSlide, setIsActiveSlide, isSlidesArrayLength,setPrevIsActiveSlide, slidesPreView}) => {

    const switchToPreviousSlide = useCallback(() => {
        if(isActiveSlide > 0) {
            setPrevIsActiveSlide(isActiveSlide)
            setIsActiveSlide(isActiveSlide - 1) 
        }
    }, [isActiveSlide])

    const switchToNextSlide = useCallback(() => {
        if(isActiveSlide + slidesPreView < isSlidesArrayLength) {
            setPrevIsActiveSlide(isActiveSlide)
            setIsActiveSlide(isActiveSlide + 1) 
        }
    }, [isActiveSlide, slidesPreView, isSlidesArrayLength])

    return (
        <div className={styles.container}>
            <div className={cn(styles.prev, styles.button,{ [styles.disabled]: isActiveSlide === 0 } )} onClick={switchToPreviousSlide}>prev</div>
            <div className={cn(styles.next, styles.button,{ [styles.disabled]: isActiveSlide + slidesPreView === isSlidesArrayLength })} onClick={switchToNextSlide}>next</div>
        </div>
    )
}

export default Navigation