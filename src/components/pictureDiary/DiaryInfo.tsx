import {useRef, useState} from 'react';

import classNames from 'classnames/bind';

import styles from './DiaryInfo.module.scss';
import WeatherInfo from './WeatherInfo';

const cx = classNames.bind(styles);

const today = new Date();
const DAY_KOR = ['일', '월', '화', '수', '목', '금', '토'];

function DiaryInfo() {
    const [dateValue, setDateValue] = useState<Date>(today);
    const dateInput = useRef<HTMLInputElement>(null);

    return (
        <div className={cx('article')}>
            <div className={cx('info_item', 'date')}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/label-has-associated-control */}
                <label
                    className={cx('date_label')}
                    onClick={() => {
                        dateInput.current?.showPicker();
                    }}>
                    <input
                        type="date"
                        className={cx('date_input', 'blind')}
                        ref={dateInput}
                        onChange={(e) => {
                            const {value} = e.target;
                            const arr = value.split('-');
                            const newDate = new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));
                            setDateValue(newDate);
                        }}
                    />
                </label>
                <div className={cx('text_area')}>
                    <span className={cx('text', 'year')}>
                        <span className={cx('num')}>{dateValue.getFullYear()}</span>
                        <span className={cx('unit')}>년</span>
                    </span>
                    <span className={cx('text', 'month')}>
                        <span className={cx('num')}>{dateValue.getMonth() + 1}</span>
                        <span className={cx('unit')}>월</span>
                    </span>
                    <span className={cx('text', 'date')}>
                        <span className={cx('num')}>{dateValue.getDate()}</span>
                        <span className={cx('unit')}>일</span>
                    </span>
                    <span className={cx('text', 'day')}>
                        <span className={cx('num')}>{DAY_KOR[dateValue.getDay()]}</span>
                        <span className={cx('unit')}>요일</span>
                    </span>
                </div>
            </div>
            <WeatherInfo />
        </div>
    );
}

export default DiaryInfo;
