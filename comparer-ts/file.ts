class TickPlayer {
    private _timeout: number;
    private _expectedTicks: number[];
    private _onTick: (index: number) => void;

    constructor(expectedTicks: number[], onTick: (index: number) => void) {
        this._onTick = onTick;
        this._expectedTicks = expectedTicks;
    }

    play(): void {
        let index = 0;

        var callback = () => {
            this._onTick(index);

            index++;

            if (index < this._expectedTicks.length) {
                let difference = this._expectedTicks[index] - this._expectedTicks[index - 1];
                this._timeout = setTimeout(callback, difference);
            }
        };

        this._timeout = setTimeout(callback, this._expectedTicks[0]);
    }

    stop(): void {
        clearTimeout(this._timeout);
    }
}

function main(): void {
    let instrumentStream = new InstrumentStream();

    let firstDate = Date.now();
    var tickPlayer = new TickPlayer([400, 800, 1500, 1600, 2300, 4200], number => {
        instrumentStream.notifyTick();
        console.log(Date.now() - firstDate);
    });

    var comparer: StreamComparer = new StreamComparer([500, 900, 1600, 1800, 2200, 4200, 5000], 200, instrumentStream);

    comparer.onPlayerMiss = () => console.log("Player missed");

    tickPlayer.play();
}

main();