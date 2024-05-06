function createAssemblyLine() {

    function hasClima(obj) {

        const template = {
            temp: 21,
            tempSettings: 21,

            adjustTemp: function adjustTemp() {
                if (this.temp < this.tempSettings) {
                    return this.temp++;
                } else {
                    return this.temp--;

                }
            }
        }
        return Object.assign(obj, template);
    };

    function hasAudio(obj) {
        obj.currentTrack = null;
        obj.nowPlaying = function nowPlaying() {
            if (obj.currentTrack !== null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }
        };
        return obj;
    };

    function hasParktronic(obj) {

        obj.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (0.1 <= distance && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (0.25 <= distance && distance < 0.5) {
                console.log("Beep!");
            }
        }
        return obj;
    }
    return {
        hasClima,
        hasAudio,
        hasParktronic
    }
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis',
}
console.log(myCar);
assemblyLine.hasAudio(myCar);

myCar.currentTrack = {

name: 'Never Gonna Give You Up',

artist: 'Rick Astley'

};

myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2)

