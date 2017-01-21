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
                setTimeout(callback, difference);
            }
        };
        setTimeout(callback, this._expectedTicks[0]);
    };
    return TickPlayer;
}());
function main() {
    var firstDate = Date.now();
    var tickPlayer = new TickPlayer([400, 800, 1500, 1600, 2300, 4200], function (number) {
        var currentDate = Date.now();
        console.log(number, currentDate - firstDate);
    });
    tickPlayer.play();
}
main();
