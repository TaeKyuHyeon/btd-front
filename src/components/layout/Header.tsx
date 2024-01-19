import classnames from 'classnames/bind';

import flower from '@/assets/flower.png';
import tree from '@/assets/tree.png';

import styles from './Header.module.scss';

const cx = classnames.bind(styles);

function Header() {
    return (
        <header className={cx('article')}>
            <div className={cx('item')}>
                <img src={flower} alt="꽃" width={39} height={50} className={cx('img')} />
            </div>
            <h1 className={cx('item', 'logo')}>
                <a href="/">내가 그린 그림일기</a>
            </h1>
            <div className={cx('item')}>
                <img src={tree} alt="나무" width={40} height={50} className={cx('img')} />
            </div>
        </header>
    );
}

export default Header;
