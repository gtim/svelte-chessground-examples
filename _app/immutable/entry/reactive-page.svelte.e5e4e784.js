import{S as w,i as Q,s as y,y as T,a as N,k as b,q as B,z as C,c as $,l as d,m as h,r as g,h as P,n as k,A as E,b as R,D as f,J as K,g as D,d as F,B as O,K as S}from"../chunks/index.dbf4ef36.js";import{C as U}from"../chunks/Chessground.ae9893b6.js";import{t as x}from"../chunks/stores.7efcc2a9.js";function z(r){let s,i,e,n,p,c,o,_,u,m,q;return s=new U({props:{orientation:r[1],fen:r[2][r[0]]}}),{c(){T(s.$$.fragment),i=N(),e=b("div"),n=b("button"),p=B("Flip board"),c=N(),o=b("button"),_=B("Next position"),this.h()},l(t){C(s.$$.fragment,t),i=$(t),e=d(t,"DIV",{class:!0});var a=h(e);n=d(a,"BUTTON",{class:!0});var l=h(n);p=g(l,"Flip board"),l.forEach(P),c=$(a),o=d(a,"BUTTON",{class:!0});var v=h(o);_=g(v,"Next position"),v.forEach(P),a.forEach(P),this.h()},h(){k(n,"class","svelte-93q6qo"),k(o,"class","svelte-93q6qo"),k(e,"class","svelte-93q6qo")},m(t,a){E(s,t,a),R(t,i,a),R(t,e,a),f(e,n),f(n,p),f(e,c),f(e,o),f(o,_),u=!0,m||(q=[K(n,"click",r[3]),K(o,"click",r[4])],m=!0)},p(t,[a]){const l={};a&2&&(l.orientation=t[1]),a&1&&(l.fen=t[2][t[0]]),s.$set(l)},i(t){u||(D(s.$$.fragment,t),u=!0)},o(t){F(s.$$.fragment,t),u=!1},d(t){O(s,t),t&&P(i),t&&P(e),m=!1,S(q)}}}function A(r,s,i){x.set("Reactive position");const e=["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR","r3k1nr/p2p1ppp/3B4/1pbN1N1P/4P1P1/3P1Q2/PqP5/R4KR1 b kq - 1 18","r1b1kbnr/pppp1Npp/8/8/2Bnq3/8/PPPP1P1P/RNBQKR2 w Qkq - 0 7","r1b1kbnr/pppp1ppp/8/4p1B1/3nP3/2N3P1/PPP1NP1P/R2QKB1R b KQkq - 0 6","5K2/k7/4P1p1/8/8/8/4b3/8 w - - 0 1","7k/5K2/7P/6pP/8/8/8/8 w - - 0 1"];let n=0,p="black";function c(){i(1,p=p=="white"?"black":"white")}function o(){i(0,n=(n+1)%e.length)}return[n,p,e,c,o]}class j extends w{constructor(s){super(),Q(this,s,A,z,y,{})}}export{j as default};
