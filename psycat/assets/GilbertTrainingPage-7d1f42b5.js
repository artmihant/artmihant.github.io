import{s as y,i as q,r as N,j as A,C as F,o as i,c as u,k as v,x as b,a as e,z as n,F as E,y as P,u as h,t as _,A as K,w as Q,f as g}from"./index-3e24f392.js";const V={class:"h-screen justify-center items-center flex flex-col flex-1 m-auto"},G={class:"relative"},H={class:"h-screen justify-center flex flex-col flex-1"},J={class:"h-screen justify-center items-center flex flex-col flex-1 m-auto"},O={class:"w-[550px]"},R=e("p",null,"Сейчас на экране появится 12 квадратов.",-1),U=e("p",null,"Цвет одного отличается от цвета остальных.",-1),W=e("p",null,[g("Нужно как можно быстрее определить, в какой части экрана (правой или левой). от центра расположен этот квадрат, "),e("br"),g("нажав клавишу "),e("b",null,"Q"),g(" (слева) или "),e("b",null,"P"),g(" (справа)")],-1),X={class:"text-center"},Y={class:"h-screen flex w-full justify-center"},Z=e("div",{class:"h-screen justify-center flex flex-col flex-0"},[e("h1",null," Приготовьтесь... "),e("p",null,"(нажмите любую клавишу)")],-1),$=[Z],ee={class:"h-screen flex w-full justify-center"},te={class:"h-screen justify-center flex flex-col flex-0"},le=e("h1",null," Итоговый счет ",-1),oe={class:"border border-neutral-700"},se=e("tr",null,[e("th",{class:"pr-3 border"}),e("th",{class:"pr-3 border text-center"},"направление"),e("th",{class:"pr-3 border text-center"},"позиция"),e("th",{class:"pr-3 border text-center"},"реакция")],-1),re={class:"pr-3 border"},ne={class:"pr-3 border text-center"},ce={class:"pr-3 border text-center"},ae={class:"pr-3 border text-center"},ie={class:"text-center"},de={class:"mt-3 text-center font-bold"},ue=e("button",{class:"rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"}," Начать тест ",-1),fe={__name:"GilbertTrainingPage",setup(he){const M=y(70),s=y(10);q("uid");const w=12,r={A:"#00ab81",B:"#00aa95",C:"#00aaaa",D:"#0095aa",N:"#b2b2b2",B:"#000000"},T=["#ff0000","#ff8f00","#d7ff00","#6bff00"],a=y("init");function L(l){return Math.floor(Math.random()*l)}const x=N([]);for(let l=0;l<w;l++)x.push({color:r.B});const C=[[0,1],[2,1],[2,3]],k=y(!1);let B=2,m=0,z=3;const f=N([]),D=A(()=>{let l=!0;return f.forEach(o=>{l=l&&o.correctly}),l});let I=()=>{let l=L(2),o=L(6),d=!0;o+=6*l;let t=C[Math.floor(m/B)][0],c=C[Math.floor(m/B)][1];return{target_color:t,ground_color:c,position:o,direction:l,correctly:d}},j=()=>{for(let l=0;l<w;l++)x[l].color=r.N;k.value=!1,a.value="play",document.removeEventListener("keyup",j),S()},p=()=>{for(document.removeEventListener("keyup",p),m=0;f.length>0;)f.pop();a.value="prepare",document.addEventListener("keyup",j)},S=()=>{m<B*z?setTimeout(()=>{k.value=!0,setTimeout(()=>{a.value="play";let l=Date.now(),o=I();f.push(o);for(let t=0;t<w;t++)x[t].color=T[t==o.position?o.target_color:o.ground_color];let d=t=>{let c;if(t.code=="KeyP")c=0;else if(t.code=="KeyQ")c=1;else return;document.removeEventListener("keydown",d),o&&(o.reaction_time=Date.now()-l,m+=1,o.correctly=c==o.direction),document.addEventListener("keyup",j)};document.addEventListener("keydown",d)},1e3)},250):(console.log("ura"),a.value="score")};return(l,o)=>{const d=F("router-link");return i(),u(E,null,[v(e("div",{class:"h-screen flex w-full justify-center",style:n({"background-color":r.N})},[e("div",V,[e("div",G,[v(e("div",{class:"text-center absolute",style:n([{color:"#222","line-height":"1"},{top:"-"+s.value/2+"mm",left:"-"+s.value/2+"mm"}])},[e("table",null,[e("tr",null,[e("td",{style:n({"border-bottom":"1px solid "+r.B,"border-right":"1px solid "+r.B})},[e("div",{style:n({width:s.value/2+"mm",height:s.value/2+"mm"})},null,4)],4),e("td",{style:n({"border-bottom":"1px solid "+r.B,"border-left":"1px solid "+r.B})},[e("div",{style:n({width:s.value/2+"mm",height:s.value/2+"mm"})},null,4)],4)]),e("tr",null,[e("td",{style:n({"border-top":"1px solid "+r.B,"border-right":"1px solid "+r.B})},[e("div",{style:n({width:s.value/2+"mm",height:s.value/2+"mm"})},null,4)],4),e("td",{style:n({"border-top":"1px solid "+r.B,"border-left":"1px solid "+r.B})},[e("div",{style:n({width:s.value/2+"mm",height:s.value/2+"mm"})},null,4)],4)])])],4),[[b,k.value]]),(i(!0),u(E,null,P(x,(t,c)=>(i(),u("div",{class:"absolute",style:n({width:s.value+"mm",height:s.value+"mm",top:-s.value/2+-M.value*Math.cos(Math.PI/6*(c+.5))+"mm",left:-s.value/2+M.value*Math.sin(Math.PI/6*(c+.5))+"mm","background-color":t.color})},null,4))),256))])])],4),[[b,a.value=="play"]]),v(e("div",H,[e("div",J,[e("div",O,[R,U,W,e("div",X,[e("button",{onClick:o[0]||(o[0]=(...t)=>h(p)&&h(p)(...t)),class:"rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"},"Начать тренировочный тест")])])])],512),[[b,a.value=="init"]]),v(e("div",Y,$,512),[[b,a.value=="prepare"]]),v(e("div",ee,[e("div",te,[le,e("table",oe,[se,(i(!0),u(E,null,P(f,(t,c)=>(i(),u("tr",null,[e("td",re,_(c+1)+" "+_(t.correctly?"✔️":"❌"),1),e("td",ne,_(t.position),1),e("td",ce,_(t.direction?">":"<"),1),e("td",ae,_(t.reaction_time),1)]))),256))]),e("div",ie," Тренировка "+_(h(D)?"пройдена":"не пройдена")+"! ",1),e("div",de,[h(D)?(i(),K(d,{key:0,to:"gilbert"},{default:Q(()=>[ue]),_:1})):(i(),u("button",{key:1,onClick:o[1]||(o[1]=(...t)=>h(p)&&h(p)(...t)),class:"rounded-lg border p-2 border-neutral-700 bg-white text-neutral-900"},"Попробовать ещё раз"))])])],512),[[b,a.value=="score"]])],64)}}};export{fe as default};