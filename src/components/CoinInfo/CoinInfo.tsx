import { truncate } from 'lodash';
import { SelectedCoin } from '../../types/types';
import styles from './CoinInfo.module.scss'

const CoinInfo = ({ coin }: { coin: SelectedCoin | undefined}) => {
    return (
        <section className={styles.info}>
            <div className={styles.topInfo}>
                <div className={styles.nameAndLogo}>
                    <img src={coin?.image.small} width={50} height={50} />
                    <h1>{coin?.name} ({coin?.symbol.toUpperCase()})</h1>
                </div>
                <div className={styles.categories}>
                    {coin?.categories.map((category) => (
                        <p className={styles.category} key={category}>{category}</p>
                    ))}
                </div>
            </div>
            <div className={styles.mainInfo}>
                <p className={styles.description}>{truncate(coin?.description.en, { length: 750 })}</p>
                <div className={styles.indicators}>
                    <div className={styles.indicators_col}>
                        <div className={styles.indicators_col_item}>
                            <p>РЫНОЧНЫЙ РАНГ:</p>
                            <p>№{coin?.market_cap_rank}</p>
                        </div>
                        <div className={styles.indicators_col_item}>
                            <p>ЦЕНА:</p>
                            <p>{coin?.market_data.current_price.usd}$</p>
                        </div>
                        <div className={styles.indicators_col_item}>
                            <p>Δ ЗА 24Ч:</p>
                            <p>{coin?.market_data.price_change_24h.toFixed(2)}$</p>
                        </div>
                    </div>
                    <div className={styles.indicators_col}>
                        <div className={styles.indicators_col_item}>
                            <p>Δ ЗА 24Ч, %: </p>
                            <p>{coin?.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                        </div>
                        <div className={styles.indicators_col_item}>
                            <p>Δ ЗА 7Д, %:</p>
                            <p>{coin?.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                        </div>
                        <div className={styles.indicators_col_item}>
                            <p>Δ ЗА 30Д, %:</p>
                            <p>{coin?.market_data.price_change_percentage_30d.toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoinInfo;