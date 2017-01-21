var InstrumentStream = (function () {
    function InstrumentStream() {
        this._index = 0;
    }
    InstrumentStream.prototype.notifyTick = function () {
        this.onTick(this._index);
        this._index++;
    };
    return InstrumentStream;
}());
