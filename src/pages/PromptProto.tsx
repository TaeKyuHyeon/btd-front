import ButtonNameTag from '@/components/button/ButtonNameTag';
import Loading from '@/components/common/Loading';
import ImageList from '@/components/ImageList';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import LineNote from '@/components/LineNote';
import usePrompt from '@/hooks/usePrompt';

function PromptProto() {
    const {value, setValue, isLoading, imageList, sendPromptMessage, restartDraw} = usePrompt();

    // 패널에 컨텐츠 렌더링
    const renderContent = () => {
        if (isLoading) return <Loading text="그림 그리는 중..." />;

        if (imageList) return <ImageList list={imageList} />;

        return <LineNote value={value} setValue={setValue} placeholder="명령어를 입력하세요." />;
    };
    return (
        <>
            <Panel>{renderContent()}</Panel>
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

export default PromptProto;
