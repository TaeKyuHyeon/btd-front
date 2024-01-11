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
                image: 'https://mk.kakaocdn.net/dna/karlo/image/2024-01-11/10/8c9715f7-8339-4f5e-9749-77de3081b4d7.webp?credential=smxRqiqUEJBVgohptvfXS5JoYeFv4Xxa&expires=1704938231&signature=Vdyhsg6UQ8uU%2Bqh4CuqOnDhKFug%3D',
                seed: 4292169748,
                nsfw_content_detected: null,
                nsfw_score: null,
            },
            {
                id: 'a2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnY3Mjg=-f9b3bf3b-8719-4159-91b0-fbf922e3c0c1',
                image: 'https://mk.kakaocdn.net/dna/karlo/image/2024-01-11/10/f9b3bf3b-8719-4159-91b0-fbf922e3c0c1.webp?credential=smxRqiqUEJBVgohptvfXS5JoYeFv4Xxa&expires=1704938231&signature=vYJ6Brc4lSf5%2FIIOV5cJzL6Bz6I%3D',
                seed: 1287456585,
                nsfw_content_detected: null,
                nsfw_score: null,
            },
        ],
    };

    return DEMO_DATA;
};

export const testfunction = () => {};
