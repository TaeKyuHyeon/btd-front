import {useState} from 'react';

import ButtonDraw from '@/components/button/ButtonDraw';
import Loading from '@/components/common/Loading';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import LineNote from '@/components/LineNote';

function PromptProto() {
    const [value, setValue] = useState<string>('');
    const [isLoading] = useState<boolean>(false);

    // 서버에 이미지 생성 요청
    const callDraw = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    };

    // 패널에 컨텐츠 렌더링
    const renderContent = () => {
        if (isLoading) return <Loading text="그림 그리는 중..." />;

        return <LineNote value={value} setValue={setValue} placeholder="명령어를 입력하세요." />;
    };
    return (
        <>
            <Panel>{renderContent()}</Panel>
            <Aside>
                <ButtonDraw onClick={callDraw} />
            </Aside>
        </>
    );
}

export default PromptProto;
