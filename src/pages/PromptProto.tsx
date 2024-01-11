import {useState} from 'react';

import ButtonDraw from '@/components/button/ButtonDraw';
import Loading from '@/components/common/Loading';
import ImageList from '@/components/ImageList';
import Aside from '@/components/layout/Aside';
import Panel from '@/components/layout/Panel';
import LineNote from '@/components/LineNote';

const DEMO_DATA = [
    {
        id: 'a2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnY3Mjg=-8c9715f7-8339-4f5e-9749-77de3081b4d7',
        url: 'https://mk.kakaocdn.net/dna/karlo/image/2024-01-11/10/8c9715f7-8339-4f5e-9749-77de3081b4d7.webp?credential=smxRqiqUEJBVgohptvfXS5JoYeFv4Xxa&expires=1704938231&signature=Vdyhsg6UQ8uU%2Bqh4CuqOnDhKFug%3D',
    },
    {
        id: 'a2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnY3Mjg=-f9b3bf3b-8719-4159-91b0-fbf922e3c0c1',
        url: 'https://mk.kakaocdn.net/dna/karlo/image/2024-01-11/10/f9b3bf3b-8719-4159-91b0-fbf922e3c0c1.webp?credential=smxRqiqUEJBVgohptvfXS5JoYeFv4Xxa&expires=1704938231&signature=vYJ6Brc4lSf5%2FIIOV5cJzL6Bz6I%3D',
    },
];

function PromptProto() {
    const [value, setValue] = useState<string>('');
    const [isLoading] = useState<boolean>(false);
    const [imageList] = useState(DEMO_DATA);

    // 서버에 이미지 생성 요청
    const callDraw = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    };

    // 패널에 컨텐츠 렌더링
    const renderContent = () => {
        if (isLoading) return <Loading text="그림 그리는 중..." />;

        if (imageList) return <ImageList list={DEMO_DATA} />;

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
