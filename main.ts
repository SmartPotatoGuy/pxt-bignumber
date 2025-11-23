//% color=#00AAFF icon="\uF201"
namespace BigNumber {

    /**
     * Format a number into short form (1k, 1m, etc.)
     */
    //% blockId=bigNumber_format
    //% block="format big number %value"
    //% value.shadow=number
    export function format(value: number): string {
        if (value >= 1000000) {
            return Math.round(value / 100000) / 10 + "m"
        } else if (value >= 1000) {
            return Math.round(value / 100) / 10 + "k"
        } else {
            return value + ""
        }
    }
}
