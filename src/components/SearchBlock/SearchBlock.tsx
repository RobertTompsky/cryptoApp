import { FC, useState } from 'react';
import styles from './SearchBlock.module.scss'
import { emptyString } from '../../constants/constants';

interface SearchBlockProps {
    setSearchTerm: (value: React.SetStateAction<string>) => void,
    setCurPage: React.Dispatch<React.SetStateAction<number>>
}

const SearchBlock: FC<SearchBlockProps> = ({ setSearchTerm, setCurPage }) => {
    const [coinName, setCoinName] = useState<string>(emptyString)

    const handleSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
        setSearchTerm(coinName)
        setCurPage(1)
    }

    return (
        <div className={styles.searchBlock}>
            <input
                placeholder='Введите полное название криптомонеты...'
                value={coinName}
                onChange={(e) => setCoinName(e.target.value.toLowerCase())} />
            <button
                onClick={handleSearch}>
                ПОИСК
            </button>
        </div>
    );
};

export default SearchBlock;