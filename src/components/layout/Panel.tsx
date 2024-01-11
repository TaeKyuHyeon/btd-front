import {PropsWithChildren} from 'react';

import classNames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

function Panel({children}: PropsWithChildren) {
    return (
        <div className={cx('article')}>
            <div className={cx('inner')}>
                {/* {title && <h3 className={cx('title')}>{title}</h3>} */}
                {children}
            </div>
        </div>
    );
}

export default Panel;
