import classNames from 'classnames/bind';

import imgLoading from '@/assets/loading.gif';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

interface LoadingProps {
    text?: string;
}

function Loading({text}: LoadingProps) {
    return (
        <div className={cx('article')}>
            <div className={cx('image_area')}>
                <img src={imgLoading} alt="로딩중" className={cx('img')} width={104} height={100} />
            </div>
            <div className={cx('text_area')}>{text}</div>
        </div>
    );
}

export default Loading;
