import {useState} from 'react';

import {cancelApiRequest, postPromptMessage} from '@/api/prompt';
import {TImage} from '@/components/ImageList';
import {parsePromptImages} from '@/model/prompt';

function usePrompt() {
    const [value, setValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [imageList, setImageList] = useState<TImage[] | null>(null);

    // 서버에 이미지 생성 요청
    const sendPromptMessage = () => {
        if (!value) {
            alert('명령어를 입력해주세요.');
            return;
        }

        setIsLoading(true);
        postPromptMessage({prompt: value})
            .then(({generatedImage}) => {
                setImageList(parsePromptImages(generatedImage.images));
            })
            .catch((err) => {
                console.log(`[cancelApiRequest]`, err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // 다시 그리기
    const restartDraw = () => {
        if (isLoading) cancelApiRequest('restartDraw');
        setValue('');
        setImageList(null);
        setIsLoading(false); // [To-do] api 취소 후 loaidng=false 체크
    };

    return {
        value,
        setValue,
        isLoading,
        imageList,
        sendPromptMessage,
        restartDraw,
    };
}

export default usePrompt;
