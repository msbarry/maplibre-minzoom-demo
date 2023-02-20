import{j as p,r as l,i as y,c as g,R as x}from"./vendor.b04f3342.js";import{g as h,l as m}from"./data.91d30518.js";import{m as v}from"./vendor-maplibre.c3bb1842.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=p.exports.jsx;function b(o,r,a,n){const e=l.exports.useRef(!0);l.exports.useEffect(()=>{if(!(!o||!r)){if(e.current){e.current=!1;return}n(o)}},[r,...a])}const M=Object.freeze({mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel",movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd",wheel:"onWheel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"});function R(o,r){var a;if(Object.keys(o.sources).length!==Object.keys(r.sources).length)return!1;for(const[n,e]of Object.entries(o.sources))if(((a=r.sources[n])==null?void 0:a.type)!==(e==null?void 0:e.type)||"data"in(r.sources[n]||{})!="data"in(e||{}))return!1;return!0}function S(o){const[r,a]=l.exports.useState(!1),n=l.exports.useRef(null),e=l.exports.useRef();b(e.current,r,[o.style],t=>{const s=t.getStyle();if(R(s,o.style)){t.setStyle(o.style,{diff:!0,ignoreSources:!0});for(const[c,u]of Object.entries(s.sources)){const i=o.style.sources[c];y(i==null?void 0:i.data,u==null?void 0:u.data)||(console.log("set data for ",c),t.getSource(c).setData(i.data))}}else t.setStyle(o.style,{diff:!0})}),l.exports.useEffect(()=>{if(!n.current)return;const t=e.current=new v.Map({container:n.current,style:o.style,center:[0,0],zoom:0,pitch:0,renderWorldCopies:!1,maxBounds:[-179,-85,179,85],minZoom:-2,localIdeographFontFamily:"sans-serif",fadeDuration:0,dragRotate:!1,pitchWithRotate:!1,hash:!0,boxZoom:!1});return t.keyboard.disableRotation(),t.touchPitch.disable(),t.touchZoomRotate.disableRotation(),window.map=t,t.once("load",s=>{a(!0),o.onLoad&&o.onLoad(s,t)}),()=>{t.remove(),e.current=void 0}},[]);for(const[t,s]of Object.entries(M)){const c=o[s];l.exports.useEffect(()=>{var u;if(c&&r&&e.current){const i=f=>c(f,e.current);return(u=e.current)==null||u.on(t,i),()=>{var f;(f=e.current)==null||f.off(t,i)}}},[c,r])}return d("div",{ref:n,className:"Map"})}h.features.forEach(o=>delete(o.properties||{}).minzoom);function E(){let o=["interpolate",["exponential",1.5],["zoom"],0,["*",["get","__size"],Math.round(7.692307692307692)/10],8,["*",5,["get","__size"]]];return d("div",{className:"CitiesApp",children:d(S,{style:{version:8,glyphs:"./fonts/{fontstack}/{range}.pbf",sources:{vector:{type:"geojson",data:h,attribution:'<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}},layers:[{id:"circle",type:"circle",source:"vector",paint:{"circle-color":["get","__color"],"circle-radius":o}},{id:"text",type:"symbol",source:"vector",paint:{"text-color":"white","text-halo-blur":.5,"text-halo-width":2,"text-halo-color":"black","text-translate":[0,-3]},layout:{...m,"text-ignore-placement":!1,"text-allow-overlap":!1,"text-field":[...m["text-field"]],"text-font":[...m["text-font"]],"symbol-sort-key":["to-number",["get","__id"]],"text-variable-anchor":["bottom"],"text-justify":"center"}}],transition:{delay:0,duration:0}}})})}const O=E;g.createRoot(document.getElementById("root")).render(d(x.StrictMode,{children:d(O,{})}));
