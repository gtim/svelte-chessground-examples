import{S as s}from"./chess.ea872f19.js";function a(n){const t=new Map;return s.forEach(o=>{const e=n.moves({square:o,verbose:!0});e.length&&t.set(o,e.map(r=>r.to))}),t}function u(n,t){return(o,e)=>{t.move({from:o,to:e});const r=t.turn()=="w"?"white":"black";n.set({turnColor:r,movable:{color:r,dests:a(t)}})}}export{u as p,a as t};
