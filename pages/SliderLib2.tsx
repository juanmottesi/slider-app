import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Card from '../components/Card';

import styles from '../styles/SliderLib.module.css';

const SliderLib = () => {
  const [amount, setAmount] = useState(4)

  const addCard = () => setAmount(prevState => prevState + 1);
  const removeCard = () => setAmount(prevState => prevState ? prevState - 1 : 0);

  return (
    <>
      <div>
        <button onClick={addCard}>Agregar card</button>
        <button onClick={removeCard}>sacar card</button>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Mis productos</div>
          <Swiper modules={[Navigation]}
            navigation
            slidesPerView={1.05}
            spaceBetween={5}
            breakpoints={{
              360: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 1.2,
              },
              450: {
                slidesPerView: 1.35,
              },
              500: {
                slidesPerView: 1.55,
              },
              550: {
                slidesPerView: 1.7,
              },
              600: {
                slidesPerView: 1.9,
              },
              650: {
                slidesPerView: 2.05,
                spaceBetween:5,
              },
              700: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              750: {
                slidesPerView: 2.3,
                spaceBetween: 5,
              },
              800: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
            }}
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
