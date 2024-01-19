import classNames from 'classnames/bind';

import {TImage} from '@/model/prompt';

import DiaryImage from './DiaryImage';
import DiaryInfo from './DiaryInfo';
import DiaryText from './DiaryText';
import styles from './PictureDiary.module.scss';

const cx = classNames.bind(styles);

interface PictureDiaryProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    imageList: TImage[] | null;
}
function PictureDiary({value, setValue, isLoading, imageList}: PictureDiaryProps) {
    return (
        <div className={cx('article')}>
            <div className={cx('box')}>
                <DiaryInfo />
                <DiaryImage isLoading={isLoading} imageList={imageList} />
                <DiaryText textValue={value} setTextValue={setValue} />
            </div>
        </div>
    );
}

export default PictureDiary;
