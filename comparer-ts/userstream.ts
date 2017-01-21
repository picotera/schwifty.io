class InstrumentStream {
    private _index : number = 0;
    onTick : (index : number) => void;

    notifyTick() {
        this.onTick(this._index);
        this._index++;
    }
}