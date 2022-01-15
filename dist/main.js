(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const s=a?`${n}${a}`:n;try{const n=await fetch(s);return await n.json()}catch(n){console.log("fetch error",n)}},s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=()=>'\n      <div class="error404">\n        <h2>Error 404</h2>\n      </div>\n    ',t={"/":async()=>{const n=await a(),s=`\n        <div class="characters">\n        ${n.results.map((n=>`\n        <article class="character-item">\n            <a href="#/${n.id}/">\n                <img src="${n.image}" alt="${n.name}"/>\n                <h2>${n.name}</h2>\n            </a>\n            </article>`)).join("")}\n        </div>\n    `;return console.log(n.results),s},"/:id":async()=>{const n=s(),e=await a(n);return`\n        <div class="characters-inner">\n        <article class="characters-card">\n            <img src="${e.image}" alt="${e.name}">\n            <h2>${e.name}</h2>\n        </article>\n        <article class="characters-card">\n            <h3>Episodes: <span class="">${e.episode.length}</span></h3>\n            <h3>Status: <span class="">${e.status}</span></h3>\n            <h3>Species: <span class="">${e.species}</span></h3>\n            <h3>Gender: <span class="">${e.gender}</span></h3>\n            <h3>Origin: <span class="">${e.origin.name}</span></h3>\n            <h3>Last Location: <span class="">${e.location.name}</span></h3>\n        </article>\n        </div>\n  `}},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <div class="header-main">\n        <div class="header-logo">\n            <h1>\n            <a href="/">\n                100tifi.co\n            </a>\n            </h1>\n        </div>\n        <div class="header-nav">\n            <a href="#/about/">\n            About\n            </a>\n        </div>\n        </div>\n  ';let c=s(),i=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),r=t[i]?t[i]:e;a.innerHTML=await r()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();