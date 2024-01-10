import classnames from 'classnames/bind';
import {isMobile} from 'react-device-detect';
import ContentWrapper from './ContentWrapper';
import styles from './ErrorContent.module.scss';
import Panel from './Panel';

const cx = classnames.bind(styles);

function ErrorContent() {
    return (
        <ContentWrapper isMobile={isMobile}>
            <Panel>
                <div className={cx('article')}>
                    {/* <IconNotice width={56} height={56} fill="#d3d8de" /> */}
                    <p className={cx('notice')}>
                        현재 일시적인 오류로 인해 페이지 접근이 어려운 상태입니다.
                        <br />
                        잠시 후 다시 센터에 접속하여 확인해 주세요.
                        <br />
                        오류가 지속될 경우 접속하신 판매자 고객센터로 문의 부탁드립니다.
                    </p>
                </div>
            </Panel>
        </ContentWrapper>
    );
}
export default ErrorContent;
