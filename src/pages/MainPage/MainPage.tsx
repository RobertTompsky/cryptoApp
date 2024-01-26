import { useGetCoinsQuery } from '../../features/crypto.api';
import Container from '../../components/Container/Container';
import styles from './MainPage.module.scss'
import CoinsList from '../../widgets/CoinsList/CoinsList';
import SearchBlock from '../../components/SearchBlock/SearchBlock';
import PaginationBlock from '../../widgets/PaginationBlock/PaginationBlock';
import { useState } from 'react';
import { COINS_PER_PAGE } from '../../utils/createArr';
import { emptyString, initPage } from '../../constants/constants';

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>(emptyString)
    const [curPage, setCurPage] = useState<number>(initPage)
    const [coinsPerPage, setCoinsPerPage] = useState<number>(COINS_PER_PAGE[0])

    const params = {
        name: searchTerm,
        currency: 'usd',
        page: curPage,
        perPage: coinsPerPage,
        sparkline: false
    }

    const { data: coins } = useGetCoinsQuery(params, {
        pollingInterval: 15000,

    })

    return (
        <Container>
            <div className={styles.mainpage}>
                <SearchBlock
                    setSearchTerm={setSearchTerm}
                    setCurPage={setCurPage} />
                <CoinsList
                    coins={coins} />
                <PaginationBlock
                    setCoinsPerPage={setCoinsPerPage}
                    curPage={curPage}
                    setCurPage={setCurPage} />
            </div>
        </Container>
    );
};

export default MainPage;