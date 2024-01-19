import {TImageRes} from '@/api/prompt';

export type TImage = {id: string; url: string};

export const parsePromptImages = (data: TImageRes[]): TImage[] =>
    data.map((item) => {
        const {id, image} = item;
        return {id, url: image};
    });

export const parseImage = () => {};
