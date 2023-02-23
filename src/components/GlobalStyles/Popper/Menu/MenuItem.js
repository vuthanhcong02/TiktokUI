import Button from '../../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <div className={cx('menu-item')}>
            <Button lefticon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
