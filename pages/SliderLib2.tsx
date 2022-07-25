import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, SwiperOptions } from "swiper";
import Card from '../components/Card';

import styles from '../styles/SliderLib.module.css';

const SliderLib = ({ spaceBetween = 10, elementWidth = 290 }) => {
  const [amount, setAmount] = useState(4);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [breakpoints, setBreackpoints] = useState<{ [width: number]: SwiperOptions } | {}>({});
  const addCard = () => setAmount(prevState => prevState + 1);
  const removeCard = () => setAmount(prevState => prevState ? prevState - 1 : 0);

  useEffect(() => {
    const update = () => {
      if (sliderContainerRef.current) {
        const slider = window.getComputedStyle(sliderContainerRef.current);
        const sliderWidth = sliderContainerRef.current.clientWidth;
        const realSliderWidth = sliderWidth - parseFloat(slider.paddingLeft) - parseFloat(slider.paddingRight);
        const windowWidth = window.innerWidth;
        setBreackpoints({ [windowWidth]: {
          slidesPerView: (realSliderWidth - spaceBetween) / elementWidth,
        }});
      }
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [sliderContainerRef, spaceBetween, elementWidth])

  return (
    <>
      <div>
        <button onClick={addCard}>Agregar card</button>
        <button onClick={removeCard}>sacar card</button>
      </div>
      <div className={styles.container}>
        <div ref={sliderContainerRef} className={styles.card}>
          <div className={styles.title}>Mis productos</div>
          <Swiper
            key={Object.keys(breakpoints)?.[0]}
            modules={[Navigation]}
            navigation
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
            >
            {[...Array(amount)].map((e, index) => (
              <SwiperSlide key={index}>
                <Card
                  title={`Bolsa Argentina ${index}`}
                  invested="1.000,00 USD"
                  available="800,00 USD"
                />
              </SwiperSlide>
            ))}   
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default SliderLib;
