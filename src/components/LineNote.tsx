import classNames from 'classnames/bind';

import styles from './LineNote.module.scss';

const cx = classNames.bind(styles);

interface NotePadProps {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
}

function NotePad({value, setValue, placeholder}: NotePadProps) {
    return (
        <div className={cx('article')}>
            <textarea
                className={cx('textarea')}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                placeholder={placeholder}
            />
        </div>
    );
}

export default NotePad;
