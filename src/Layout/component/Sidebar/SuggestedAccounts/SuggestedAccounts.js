import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import SuggestedAccountItem from './SuggestedAccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title-suggest')}>{title}</p>
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <p className={cx('more')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
