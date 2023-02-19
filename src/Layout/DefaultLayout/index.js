import Header from '../component/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
