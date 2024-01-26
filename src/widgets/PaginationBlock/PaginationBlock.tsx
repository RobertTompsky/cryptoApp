import { FC } from 'react';
import styles from './PaginationBlock.module.scss'
import { COINS_PER_PAGE } from '../../utils/createArr';
import { initPage } from '../../constants/constants';

interface PaginationBlockProps {
    curPage: number,
    setCurPage: (value: React.SetStateAction<number>) => void,
    setCoinsPerPage: (value: React.SetStateAction<number>) => void,
}

const PaginationBlock: FC<PaginationBlockProps> = ({ curPage, setCurPage, setCoinsPerPage }) => {

    const handleChangePage = (direction: 'prev' | 'next'): void => {
        if (direction === 'prev' && curPage > initPage) {
            setCurPage((prev) => prev - 1)
        } else if (direction === 'next') {
            setCurPage((prev) => prev + 1);
        }
    }
    return (
        <div className={styles.paginationBlock}>
            <div className={styles.pagination}>
                <button
                    onClick={() => handleChangePage('prev')}>
                    Предыдущая
                </button>
                <p>{curPage}</p>
                <button
                    onClick={() => handleChangePage('next')}>
                    Следующая
                </button>
            </div>
            <select
                onChange={(e) => setCoinsPerPage(Number(e.target.value))}>
                {COINS_PER_PAGE.map((qty) => (
                    <option
                        key={qty}>
                        {qty}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PaginationBlock;