import classNames from 'classnames/bind';

import styles from './ButtonDraw.module.scss';

const cx = classNames.bind(styles);

interface ButtonDrawProps {
    text: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
function ButtonDraw({text, onClick}: ButtonDrawProps) {
    return (
        <button type="button" className={cx('article')} onClick={onClick}>
            {text}
        </button>
    );
}

export default ButtonDraw;
