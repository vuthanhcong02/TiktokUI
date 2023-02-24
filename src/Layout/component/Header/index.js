import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faGlobe,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faQuestion,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import images from '../../../assets/images';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../components/GlobalStyles/Popper';
import AccountItem from '../../../components/AccountItem';
import Button from '../../../components/Button';
import Menu from '../../../components/GlobalStyles/Popper/Menu';
const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'eng',
                    title: 'English',
                },
                {
                    code: 'vie',
                    title: 'Viet nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroad shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-box')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Searchs account and videos" />
                        <button className={cx('close-btn')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <span></span>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button outlinePrimary lefticon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('bars')}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
