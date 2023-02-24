import Vimeo from "@vimeo/player";
import { throttle } from 'lodash';

    const iframe = document.getElementById('vimeo-player');
    const player = new Vimeo(iframe);
    const THROTTLE_DELAY = 1000;
    
    player.on('timeupdate', throttle(event => {
        localStorage.setItem('videoplayer-current-time', event.seconds);
    }, THROTTLE_DELAY));

    window.addEventListener('load', () => {
        const currentTime = localStorage.getItem('videoplayer-current-time');
        if (currentTime) {
          player.setCurrentTime(currentTime);
        }
    });
