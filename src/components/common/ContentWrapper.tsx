import type {PropsWithChildren} from 'react';
import classNames from 'classnames/bind';
import styles from './ContentWrapper.module.scss';

const cx = classNames.bind(styles);

interface ContentWrapperProps {
    isMobile?: boolean;
}

export const CONTENT_WRAPPER_ID = 'content-wrapper';

function ContentWrapper({isMobile, children}: PropsWithChildren<ContentWrapperProps>) {
    return (
        <>
            {isMobile ? (
                <div className="mobile">
                    <div className={cx('article')}>{children}</div>
                </div>
            ) : (
                <div className={cx('article')} id={CONTENT_WRAPPER_ID}>
                    {children}
                </div>
            )}
        </>
    );
}

export default ContentWrapper;

