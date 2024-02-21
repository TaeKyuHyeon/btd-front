import {useRef} from 'react';

import ButtonNameTag from '@/components/button/ButtonNameTag';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import PictureDiary from '@/components/pictureDiary/PictureDiary';
import usePrompt from '@/hooks/usePrompt';
import html2canvas from 'html2canvas';

function Diary() {
    const {value, setValue, isLoading, imageList, sendPromptMessage, restartDraw} = usePrompt();
    const captureRef = useRef<HTMLDivElement>(null);

    const downloadURI = (uri: string, name: string) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
    };

    const saveImage = () => {
        if (!captureRef.current) return;
        html2canvas(captureRef.current, {
            width: 1080 / 3,
            height: 1920 / 3,
            x: -7,
            y: -70,
            windowWidth: 430,
            windowHeight: 920,
        }).then((canvas) => {
            const img = canvas.toDataURL();
            const fileNm = '파일명';
            downloadURI(img, `${fileNm}.png`);
        });
    };

    return (
        <>
            <Panel>
                <PictureDiary
                    value={value}
                    setValue={setValue}
                    isLoading={isLoading}
                    imageList={imageList}
                    ref={captureRef}
                />
            </Panel>
            <Aside>
                {isLoading || imageList ? (
                    <>
                        <ButtonNameTag text="다시 그리기" onClick={restartDraw} />
                        {!isLoading && <ButtonNameTag text="공유하기" onClick={saveImage} />}
                    </>
                ) : (
                    <ButtonNameTag text="그림 그리기" onClick={sendPromptMessage} />
                )}
            </Aside>
        </>
    );
}

export default Diary;
