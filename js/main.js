import {Cookies} from "./modules/Cookies.js";
import {InfoCookies} from "./modules/InfoCookies.js";


const test = new Cookies;
// const test = new InfoCookies; możemy korzystać z drugiej klasy bo ona posiada drugą

test.setCookie({

    name: 'Accept',
    value: 'yes',
    days: 3,
    secure: true // tylko jak jest https to się odpali

});

test.removeCookie('Accept'); // usuwamy cookiesa
