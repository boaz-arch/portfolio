/**
 * Runs inline in <head> before first paint, so the page never flashes the
 * wrong theme. Dark is the default (BRIEF.md), never prefers-color-scheme.
 * Kept tiny and dependency-free; localStorage access is wrapped in try/catch
 * because it throws in some private modes.
 */
export const themeScript = `(function(){var t="dark";try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark")t=s}catch(e){}var d=document.documentElement;d.setAttribute("data-theme",t);d.style.colorScheme=t})();`;
