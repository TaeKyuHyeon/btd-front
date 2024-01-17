import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ContentWrapper from '@/components/layout/ContentWrapper';
import Header from '@/components/layout/Header';
import Error from '@/pages/Error';
import ErrorBoundary from '@/pages/ErrorBoundary';

import '@/scss/btd_global.scss';
import Diary from './pages/Diary';
import PromptProto from './pages/PromptProto';

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ContentWrapper>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Diary />} />
                        <Route path="/proto" element={<PromptProto />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </ContentWrapper>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
