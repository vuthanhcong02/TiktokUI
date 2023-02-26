import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import images from '../../../assets/images';

import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import Button from '../../../components/Button';
import Menu from '../../../components/GlobalStyles/Popper/Menu';
import {
    CoinIcon,
    InboxIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    LiveIcon,
    SettingIcon,
    LanguageIcon,
    FeedbackIcon,
    KeybroadIcon,
} from '../../../components/Icons';
import Search from '../Search';
const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeybroadIcon />,
        title: 'Keybroad shortcuts',
    },
];
function Header() {
    const currentUser = true;

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
            icon: <ProfileIcon />,
            title: 'View profile',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <LiveIcon />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: 'setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
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
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button outlinePrimary lefticon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom" delay={[0, 300]}>
                                <button className={cx('mes-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 300]}>
                                <button className={cx('notification-btn')}>
                                    {/* <FontAwesomeIcon icon={faBell} /> */}
                                    <InboxIcon />
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

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
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
