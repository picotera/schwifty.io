class StreamComparer {
    private _expectedTicks : number[];
    private _tolerance : number;
    private _stream: InstrumentStream;
    private _player : TickPlayer;
    private _startTime: number;

    private _lastestExpectedTickIndex : number;
    private _lastestInstrumentTickIndex: number;
    private _lastestInstrumentTickDate: number;

    constructor(expectedTicks: number[], tolerance:number, stream: InstrumentStream) {
        this._expectedTicks = expectedTicks;
        this._tolerance = tolerance;
        this._startTime = Date.now();
        this._stream = stream;

        this._player = new TickPlayer(this._expectedTicks.map(tick => tick + tolerance),
            index => {
                this.onScheduledTick(index);
            });

        this._stream.onTick = index => {
            this.onInstrumentTick(index);
        };

        this._player.play();
        this.onPlayerMiss = () => {};
    }

    public onPlayerMiss : () => void;

    private onScheduledTick(index: number): void {
        this._lastestExpectedTickIndex = index;
        this.checkScheduledTick();
    }

    private onInstrumentTick(index: number): void {
        this._lastestInstrumentTickIndex = index;
        this._lastestInstrumentTickDate = Date.now() - this._startTime;
        this.checkInstrumentTick();;
    }

    private checkInstrumentTick() {
        var relativeTime = this._lastestInstrumentTickDate;
        var tickToCompare = this._lastestInstrumentTickIndex;
        let nextTickTime = this._expectedTicks[tickToCompare];

        let difference = Math.abs(nextTickTime - relativeTime);

        if (difference > this._tolerance) {
            this.raisePlayerMissed();
        }
    }


    private checkScheduledTick() {
        var relativeTime = Date.now() - this._startTime;
        var tickToCompare = this._lastestInstrumentTickIndex + 1;
        let nextTickTime = this._expectedTicks[tickToCompare];

        let difference = relativeTime - nextTickTime ;

        if (difference > this._tolerance) {
            this.raisePlayerMissed();
        }
    }

    private raisePlayerMissed() {
        this._player.stop();
        this._stream.onTick = index => {};
        this.onPlayerMiss();
    }
}