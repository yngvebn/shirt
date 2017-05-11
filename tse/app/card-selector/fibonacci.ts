export class Fibonacci {
    public sequence(number: number): number {
        if (number < 2) {
            return number;
        } else {
            return this.sequence(number - 1) + this.sequence(number - 2);
        }
    }

    public run(times: number): Array<number> {
        times = Math.floor(times);
        var sequence: Array<number> = new Array<number>(times);
        for (var x: number = 1; x <= times; x++) {
            sequence[x - 1] = this.sequence(x);
        }
        sequence.splice(0, 1);
        return sequence;
    }
}