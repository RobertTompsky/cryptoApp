import React from 'react';
import styles from './CoinsList.module.scss'
import { Coin } from '../../types/types';
import CoinRow from '../../components/CoinRow/CoinRow';

const CoinsList = ({coins}: {coins: Coin[] | undefined}) => {
    return (
        <div className={styles.coinslist}>
            <div className={styles.coinslist_header}>
                <p>Наименование монеты</p>
                <p> Текущая цена</p>
                <p>Капитализация</p>
                <p>Объем торгов</p>
                <p>Δ цены за 24ч.</p>
            </div>
            <hr className={styles.coinslist_hr}/>
            {coins?.map((coin) => (
                <CoinRow key={coin.id} coin={coin} />
            ))}
        </div>
    );
};

export default CoinsList;