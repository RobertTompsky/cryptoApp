import styles from './CoinRow.module.scss'
import { Coin } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../config/routeConfig';

const CoinRow = ({coin}: {coin: Coin}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.coinrow} onClick={()=> { navigate(`${RoutePath[AppRoutes.COIN]}/${coin.id}`)}}>
            <div className={styles.coinrow_main}>
                <img src={coin.image} width={50} height={50}/>
                <p>{coin.name} ({coin.symbol.toUpperCase()})</p>
            </div>
            <p className={styles.coinrow_p}>{coin.current_price}</p>
            <p className={styles.coinrow_p}>{coin.market_cap}</p>
            <p className={styles.coinrow_p}>{coin.total_volume}</p>
            <p className={styles.coinrow_p}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
    );
};

export default CoinRow;