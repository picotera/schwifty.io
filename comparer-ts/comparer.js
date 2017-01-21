var StreamComparer = (function () {
    function StreamComparer(expectedTicks, tolerance, stream) {
        var _this = this;
        this._expectedTicks = expectedTicks;
        this._tolerance = tolerance;
        this._startTime = Date.now();
        this._stream = stream;
        this._player = new TickPlayer(this._expectedTicks.map(function (tick) { return tick + tolerance; }), function (index) {
            _this.onScheduledTick(index);
        });
        this._stream.onTick = function (index) {
            _this.onInstrumentTick(index);
        };
        this._player.play();
        this.onPlayerMiss = function () { };
    }
    StreamComparer.prototype.onScheduledTick = function (index) {
        this._lastestExpectedTickIndex = index;
        this.checkScheduledTick();
    };
    StreamComparer.prototype.onInstrumentTick = function (index) {
        this._lastestInstrumentTickIndex = index;
        this._lastestInstrumentTickDate = Date.now() - this._startTime;
        this.checkInstrumentTick();
        ;
    };
    StreamComparer.prototype.checkInstrumentTick = function () {
        var relativeTime = this._lastestInstrumentTickDate;
        var tickToCompare = this._lastestInstrumentTickIndex;
        var nextTickTime = this._expectedTicks[tickToCompare];
        var difference = Math.abs(nextTickTime - relativeTime);
        if (difference > this._tolerance) {
            this.raisePlayerMissed();
        }
    };
    StreamComparer.prototype.checkScheduledTick = function () {
        var relativeTime = Date.now() - this._startTime;
        var tickToCompare = this._lastestInstrumentTickIndex + 1;
        var nextTickTime = this._expectedTicks[tickToCompare];
        var difference = relativeTime - nextTickTime;
        if (difference > this._tolerance) {
            this.raisePlayerMissed();
        }
    };
    StreamComparer.prototype.raisePlayerMissed = function () {
        this._player.stop();
        this._stream.onTick = function (index) { };
        this.onPlayerMiss();
    };
    return StreamComparer;
}());
