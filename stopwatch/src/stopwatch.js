
export class Stopwatch {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;
    }

    IncreaseMili() {
        this.miliseconds += 1;
        if (this.miliseconds >= 99) {
            this.miliseconds = 0;
            this.IncreaseSecs();
        }
    }

    IncreaseSecs() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.IncreaseMins();
        }
    }

    IncreaseMins() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.IncreaseHours();
        }
    }

    IncreaseHours() {
        this.hours += 1;
    }

    Reset() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;
    }
}
