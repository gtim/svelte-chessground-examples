import{S as g,i as v,s as h,y as $,z as b,A as w,g as y,d as C,B as M,o as k,w as P}from"../chunks/index.dbf4ef36.js";import{C as A}from"../chunks/ChessgroundUnstyled.svelte_svelte_type_style_lang.7f7c6f3f.js";import{C as S}from"../chunks/chess.ea872f19.js";import{t as u}from"../chunks/util.f07d8c1e.js";import{t as q}from"../chunks/stores.7efcc2a9.js";function x(s){let o,e,a={config:s[1]};return o=new A({props:a}),s[2](o),{c(){$(o.$$.fragment)},l(t){b(o.$$.fragment,t)},m(t,m){w(o,t,m),e=!0},p(t,[m]){const i={};o.$set(i)},i(t){e||(y(o.$$.fragment,t),e=!0)},o(t){C(o.$$.fragment,t),e=!1},d(t){s[2](null),M(o,t)}}}function z(s,o,e){q.set("Play vs. random AI");const a=new S;let t,m={movable:{color:"white",free:!1,dests:u(a)}};k(async()=>{t.set({movable:{events:{after:i(t,a)}}})});function i(n,r){return(_,d)=>{setTimeout(()=>{r.move({from:_,to:d});const l=r.moves({verbose:!0}),c=l[Math.floor(Math.random()*l.length)];r.move(c.san),n.move(c.from,c.to);const f=r.turn()=="w"?"white":"black";n.set({turnColor:f,movable:{color:f,dests:u(r)}}),n.playPremove()},750)}}function p(n){P[n?"unshift":"push"](()=>{t=n,e(0,t)})}return[t,m,p]}class j extends g{constructor(o){super(),v(this,o,z,x,h,{})}}export{j as default};
