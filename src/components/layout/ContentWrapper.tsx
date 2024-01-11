import type {PropsWithChildren} from 'react';

import classNames from 'classnames/bind';

import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

function ContentWrapper({children}: PropsWithChildren) {
    return <div className={cx('article')}>{children}</div>;
}

export default ContentWrapper;
