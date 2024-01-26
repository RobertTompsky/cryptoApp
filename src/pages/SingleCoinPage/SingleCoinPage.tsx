import { useParams } from 'react-router-dom';
import { useGetSelectedCoinQuery } from '../../features/crypto.api';
import Container from '../../components/Container/Container';
import CoinInfo from '../../components/CoinInfo/CoinInfo';
import AddAssetForm from '../../components/AddAssetForm/AddAssetForm';
import { useState } from 'react';

const SingleCoinPage = () => {
    const { id } = useParams()
    const [openForm, setOpenForm] = useState<boolean>(false)
    const { data: coin } = useGetSelectedCoinQuery(id as string, {
        pollingInterval: 15000
    })

    return (
        <Container>
            <CoinInfo coin={coin} />
            {!openForm &&
                <button
                    onClick={() => setOpenForm(true)}>
                    Добавить в портфель
                </button>
            }
            {openForm &&
                <AddAssetForm
                    coin={coin}
                    setOpenForm={setOpenForm}
                />
            }
        </Container>
    );
};

export default SingleCoinPage;