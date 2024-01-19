import classNames from 'classnames/bind';

import styles from './DiaryImage.module.scss';

const cx = classNames.bind(styles);

function DiaryImage() {
    return (
        <div className={cx('article')}>
            <input type="file" />
            <img src="" alt="" />
        </div>
    );
}

export default DiaryImage;
