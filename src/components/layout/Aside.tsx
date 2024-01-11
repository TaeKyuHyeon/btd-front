import {PropsWithChildren} from 'react';

import classNames from 'classnames/bind';

import styles from './Aside.module.scss';

const cx = classNames.bind(styles);

function Aside({children}: PropsWithChildren) {
    return <aside className={cx('article')}>{children}</aside>;
}

export default Aside;
