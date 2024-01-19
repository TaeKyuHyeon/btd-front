import classNames from 'classnames/bind';

import DiaryImage from './DiaryImage';
import DiaryInfo from './DiaryInfo';
import DiaryText from './DiaryText';
import styles from './PictureDiary.module.scss';

const cx = classNames.bind(styles);

function PictureDiary() {
    return (
        <div className={cx('article')}>
            <div className={cx('box')}>
                <DiaryInfo />
                <DiaryImage />
                <DiaryText />
            </div>
        </div>
    );
}

export default PictureDiary;
