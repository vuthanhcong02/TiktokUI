import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('logo-account')} src={data.avatar} alt={data.full_name} />
            <div className={cx('infor-account')}>
                <h4 className={cx('name-account')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('nickname-account')}> {data.nickname}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
