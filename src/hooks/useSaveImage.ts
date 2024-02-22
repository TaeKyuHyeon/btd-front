import {useCallback, useEffect, useRef} from 'react';

import {isSavingState} from '@/states';
import html2canvas from 'html2canvas';
import {useRecoilState} from 'recoil';

function useSaveImage() {
    const [isSaving, setIsSaving] = useRecoilState(isSavingState);
    const captureRef = useRef<HTMLDivElement>(null);

    const downloadURI = useCallback((uri: string, name: string) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
    }, []);

    const htmlToCanvas = useCallback(() => {
        if (!captureRef.current) return;
        html2canvas(captureRef.current, {
            width: 1080 / 3,
            height: 1920 / 3,
            x: -7,
            y: -70,
            windowWidth: 430,
            windowHeight: 920,
        }).then((canvas) => {
            const img = canvas.toDataURL();
            const fileNm = '파일명';
            downloadURI(img, `${fileNm}.png`);
        });
    }, [downloadURI]);

    useEffect(() => {
        if (!isSaving) return;
        htmlToCanvas();
        setIsSaving(false);
    }, [isSaving, htmlToCanvas, setIsSaving]);

    return {
        captureRef,
        saveImage: () => {
            setIsSaving(true);
        },
    };
}

export default useSaveImage;
