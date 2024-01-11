/**
 * 일정 시간 실행 지연
 * @param {number} delay : 지연시간 ms
 * @returns promise
 */
export const sleep = (delay: number) =>
    new Promise<Boolean>((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, delay);
    });

export const testUtil = () => {};
