import {useParams} from 'react-router-dom';

import classnames from 'classnames/bind';

import styles from './ErrorContent.module.scss';

const cx = classnames.bind(styles);

function ErrorContent() {
    const {errorCode} = useParams();

    return (
        <div className={cx('article')}>
            <p className={cx('notice')}>
                {errorCode ? (
                    <>{errorCode}에러 발생</>
                ) : (
                    <>
                        현재 일시적인 오류로 인해
                        <br />
                        페이지 접근이 어려운 상태입니다.
                        <br />
                        잠시 후 다시 접속하여 확인해 주세요.
                        <br />
                    </>
                )}
            </p>
        </div>
    );
}
export default ErrorContent;
