//% color=#00AAFF icon="\uf201"
namespace BigNumber {

    /**
     * Format a number into short form (1k, 1m, etc.)
     */
    //% block="format number %num"
    //% num.shadow=number
    export function format(num: number): string {
        if (num >= 1000000) {
            return Math.round(num / 100000) / 10 + "m"
        } else if (num >= 1000) {
            return Math.round(num / 100) / 10 + "k"
        } else {
            return num + ""
        }
    }
}
