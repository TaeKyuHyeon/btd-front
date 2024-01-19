import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ContentWrapper from '@/components/layout/ContentWrapper';
import Header from '@/components/layout/Header';
import Diary from '@/pages/Diary';
import Error from '@/pages/Error';
import ErrorBoundary from '@/pages/ErrorBoundary';
import PromptProto from '@/pages/PromptProto';

import '@/scss/btd_global.scss';

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ContentWrapper>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Diary />} />
                        <Route path="/prompt" element={<PromptProto />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </ContentWrapper>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
