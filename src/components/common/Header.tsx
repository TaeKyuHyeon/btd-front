import classnames from 'classnames/bind';

import flower from '@/assets/flower.png'
import logo from '@/assets/logo2.png'
import tree from '@/assets/tree.png'

import styles from './Header.module.scss'

const cx = classnames.bind(styles);


function Header() {
    return (
        <header className={cx('header')}>
            <div className=''><img src={flower} alt="꽃" width='39' height='50'className={cx('img')} /></div>
            <h1 className={cx('logo')}><img src={logo} alt="내가 그린 그림일기" width="260" height='50' className={cx('img')}/></h1>
            <div><img src={tree} alt="나무" width="40" height='50' className={cx('img')} /></div>
        </header>
    )
}

export default Header