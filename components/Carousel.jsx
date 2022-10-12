import React, { useContext, useState } from 'react'
import { slideContext } from '../global/global-states'
import styles from './carousel.module.scss'

const Carousel = ({items}) => {

    const { currentSlide, setCurrentSlide } = useContext(slideContext)
    const [ currentOffset, setCurrentOffset ] = useState(0)

    const slideRight = () => {
        if(currentSlide <= items.length - 2) {
            setCurrentSlide(currentSlide + 1)
            setCurrentOffset(currentOffset - 270)
        } else {
            setCurrentSlide(0)
            setCurrentOffset(0)
        }
    }
    
    const slideLeft = () => {
        if(currentSlide >= 1) {
            setCurrentSlide(currentSlide - 1)
            setCurrentOffset(currentOffset + 270)
        } else {
            setCurrentSlide(items.length - 1)
            setCurrentOffset(- 270 * (items.length - 1))
        }
        
    }

    return (
        <div className={styles.carouselParent}>
            <div className={styles.carouselCardParent} style={{ transform: `translateX(${currentOffset}px)`}}>
                {
                    items.map((val, i) => {
                        return (
                            <div key={i} className={ currentSlide == i ? styles.carouselCard : [styles.carouselCard, styles.darken].join(" ") } onClick={() => {
                                currentSlide != i ? slideRight() : console.log()
                            }}>
                                <img src={val.source} alt={val.title}></img>
                                <h3>{val.title}</h3>
                            </div>
                        )
                    })
                }
                {
                    items.map((val, i) => {
                        return (
                            <div key={i} className={[styles.carouselCard, styles.darken].join(" ")} onClick={() => {slideRight()}}>
                                <div className={styles.blank}></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.slider}>
                <h2> <span>{currentSlide + 1}</span> / {items.length}</h2>
                <div className={styles.sliderBtn}>
                    <div className={styles.btn} onClick={() => slideLeft()}>
                        <h3>{'<'}</h3>
                    </div>
                    <div className={styles.btn} onClick={() => slideRight()}>
                        <h3>{'>'}</h3>
                    </div>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default Carousel