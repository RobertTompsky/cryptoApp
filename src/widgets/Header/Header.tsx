import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header_info}>
                    <h1 className={styles.header_title}>NAPASCOIN</h1>
                    <nav className={styles.header_nav}>
                        <Link to='/' className={styles.header_link}>Главная</Link>
                        <Link to='/assets' className={styles.header_link}>Активы</Link>
                    </nav>
                </div>
            </Container>
        </div>
    );
};

export default Header;