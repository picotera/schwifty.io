var TickPlayer = (function () {
    function TickPlayer(expectedTicks, onTick) {
        this._onTick = onTick;
        this._expectedTicks = expectedTicks;
    }
    TickPlayer.prototype.play = function () {
        var _this = this;
        var index = 0;
        var callback = function () {
            _this._onTick(index);
            index++;
            if (index < _this._expectedTicks.length) {
                var difference = _this._expectedTicks[index] - _this._expectedTicks[index - 1];
                _this._timeout = setTimeout(callback, difference);
            }
        };
        this._timeout = setTimeout(callback, this._expectedTicks[0]);
    };
    TickPlayer.prototype.stop = function () {
        clearTimeout(this._timeout);
    };
    return TickPlayer;
}());
function main() {
    var instrumentStream = new InstrumentStream();
    var firstDate = Date.now();
    var tickPlayer = new TickPlayer([400, 800, 1500, 1600, 2300, 4200], function (number) {
        instrumentStream.notifyTick();
        console.log(Date.now() - firstDate);
    });
    var comparer = new StreamComparer([500, 900, 1600, 1800, 2200, 4200, 5000], 200, instrumentStream);
    comparer.onPlayerMiss = function () { return console.log("Player missed"); };
    tickPlayer.play();
}
main();
