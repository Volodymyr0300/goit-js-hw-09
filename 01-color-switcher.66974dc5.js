const t=document.querySelector("[data-start]");console.log(t);const e=document.querySelector("[data-stop]");console.log(e);const o=document.querySelector("body");console.log("body:",o);let n=null;t.addEventListener("click",(function(){n=setInterval((()=>{t.setAttribute("disabled",""),o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearTimeout(n)}));
//# sourceMappingURL=01-color-switcher.66974dc5.js.map
