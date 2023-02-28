import Header from '../component/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import styles from './DefaultLayout.module.scss';
import className from 'classnames/bind';
import PropTypes from 'prop-types';

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
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
