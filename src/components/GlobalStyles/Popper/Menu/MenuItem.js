import Button from '../../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <div className={cx('menu-item')} onClick={onClick}>
            <Button lefticon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
