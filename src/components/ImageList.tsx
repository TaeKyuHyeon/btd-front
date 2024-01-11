import classNames from 'classnames/bind';

import styles from './ImageList.module.scss';

const cx = classNames.bind(styles);

export type TImage = {id: string; url: string};
interface ImageListProps {
    list: TImage[];
}

function ImageList({list}: ImageListProps) {
    return (
        <div className={cx('article')}>
            <ul className={cx('image_list')}>
                {list.map((image) => (
                    <li className={cx('item')} key={image.id}>
                        <img src={image.url} alt="" className={cx('img')} width={260} height={260} />
                        {/* <picture className={cx('img')}>
                            <source srcSet={image.url} type="image/webp" className={cx('img')} />
                            <img src={image.url} alt="" className={cx('img')} />
                        </picture> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ImageList;
