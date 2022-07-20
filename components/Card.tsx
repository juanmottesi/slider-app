import React from 'react';
import styles from '../styles/components/Card.module.css'

type CardType = {
  title: String;
  invested: String;
  available: String;
}

const Card = ({ title, invested, available }: CardType) => (
  <div className={styles.card}>
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>Invertido: <b>{invested}</b></div>
    <div className={styles.description}>Disponible: <b>{available}</b></div>
    <div className={styles.button}>Ingressar a la plataforma {">"}</div>
  </div>
)

export default Card;
