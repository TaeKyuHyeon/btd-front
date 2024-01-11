import {useState} from 'react';

import classNames from 'classnames/bind';

import styles from './LineNote.module.scss';

const cx = classNames.bind(styles);

function NotePad() {
    const [value, setValue] = useState<string>('');

    return (
        <div className={cx('article')}>
            <textarea
                className={cx('textarea')}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
}

export default NotePad;
