// ==UserScript==
// @name           Facebook Simple Adblock for feed
// @namespace      http://tampermonkey.net/
// @version        0.0.1 - 01/05/2025
// @description    Hides ads / Oculta os anúncios
// @author         0Hz
// @compatible     brave
// @compatible     chrome
// @compatible     firefox
// @icon           https://static.xx.fbcdn.net/rsrc.php/y1/r/ay1hV6OlegS.ico
// @include        https://www.facebook.com/*
// @include        https://facebook.com/*
// @include        http://www.facebook.com/*
// @include        http://facebook.com/*
// @match          *://example.org/*
// @grant          none
// ==/UserScript==

let blockadcontact = true;
let blockadpost = true;
let interval = 1000;
const list = ["Patrocinado", "Patrocinada","Paeroniet","Sponsored","Sponsorizzata","Sponsorizzato","Sponsorizat","Sponsorisé", "Disponsori", "Sponsorizuar", "Sponset","Sponsorowane","Szponzorált","Gesponsord","Gesponsert","Kuxhasiwe","赞助", "スポンサー付き", "후원","برعاية", "ממומן","प्रायोजित","Հովանավորվում է","ߘߡߍ߬ߟߋ߲","Спонсор", "Aningaasaliiffigineqartoq"];
const urls = ["https://www.facebook.com/","http://www.facebook.com/","https://www.facebook.com","http://www.facebook.com/"];

if (urls.includes(document.location.href)) {
  getElementByInnerText(list);
}

function getElementByInnerText(list) {
  try {
    // ADS Contacts
    if (blockadcontact==true) {
      const allElements = document.querySelectorAll('span.x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.x1j85h84');
      for (const element of allElements) {
        if (list.includes(element.innerText))  {
          element.innerText = ' ';
          element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
          element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style="height: 0px; opacity: 0; visibility: hidden;";
          break;
        }
      }
    }
  } catch (error) {
    console.error(error);//element.innerText = error;
  }
  try {
    //ADS Posts
    if (blockadpost==true) {
      const allElementsX = document.querySelectorAll('div > span > div > span > span > a.x1i10hfl.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.xkrqix3.x1sur9pj.xi81zsa.x1s688f');

      for (const elementX of allElementsX) {
        if (elementX.href.search("/?__cft__") != -1) {//if (elementX.href.search("/ads/about/") != -1) NEED MOUSE OVER TRIGGED TO SHOW/FOUND /ads/about/
          elementX.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="none";
          elementX.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style="height: 0px; opacity: 0; visibility: hidden;";
        }
      }
    }
  } catch (error) {
    console.error(error);//element.innerText = error;
  }//return null;
}

function exec() {
  try {
    if (urls.includes(document.location.href)) {
      getElementByInnerText(list);
    }
  } catch (error) {
    console.error(error);
  }
}

intervalID = setInterval(exec,interval);