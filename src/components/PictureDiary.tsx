import {useRef, useState} from 'react';

import classNames from 'classnames/bind';

import icon_cloud from '@/assets/weather/cloud.png';
import icon_cloud_selected from '@/assets/weather/cloud_selected.png';
import icon_rain from '@/assets/weather/rain.png';
import icon_rain_selected from '@/assets/weather/rain_selected.png';
import icon_snow from '@/assets/weather/snow.png';
import icon_snow_selected from '@/assets/weather/snow_selected.png';
import icon_sun from '@/assets/weather/sun.png';
import icon_sun_selected from '@/assets/weather/sun_selected.png';

import styles from './PictureDiary.module.scss';

const cx = classNames.bind(styles);

const MAX_LENGTH = 50;
const INITIAL_ARRAY: Array<{index: number; value: string | null}> = Array.from({length: MAX_LENGTH}, (v, i) => ({
    index: i,
    value: null,
}));
const today = new Date();
const DAY_KOR = ['일', '월', '화', '수', '목', '금', '토'];

function PictureDiary() {
    const [textValue, setTextValue] = useState('');
    const [textArray, setTextArray] = useState(INITIAL_ARRAY);
    const [selection, setSelection] = useState<{start: number | null; end: number | null}>();
    const textInput = useRef<HTMLInputElement>(null);

    const [dateValue, setDateValue] = useState<Date>(today);
    const dateInput = useRef<HTMLInputElement>(null);

    const [weatherValue, setWeatherValue] = useState('sun');

    const changeSelection = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const {selectionStart, selectionEnd} = e.target as HTMLInputElement;
        setSelection({start: selectionStart, end: selectionEnd});
    };

    const getSelectionClassName = (index: number) => {
        if (
            selection?.start === null ||
            selection?.start === undefined ||
            selection?.end === null ||
            selection?.end === undefined
        ) {
            return '';
        }
        if (selection.start === selection.end && index === selection?.start) {
            return 'has_caret';
        }
        if (selection.start < selection.end && selection?.start <= index && index < selection?.end) {
            return 'is_selected';
        }
        return '';
    };

    const changeWeather = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setWeatherValue(value);
    };

    return (
        <div className={cx('article')}>
            <div className={cx('box')}>
                <div className={cx('info_area')}>
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
                    <div className={cx('info_item', 'weather')}>
                        <label className={cx('label', 'label_sun')}>
                            <input
                                type="radio"
                                name="weather"
                                value="sun"
                                className={cx('input')}
                                onChange={changeWeather}
                                checked={weatherValue === 'sun'}
                            />
                            <img
                                src={weatherValue !== 'sun' ? icon_sun : icon_sun_selected}
                                alt="sun"
                                width={35}
                                height={35}
                                className={cx('icon')}
                            />
                        </label>
                        <label className={cx('label', 'label_cloud')}>
                            <input
                                type="radio"
                                name="weather"
                                value="cloud"
                                className={cx('input')}
                                onChange={changeWeather}
                                checked={weatherValue === 'cloud'}
                            />
                            <img
                                src={weatherValue !== 'cloud' ? icon_cloud : icon_cloud_selected}
                                alt="cloud"
                                width={35}
                                height={35}
                                className={cx('icon')}
                            />
                        </label>
                        <label className={cx('label', 'label_rain')}>
                            <input
                                type="radio"
                                name="weather"
                                value="rain"
                                className={cx('input')}
                                onChange={changeWeather}
                                checked={weatherValue === 'rain'}
                            />
                            <img
                                src={weatherValue !== 'rain' ? icon_rain : icon_rain_selected}
                                alt="rain"
                                width={35}
                                height={35}
                                className={cx('icon')}
                            />
                        </label>
                        <label className={cx('label', 'label_snow')}>
                            <input
                                type="radio"
                                name="weather"
                                value="snow"
                                className={cx('input')}
                                onChange={changeWeather}
                                checked={weatherValue === 'snow'}
                            />
                            <img
                                src={weatherValue !== 'snow' ? icon_snow : icon_snow_selected}
                                alt="snow"
                                width={35}
                                height={35}
                                className={cx('icon')}
                            />
                        </label>
                    </div>
                </div>
                <div className={cx('image_area')}>
                    <input type="file" />
                    <img src="" alt="" />
                </div>
                <div className={cx('text_area')}>
                    <input
                        ref={textInput}
                        type="text"
                        maxLength={MAX_LENGTH}
                        className={cx('text_input')}
                        value={textValue}
                        onChange={(e) => {
                            const {value} = e.target;
                            if (value.length <= MAX_LENGTH) {
                                setTextValue(value);
                                const newArray = value.split('');
                                setTextArray((arr) => arr.map((item) => ({...item, value: newArray[item.index]})));
                            }
                        }}
                        onKeyUp={changeSelection}
                        onKeyDown={changeSelection}
                        onBlur={() => {
                            setSelection({start: null, end: null});
                        }}
                    />
                    <div className={cx('text_box')}>
                        {textArray.map(({index, value}) => (
                            <div className={cx('inner')} key={index}>
                                <input
                                    type="button"
                                    className={cx('btn')}
                                    onClick={() => {
                                        textInput.current?.focus();
                                        let position = index;
                                        if (!textValue.length || index > textValue.length) {
                                            position = textValue.length;
                                        }
                                        textInput.current?.setSelectionRange(position, position);
                                        setSelection({start: position, end: position});
                                    }}
                                />
                                <div className={cx('cell', getSelectionClassName(index))}>
                                    <div className={cx('text')}>{value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* {indexArray(ROW_COUNT).map((row) => (
                        <div className={cx('row')} key={row}>
                            {indexArray(COLUMN_COUNT).map((col) => (
                                <div className={cx('cell')} key={col} />
                            ))}
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
}

export default PictureDiary;
