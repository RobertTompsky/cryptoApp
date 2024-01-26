import { useAppDispatch } from '../../config/reduxHooksConfig';
import { removeAsset } from '../../features/assetsSlice';
import { Asset } from '../../types/types';
import styles from './AssetItem.module.scss'

const AssetItem = ({ asset }: { asset: Asset }) => {
    const dispatch = useAppDispatch()
    const totalPrice = asset.coin
        ? (asset.amount !== ''
            ? (asset.coin?.market_data.current_price.usd * asset.amount)
            : 0)
        : 0

    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault() 
        if (typeof asset.coin?.id === 'string') {
            dispatch(removeAsset(asset.coin?.id))
        }
    }

    return (
        <div className={styles.assetItem}>
            <div className={styles.assetItem_name}>
                <img src={asset.coin?.image.small} width={50} height={50} />
                <p>{asset.coin?.name} ({asset.coin?.symbol.toUpperCase()})</p>
            </div>
            <p>{asset.coin?.market_data.current_price.usd}$</p>
            <p>{asset.amount}</p>
            <p>{totalPrice.toFixed(2)}$</p>
            <button onClick={handleDelete}>Удалить</button>
        </div>
    );
};

export default AssetItem;