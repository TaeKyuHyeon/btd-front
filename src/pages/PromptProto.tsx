import {useState} from 'react';

import {postPromptMessage} from '@/api/prompt';
import ButtonDraw from '@/components/button/ButtonDraw';
import Loading from '@/components/common/Loading';
import ImageList, {TImage} from '@/components/ImageList';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import LineNote from '@/components/LineNote';
import {parsePromptImages} from '@/model/prompt';

function PromptProto() {
    const [value, setValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [imageList, setImageList] = useState<TImage[] | null>();

    // 서버에 이미지 생성 요청
    const sendPromptMessage = () => {
        setIsLoading(true);
        postPromptMessage(value)
            .then(({images}) => {
                setImageList(parsePromptImages(images));
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // 다시 그리기
    const restartDraw = () => {
        // [To-do] cancelApi
        setValue('');
        setImageList(null);
        setIsLoading(false); // [To-do] api 취소 후 loaidng=false 체크
    };

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
                    <ButtonDraw text="다시 그리기" onClick={restartDraw} />
                ) : (
                    <ButtonDraw text="그림 그리기" onClick={sendPromptMessage} />
                )}
            </Aside>
        </>
    );
}

export default PromptProto;
