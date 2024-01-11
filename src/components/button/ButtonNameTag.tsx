import classNames from 'classnames/bind';

import styles from './ButtonNameTag.module.scss';

const cx = classNames.bind(styles);

interface ButtonNameTagProps {
    text: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
function ButtonNameTag({text, onClick}: ButtonNameTagProps) {
    return (
        <button type="button" className={cx('article')} onClick={onClick}>
            <div className={cx('inner')}>{text}</div>
        </button>
    );
}

export default ButtonNameTag;
