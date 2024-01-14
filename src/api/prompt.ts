import axiosInstance, {CancelToken} from '.';

export type TPromptReq = {
    prompt: string;
};

export type TImageRes = {
    id: string;
    image: string;
    seed: number;
    nsfw_content_detected: unknown;
    nsfw_score: unknown;
};

export type TPromptRes = {
    generatedImage: {
        id: string;
        model_version: string;
        images: TImageRes[];
    };
};

let canceler: any = null;
export const cancelApiRequest = (message: string) => {
    if (canceler) {
        canceler(message);
    }
    canceler = null;
};

export const postPromptMessage = async (params: TPromptReq): Promise<TPromptRes> => {
    const url = `/generateImage`;
    const data = params;
    const res = await axiosInstance.post(url, data, {
        cancelToken: new CancelToken((c) => {
            canceler = c;
        }),
    });
    return res.data;
};

export const getExample = async () => {
    const url = `/example`;
    const res = axiosInstance.get(url);
    return res;
};

export const testfunction = () => {};
