import classnames from 'classnames/bind';

import styles from './ErrorContent.module.scss';

const cx = classnames.bind(styles);

function ErrorContent() {
    return (
        <div className={cx('article')}>
            {/* <IconNotice width={56} height={56} fill="#d3d8de" /> */}
            <p className={cx('notice')}>
                현재 일시적인 오류로 인해
                <br />
                페이지 접근이 어려운 상태입니다.
                <br />
                잠시 후 다시 접속하여 확인해 주세요.
                <br />
            </p>
        </div>
    );
}
export default ErrorContent;
