import {atom} from 'recoil';

// 이미지 저장중 flag
export const isSavingState = atom<boolean>({
    key: 'isSaving',
    default: false,
});

export const state = '';
