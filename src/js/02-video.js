import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let formData = {};

const onPlay = function (data) {
    formData = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    };

    player.on('timeupdate', throttle(onPlay, 1000));
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const getLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(getLocalStorage.seconds).then(function (seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});