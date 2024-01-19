import classNames from 'classnames/bind';

import styles from './DiaryImage.module.scss';
import Loading from '../common/Loading';
import {TImage} from '../ImageList';

const cx = classNames.bind(styles);
interface DiaryImageProps {
    isLoading: boolean;
    imageList: TImage[] | null;
}
function DiaryImage({isLoading, imageList}: DiaryImageProps) {
    const checkEndError = () => {
        if (isLoading) return <Loading text="그림 그리는 중..." />;

        if (imageList)
            return (
                <div>
                    <picture className={cx('pic')}>
                        <source srcSet={imageList[0].url} type="image/webp" className={cx('img')} />
                        <img src={imageList[0].url} alt="" className={cx('img')} />
                    </picture>
                </div>
            );

        return false;
    };

    return (
        <div className={cx('article')}>
            {checkEndError() || (
                <>
                    <input type="file" />
                    <img src="" alt="" />
                </>
            )}
        </div>
    );
}

export default DiaryImage;
