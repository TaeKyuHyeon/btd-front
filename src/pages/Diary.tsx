import ButtonNameTag from '@/components/button/ButtonNameTag';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import PictureDiary from '@/components/pictureDiary/PictureDiary';
import usePrompt from '@/hooks/usePrompt';

function Diary() {
    const {value, setValue, isLoading, imageList, sendPromptMessage, restartDraw} = usePrompt();

    return (
        <>
            <Panel>
                <PictureDiary value={value} setValue={setValue} isLoading={isLoading} imageList={imageList} />
            </Panel>
            <Aside>
                {isLoading || imageList ? (
                    <ButtonNameTag text="다시 그리기" onClick={restartDraw} />
                ) : (
                    <ButtonNameTag text="그림 그리기" onClick={sendPromptMessage} />
                )}
            </Aside>
        </>
    );
}

export default Diary;
