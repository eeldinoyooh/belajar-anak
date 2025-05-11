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
            t.pause()
            t.currentTime = 0
            t.play().catch(function(error) {
                if (error.name === 'AbortError') {
                    console.log('Audio play was interrupted');
                } else {
                    console.error('Error playing audio:', error);
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

var mouseoversound = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/A.MP3")
var a = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka1.MP3")
var b = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka2.MP3")
var c = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka3.MP3")
var d = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka4.MP3")
var e = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka5.MP3")
var f = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka6.MP3")
var g = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka7.MP3")
var h = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka8.MP3")
var i = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka9.MP3")
var j = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka10.MP3")
var k = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka11.MP3")
var l = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka12.MP3")
var m = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka13.MP3")
var n = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka14.MP3")
var o = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka15.MP3")
var p = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka16.MP3")
var q = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka17.MP3")
var r = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka18.MP3")
var s = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka19.MP3")
var t = createsoundbite("https://eeldinoyooh.github.io/belajar-anak/angka/suara/angka20.MP3")
