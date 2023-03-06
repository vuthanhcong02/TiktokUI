import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SuggestedAccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678251600&x-signature=8jfdgs6%2BZD0SUiYc8w7g5v1ZEjg%3D"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('account')}>
                <div className={cx('heading-account')}>
                    <p className={cx('nickname')}>nguyenvana</p>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                </div>
                <p className={cx('name')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

SuggestedAccountItem.propTypes = {};
export default SuggestedAccountItem;
