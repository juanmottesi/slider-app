import React, { useState } from 'react';
import Slider from 'react-slick';
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
          <Slider
            infinite={false}
            slidesToShow={2}
            variableWidth
            responsive={[
              {
                breakpoint: 630,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
              }
            ]}
          >
            {[...Array(amount)].map((e, index) => (
              <Card
                key={index}
                title={`Bolsa Argentina ${index}`}
                invested="1.000,00 USD"
                available="800,00 USD"
              />
            ))}   
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SliderLib;
