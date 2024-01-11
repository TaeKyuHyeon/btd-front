import {useState} from 'react';

import ButtonDraw from '@/components/button/ButtonDraw';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import LineNote from '@/components/LineNote';

function PromptProto() {
    const [value, setValue] = useState<string>('');

    return (
        <>
            <Panel>
                <LineNote value={value} setValue={setValue} placeholder="명령어를 입력하세요." />
            </Panel>
            <Aside>
                <ButtonDraw
                    onClick={(e) => {
                        console.log(e);
                    }}
                />
            </Aside>
        </>
    );
}

export default PromptProto;
