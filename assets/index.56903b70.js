var ye=Object.defineProperty;var Fe=(r,t,e)=>t in r?ye(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var k=(r,t,e)=>(Fe(r,typeof t!="symbol"?t+"":t,e),e);import{S as Ne,i as Le,s as xe,e as u,a as m,t as g,b as o,c as h,d as M,f as l,g as Me,l as O,h as C,n as Ce,j as S,r as Ie,k as We}from"./vendor.1689db96.js";const Oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};Oe();var Pe=[{w:[[.06472653134324487,.24052780695028847,.5074800682070466],[.8830150486169419,.6055264194712744,.3290083039180706],[.2545931471620847,-.21037152883651347,.5370121220841767],[.6656469623134639,-.3949276795919982,-.8208000433791534],[.39992163870850417,.653228404722373,-.5715734539067456]],n:3,m:5,b:0},{w:[[-.40529106810221743,.7430179378735793,-.3326259200679728,.9503125995966389,.403280066595561],[.4635138346168798,.4798251601138959,.23499469752004315,.2194322245757559,.30397282886008997],[.3972481280812779,.16315794517594176,.029088085284761526,.5162368361916647,-.2809804435671981],[-.4745250996240592,.25467621735060486,-.344625667063312,.3644619646655485,.1306684424208839],[.261457049329498,.018499611240663204,.18397154224293757,.11451693158689587,.22198361861855528]],n:5,m:5,b:0},{w:[[1.1623528878455691,.09153464580635114,-.0910972359632524,.5675337234508308,.06349177618788526]],n:5,m:1,b:0}];class je{constructor(t=10,e=1){k(this,"gravity");k(this,"wind",{current:0,max:0,acceletation:0});k(this,"car",{position:0,speed:0,acceleration:0});k(this,"pole",{angle:0,speed:0});k(this,"dead",!1);this.gravity=t,this.wind.max=e,this.init()}init(){this.car={position:0,speed:0,acceleration:0},this.pole={angle:5,speed:0},this.wind.current=0,this.wind.acceletation=0,this.dead=!1}frame(){this.dead||(this.car.speed+=this.car.acceleration,this.wind.acceletation=-(Math.random()-.5),this.wind.current+=this.wind.acceletation,this.wind.current>this.wind.max?this.wind.current=this.wind.max:this.wind.current<-this.wind.max&&(this.wind.current=-this.wind.max),this.pole.speed+=this.wind.current+Math.sin(this.pole.angle/180*Math.PI)*this.gravity-this.car.speed,this.pole.angle+=this.pole.speed,this.car.position+=this.car.speed,(this.pole.angle>100||this.pole.angle<-100||this.car.position<-100||this.car.position>100)&&(this.dead=!0))}move(t=0){return this.car.acceleration=t,this.frame(),{angle:this.pole.angle,pos:this.car.position,speed:this.car.speed,dead:this.dead,wind:this.wind.current}}}class Se{constructor(t=[3,5,5,1],e=9.8,a=1){k(this,"layerCnts");k(this,"model");k(this,"car");k(this,"cSatus");this.car=new je(e,a),this.layerCnts=t,this.model=this.layerCnts.map((i,s)=>({w:this.generate_Weight(i,t[s+1]),n:t[s],m:t[s+1],b:0})).filter(i=>i.m)}generate_Weight(t=this.layerCnts[0],e=this.layerCnts[1],a=.5){let i=[];for(let s=0;s<e;s++){let c=[];for(let p=0;p<t;p++)c.push(Math.random()-.5);i.push(c)}return i}adj_Weight(t=this.model,e=50){return t.map(a=>({w:a.w.map(i=>i.map(s=>s+Math.random()/e-.5/e)),n:a.n,m:a.m,b:0}))}loadModle(t){this.model=t}progress(t,e,a){return e.map(i=>i.reduce((s,c,p)=>s+c*t[p],a))}forecast(t=[],e=this.model){return e.reduce((a,i)=>this.progress(a,i.w,i.b),t)}aggregate(t,e=100,a=6e3){let i=0;for(let s=0;s<e;s++){let c=0;for(this.car.init(),this.cSatus=this.car.move(0);!this.cSatus.dead;){let p=this.forecast([this.cSatus.angle,this.cSatus.speed,this.cSatus.pos],t);this.cSatus=this.car.move(p[0]),++c}i+=c}return{time:i/e,network:t}}test(t=this.model,e){this.car.init();let a=[],i=this.aggregate(t);for(let c=0;c<30;c++){this.car.init();let p=this.adj_Weight(t);a.push(this.aggregate(p))}let s=a.reduce((c,p)=>p.time>=c.time?p:c,i);return e%10==0&&console.log(e,s.time),s.network}}function qe(r){let t,e,a,i,s,c,p,F,_,A,w,x,B,I=r[0].dead?"dead":"live",N,re,G,ae,y,J,f,P,oe,j,de,W,pe,Q,ce,q,ue,H,fe,b,U,he,v,me,V,ge,K=r[0].angle.toFixed(2)+"",X,we,R=r[0].pos.toFixed(2)+"",Y,ve,T=r[0].speed.toFixed(2)+"",Z,be,z=r[0].dead+"",$,_e,D=r[0].wind.toFixed(2)+"",ee,te,ie,le,E,se,L,ne,ke;return{c(){t=u("div"),e=u("div"),a=u("div"),a.textContent="demonstrate of cartpole control by genetic algerithm 2.0",i=m(),s=u("div"),c=m(),p=u("div"),F=m(),_=u("div"),A=m(),w=u("div"),x=u("span"),B=m(),N=g(I),re=m(),G=u("span"),ae=m(),y=u("div"),J=m(),f=u("div"),P=u("button"),P.textContent="left",oe=m(),j=u("button"),j.textContent="right",de=m(),W=u("button"),pe=g("NN:"),Q=g(r[4]),ce=m(),q=u("button"),q.textContent="init",ue=m(),H=u("label"),H.textContent="maxwind:",fe=m(),b=u("input"),U=g(r[2]),he=m(),v=u("p"),me=g("score:"),V=g(r[1]),ge=g(" ang:"),X=g(K),we=g(`,
        pos:`),Y=g(R),ve=g(`,
        speed:`),Z=g(T),be=g(`,
        dead:`),$=g(z),_e=g(",wind:"),ee=g(D),te=m(),ie=u("br"),le=m(),E=u("dir"),E.innerHTML=`<li>car.speed += car.acceleration;</li> 
    <li>wind.acceletation = -(Math.random()-0.5)</li> 
    <li>wind.acceletation = -(Math.random()-0.5)</li> 
    <li>wind.speed+=this.wind.acceletation</li> 
    <li>let |wind.speed| less then wind.max)</li> 
    <li>pole.speed += wind.current + sin(pole.angle/180*Math.PI)*gravity - car.speed</li> 
    <li>pole.angle += pole.speed</li> 
    <li>car.position += this.car.speed</li>`,se=m(),L=u("div"),L.textContent="by gene lin@2022/04/01",o(a,"margin-right","100px"),o(s,"width",(r[0].wind>0?r[0].wind*100:0)+"px"),o(s,"height","10px"),o(s,"background","green"),h(p,"class","arrow svelte-nw3gaf"),o(p,"border-left",(r[0].wind>0?20:0)+"px solid green"),o(p,"border-right",(r[0].wind<0?20:0)+"px solid green"),o(_,"width",(r[0].wind<0?-r[0].wind*100:0)+"px"),o(_,"height","10px"),o(_,"background","green"),o(e,"display","flex"),o(e,"align-items","center"),h(x,"class","wheel svelte-nw3gaf"),o(x,"left","2px"),h(G,"class","wheel svelte-nw3gaf"),o(G,"right","2px"),h(w,"class","car svelte-nw3gaf"),o(w,"left",r[0].pos*5+500+"px"),o(w,"background-color",r[0].dead?"red":"yellow"),h(y,"class","pole svelte-nw3gaf"),o(y,"transform","rotate("+r[0].angle+"deg)"),o(y,"bottom","25px"),o(y,"left",r[0].pos*5+545+"px"),h(t,"class","container svelte-nw3gaf"),h(P,"class","svelte-nw3gaf"),h(j,"class","svelte-nw3gaf"),h(W,"class","svelte-nw3gaf"),h(q,"class","svelte-nw3gaf"),h(H,"for",""),h(b,"type","range"),h(b,"min","0"),h(b,"max","10"),h(b,"step","0.5"),h(b,"class","svelte-nw3gaf"),h(f,"class","container svelte-nw3gaf"),o(f,"background","lightblue"),o(f,"height","80px"),h(E,"class","container svelte-nw3gaf"),o(L,"position","absolute"),o(L,"bottom","10px"),o(L,"right","20px")},m(n,d){M(n,t,d),l(t,e),l(e,a),l(e,i),l(e,s),l(e,c),l(e,p),l(e,F),l(e,_),l(t,A),l(t,w),l(w,x),l(w,B),l(w,N),l(w,re),l(w,G),l(t,ae),l(t,y),M(n,J,d),M(n,f,d),l(f,P),l(f,oe),l(f,j),l(f,de),l(f,W),l(W,pe),l(W,Q),l(f,ce),l(f,q),l(f,ue),l(f,H),l(f,fe),l(f,b),Me(b,r[2]),l(f,U),l(f,he),l(f,v),l(v,me),l(v,V),l(v,ge),l(v,X),l(v,we),l(v,Y),l(v,ve),l(v,Z),l(v,be),l(v,$),l(v,_e),l(v,ee),M(n,te,d),M(n,ie,d),M(n,le,d),M(n,E,d),M(n,se,d),M(n,L,d),ne||(ke=[O(P,"click",r[6]),O(j,"click",r[7]),O(W,"click",r[8]),O(q,"click",r[9]),O(b,"change",r[10]),O(b,"input",r[10])],ne=!0)},p(n,[d]){d&1&&o(s,"width",(n[0].wind>0?n[0].wind*100:0)+"px"),d&1&&o(p,"border-left",(n[0].wind>0?20:0)+"px solid green"),d&1&&o(p,"border-right",(n[0].wind<0?20:0)+"px solid green"),d&1&&o(_,"width",(n[0].wind<0?-n[0].wind*100:0)+"px"),d&1&&I!==(I=n[0].dead?"dead":"live")&&C(N,I),d&1&&o(w,"left",n[0].pos*5+500+"px"),d&1&&o(w,"background-color",n[0].dead?"red":"yellow"),d&1&&o(y,"transform","rotate("+n[0].angle+"deg)"),d&1&&o(y,"left",n[0].pos*5+545+"px"),d&16&&C(Q,n[4]),d&4&&Me(b,n[2]),d&4&&C(U,n[2]),d&2&&C(V,n[1]),d&1&&K!==(K=n[0].angle.toFixed(2)+"")&&C(X,K),d&1&&R!==(R=n[0].pos.toFixed(2)+"")&&C(Y,R),d&1&&T!==(T=n[0].speed.toFixed(2)+"")&&C(Z,T),d&1&&z!==(z=n[0].dead+"")&&C($,z),d&1&&D!==(D=n[0].wind.toFixed(2)+"")&&C(ee,D)},i:Ce,o:Ce,d(n){n&&S(t),n&&S(J),n&&S(f),n&&S(te),n&&S(ie),n&&S(le),n&&S(E),n&&S(se),n&&S(L),ne=!1,Ie(ke)}}}let Ee=200;function Ae(r,t,e){let a={angle:0,pos:450,speed:0,dead:!1,wind:0},i=0,s=1,c=new Se([3,5,5,5,1],9.8,s),p=c.car,F=!0;setInterval(()=>{a.dead||(F?e(0,a=p.move(c.forecast([a.angle,a.pos,a.speed])[0])):e(0,a=p.move(0)),e(1,i++,i))},Ee);function _(){c=new Se([3,5,5,5,1],9.8,s),c.loadModle(Pe),e(3,p=c.car),e(0,a=p.move(0)),e(1,i=0)}_();const A=N=>{e(0,a=p.move(-1)),e(1,i++,i)},w=N=>{e(0,a=p.move(1)),e(1,i++,i)},x=N=>{e(4,F=!F)},B=N=>{_()};function I(){s=We(this.value),e(2,s)}return[a,i,s,p,F,_,A,w,x,B,I]}class Be extends Ne{constructor(t){super();Le(this,t,Ae,qe,xe,{})}}new Be({target:document.getElementById("app")});
