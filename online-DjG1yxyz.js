import{p as t}from"./index-CfqrayXh.js";const e=hook.define({name:"Online Resource",description:"Provides online resource",contents:[{type:"command",meta:["/a",async function(e){const r=e||a("请输入资源URL");if(""===r||null==r)return void c("未输入URL，已取消操作");const h=await async function(e=""){const r=s(`${e}/`);n("等待服务器响应...");const a=[],i=new TextEncoder,h=await fetch(new URL("info.csv",r));if(!h.ok)throw new Error(`${h.status} ${h.statusText}`);{const e=await h.text(),n=t(e);for(const t of n)t.Chart&&a.push(new URL(t.Chart,r)),t.Music&&a.push(new URL(t.Music,r)),t.Image&&a.push(new URL(t.Image,r));const s=i.encode(e);o.fireLoad({name:"info.csv"},s.buffer)}const d=await fetch(new URL("line.csv",r));if(d.ok){const e=await d.text(),n=t(e);for(const t of n)t.Chart&&a.push(new URL(t.Chart,r)),t.Image&&a.push(new URL(t.Image,r));const s=i.encode(e);o.fireLoad({name:"line.csv"},s.buffer)}const f=new u;await f.add(a,(({url:t,status:e,statusText:n})=>{c(`资源 '${t}' 加载失败\n错误代码：${e} ${n}`)})),await f.start(o.fireProgress.bind(o));const l=t=>decodeURIComponent(t.match(/[^/]+$/)[0]);for(const t of a){const e=await f.getData(t)||new ArrayBuffer(0);o.fireLoad({name:l(t.toString())},e)}}(r).catch(i);console.log(h)}]}]}),{sendText:n,uploader:o}=hook,r=atob("aHR0cHM6Ly9iay0xMzAyMTcxMzY0LmNvcy5hcC1zaGFuZ2hhaS5teXFjbG91ZC5jb20v"),s=(t="")=>new URL(t,r).href,a=t=>prompt(`${t}`),c=t=>hook.toast(`${t}`),i=t=>{c(`无法连接至服务器\n错误代码：${t.message}`),n("无法连接至服务器")};function u(){this.xhrs=Object.create(null)}u.prototype.add=function(t=[],e=t=>{}){return Promise.all(t.filter((t=>!this.xhrs[t])).map((async t=>{try{const e=await async function(t){try{const e=await fetch(t,{method:"HEAD"}).catch((()=>{throw Object.assign(new Error,{url:t,status:0,statusText:"Network Error"})})),n=e.headers.get("content-length");if(null==n)throw new Error("No Content-Length Header");if(e.ok)return Number(n)}catch{const e=await fetch(t,{method:"GET"}).catch((()=>{throw Object.assign(new Error,{url:t,status:0,statusText:"Network Error"})}));if(e.body.cancel(),!e.ok)throw Object.assign(new Error,{url:t,status:e.status,statusText:e.statusText});return Number(e.headers.get("content-length"))||0}throw Object.assign(new Error,{url:t,status:0,statusText:"Unknown Error"})}(t);this.xhrs[t]={event:{loaded:0,total:e}}}catch(t){e(t)}})))},u.prototype.start=function(t=(...t)=>{}){const e=Object.entries(this.xhrs);return Promise.all(e.map((([e,n])=>function(t,e=t=>{}){return new Promise(((n,o)=>{const r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onprogress=e,r.onload=t=>(200===r.status?n:o)(t),r.onerror=o,r.send()}))}(e,(e=>{n.event=e,t(this.loaded,this.total)})).then((t=>n.event=t)).catch((t=>n.event=t)))))},u.prototype.getData=function(t){if(!this.xhrs[t])return null;const{event:e}=this.xhrs[t];return e.loaded>=e.total?e.target.response:null},Object.defineProperty(u.prototype,"loaded",{get(){return Object.values(this.xhrs).reduce(((t,e)=>t+e.event.loaded),0)}}),Object.defineProperty(u.prototype,"total",{get(){return Object.values(this.xhrs).reduce(((t,e)=>t+Math.max(e.event.loaded,e.event.total)),0)}});export{e as default};
//# sourceMappingURL=online-DjG1yxyz.js.map
