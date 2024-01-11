import {TImageRes} from '@/api/prompt';
import {TImage} from '@/components/ImageList';

export const parsePromptImages = (data: TImageRes[]): TImage[] =>
    data.map((item) => {
        const {id, image} = item;
        return {id, url: image};
    });

export const parseImage = () => {};
