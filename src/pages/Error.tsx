import {Route, Routes} from 'react-router-dom';

import ErrorContent from '@/components/layout/ErrorContent';
import Panel from '@/components/layout/Panel';

function Error() {
    return (
        <Panel>
            <Routes>
                <Route path=":error/:status/:errorCode" element={<ErrorContent />} />
                <Route path="*" element={<ErrorContent />} />
            </Routes>
        </Panel>
    );
}

export default Error;
