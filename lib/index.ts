export interface IOptions {
    bias: number;
}

/**
 * Returns a spongemock version of a given string.
 * @param inputString The raw input string to spongemockify.
 * @param options Optional parameter conforming to IOptions for supplying additional customization.
 * @returns The spongemockified string.
 */
export function spmock(inputString: string, options?: IOptions): string {
    return inputString.split('').map((el, i) => {
        return i % 2 == 0 ? el.toLowerCase() : el.toUpperCase();
    }).join('');
}