import {Route, Routes} from 'react-router-dom';

import EmptyContent from '@/components/error/EmptyContent';
import ErrorContent from '@/components/error/ErrorContent';
import Panel from '@/components/layout/Panel';

function Error() {
    return (
        <Panel>
            <Routes>
                <Route path=":error/:errorCode" element={<ErrorContent />} />
                <Route path="*" element={<EmptyContent />} />
            </Routes>
        </Panel>
    );
}

export default Error;
