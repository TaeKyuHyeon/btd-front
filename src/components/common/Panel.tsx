import { PropsWithChildren, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

interface PanelProps {
    title?: ReactNode;
    typePopup?: boolean;
}

function Panel({title, typePopup, children}: PropsWithChildren<PanelProps>) {
    return (
        <div className={cx('article')}>
            {title && <h3 className={cx('title')}>{title}</h3>}
            <div className={cx('inner', {popup: typePopup})}>{children}</div>
        </div>
    );
}

export default Panel;
