import classNames from 'classnames/bind';

import styles from './ButtonDraw.module.scss';

const cx = classNames.bind(styles);

function ButtonDraw() {
    return (
        <button type="button" className={cx('article')}>
            그림그리기
        </button>
    );
}

export default ButtonDraw;
