import {Route, Routes} from 'react-router-dom';

import ErrorContent from '@/components/common/ErrorContent';

function Error() {
    return (
        <Routes>
            <Route path=":error/:status/:errorCode" element={<ErrorContent />} />
            <Route path="*" element={<ErrorContent />} />
        </Routes>
    );
}

export default Error;
