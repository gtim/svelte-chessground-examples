import{S as yn,i as Pn,s as kn,k as Cn,l as Sn,m as Mn,h as ve,n as be,b as xn,I as we,o as An,w as Dn}from"./index.dbf4ef36.js";const On=["white","black"],ce=["a","b","c","d","e","f","g","h"],le=["1","2","3","4","5","6","7","8"],Tn=[...le].reverse(),se=Array.prototype.concat(...ce.map(e=>le.map(n=>e+n))),D=e=>se[8*e[0]+e[1]],b=e=>[e.charCodeAt(0)-97,e.charCodeAt(1)-49],Te=se.map(b);function _n(e){let n;const o=()=>(n===void 0&&(n=e()),n);return o.clear=()=>{n=void 0},o}const qn=()=>{let e;return{start(){e=performance.now()},cancel(){e=void 0},stop(){if(!e)return 0;const n=performance.now()-e;return e=void 0,n}}},ae=e=>e==="white"?"black":"white",Y=(e,n)=>{const o=e[0]-n[0],r=e[1]-n[1];return o*o+r*r},re=(e,n)=>e.role===n.role&&e.color===n.color,Q=e=>(n,o)=>[(o?n[0]:7-n[0])*e.width/8,(o?7-n[1]:n[1])*e.height/8],q=(e,n)=>{e.style.transform=`translate(${n[0]}px,${n[1]}px)`},_e=(e,n,o=1)=>{e.style.transform=`translate(${n[0]}px,${n[1]}px) scale(${o})`},de=(e,n)=>{e.style.visibility=n?"visible":"hidden"},V=e=>{var n;if(e.clientX||e.clientX===0)return[e.clientX,e.clientY];if(!((n=e.targetTouches)===null||n===void 0)&&n[0])return[e.targetTouches[0].clientX,e.targetTouches[0].clientY]},qe=e=>e.buttons===2||e.button===2,N=(e,n)=>{const o=document.createElement(e);return n&&(o.className=n),o};function Ne(e,n,o){const r=b(e);return n||(r[0]=7-r[0],r[1]=7-r[1]),[o.left+o.width*r[0]/8+o.width/16,o.top+o.height*(7-r[1])/8+o.height/16]}const z=(e,n)=>Math.abs(e-n),Nn=e=>(n,o,r,t)=>z(n,r)<2&&(e==="white"?t===o+1||o<=1&&t===o+2&&n===r:t===o-1||o>=6&&t===o-2&&n===r),Ke=(e,n,o,r)=>{const t=z(e,o),i=z(n,r);return t===1&&i===2||t===2&&i===1},Ee=(e,n,o,r)=>z(e,o)===z(n,r),He=(e,n,o,r)=>e===o||n===r,Le=(e,n,o,r)=>Ee(e,n,o,r)||He(e,n,o,r),Kn=(e,n,o)=>(r,t,i,c)=>z(r,i)<2&&z(t,c)<2||o&&t===c&&t===(e==="white"?0:7)&&(r===4&&(i===2&&n.includes(0)||i===6&&n.includes(7))||n.includes(i));function En(e,n){const o=n==="white"?"1":"8",r=[];for(const[t,i]of e)t[1]===o&&i.color===n&&i.role==="rook"&&r.push(b(t)[0]);return r}function Re(e,n,o){const r=e.get(n);if(!r)return[];const t=b(n),i=r.role,c=i==="pawn"?Nn(r.color):i==="knight"?Ke:i==="bishop"?Ee:i==="rook"?He:i==="queen"?Le:Kn(r.color,En(e,r.color),o);return Te.filter(l=>(t[0]!==l[0]||t[1]!==l[1])&&c(t[0],t[1],l[0],l[1])).map(D)}function k(e,...n){e&&setTimeout(()=>e(...n),1)}function Hn(e){e.orientation=ae(e.orientation),e.animation.current=e.draggable.current=e.selected=void 0}function Ln(e,n){for(const[o,r]of n)r?e.pieces.set(o,r):e.pieces.delete(o)}function Rn(e,n){if(e.check=void 0,n===!0&&(n=e.turnColor),n)for(const[o,r]of e.pieces)r.role==="king"&&r.color===n&&(e.check=o)}function In(e,n,o,r){R(e),e.premovable.current=[n,o],k(e.premovable.events.set,n,o,r)}function L(e){e.premovable.current&&(e.premovable.current=void 0,k(e.premovable.events.unset))}function Wn(e,n,o){L(e),e.predroppable.current={role:n,key:o},k(e.predroppable.events.set,n,o)}function R(e){const n=e.predroppable;n.current&&(n.current=void 0,k(n.events.unset))}function Bn(e,n,o){if(!e.autoCastle)return!1;const r=e.pieces.get(n);if(!r||r.role!=="king")return!1;const t=b(n),i=b(o);if(t[1]!==0&&t[1]!==7||t[1]!==i[1])return!1;t[0]===4&&!e.pieces.has(o)&&(i[0]===6?o=D([7,i[1]]):i[0]===2&&(o=D([0,i[1]])));const c=e.pieces.get(o);return!c||c.color!==r.color||c.role!=="rook"?!1:(e.pieces.delete(n),e.pieces.delete(o),t[0]<i[0]?(e.pieces.set(D([6,i[1]]),r),e.pieces.set(D([5,i[1]]),c)):(e.pieces.set(D([2,i[1]]),r),e.pieces.set(D([3,i[1]]),c)),!0)}function Ie(e,n,o){const r=e.pieces.get(n),t=e.pieces.get(o);if(n===o||!r)return!1;const i=t&&t.color!==r.color?t:void 0;return o===e.selected&&O(e),k(e.events.move,n,o,i),Bn(e,n,o)||(e.pieces.set(o,r),e.pieces.delete(n)),e.lastMove=[n,o],e.check=void 0,k(e.events.change),i||!0}function ue(e,n,o,r){if(e.pieces.has(o))if(r)e.pieces.delete(o);else return!1;return k(e.events.dropNewPiece,n,o),e.pieces.set(o,n),e.lastMove=[o],e.check=void 0,k(e.events.change),e.movable.dests=void 0,e.turnColor=ae(e.turnColor),!0}function We(e,n,o){const r=Ie(e,n,o);return r&&(e.movable.dests=void 0,e.turnColor=ae(e.turnColor),e.animation.current=void 0),r}function Be(e,n,o){if(fe(e,n,o)){const r=We(e,n,o);if(r){const t=e.hold.stop();O(e);const i={premove:!1,ctrlKey:e.stats.ctrlKey,holdTime:t};return r!==!0&&(i.captured=r),k(e.movable.events.after,n,o,i),!0}}else if(Vn(e,n,o))return In(e,n,o,{ctrlKey:e.stats.ctrlKey}),O(e),!0;return O(e),!1}function ze(e,n,o,r){const t=e.pieces.get(n);t&&(zn(e,n,o)||r)?(e.pieces.delete(n),ue(e,t,o,r),k(e.movable.events.afterNewPiece,t.role,o,{premove:!1,predrop:!1})):t&&Fn(e,n,o)?Wn(e,t.role,o):(L(e),R(e)),e.pieces.delete(n),O(e)}function te(e,n,o){if(k(e.events.select,n),e.selected){if(e.selected===n&&!e.draggable.enabled){O(e),e.hold.cancel();return}else if((e.selectable.enabled||o)&&e.selected!==n&&Be(e,e.selected,n)){e.stats.dragged=!1;return}}(e.selectable.enabled||e.draggable.enabled)&&(Fe(e,n)||pe(e,n))&&(Ve(e,n),e.hold.start())}function Ve(e,n){e.selected=n,pe(e,n)?e.premovable.dests=Re(e.pieces,n,e.premovable.castle):e.premovable.dests=void 0}function O(e){e.selected=void 0,e.premovable.dests=void 0,e.hold.cancel()}function Fe(e,n){const o=e.pieces.get(n);return!!o&&(e.movable.color==="both"||e.movable.color===o.color&&e.turnColor===o.color)}const fe=(e,n,o)=>{var r,t;return n!==o&&Fe(e,n)&&(e.movable.free||!!(!((t=(r=e.movable.dests)===null||r===void 0?void 0:r.get(n))===null||t===void 0)&&t.includes(o)))};function zn(e,n,o){const r=e.pieces.get(n);return!!r&&(n===o||!e.pieces.has(o))&&(e.movable.color==="both"||e.movable.color===r.color&&e.turnColor===r.color)}function pe(e,n){const o=e.pieces.get(n);return!!o&&e.premovable.enabled&&e.movable.color===o.color&&e.turnColor!==o.color}const Vn=(e,n,o)=>n!==o&&pe(e,n)&&Re(e.pieces,n,e.premovable.castle).includes(o);function Fn(e,n,o){const r=e.pieces.get(n),t=e.pieces.get(o);return!!r&&(!t||t.color!==e.movable.color)&&e.predroppable.enabled&&(r.role!=="pawn"||o[1]!=="1"&&o[1]!=="8")&&e.movable.color===r.color&&e.turnColor!==r.color}function jn(e,n){const o=e.pieces.get(n);return!!o&&e.draggable.enabled&&(e.movable.color==="both"||e.movable.color===o.color&&(e.turnColor===o.color||e.premovable.enabled))}function Zn(e){const n=e.premovable.current;if(!n)return!1;const o=n[0],r=n[1];let t=!1;if(fe(e,o,r)){const i=We(e,o,r);if(i){const c={premove:!0};i!==!0&&(c.captured=i),k(e.movable.events.after,o,r,c),t=!0}}return L(e),t}function Un(e,n){const o=e.predroppable.current;let r=!1;if(!o)return!1;if(n(o)){const t={role:o.role,color:e.movable.color};ue(e,t,o.key)&&(k(e.movable.events.afterNewPiece,o.role,o.key,{premove:!1,predrop:!0}),r=!0)}return R(e),r}function ge(e){L(e),R(e),O(e)}function ye(e){e.movable.color=e.movable.dests=e.animation.current=void 0,ge(e)}function F(e,n,o){let r=Math.floor(8*(e[0]-o.left)/o.width);n||(r=7-r);let t=7-Math.floor(8*(e[1]-o.top)/o.height);return n||(t=7-t),r>=0&&r<8&&t>=0&&t<8?D([r,t]):void 0}function Gn(e,n,o,r){const t=b(e),i=Te.filter(s=>Le(t[0],t[1],s[0],s[1])||Ke(t[0],t[1],s[0],s[1])),l=i.map(s=>Ne(D(s),o,r)).map(s=>Y(n,s)),[,d]=l.reduce((s,h,u)=>s[0]<h?s:[h,u],[l[0],0]);return D(i[d])}const C=e=>e.orientation==="white",je="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",Xn={p:"pawn",r:"rook",n:"knight",b:"bishop",q:"queen",k:"king"},Yn={pawn:"p",rook:"r",knight:"n",bishop:"b",queen:"q",king:"k"};function Ze(e){e==="start"&&(e=je);const n=new Map;let o=7,r=0;for(const t of e)switch(t){case" ":case"[":return n;case"/":if(--o,o<0)return n;r=0;break;case"~":{const i=n.get(D([r-1,o]));i&&(i.promoted=!0);break}default:{const i=t.charCodeAt(0);if(i<57)r+=i-48;else{const c=t.toLowerCase();n.set(D([r,o]),{role:Xn[c],color:t===c?"black":"white"}),++r}}}return n}function Qn(e){return Tn.map(n=>ce.map(o=>{const r=e.get(o+n);if(r){let t=Yn[r.role];return r.color==="white"&&(t=t.toUpperCase()),r.promoted&&(t+="~"),t}else return"1"}).join("")).join("/").replace(/1{2,}/g,n=>n.length.toString())}function Ue(e,n){n.animation&&(he(e.animation,n.animation),(e.animation.duration||0)<70&&(e.animation.enabled=!1))}function Ge(e,n){var o,r,t;if(!((o=n.movable)===null||o===void 0)&&o.dests&&(e.movable.dests=void 0),!((r=n.drawable)===null||r===void 0)&&r.autoShapes&&(e.drawable.autoShapes=[]),he(e,n),n.fen&&(e.pieces=Ze(n.fen),e.drawable.shapes=((t=n.drawable)===null||t===void 0?void 0:t.shapes)||[]),"check"in n&&Rn(e,n.check||!1),"lastMove"in n&&!n.lastMove?e.lastMove=void 0:n.lastMove&&(e.lastMove=n.lastMove),e.selected&&Ve(e,e.selected),Ue(e,n),!e.movable.rookCastle&&e.movable.dests){const i=e.movable.color==="white"?"1":"8",c="e"+i,l=e.movable.dests.get(c),d=e.pieces.get(c);if(!l||!d||d.role!=="king")return;e.movable.dests.set(c,l.filter(s=>!(s==="a"+i&&l.includes("c"+i))&&!(s==="h"+i&&l.includes("g"+i))))}}function he(e,n){for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(Object.prototype.hasOwnProperty.call(e,o)&&Pe(e[o])&&Pe(n[o])?he(e[o],n[o]):e[o]=n[o])}function Pe(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}const B=(e,n)=>n.animation.enabled?eo(e,n):E(e,n);function E(e,n){const o=e(n);return n.dom.redraw(),o}const ee=(e,n)=>({key:e,pos:b(e),piece:n}),Jn=(e,n)=>n.sort((o,r)=>Y(e.pos,o.pos)-Y(e.pos,r.pos))[0];function $n(e,n){const o=new Map,r=[],t=new Map,i=[],c=[],l=new Map;let d,s,h;for(const[u,w]of e)l.set(u,ee(u,w));for(const u of se)d=n.pieces.get(u),s=l.get(u),d?s?re(d,s.piece)||(i.push(s),c.push(ee(u,d))):c.push(ee(u,d)):s&&i.push(s);for(const u of c)s=Jn(u,i.filter(w=>re(u.piece,w.piece))),s&&(h=[s.pos[0]-u.pos[0],s.pos[1]-u.pos[1]],o.set(u.key,h.concat(h)),r.push(s.key));for(const u of i)r.includes(u.key)||t.set(u.key,u.piece);return{anims:o,fadings:t}}function Xe(e,n){const o=e.animation.current;if(o===void 0){e.dom.destroyed||e.dom.redrawNow();return}const r=1-(n-o.start)*o.frequency;if(r<=0)e.animation.current=void 0,e.dom.redrawNow();else{const t=no(r);for(const i of o.plan.anims.values())i[2]=i[0]*t,i[3]=i[1]*t;e.dom.redrawNow(!0),requestAnimationFrame((i=performance.now())=>Xe(e,i))}}function eo(e,n){const o=new Map(n.pieces),r=e(n),t=$n(o,n);if(t.anims.size||t.fadings.size){const i=n.animation.current&&n.animation.current.start;n.animation.current={start:performance.now(),frequency:1/n.animation.duration,plan:t},i||Xe(n,performance.now())}else n.dom.redraw();return r}const no=e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,oo=["green","red","blue","yellow"];function ro(e,n){if(n.touches&&n.touches.length>1)return;n.stopPropagation(),n.preventDefault(),n.ctrlKey?O(e):ge(e);const o=V(n),r=F(o,C(e),e.dom.bounds());r&&(e.drawable.current={orig:r,pos:o,brush:lo(n),snapToValidMove:e.drawable.defaultSnapToValidMove},Ye(e))}function Ye(e){requestAnimationFrame(()=>{const n=e.drawable.current;if(n){const o=F(n.pos,C(e),e.dom.bounds());o||(n.snapToValidMove=!1);const r=n.snapToValidMove?Gn(n.orig,n.pos,C(e),e.dom.bounds()):o;r!==n.mouseSq&&(n.mouseSq=r,n.dest=r!==n.orig?r:void 0,e.dom.redrawNow()),Ye(e)}})}function to(e,n){e.drawable.current&&(e.drawable.current.pos=V(n))}function io(e){const n=e.drawable.current;n&&(n.mouseSq&&so(e.drawable,n),Qe(e))}function Qe(e){e.drawable.current&&(e.drawable.current=void 0,e.dom.redraw())}function co(e){e.drawable.shapes.length&&(e.drawable.shapes=[],e.dom.redraw(),Je(e.drawable))}function lo(e){var n;const o=(e.shiftKey||e.ctrlKey)&&qe(e),r=e.altKey||e.metaKey||((n=e.getModifierState)===null||n===void 0?void 0:n.call(e,"AltGraph"));return oo[(o?1:0)+(r?2:0)]}function so(e,n){const o=t=>t.orig===n.orig&&t.dest===n.dest,r=e.shapes.find(o);r&&(e.shapes=e.shapes.filter(t=>!o(t))),(!r||r.brush!==n.brush)&&e.shapes.push({orig:n.orig,dest:n.dest,brush:n.brush}),Je(e)}function Je(e){e.onChange&&e.onChange(e.shapes)}function ao(e,n){if(!n.isTrusted||n.button!==void 0&&n.button!==0||n.touches&&n.touches.length>1)return;const o=e.dom.bounds(),r=V(n),t=F(r,C(e),o);if(!t)return;const i=e.pieces.get(t),c=e.selected;!c&&e.drawable.enabled&&(e.drawable.eraseOnClick||!i||i.color!==e.turnColor)&&co(e),n.cancelable!==!1&&(!n.touches||e.blockTouchScroll||i||c||uo(e,r))&&n.preventDefault();const l=!!e.premovable.current,d=!!e.predroppable.current;e.stats.ctrlKey=n.ctrlKey,e.selected&&fe(e,e.selected,t)?B(u=>te(u,t),e):te(e,t);const s=e.selected===t,h=en(e,t);if(i&&h&&s&&jn(e,t)){e.draggable.current={orig:t,piece:i,origPos:r,pos:r,started:e.draggable.autoDistance&&e.stats.dragged,element:h,previouslySelected:c,originTarget:n.target,keyHasChanged:!1},h.cgDragging=!0,h.classList.add("dragging");const u=e.dom.elements.ghost;u&&(u.className=`ghost ${i.color} ${i.role}`,q(u,Q(o)(b(t),C(e))),de(u,!0)),me(e)}else l&&L(e),d&&R(e);e.dom.redraw()}function uo(e,n){const o=C(e),r=e.dom.bounds(),t=Math.pow(r.width/8,2);for(const i of e.pieces.keys()){const c=Ne(i,o,r);if(Y(c,n)<=t)return!0}return!1}function fo(e,n,o,r){const t="a0";e.pieces.set(t,n),e.dom.redraw();const i=V(o);e.draggable.current={orig:t,piece:n,origPos:i,pos:i,started:!0,element:()=>en(e,t),originTarget:o.target,newPiece:!0,force:!!r,keyHasChanged:!1},me(e)}function me(e){requestAnimationFrame(()=>{var n;const o=e.draggable.current;if(!o)return;!((n=e.animation.current)===null||n===void 0)&&n.plan.anims.has(o.orig)&&(e.animation.current=void 0);const r=e.pieces.get(o.orig);if(!r||!re(r,o.piece))J(e);else if(!o.started&&Y(o.pos,o.origPos)>=Math.pow(e.draggable.distance,2)&&(o.started=!0),o.started){if(typeof o.element=="function"){const i=o.element();if(!i)return;i.cgDragging=!0,i.classList.add("dragging"),o.element=i}const t=e.dom.bounds();q(o.element,[o.pos[0]-t.left-t.width/16,o.pos[1]-t.top-t.height/16]),o.keyHasChanged||(o.keyHasChanged=o.orig!==F(o.pos,C(e),t))}me(e)})}function po(e,n){e.draggable.current&&(!n.touches||n.touches.length<2)&&(e.draggable.current.pos=V(n))}function go(e,n){const o=e.draggable.current;if(!o)return;if(n.type==="touchend"&&n.cancelable!==!1&&n.preventDefault(),n.type==="touchend"&&o.originTarget!==n.target&&!o.newPiece){e.draggable.current=void 0;return}L(e),R(e);const r=V(n)||o.pos,t=F(r,C(e),e.dom.bounds());t&&o.started&&o.orig!==t?o.newPiece?ze(e,o.orig,t,o.force):(e.stats.ctrlKey=n.ctrlKey,Be(e,o.orig,t)&&(e.stats.dragged=!0)):o.newPiece?e.pieces.delete(o.orig):e.draggable.deleteOnDropOff&&!t&&(e.pieces.delete(o.orig),k(e.events.change)),(o.orig===o.previouslySelected||o.keyHasChanged)&&(o.orig===t||!t)?O(e):e.selectable.enabled||O(e),$e(e),e.draggable.current=void 0,e.dom.redraw()}function J(e){const n=e.draggable.current;n&&(n.newPiece&&e.pieces.delete(n.orig),e.draggable.current=void 0,O(e),$e(e),e.dom.redraw())}function $e(e){const n=e.dom.elements;n.ghost&&de(n.ghost,!1)}function en(e,n){let o=e.dom.elements.board.firstChild;for(;o;){if(o.cgKey===n&&o.tagName==="PIECE")return o;o=o.nextSibling}}function ho(e,n){e.exploding={stage:1,keys:n},e.dom.redraw(),setTimeout(()=>{ke(e,2),setTimeout(()=>ke(e,void 0),120)},120)}function ke(e,n){e.exploding&&(n?e.exploding.stage=n:e.exploding=void 0,e.dom.redraw())}function mo(e,n){function o(){Hn(e),n()}return{set(r){r.orientation&&r.orientation!==e.orientation&&o(),Ue(e,r),(r.fen?B:E)(t=>Ge(t,r),e)},state:e,getFen:()=>Qn(e.pieces),toggleOrientation:o,setPieces(r){B(t=>Ln(t,r),e)},selectSquare(r,t){r?B(i=>te(i,r,t),e):e.selected&&(O(e),e.dom.redraw())},move(r,t){B(i=>Ie(i,r,t),e)},newPiece(r,t){B(i=>ue(i,r,t),e)},playPremove(){if(e.premovable.current){if(B(Zn,e))return!0;e.dom.redraw()}return!1},playPredrop(r){if(e.predroppable.current){const t=Un(e,r);return e.dom.redraw(),t}return!1},cancelPremove(){E(L,e)},cancelPredrop(){E(R,e)},cancelMove(){E(r=>{ge(r),J(r)},e)},stop(){E(r=>{ye(r),J(r)},e)},explode(r){ho(e,r)},setAutoShapes(r){E(t=>t.drawable.autoShapes=r,e)},setShapes(r){E(t=>t.drawable.shapes=r,e)},getKeyAtDomPos(r){return F(r,C(e),e.dom.bounds())},redrawAll:n,dragNewPiece(r,t,i){fo(e,r,t,i)},destroy(){ye(e),e.dom.unbind&&e.dom.unbind(),e.dom.destroyed=!0}}}function vo(){return{pieces:Ze(je),orientation:"white",turnColor:"white",coordinates:!0,ranksPosition:"right",autoCastle:!0,viewOnly:!1,disableContextMenu:!1,addPieceZIndex:!1,blockTouchScroll:!1,pieceKey:!1,highlight:{lastMove:!0,check:!0},animation:{enabled:!0,duration:200},movable:{free:!0,color:"both",showDests:!0,events:{},rookCastle:!0},premovable:{enabled:!0,showDests:!0,castle:!0,events:{}},predroppable:{enabled:!1,events:{}},draggable:{enabled:!0,distance:3,autoDistance:!0,showGhost:!0,deleteOnDropOff:!1},dropmode:{active:!1},selectable:{enabled:!0},stats:{dragged:!("ontouchstart"in window)},events:{},drawable:{enabled:!0,visible:!0,defaultSnapToValidMove:!0,eraseOnClick:!0,shapes:[],autoShapes:[],brushes:{green:{key:"g",color:"#15781B",opacity:1,lineWidth:10},red:{key:"r",color:"#882020",opacity:1,lineWidth:10},blue:{key:"b",color:"#003088",opacity:1,lineWidth:10},yellow:{key:"y",color:"#e68f00",opacity:1,lineWidth:10},paleBlue:{key:"pb",color:"#003088",opacity:.4,lineWidth:15},paleGreen:{key:"pg",color:"#15781B",opacity:.4,lineWidth:15},paleRed:{key:"pr",color:"#882020",opacity:.4,lineWidth:15},paleGrey:{key:"pgr",color:"#4a4a4a",opacity:.35,lineWidth:15}},prevSvgHash:""},hold:qn()}}function ie(e,n,o){const r=new Map,t=[];for(const l of e)r.set(l.hash,!1);let i=n.firstChild,c;for(;i;)c=i.getAttribute("cgHash"),r.has(c)?r.set(c,!0):t.push(i),i=i.nextSibling;for(const l of t)n.removeChild(l);for(const l of e)r.get(l.hash)||n.appendChild(o(l))}function T(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function bo(e,n,o){const r=e.drawable,t=r.current,i=t&&t.mouseSq?t:void 0,c=new Map,l=e.dom.bounds(),d=r.autoShapes.filter(f=>!f.piece);for(const f of r.shapes.concat(d).concat(i?[i]:[]))f.dest&&c.set(f.dest,(c.get(f.dest)||0)+1);const s=r.shapes.concat(d).map(f=>({shape:f,current:!1,hash:Ce(f,c,!1,l)}));i&&s.push({shape:i,current:!0,hash:Ce(i,c,!0,l)});const h=s.map(f=>f.hash).join(";");if(h===e.drawable.prevSvgHash)return;e.drawable.prevSvgHash=h;const u=n.querySelector("defs"),w=n.querySelector("g"),S=o.querySelector("g");wo(r,s,u),ie(s.filter(f=>!f.shape.customSvg),w,f=>Se(e,f,r.brushes,c,l)),ie(s.filter(f=>f.shape.customSvg),S,f=>Se(e,f,r.brushes,c,l))}function wo(e,n,o){const r=new Map;let t;for(const l of n)l.shape.dest&&(t=e.brushes[l.shape.brush],l.shape.modifiers&&(t=nn(t,l.shape.modifiers)),r.set(t.key,t));const i=new Set;let c=o.firstChild;for(;c;)i.add(c.getAttribute("cgKey")),c=c.nextSibling;for(const[l,d]of r.entries())i.has(l)||o.appendChild(xo(d))}function Ce({orig:e,dest:n,brush:o,piece:r,modifiers:t,customSvg:i},c,l,d){return[d.width,d.height,l,e,n,o,n&&(c.get(n)||0)>1,r&&yo(r),t&&Po(t),i&&ko(i)].filter(s=>s).join(",")}function yo(e){return[e.color,e.role,e.scale].filter(n=>n).join(",")}function Po(e){return""+(e.lineWidth||"")}function ko(e){let n=0;for(let o=0;o<e.length;o++)n=(n<<5)-n+e.charCodeAt(o)>>>0;return"custom-"+n.toString()}function Se(e,{shape:n,current:o,hash:r},t,i,c){let l;const d=Me(b(n.orig),e.orientation);if(n.customSvg)l=Co(n.customSvg,d,c);else if(n.dest){let s=t[n.brush];n.modifiers&&(s=nn(s,n.modifiers)),l=Mo(s,d,Me(b(n.dest),e.orientation),o,(i.get(n.dest)||0)>1,c)}else l=So(t[n.brush],d,o,c);return l.setAttribute("cgHash",r),l}function Co(e,n,o){const[r,t]=$(n,o),i=H(T("g"),{transform:`translate(${r},${t})`}),c=H(T("svg"),{width:1,height:1,viewBox:"0 0 100 100"});return i.appendChild(c),c.innerHTML=e,i}function So(e,n,o,r){const t=$(n,r),i=Ao(),c=(r.width+r.height)/(4*Math.max(r.width,r.height));return H(T("circle"),{stroke:e.color,"stroke-width":i[o?0:1],fill:"none",opacity:on(e,o),cx:t[0],cy:t[1],r:c-i[1]/2})}function Mo(e,n,o,r,t,i){const c=Oo(t&&!r),l=$(n,i),d=$(o,i),s=d[0]-l[0],h=d[1]-l[1],u=Math.atan2(h,s),w=Math.cos(u)*c,S=Math.sin(u)*c;return H(T("line"),{stroke:e.color,"stroke-width":Do(e,r),"stroke-linecap":"round","marker-end":"url(#arrowhead-"+e.key+")",opacity:on(e,r),x1:l[0],y1:l[1],x2:d[0]-w,y2:d[1]-S})}function xo(e){const n=H(T("marker"),{id:"arrowhead-"+e.key,orient:"auto",markerWidth:4,markerHeight:8,refX:2.05,refY:2.01});return n.appendChild(H(T("path"),{d:"M0,0 V4 L3,2 Z",fill:e.color})),n.setAttribute("cgKey",e.key),n}function H(e,n){for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.setAttribute(o,n[o]);return e}function Me(e,n){return n==="white"?e:[7-e[0],7-e[1]]}function nn(e,n){return{color:e.color,opacity:Math.round(e.opacity*10)/10,lineWidth:Math.round(n.lineWidth||e.lineWidth),key:[e.key,n.lineWidth].filter(o=>o).join("")}}function Ao(){return[3/64,4/64]}function Do(e,n){return(e.lineWidth||10)*(n?.85:1)/64}function on(e,n){return(e.opacity||1)*(n?.9:1)}function Oo(e){return(e?20:10)/64}function $(e,n){const o=Math.min(1,n.width/n.height),r=Math.min(1,n.height/n.width);return[(e[0]-3.5)*o,(3.5-e[1])*r]}function To(e,n){e.innerHTML="",e.classList.add("cg-wrap");for(const d of On)e.classList.toggle("orientation-"+d,n.orientation===d);e.classList.toggle("manipulable",!n.viewOnly);const o=N("cg-container");e.appendChild(o);const r=N("cg-board");o.appendChild(r);let t,i,c;if(n.drawable.visible&&(t=H(T("svg"),{class:"cg-shapes",viewBox:"-4 -4 8 8",preserveAspectRatio:"xMidYMid slice"}),t.appendChild(T("defs")),t.appendChild(T("g")),i=H(T("svg"),{class:"cg-custom-svgs",viewBox:"-3.5 -3.5 8 8",preserveAspectRatio:"xMidYMid slice"}),i.appendChild(T("g")),c=N("cg-auto-pieces"),o.appendChild(t),o.appendChild(i),o.appendChild(c)),n.coordinates){const d=n.orientation==="black"?" black":"",s=n.ranksPosition==="left"?" left":"";o.appendChild(xe(le,"ranks"+d+s)),o.appendChild(xe(ce,"files"+d))}let l;return n.draggable.enabled&&n.draggable.showGhost&&(l=N("piece","ghost"),de(l,!1),o.appendChild(l)),{board:r,container:o,wrap:e,ghost:l,svg:t,customSvg:i,autoPieces:c}}function xe(e,n){const o=N("coords",n);let r;for(const t of e)r=N("coord"),r.textContent=t,o.appendChild(r);return o}function _o(e,n){if(!e.dropmode.active)return;L(e),R(e);const o=e.dropmode.piece;if(o){e.pieces.set("a0",o);const r=V(n),t=r&&F(r,C(e),e.dom.bounds());t&&ze(e,"a0",t)}e.dom.redraw()}function qo(e,n){const o=e.dom.elements.board;if("ResizeObserver"in window&&new ResizeObserver(n).observe(e.dom.elements.wrap),(e.disableContextMenu||e.drawable.enabled)&&o.addEventListener("contextmenu",t=>t.preventDefault()),e.viewOnly)return;const r=Ko(e);o.addEventListener("touchstart",r,{passive:!1}),o.addEventListener("mousedown",r,{passive:!1})}function No(e,n){const o=[];if("ResizeObserver"in window||o.push(G(document.body,"chessground.resize",n)),!e.viewOnly){const r=Ae(e,po,to),t=Ae(e,go,io);for(const c of["touchmove","mousemove"])o.push(G(document,c,r));for(const c of["touchend","mouseup"])o.push(G(document,c,t));const i=()=>e.dom.bounds.clear();o.push(G(document,"scroll",i,{capture:!0,passive:!0})),o.push(G(window,"resize",i,{passive:!0}))}return()=>o.forEach(r=>r())}function G(e,n,o,r){return e.addEventListener(n,o,r),()=>e.removeEventListener(n,o,r)}const Ko=e=>n=>{e.draggable.current?J(e):e.drawable.current?Qe(e):n.shiftKey||qe(n)?e.drawable.enabled&&ro(e,n):e.viewOnly||(e.dropmode.active?_o(e,n):ao(e,n))},Ae=(e,n,o)=>r=>{e.drawable.current?e.drawable.enabled&&o(e,r):e.viewOnly||n(e,r)};function Eo(e){const n=C(e),o=Q(e.dom.bounds()),r=e.dom.elements.board,t=e.pieces,i=e.animation.current,c=i?i.plan.anims:new Map,l=i?i.plan.fadings:new Map,d=e.draggable.current,s=Lo(e),h=new Set,u=new Set,w=new Map,S=new Map;let f,g,_,p,P,m,y,M,U,j;for(g=r.firstChild;g;){if(f=g.cgKey,rn(g))if(_=t.get(f),P=c.get(f),m=l.get(f),p=g.cgPiece,g.cgDragging&&(!d||d.orig!==f)&&(g.classList.remove("dragging"),q(g,o(b(f),n)),g.cgDragging=!1),!m&&g.cgFading&&(g.cgFading=!1,g.classList.remove("fading")),_){if(P&&g.cgAnimating&&p===X(_)){const v=b(f);v[0]+=P[2],v[1]+=P[3],g.classList.add("anim"),q(g,o(v,n))}else g.cgAnimating&&(g.cgAnimating=!1,g.classList.remove("anim"),q(g,o(b(f),n)),e.addPieceZIndex&&(g.style.zIndex=ne(b(f),n)));p===X(_)&&(!m||!g.cgFading)?h.add(f):m&&p===X(m)?(g.classList.add("fading"),g.cgFading=!0):oe(w,p,g)}else oe(w,p,g);else if(tn(g)){const v=g.className;s.get(f)===v?u.add(f):oe(S,v,g)}g=g.nextSibling}for(const[v,I]of s)if(!u.has(v)){U=S.get(I),j=U&&U.pop();const x=o(b(v),n);if(j)j.cgKey=v,q(j,x);else{const A=N("square",I);A.cgKey=v,q(A,x),r.insertBefore(A,r.firstChild)}}for(const[v,I]of t)if(P=c.get(v),!h.has(v))if(y=w.get(X(I)),M=y&&y.pop(),M){M.cgKey=v,M.cgFading&&(M.classList.remove("fading"),M.cgFading=!1);const x=b(v);e.addPieceZIndex&&(M.style.zIndex=ne(x,n)),P&&(M.cgAnimating=!0,M.classList.add("anim"),x[0]+=P[2],x[1]+=P[3]),q(M,o(x,n))}else{const x=X(I),A=N("piece",x),Z=b(v);A.cgPiece=x,A.cgKey=v,P&&(A.cgAnimating=!0,Z[0]+=P[2],Z[1]+=P[3]),q(A,o(Z,n)),e.addPieceZIndex&&(A.style.zIndex=ne(Z,n)),r.appendChild(A)}for(const v of w.values())Oe(e,v);for(const v of S.values())Oe(e,v)}function Ho(e){const n=C(e),o=Q(e.dom.bounds());let r=e.dom.elements.board.firstChild;for(;r;)(rn(r)&&!r.cgAnimating||tn(r))&&q(r,o(b(r.cgKey),n)),r=r.nextSibling}function De(e){var n,o;const r=e.dom.elements.wrap.getBoundingClientRect(),t=e.dom.elements.container,i=r.height/r.width,c=Math.floor(r.width*window.devicePixelRatio/8)*8/window.devicePixelRatio,l=c*i;t.style.width=c+"px",t.style.height=l+"px",e.dom.bounds.clear(),(n=e.addDimensionsCssVarsTo)===null||n===void 0||n.style.setProperty("--cg-width",c+"px"),(o=e.addDimensionsCssVarsTo)===null||o===void 0||o.style.setProperty("--cg-height",l+"px")}const rn=e=>e.tagName==="PIECE",tn=e=>e.tagName==="SQUARE";function Oe(e,n){for(const o of n)e.dom.elements.board.removeChild(o)}function ne(e,n){const r=e[1];return`${n?3+7-r:3+r}`}const X=e=>`${e.color} ${e.role}`;function Lo(e){var n;const o=new Map;if(e.lastMove&&e.highlight.lastMove)for(const i of e.lastMove)K(o,i,"last-move");if(e.check&&e.highlight.check&&K(o,e.check,"check"),e.selected&&(K(o,e.selected,"selected"),e.movable.showDests)){const i=(n=e.movable.dests)===null||n===void 0?void 0:n.get(e.selected);if(i)for(const l of i)K(o,l,"move-dest"+(e.pieces.has(l)?" oc":""));const c=e.premovable.dests;if(c)for(const l of c)K(o,l,"premove-dest"+(e.pieces.has(l)?" oc":""))}const r=e.premovable.current;if(r)for(const i of r)K(o,i,"current-premove");else e.predroppable.current&&K(o,e.predroppable.current.key,"current-premove");const t=e.exploding;if(t)for(const i of t.keys)K(o,i,"exploding"+t.stage);return o}function K(e,n,o){const r=e.get(n);r?e.set(n,`${r} ${o}`):e.set(n,o)}function oe(e,n,o){const r=e.get(n);r?r.push(o):e.set(n,[o])}function Ro(e,n){const r=e.drawable.autoShapes.filter(t=>t.piece).map(t=>({shape:t,hash:Bo(t),current:!1}));ie(r,n,t=>Wo(e,t,e.dom.bounds()))}function Io(e){var n;const o=C(e),r=Q(e.dom.bounds());let t=(n=e.dom.elements.autoPieces)===null||n===void 0?void 0:n.firstChild;for(;t;)_e(t,r(b(t.cgKey),o),t.cgScale),t=t.nextSibling}function Wo(e,{shape:n,hash:o},r){var t,i,c;const l=n.orig,d=(t=n.piece)===null||t===void 0?void 0:t.role,s=(i=n.piece)===null||i===void 0?void 0:i.color,h=(c=n.piece)===null||c===void 0?void 0:c.scale,u=N("piece",`${d} ${s}`);return u.setAttribute("cgHash",o),u.cgKey=l,u.cgScale=h,_e(u,Q(r)(b(l),C(e)),h),u}const Bo=e=>{var n,o,r;return[e.orig,(n=e.piece)===null||n===void 0?void 0:n.role,(o=e.piece)===null||o===void 0?void 0:o.color,(r=e.piece)===null||r===void 0?void 0:r.scale].join(",")};function zo(e,n){const o=vo();Ge(o,n||{});function r(){const t="dom"in o?o.dom.unbind:void 0,i=To(e,o),c=_n(()=>i.board.getBoundingClientRect()),l=h=>{Eo(s),i.autoPieces&&Ro(s,i.autoPieces),!h&&i.svg&&bo(s,i.svg,i.customSvg)},d=()=>{De(s),Ho(s),i.autoPieces&&Io(s)},s=o;return s.dom={elements:i,bounds:c,redraw:Vo(l),redrawNow:l,unbind:t},s.drawable.prevSvgHash="",De(s),l(!1),qo(s,d),t||(s.dom.unbind=No(s,d)),s.events.insert&&s.events.insert(i),s}return mo(r(),r)}function Vo(e){let n=!1;return()=>{n||(n=!0,requestAnimationFrame(()=>{e(),n=!1}))}}function Fo(e){let n,o;return{c(){n=Cn("div"),this.h()},l(r){n=Sn(r,"DIV",{class:!0}),Mn(n).forEach(ve),this.h()},h(){be(n,"class",o="cg-wrap "+e[0]+" svelte-nbdzop")},m(r,t){xn(r,n,t),e[36](n)},p(r,t){t[0]&1&&o!==(o="cg-wrap "+r[0]+" svelte-nbdzop")&&be(n,"class",o)},i:we,o:we,d(r){r&&ve(n),e[36](null)}}}function jo(e,n,o){let{className:r="cg-default-style"}=n,{fen:t=void 0}=n,{orientation:i=void 0}=n,{turnColor:c=void 0}=n,{check:l=void 0}=n,{lastMove:d=void 0}=n,{selected:s=void 0}=n,{coordinates:h=void 0}=n,{autoCastle:u=void 0}=n,{viewOnly:w=void 0}=n,{disableContextMenu:S=void 0}=n,{addPieceZIndex:f=void 0}=n,{addDimensionsCssVarsTo:g=void 0}=n,{blockTouchScroll:_=void 0}=n,{config:p={}}=n,P,m;An(async()=>{i!==void 0&&o(2,p.orientation=i,p),t!==void 0&&o(2,p.fen=t,p),c!==void 0&&o(2,p.turnColor=c,p),l!==void 0&&o(2,p.check=l,p),d!==void 0&&o(2,p.lastMove=d,p),s!==void 0&&o(2,p.selected=s,p),h!==void 0&&o(2,p.coordinates=h,p),u!==void 0&&o(2,p.autoCastle=u,p),w!==void 0&&o(2,p.viewOnly=w,p),S!==void 0&&o(2,p.disableContextMenu=S,p),f!==void 0&&o(2,p.addPieceZIndex=f,p),g!==void 0&&o(2,p.addDimensionsCssVarsTo=g,p),_!==void 0&&o(2,p.blockTouchScroll=_,p),m=zo(P,p)});function y(a){m&&m.set(a)}function M(a){m.set(a)}function U(){return m.state}function j(){return m.getFen()}function v(){return m.toggleOrientation()}function I(a,W){return m.move(a,W)}function x(a){return m.setPieces(a)}function A(a,W){return m.selectSquare(a,W)}function Z(a,W){return m.newPiece(a,W)}function cn(){return m.playPremove()}function ln(){m.cancelPremove()}function sn(a){return m.playPredrop(a)}function an(){m.cancelPredrop()}function dn(){m.cancelMove()}function un(){m.stop()}function fn(a){m.explode(a)}function pn(a){m.setShapes(a)}function gn(a){m.setAutoShapes(a)}function hn(){return m.redrawAll()}function mn(a,W,wn){m.dragNewPiece(a,W,wn)}function vn(){return m.destroy()}function bn(a){Dn[a?"unshift":"push"](()=>{P=a,o(1,P)})}return e.$$set=a=>{"className"in a&&o(0,r=a.className),"fen"in a&&o(3,t=a.fen),"orientation"in a&&o(4,i=a.orientation),"turnColor"in a&&o(5,c=a.turnColor),"check"in a&&o(6,l=a.check),"lastMove"in a&&o(7,d=a.lastMove),"selected"in a&&o(8,s=a.selected),"coordinates"in a&&o(9,h=a.coordinates),"autoCastle"in a&&o(10,u=a.autoCastle),"viewOnly"in a&&o(11,w=a.viewOnly),"disableContextMenu"in a&&o(12,S=a.disableContextMenu),"addPieceZIndex"in a&&o(13,f=a.addPieceZIndex),"addDimensionsCssVarsTo"in a&&o(14,g=a.addDimensionsCssVarsTo),"blockTouchScroll"in a&&o(15,_=a.blockTouchScroll),"config"in a&&o(2,p=a.config)},e.$$.update=()=>{e.$$.dirty[0]&8&&y({fen:t}),e.$$.dirty[0]&16&&y({orientation:i}),e.$$.dirty[0]&32&&y({turnColor:c}),e.$$.dirty[0]&64&&y({check:l}),e.$$.dirty[0]&128&&y({lastMove:d}),e.$$.dirty[0]&256&&y({selected:s}),e.$$.dirty[0]&512&&y({coordinates:h}),e.$$.dirty[0]&1024&&y({autoCastle:u}),e.$$.dirty[0]&2048&&y({viewOnly:w}),e.$$.dirty[0]&4096&&y({disableContextMenu:S}),e.$$.dirty[0]&8192&&y({addPieceZIndex:f}),e.$$.dirty[0]&16384&&y({addDimensionsCssVarsTo:g}),e.$$.dirty[0]&32768&&y({blockTouchScroll:_}),e.$$.dirty[0]&4&&y(p)},[r,P,p,t,i,c,l,d,s,h,u,w,S,f,g,_,M,U,j,v,I,x,A,Z,cn,ln,sn,an,dn,un,fn,pn,gn,hn,mn,vn,bn]}class Uo extends yn{constructor(n){super(),Pn(this,n,jo,Fo,kn,{className:0,fen:3,orientation:4,turnColor:5,check:6,lastMove:7,selected:8,coordinates:9,autoCastle:10,viewOnly:11,disableContextMenu:12,addPieceZIndex:13,addDimensionsCssVarsTo:14,blockTouchScroll:15,config:2,set:16,getState:17,getFen:18,toggleOrientation:19,move:20,setPieces:21,selectSquare:22,newPiece:23,playPremove:24,cancelPremove:25,playPredrop:26,cancelPredrop:27,cancelMove:28,stop:29,explode:30,setShapes:31,setAutoShapes:32,redrawAll:33,dragNewPiece:34,destroy:35},null,[-1,-1])}get set(){return this.$$.ctx[16]}get getState(){return this.$$.ctx[17]}get getFen(){return this.$$.ctx[18]}get toggleOrientation(){return this.$$.ctx[19]}get move(){return this.$$.ctx[20]}get setPieces(){return this.$$.ctx[21]}get selectSquare(){return this.$$.ctx[22]}get newPiece(){return this.$$.ctx[23]}get playPremove(){return this.$$.ctx[24]}get cancelPremove(){return this.$$.ctx[25]}get playPredrop(){return this.$$.ctx[26]}get cancelPredrop(){return this.$$.ctx[27]}get cancelMove(){return this.$$.ctx[28]}get stop(){return this.$$.ctx[29]}get explode(){return this.$$.ctx[30]}get setShapes(){return this.$$.ctx[31]}get setAutoShapes(){return this.$$.ctx[32]}get redrawAll(){return this.$$.ctx[33]}get dragNewPiece(){return this.$$.ctx[34]}get destroy(){return this.$$.ctx[35]}}export{Uo as C};
