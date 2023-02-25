import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCoins,
    faGears,
    faGlobe,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faQuestion,
    faSignOut,
    faVideo,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import images from '../../../assets/images';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

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
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <FontAwesomeIcon icon={faGears} />,
            title: 'Settings',
            to: 'setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
            to: 'logout',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button outlinePrimary lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom" delay={[0, 300]}>
                                <button className={cx('mes-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 300]}>
                                <button className={cx('notification-btn')}>
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outlinePrimary lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={userMenu} onChage={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('avatar-user')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/750989386d547fa72e4c09435452aa44.jpeg?x-expires=1677506400&x-signature=Xvj1PuMqxaUOiyCtEMs26myCy2c%3D"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('bars')}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
