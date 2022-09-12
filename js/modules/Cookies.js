export class Cookies {

    constructor() {

        this.checkCookieEnabled();

    }

    checkCookieEnabled() { // sprawdzanie czy cookies są włączone w przeglądarce 
        //console.log(navigator.cookieEnabled); // metoda do sprawdzania cookies 
        if(!navigator.cookieEnabled) {
            alert('masz wyłączoną obsługę ciasteczek');
            return;
        }
    }

    setCookie(options) {
        
        const option = {

            name: options.name || 'test', // po || możemy dać opcje defaultową
            value: options.value || 'wartosc testowa',
            days: options.days,
            path: options.path,
            domain: options.domain,
            secure: options.secure

        }
        // console.log(option);

        const cookieName = encodeURIComponent(option.name); // funckcja dba o to żeby nie było spacji i polskich znaków

        const cookieValue = encodeURIComponent(option.value);

        // console.log(option.name);
        // console.log(cookieName);

        // document.cookie = `${cookieName}=${cookieValue}`; --> szybka opcja zrobienia cookiesa

        const cookieSettingsTab = []; // tworzymy tablice do której będziemy wrzucać opcje cookiesa

        cookieSettingsTab.push(`${cookieName} = ${cookieValue}`);

        
        if(typeof option.days === 'number') {
            
            const date = new Date();
            
            date.setTime(date.getTime() + (option.days * 24 * 60 * 60 * 1000));
            
            cookieSettingsTab.push(`expires = ${date.toGMTString()}`);
            
        }

        if(option.path) {

            cookieSettingsTab.push(`path = ${option.path}`);

        }
        if(option.domain) {

            cookieSettingsTab.push(`domain = ${option.domain}`);

        }
        if(option.secure) {

            cookieSettingsTab.push(`secure = ${option.secure}`);

        }
        
        console.log(cookieSettingsTab);

        document.cookie = cookieSettingsTab.join(';');

    }

    removeCookie(name) {
        this.setCookie({
            name: name,
            days: -1
        })
    }

}


