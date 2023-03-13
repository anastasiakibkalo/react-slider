import React, {useMemo, useState, useEffect, useRef} from "react";
import Slide from "./Slide/Slide";
import Navigation from "./Navigation/Navigation";

import styles from "./slider.module.scss"

const Slider = ({sliders, slidesPreView, spaceBetween}) => {
    const [isWrapperOffsetHorizontally, setIsWrapperOffsetHorizontally] = useState(0)
    const [isActiveSlide, setIsActiveSlide] = useState(0)
    const [isPrevActiveSlide, setPrevIsActiveSlide] = useState(isActiveSlide)
    const [isSlidesArrayLength, setIsSlidesArrayLength] = useState(0)
    const [isSliderWidth, setIsSliderWidth] = useState(0)
    const [isSlideWidth, setIsSlideWidth] = useState(0)

    const ref = useRef(null);
    
    const handleSlides = () => {
        if(isPrevActiveSlide < isActiveSlide) {
            setIsWrapperOffsetHorizontally(slidesPreView > 1 ? isWrapperOffsetHorizontally - isSlideWidth - (spaceBetween / 2) : isWrapperOffsetHorizontally - isSlideWidth - spaceBetween)
        } else if (isPrevActiveSlide > isActiveSlide) {
            setIsWrapperOffsetHorizontally(slidesPreView > 1 ? isWrapperOffsetHorizontally + isSlideWidth + (spaceBetween / 2) : isWrapperOffsetHorizontally + isSlideWidth + spaceBetween)
        }
    }

    useEffect(() => {
        setIsSlidesArrayLength(sliders.length)
    }, [sliders])

    useEffect(() => {
        setIsSliderWidth(ref.current.offsetWidth);
    }, [])

    useEffect(() => {
        setIsSlideWidth(isSliderWidth / slidesPreView)
    }, [isSliderWidth, slidesPreView])

    useEffect(() => {
        handleSlides()
    }, [isActiveSlide])

    const wrapperStyles = useMemo(
        () => ({ 
            transform: `translate(${isWrapperOffsetHorizontally}px, 0px)`,
        }), [isWrapperOffsetHorizontally]
    );

    const slideStyles = useMemo(
        () => (
            {
                width: slidesPreView > 1 ? `${(isSliderWidth / slidesPreView) - (spaceBetween / 2)}px` : `${(isSliderWidth / slidesPreView)}px`,
                minWidth: slidesPreView > 1 ? `${(isSliderWidth / slidesPreView) - (spaceBetween / 2)}px` : `${(isSliderWidth / slidesPreView)}px`,
                marginRight: `${spaceBetween}px`,
            }
        ), [slidesPreView, isSliderWidth, spaceBetween]
    )

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.wrapper} style={wrapperStyles}>
                {sliders.map(({id, slidersName}) => {
                    return (
                        <Slide key={id} slidersName={slidersName} style={slideStyles}/>
                    )
                })}
            </div>
            <Navigation isActiveSlide={isActiveSlide} setIsActiveSlide={setIsActiveSlide} isSlidesArrayLength={isSlidesArrayLength} setPrevIsActiveSlide={setPrevIsActiveSlide} slidesPreView={slidesPreView}/>
        </div>
    )
}

export default Slider