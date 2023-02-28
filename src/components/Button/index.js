import styles from './Button.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    primary = false,
    roundedBut,
    outlinePrimary = false,
    outlineSmall = false,
    outlineLarge = false,
    lefticon,
    righticon,
    disabled,
    onClick,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outlinePrimary,
        outlineSmall,
        outlineLarge,
        roundedBut,
        disabled,
        lefticon,
        righticon,
    });
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    roundedBut: PropTypes.bool,
    outlinePrimary: PropTypes.bool,
    outlineSmall: PropTypes.bool,
    outlineLarge: PropTypes.bool,
    lefticon: PropTypes.node,
    righticon: PropTypes.node,
    disabled: PropTypes.node,

    onClick: PropTypes.node,
};
export default Button;
