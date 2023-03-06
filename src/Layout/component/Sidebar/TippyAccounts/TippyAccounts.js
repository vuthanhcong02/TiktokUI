import Button from '../../../../components/Button';
import classNames from 'classnames/bind';
import styles from './TippyAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function TippyAccounts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678251600&x-signature=8jfdgs6%2BZD0SUiYc8w7g5v1ZEjg%3D"
                    alt=""
                    className={cx('avatar')}
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('heading-account')}>
                    <p className={cx('nickname')}>theanh28entertainment</p>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                </div>
                <p className={cx('name')}>Theanh28 Entertainment</p>
            </div>
            <p className={cx('footer-number')}>
                <span className={cx('number')}>8.2M </span>
                <span className={cx('text')}>Followers</span>
                <span className={cx('number')}>670M </span>
                <span className={cx('text')}>Likes</span>
            </p>
        </div>
    );
}

export default TippyAccounts;
