import { useAppSelector } from '../../config/reduxHooksConfig';
import AssetItem from '../../components/AssetItem/AssetItem';
import styles from './AssetsList.module.scss'

const AssetsList = () => {
    const assets = useAppSelector(state => state.assets.list)
    return (
        <div className={styles.assetslist}>
            {assets.map((asset) => (
                <AssetItem key={asset.coin?.id} asset={asset}/>
            ))}
        </div>
    );
};

export default AssetsList;