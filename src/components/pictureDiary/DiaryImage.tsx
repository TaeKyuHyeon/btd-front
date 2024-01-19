import classNames from 'classnames/bind';

import ImageList from '@/components/ImageList';
import {TImage} from '@/model/prompt';

import styles from './DiaryImage.module.scss';
import Loading from '../common/Loading';

const cx = classNames.bind(styles);
interface DiaryImageProps {
    isLoading: boolean;
    imageList: TImage[] | null;
}
function DiaryImage({isLoading, imageList}: DiaryImageProps) {
    const checkEndError = () => {
        if (isLoading) return <Loading text="그림 그리는 중..." />;

        if (imageList) return <ImageList list={imageList} isflicking />;

        return false;
    };

    return (
        <div className={cx('article')}>
            {checkEndError() || (
                <>
                    {/* <input type="file" />
                    <img src="" alt="" /> */}
                </>
            )}
        </div>
    );
}

export default DiaryImage;
