import classNames from 'classnames/bind';

import styles from './ButtonDraw.module.scss';

const cx = classNames.bind(styles);

interface ButtonDrawProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function ButtonDraw({onClick}: ButtonDrawProps) {
    return (
        <button type="button" className={cx('article')} onClick={onClick}>
            그림 그리기
        </button>
    );
}

export default ButtonDraw;
