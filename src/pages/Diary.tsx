import ButtonNameTag from '@/components/button/ButtonNameTag';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import PictureDiary from '@/components/pictureDiary/PictureDiary';
import usePrompt from '@/hooks/usePrompt';
import useSaveImage from '@/hooks/useSaveImage';

function Diary() {
    const {value, setValue, isLoading, imageList, sendPromptMessage, restartDraw} = usePrompt();
    const {captureRef, saveImage} = useSaveImage();

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
