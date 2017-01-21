class InstrumentStream {
    private _index : number = 0;
    private _onTick : (index : number) => void;

    constructor(onTick: (index: number) => void) {
        this._onTick = onTick;
    }

    notifyTick() {
        this._onTick(this._index);
        this._index++;
    }
}