class Player {
    private _startDate: number = Date.now();
    playerId: string;
    private _keyToKeyStream: IKeyStreamMap = {};

    public getKeyStream(key: string, expectedTicks : number[]) {
        var stream = this._keyToKeyStream[key];

        if (stream == null) {
            stream = new KeyStream(this._startDate, key, expectedTicks);
            this._keyToKeyStream[key] = stream;
        }

        return stream;
    }
}

interface IKeyStreamMap {
    [key: string] : KeyStream;
}

class KeyStream {
    private _key: string;
    playerId: string;
    ticks: number[] = [];
    private _expectedTicks : number[];
    private _startDate:number;

    constructor(startDate: number, key: string, expectedTicks : number[]) {
        this._key = key;
        this._startDate = startDate;
        this._expectedTicks = expectedTicks;
    }

    onTick(): void {
        this.ticks = this.ticks.concat(Date.now() - this._startDate);
    }
}

class StreamComparer {
    players: KeyStream[];
}


function main() : void{
    var players : Player[] = [];

    for (var i: number = 1; i <= 9; i++) {
        let currentPlayer = new Player();
        currentPlayer.playerId = "player_" + i;
        players = players.concat(currentPlayer);

        // subscribe here:
        // subscribe("player_" + i,
        //    (args, kwargs) => currentPlayer.getKeyStream(kwargs.key, 
        // put expectedTicks instead of an empty array
        //[]).onTick());
    }
}

main();