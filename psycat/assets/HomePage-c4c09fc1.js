import{_ as n}from"./TextButton-e96b459c.js";import{f as r}from"./fullscreen-134f38df.js";import{u as c,a as i,o as u,c as _,b as e,d as f,w as p,e as o,t as d,f as h}from"./index-d77fcae3.js";const m={class:"h-screen flex justify-center bg-white text-black"},x={class:"h-screen justify-center"},b={class:"h-screen w-full justify-center flex flex-col flex-1"},v=e("div",{class:"max-w-[550px]"},[e("p",null,[e("b",null,"Уважаемые респонденты!")]),e("p",null,"Меня зовут Екатерина Чаунина. Я студентка 5 курса направления «Клиническая психология» Первого МГМУ им. И.М. Сеченова, провожу исследование, посвященное полушарным различиям восприятия цвета. "),e("p",null,"Мы вас попросим выполнить несколько методик. Это займет у вас не более 15 минут. "),e("p",null," Все сведения, полученные от вас, конфиденциальны и будут использованы исключительно в научных целях в анонимном виде, что не позволит идентифицировать вас как участников данного исследования. "),e("p",null," При желании вы можете получить обратную связь по результатам исследования. ")],-1),g={class:"mt-3 text-center font-bold"},w=e("div",{class:"w-full text-neutral-400"},[e("ul")],-1),S={__name:"HomePage",setup(k){const t=c(),s=i();function l(){r(),t.gilbert_test_passed=="no"?s.push({name:"gilbert"}):t.stroop_test_passed=="no"?s.push({name:"stroop"}):t.ishihara_test_passed=="no"?s.push({name:"ishihara"}):s.push({name:"ishihara"})}return(y,a)=>(u(),_("div",m,[e("div",x,[e("div",b,[v,e("div",g,[f(n,{onClick:l},{default:p(()=>[h("Принять участие")]),_:1})]),w,e("button",{onClick:a[0]||(a[0]=j=>o(t).createUser()),class:"absolute bottom-5 right-5 cursor-pointer text-neutral-500 text-xl"},"↻"+d(o(t).code),1)])])]))}};export{S as default};