import React, {useState, useEffect, useCallback} from "react";
import cn from "classnames"
import styles from "./pagination.module.scss"

const Pagination = ({isActiveSlide, isSlidesArrayLength, setIsActiveSlide, slidesPreView, setPrevIsActiveSlide}) => {

    const [isPaginationLength, setIsPaginationLength] = useState(isSlidesArrayLength)

    const switchSlides = useCallback((id) => {
        setPrevIsActiveSlide(isActiveSlide)
        setIsActiveSlide(id)
    }, [isActiveSlide])


    useEffect(() => {
        setIsPaginationLength(isSlidesArrayLength - slidesPreView + 1)
    }, [isSlidesArrayLength, slidesPreView])


    return (
        <div className={styles.blocks}>
            {Array.from({length: isPaginationLength}, (_, i) => {
                return (
                    <span className={cn(styles.block, {[styles.active] : i === isActiveSlide})} onClick={() => switchSlides(i)}></span>
                )
            })}
        </div>
    )
}

export default Pagination