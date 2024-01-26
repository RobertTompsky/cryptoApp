import { FC, useState } from 'react';
import { SelectedCoin } from '../../types/types';
import styles from './AddAssetForm.module.scss'
import { useAppDispatch } from '../../config/reduxHooksConfig';
import { addAsset } from '../../features/assetsSlice';
import { emptyString } from '../../constants/constants';

interface AddAssetFormProps {
    coin: SelectedCoin | undefined,
    setOpenForm: (value: React.SetStateAction<boolean>) => void
}

const AddAssetForm: FC<AddAssetFormProps> = ({coin, setOpenForm}) => {
    const [amount, setAmount] = useState<number | ''>('')

    const dispatch = useAppDispatch()

    const totalPrice: number = coin
        ? (amount !== '' ? amount * coin.market_data.current_price.usd : 0)
        : 0

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setAmount(value === '' ? '' : Number(value))
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (amount !== emptyString && amount !== 0) {
            dispatch(addAsset({
                coin,
                amount
            }))
            setOpenForm(false)
            alert("Актив добавлен")
        }
    }

    return (
        <form 
        className={styles.form}
        onSubmit={handleSubmit}>
            <h2>Добавление {coin?.name}</h2>
            <div className={styles.inputp}>
                <input
                    placeholder='Введите количество...'
                    value={amount === '' ? '' : amount}
                    onChange={handleAmountChange}
                    type="number"
                    step="0.1"
                />
                <p>Итого: {totalPrice.toFixed(2)}$</p>
            </div>
            <button>Добавить</button>
        </form>
    );
};

export default AddAssetForm;