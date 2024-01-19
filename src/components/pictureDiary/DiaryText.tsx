import {useEffect, useRef, useState} from 'react';

import classNames from 'classnames/bind';

import styles from './DiaryText.module.scss';

const cx = classNames.bind(styles);

const MAX_LENGTH = 50;
const INITIAL_ARRAY: Array<{index: number; value: string | null}> = Array.from({length: MAX_LENGTH}, (v, i) => ({
    index: i,
    value: null,
}));
const TEXT_CLASSNAME = {
    CARET: 'has_caret',
    SELECTED: 'is_selected',
};
interface DiaryTextProps {
    textValue: string;
    setTextValue: React.Dispatch<React.SetStateAction<string>>;
}
function DiaryText({textValue, setTextValue}: DiaryTextProps) {
    const [textArray, setTextArray] = useState(INITIAL_ARRAY);
    const [selection, setSelection] = useState<{start: number | null; end: number | null}>();
    const textInput = useRef<HTMLInputElement>(null);

    // keyUp/keyDown시 커서 위치 저장
    const changeSelection = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const {selectionStart, selectionEnd} = e.target as HTMLInputElement;
        setSelection({start: selectionStart, end: selectionEnd});
    };

    // 커서 위치에 따라 스타일 지정을 위한 class 리턴
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
            return TEXT_CLASSNAME.CARET;
        }
        if (selection.start < selection.end && selection?.start <= index && index < selection?.end) {
            return TEXT_CLASSNAME.SELECTED;
        }
        return '';
    };

    useEffect(() => {
        const newArray = textValue.split('');
        setTextArray((arr) => arr.map((item) => ({...item, value: newArray[item.index]})));
    }, [textValue]);

    return (
        <div className={cx('article')}>
            <input
                ref={textInput}
                type="text"
                maxLength={MAX_LENGTH}
                className={cx('text_input', 'blind')}
                value={textValue}
                onChange={(e) => {
                    const {value} = e.target;
                    if (value.length <= MAX_LENGTH) {
                        setTextValue(value);
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
    );
}

export default DiaryText;
