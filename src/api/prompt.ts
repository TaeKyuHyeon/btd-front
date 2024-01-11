import {sleep} from '@/utils/common';

// import axiosInstance from '.';
export type TImageRes = {
    id: string;
    image: string;
    seed: number;
    nsfw_content_detected: unknown;
    nsfw_score: unknown;
};

export type TPromptRes = {
    id: string;
    model_version: string;
    images: TImageRes[];
};

// const listCancel = {cancel: null};

// export const cancelListApi = () => {
//     if (listCancel.cancel) {
//         listCancel.cancel();
//     }
//     listCancel.cancel = null;
// };

export const postPromptMessage = async (msg: string): Promise<TPromptRes> => {
    // const url = '';
    // const data = {
    //     msg,
    // };
    // const config = {
    //     cancelToken: new CancelToken((canceler) => {
    //         listCancel.cancel = canceler;
    //     }),
    // };
    // const res = await axiosInstance.post(url, data, config);
    // return res.data;

    console.log('message', msg);
    await sleep(3000);

    const DEMO_DATA = {
        id: 'c02cb5cf9c85c2d6',
        model_version: 'v2.0.4.0.prod',
        images: [
            {
                id: 'a2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnY3Mjg=-8c9715f7-8339-4f5e-9749-77de3081b4d7',
                image: 'https://previews.123rf.com/images/maudis60/maudis601609/maudis60160900516/64058266-%EC%95%84%EC%9D%B4%EA%B0%80-%EA%B7%B8%EB%A6%B0-%EA%B7%B8%EB%A6%BC-%EC%8B%9C%EA%B3%A8%EC%97%90%EC%84%9C-%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%80%EC%A0%95.jpg',
                seed: 4292169748,
                nsfw_content_detected: null,
                nsfw_score: null,
            },
            {
                id: 'a2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnY3Mjg=-f9b3bf3b-8719-4159-91b0-fbf922e3c0c1',
                image: 'https://previews.123rf.com/images/maudis60/maudis601609/maudis60160900561/64060838-%EC%95%84%EC%9D%B4%EA%B0%80-%EA%B7%B8%EB%A6%B0-%EA%B7%B8%EB%A6%BC-%EB%B4%84%EC%9D%98-%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%80%EC%A0%95.jpg',
                seed: 1287456585,
                nsfw_content_detected: null,
                nsfw_score: null,
            },
            {
                id: '6=-f9b3bf3b-8719-4159-91b0-fbf922e3c0c1',
                image: 'https://artprojectsforkids.org/wp-content/uploads/2021/12/How-to-Draw-a-Minion.jpg.webp',
                seed: 1287456585,
                nsfw_content_detected: null,
                nsfw_score: null,
            },
        ],
    };

    return DEMO_DATA;
};

export const testfunction = () => {};
