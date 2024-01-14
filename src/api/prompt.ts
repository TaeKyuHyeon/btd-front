import axiosInstance, {source} from '.';

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
    id: string;
    model_version: string;
    images: TImageRes[];
};

export const postPromptMessage = async (params: TPromptReq): Promise<TPromptRes> => {
    const url = `/generateImage`;
    const data = params;
    const res = await axiosInstance.post(url, data, {cancelToken: source.token});
    return res.data;
};

export const testfunction = () => {};
