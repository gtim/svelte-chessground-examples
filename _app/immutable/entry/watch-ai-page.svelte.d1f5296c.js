import{S as f,i as h,s as d,k as p,y as _,l as g,m as v,z as $,h as l,p as u,b as y,A as b,g as C,d as w,B as M,o as k,w as A}from"../chunks/index.4bc3a562.js";import{C as I}from"../chunks/Chessground.92de491a.js";import{C as S}from"../chunks/chess.ea872f19.js";import{t as T}from"../chunks/stores.0724fa6d.js";function q(r){let t,s,o,a={config:r[1]};return s=new I({props:a}),r[2](s),{c(){t=p("div"),_(s.$$.fragment),this.h()},l(e){t=g(e,"DIV",{style:!0});var n=v(t);$(s.$$.fragment,n),n.forEach(l),this.h()},h(){u(t,"width","100%"),u(t,"aspect-ratio","1")},m(e,n){y(e,t,n),b(s,t,null),o=!0},p(e,[n]){const m={};s.$set(m)},i(e){o||(C(s.$$.fragment,e),o=!0)},o(e){w(s.$$.fragment,e),o=!1},d(e){e&&l(t),r[2](null),M(s)}}}function x(r,t,s){T.set("Watch random AIs play");const o=new S;let a,e={animation:{duration:500},movable:{free:!1}};k(()=>{setTimeout(n,750)});function n(){const i=o.moves({verbose:!0}),c=i[Math.floor(Math.random()*i.length)];o.move(c.san),a.move(c.from,c.to),setTimeout(n,750)}function m(i){A[i?"unshift":"push"](()=>{a=i,s(0,a)})}return[a,e,m]}class F extends f{constructor(t){super(),h(this,t,x,q,d,{})}}export{F as default};