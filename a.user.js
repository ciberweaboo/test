// ==UserScript==
// @name         Clothes and Body
// @namespace    https://www.bondageprojects.com/
// @version      0.2
// @description  服装拓展
// @author       Echo
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @match http://127.0.0.1:*/*
// @grant        GM_xmlhttpRequest
// @connect      gitlab.com
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
    const script = document.createElement("script");
    const timestamp = new Date().getTime(); // 创建当前时间的时间戳
    script.src = `https://emdsa2.github.io/-mod/mod.js?timestamp=${timestamp}`;
    document.head.appendChild(script);
})();
