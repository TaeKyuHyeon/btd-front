import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Error from '@/pages/Error';
import ErrorBoundary from '@/pages/ErrorBoundary';
import Pages from '@/pages/Index';

import '@/scss/btd_global.scss';

function App() {

    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Pages />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;