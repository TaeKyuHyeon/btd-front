import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ContentWrapper from '@/components/layout/ContentWrapper';
import Header from '@/components/layout/Header';
import Panel from '@/components/layout/Panel';
import Error from '@/pages/Error';
import ErrorBoundary from '@/pages/ErrorBoundary';
import Pages from '@/pages/Index';

import '@/scss/btd_global.scss';

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ContentWrapper>
                    <Header />
                    <Panel>
                        <Routes>
                            <Route path="/" element={<Pages />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </Panel>
                </ContentWrapper>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
