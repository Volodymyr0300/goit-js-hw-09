!function(){var t=document.querySelector("[data-start]");console.log(t);var e=document.querySelector("[data-stop]");console.log(e);var o=document.querySelector("body");console.log("body:",o);var n=null;t.addEventListener("click",(function(){n=setInterval((function(){t.setAttribute("disabled",""),o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearTimeout(n)}))}();
//# sourceMappingURL=01-color-switcher.a35b25e0.js.map
