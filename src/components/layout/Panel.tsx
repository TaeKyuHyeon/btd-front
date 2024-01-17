import {PropsWithChildren} from 'react';

import classNames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classNames.bind(styles);

function Panel({children}: PropsWithChildren) {
    return (
        <div className={cx('article')}>
            <div className={cx('LineNote')}>
                <div className={cx('hole_area')}>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                    <div className={cx('hole')}>
                        <div className={cx('ring')} />
                    </div>
                </div>
                <div className={cx('content_area')}>{children}</div>
            </div>
        </div>
    );
}

export default Panel;
