import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import routeConfig from '../../../config/routes';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeIconActive,
    FollowingIcon,
    FollowingIconActive,
    LiveIconn,
    LiveIconActive,
} from '../../../components/Icons';
import SuggestedAccounts from './SuggestedAccounts';
const cx = className.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={routeConfig.home} icon={<HomeIcon />} activeIcon={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={routeConfig.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingIconActive />}
                />
                <MenuItem title="LIVE" to={routeConfig.live} icon={<LiveIconn />} activeIcon={<LiveIconActive />} />
            </Menu>
            <SuggestedAccounts title="Suggested accounts" />
        </aside>
    );
}

export default Sidebar;
