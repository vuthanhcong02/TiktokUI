import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('logo-account')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0d4d294f3b4630adbdf1f2bb031c4508~c5_300x300.webp?x-expires=1677060000&x-signature=NHJyYtCvRd%2FXOf3o%2FMI2EJjTuik%3D"
                alt="avatar"
            />
            <div className={cx('infor-account')}>
                <h4 className={cx('name-account')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                </h4>
                <p className={cx('nickname-account')}> Van A</p>
            </div>
        </div>
    );
}

export default AccountItem;
