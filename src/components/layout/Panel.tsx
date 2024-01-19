import {PropsWithChildren} from 'react';

import classNames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

const HOLE_COUNT = 6;

function Panel({children}: PropsWithChildren) {
    return (
        <div className={cx('article')}>
            <div className={cx('note_area')}>
                <div className={cx('page')}>
                    <div className={cx('content_area')}>{children}</div>
                </div>
                <ul className={cx('hole_area')}>
                    {Array.from({length: HOLE_COUNT}, (v, i) => i + 1).map((key) => (
                        <li className={cx('hole')} key={key} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Panel;
