import classnames from 'classnames/bind';

import styles from './ErrorContent.module.scss';

const cx = classnames.bind(styles);

function EmptyContent() {
    return (
        <div className={cx('article')}>
            <p className={cx('notice')}>
                잘못된 페이지 접근입니다.
                <br />
                정상적인 경로로 접근해주세요.
                <br />
            </p>
        </div>
    );
}
export default EmptyContent;
