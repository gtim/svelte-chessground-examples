import{S as q,i as B,s as I,a as P,k as $,q as T,c as V,l as h,m as g,r as z,h as f,n as S,p as A,b as y,D as N,J,d as u,f as O,g as _,v as U,y as v,z as b,A as k,B as x}from"../chunks/index.dbf4ef36.js";import{C}from"../chunks/ChessgroundUnstyled.svelte_svelte_type_style_lang.7f7c6f3f.js";import{t as j}from"../chunks/stores.7efcc2a9.js";function F(l){let e,t;return e=new C({}),{c(){v(e.$$.fragment)},l(r){b(e.$$.fragment,r)},m(r,s){k(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function G(l){let e,t;return e=new C({props:{className:"cg-paper",coordinates:!1}}),{c(){v(e.$$.fragment)},l(r){b(e.$$.fragment,r)},m(r,s){k(e,r,s),t=!0},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){u(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function H(l){let e,t,r;return t=new C({}),{c(){e=$("div"),v(t.$$.fragment),this.h()},l(s){e=h(s,"DIV",{class:!0});var a=g(e);b(t.$$.fragment,a),a.forEach(f),this.h()},h(){S(e,"class","override_background svelte-xhrhwf")},m(s,a){y(s,e,a),k(t,e,null),r=!0},i(s){r||(_(t.$$.fragment,s),r=!0)},o(s){u(t.$$.fragment,s),r=!1},d(s){s&&f(e),x(t)}}}function K(l){let e,t,r,s,a,d,m,p,w;const D=[H,G,F],o=[];function E(n,i){return n[0]==0?0:n[0]==1?1:n[0]==2?2:-1}return~(e=E(l))&&(t=o[e]=D[e](l)),{c(){t&&t.c(),r=P(),s=$("div"),a=$("button"),d=T("Change style"),this.h()},l(n){t&&t.l(n),r=V(n),s=h(n,"DIV",{style:!0});var i=g(s);a=h(i,"BUTTON",{class:!0});var c=g(a);d=z(c,"Change style"),c.forEach(f),i.forEach(f),this.h()},h(){S(a,"class","svelte-xhrhwf"),A(s,"text-align","center")},m(n,i){~e&&o[e].m(n,i),y(n,r,i),y(n,s,i),N(s,a),N(a,d),m=!0,p||(w=J(a,"click",l[1]),p=!0)},p(n,[i]){let c=e;e=E(n),e!==c&&(t&&(U(),u(o[c],1,1,()=>{o[c]=null}),O()),~e?(t=o[e],t||(t=o[e]=D[e](n),t.c()),_(t,1),t.m(r.parentNode,r)):t=null)},i(n){m||(_(t),m=!0)},o(n){u(t),m=!1},d(n){~e&&o[e].d(n),n&&f(r),n&&f(s),p=!1,w()}}}function L(l,e,t){j.set("Custom styles");let r=0;function s(){t(0,r=(r+1)%3)}return[r,s]}class W extends q{constructor(e){super(),B(this,e,L,K,I,{})}}export{W as default};