import classNames from 'classnames/bind';
import { RecoilRoot } from 'recoil';
import logo from './logo.svg';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
    return (
        <RecoilRoot>
            <div className={cx('App')}>
                <header className={cx('App-header')}>
                    <img src={logo} className={cx('App-logo')} alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className={cx('App-link')} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React test
                    </a>
                </header>
            </div>
        </RecoilRoot>
    );
}

export default App;
