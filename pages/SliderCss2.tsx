import React, { MouseEvent, useRef, useState } from 'react';
import Card from '../components/Card';

import styles from '../styles/SliderCss.module.css';


const SliderCss = () => {
  const [amount, setAmount] = useState(4)
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleNext = () => {
    const element = sliderRef.current;
    if (element) element.scroll({ left: element.scrollLeft + 290, behavior: 'smooth' });
  };
  const handlePrev = () => {
    const element = sliderRef.current;
    if (element) element.scroll({ left: element.scrollLeft - 290, behavior: 'smooth' });
  };

  const addCard = () => setAmount(prevState => prevState + 1);
  const removeCard = () => setAmount(prevState => prevState ? prevState - 1 : 0);

  // Move on click

  const [startPosition, setStartPosition] = useState(0)
  
  const startMove = (event: MouseEvent<HTMLDivElement>) => setStartPosition(event.pageX);
  
  const stopMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = sliderRef.current;
    const stopPosition = event.pageX;
    if (element) {
      const difference = startPosition - stopPosition;
      const applyDifference = Math.abs(difference) < 290 ? (difference / Math.abs(difference)) * 290 : difference
      element.scroll({ left: element.scrollLeft + applyDifference, behavior: 'smooth' })
    }
  };

  return (
    <>
      <div>
        <button onClick={addCard}>Agregar card</button>
        <button onClick={removeCard}>sacar card</button>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Mis productos</div>
          <button className={`${styles.radioButton} ${styles.prevButton}`} onClick={handlePrev}>{"<"}</button>
          <button className={`${styles.radioButton} ${styles.nextButton}`} onClick={handleNext}>{">"}</button>  
          <div className={styles.slider} ref={sliderRef} onMouseDown={startMove} onMouseUp={stopMove}>
            {[...Array(amount)].map((e, index) => (
              <Card
                key={index}
                title={`Bolsa Argentina ${index}`}
                invested="1.000,00 USD"
                available="800,00 USD"
              />
            ))}   
          </div>
        </div>
      </div>
    </>
  )
}

export default SliderCss;
