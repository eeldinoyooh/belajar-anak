var html5_audiotypes = {
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
}

function createsoundbite(e) {
    var t = document.createElement("audio")
    if (t.canPlayType) {
        for (var n = 0; n < arguments.length; n++) {
            var r = document.createElement("source")
            r.setAttribute("src", arguments[n])
            if (arguments[n].match(/\.(\w+)$/i))
                r.setAttribute("type", html5_audiotypes[RegExp.$1])
            t.appendChild(r)
        }
        t.load()
        t.playclip = function() {
            return new Promise((resolve, reject) => {
                if (t.readyState >= 2) { // HAVE_CURRENT_DATA
                    t.pause()
                    t.currentTime = 0
                    t.play()
                        .then(resolve)
                        .catch(error => {
                            if (error.name === 'AbortError') {
                                console.log('Audio play was interrupted');
                                resolve();
                            } else {
                                console.error('Error playing audio:', error);
                                reject(error);
                            }
                        });
                } else {
                    t.addEventListener('canplaythrough', function onCanPlay() {
                        t.removeEventListener('canplaythrough', onCanPlay);
                        t.pause()
                        t.currentTime = 0
                        t.play()
                            .then(resolve)
                            .catch(error => {
                                if (error.name === 'AbortError') {
                                    console.log('Audio play was interrupted');
                                    resolve();
                                } else {
                                    console.error('Error playing audio:', error);
                                    reject(error);
                                }
                            });
                    });
                }
            });
        }
        return t
    } else {
        return {
            playclip: function() {
                throw new Error("Your browser doesn't support HTML5 audio unfortunately")
            }
        }
    }
}

var mouseoversound = createsoundbite("suara/A.mp3")
var a = createsoundbite("suara/angka1.mp3")
var b = createsoundbite("suara/angka2.mp3")
var c = createsoundbite("suara/angka3.mp3")
var d = createsoundbite("suara/angka4.mp3")
var e = createsoundbite("suara/angka5.mp3")
var f = createsoundbite("suara/angka6.mp3")
var g = createsoundbite("suara/angka7.mp3")
var h = createsoundbite("suara/angka8.mp3")
var i = createsoundbite("suara/angka9.mp3")
var j = createsoundbite("suara/angka10.mp3")
var k = createsoundbite("suara/angka11.mp3")
var l = createsoundbite("suara/angka12.mp3")
var m = createsoundbite("suara/angka13.mp3")
var n = createsoundbite("suara/angka14.mp3")
var o = createsoundbite("suara/angka15.mp3")
var p = createsoundbite("suara/angka16.mp3")
var q = createsoundbite("suara/angka17.mp3")
var r = createsoundbite("suara/angka18.mp3")
var s = createsoundbite("suara/angka19.mp3")
var t = createsoundbite("suara/angka20.mp3")
