import type {PropsWithChildren} from 'react';
import {isMobile} from 'react-device-detect';

import classNames from 'classnames/bind';

import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

function ContentWrapper({children}: PropsWithChildren) {
    return (
        <>
            {isMobile ? (
                <div className="mobile">
                    <div className={cx('article')}>{children}</div>
                </div>
            ) : (
                <div className={cx('article')}>{children}</div>
            )}
        </>
    );
}

export default ContentWrapper;
