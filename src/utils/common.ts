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

/**
 * 1씩 증가하는 특정 길이의 배열 생성
 * @param length
 * @returns Array [0, 1, 2, 3, ...]
 */
export const indexArray = (length: number) => {
    const arr = Array.from({length}, (v, i) => i);
    return arr;
};
