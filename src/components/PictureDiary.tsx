import {useRef, useState} from 'react';

import classNames from 'classnames/bind';

import styles from './PictureDiary.module.scss';

const cx = classNames.bind(styles);

const MAX_LENGTH = 60;
const INITIAL_ARRAY: Array<{index: number; value: string | null}> = Array.from({length: MAX_LENGTH}, (v, i) => ({
    index: i,
    value: null,
}));

function PictureDiary() {
    const [textValue, setTextValue] = useState('');
    const [textArray, setTextArray] = useState(INITIAL_ARRAY);
    const [selection, setSelection] = useState<{start: number | null; end: number | null}>();
    const textInput = useRef<HTMLInputElement>(null);

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

    return (
        <div className={cx('article')}>
            <div className={cx('box')}>
                <div className={cx('info_area')}>
                    <div className={cx('date')}>
                        <input type="date" />
                        <span className={cx('year')}>년</span>
                        <span className={cx('month')}>월</span>
                        <span className={cx('date')}>일</span>
                        <span className={cx('day')}>요일</span>
                    </div>
                    <div className={cx('weather')}>
                        <input type="radio" id="sun" name="weather" />
                        <input type="radio" id="cloud" name="weather" />
                        <input type="radio" id="rain" name="weather" />
                        <input type="radio" id="snow" name="weather" />
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
                        className={(cx('text_input'), 'blind')}
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
