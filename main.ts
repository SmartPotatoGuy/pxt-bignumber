namespace BigNumber {
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