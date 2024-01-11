import classNames from 'classnames/bind';

import styles from './LineNote.module.scss';

const cx = classNames.bind(styles);

function NotePad() {
    return <div className={cx('article')} />;
}

export default NotePad;
