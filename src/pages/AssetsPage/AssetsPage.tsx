import styles from './AssetsPage.module.scss'
import AssetsList from '../../widgets/AssetsList/AssetsList';
import Container from '../../components/Container/Container';
import AssetsChart from '../../widgets/AssetsChart/AssetsChart';

const AssetsPage = () => {
    return (
        <Container>
            <div className={styles.assetsPage}>
                <AssetsList />
                <AssetsChart />
            </div>
        </Container>
    );
};

export default AssetsPage;