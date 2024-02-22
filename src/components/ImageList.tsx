import {useRef, useState} from 'react';

import Flicking from '@egjs/react-flicking';
import classNames from 'classnames/bind';

import {TImage} from '@/model/prompt';
import {isSavingState} from '@/states';
import {indexArray} from '@/utils/common';
import {useRecoilValue} from 'recoil';

import styles from './ImageList.module.scss';

const cx = classNames.bind(styles);

interface ImageListProps {
    list: TImage[];
    isflicking?: boolean;
}

function ImageList({list, isflicking = false}: ImageListProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [totalCount, setTotalCount] = useState(0);
    const isSaving = useRecoilValue(isSavingState);
    const ref = useRef<Flicking>(null);

    const renderList = () => (
        <>
            {list.map((image) => (
                <div className={cx('item')} key={image.id}>
                    <div className={cx('pic')}>
                        {/* <source srcSet={image.url} type="image/webp" width={560} height={392} className={cx('img')} /> */}
                        <img src={image.url} alt="" className={cx('img')} width={560} height={392} />
                    </div>
                </div>
            ))}
        </>
    );

    return (
        <div className={cx('article')}>
            {isflicking ? (
                <>
                    {isSaving ? (
                        <div className={cx('save_area')}>
                            <img src={list[currentIndex].url} alt="" className={cx('img')} width={560} height={392} />
                        </div>
                    ) : (
                        <div className={cx('image_scroll')}>
                            <Flicking
                                ref={ref}
                                align="prev"
                                horizontal
                                autoResize
                                defaultIndex={0}
                                onReady={(e) => {
                                    setTotalCount(e.currentTarget.panelCount);
                                    setCurrentIndex(e.currentTarget.index);
                                }}
                                onChanged={(e) => {
                                    setCurrentIndex(e.index);
                                }}>
                                {renderList()}
                            </Flicking>
                            <ul className={cx('nav')}>
                                {indexArray(totalCount).map((index) => (
                                    <li className={cx('dot', currentIndex === index && 'is_active')} key={index} />
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <div className={cx('image_list')}>{renderList()}</div>
            )}
        </div>
    );
}
export default ImageList;
