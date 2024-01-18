// import classNames from 'classnames/bind';

import {indexArray} from '@/utils/common';

// import styles from './PictureDiary.module.scss';

// const cx = classNames.bind(styles);

const ROW_COUNT = 5;
const COLUMN_COUNT = 10;

function PictureDiary() {
    return (
        <div className="article">
            <div className="box">
                <div className="info_area">
                    <div className="date">
                        <input type="date" />
                        <span className="year">년</span>
                        <span className="month">월</span>
                        <span className="date">일</span>
                        <span className="day">요일</span>
                    </div>
                    <div className="weather">
                        <input type="radio" id="sun" name="weather" />
                        <input type="radio" id="cloud" name="weather" />
                        <input type="radio" id="rain" name="weather" />
                        <input type="radio" id="snow" name="weather" />
                    </div>
                </div>
                <div className="image_area">
                    <input type="file" />
                    <img src="" alt="" />
                </div>
                <div className="text_area">
                    {indexArray(ROW_COUNT).map((row) => (
                        <div className="row" key={row}>
                            {indexArray(COLUMN_COUNT).map((col) => (
                                <div className="cell" key={col} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PictureDiary;
