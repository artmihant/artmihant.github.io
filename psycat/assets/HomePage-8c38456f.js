import{r as u,o as i,c,a as t,u as d,b as f,d as e,w as o,g as h,e as m,f as l}from"./index-31c250ee.js";import{_ as p}from"./LinkButton-2f8b2a7a.js";const b={class:"h-screen flex justify-center bg-white text-black"},x={class:"h-screen justify-center"},w={class:"h-screen w-full justify-center flex flex-col flex-1"},g={class:"max-w-[550px]"},k=t("p",null,[t("b",null,"Уважаемые респонденты!")],-1),v=t("p",null,"Меня зовут Екатерина Чаунина. Я студентка 5 курса направления «Клиническая психология» Первого МГМУ им. И.М. Сеченова, провожу исследование, посвященное полушарным различиям восприятия цвета. ",-1),C=t("p",null,"Мы вас попросим выполнить несколько методик. Это займет у вас не более 15 минут. ",-1),y=t("p",null," Все сведения, полученные от вас, конфиденциальны и будут использованы исключительно в научных целях в анонимном виде, что не позволит идентифицировать вас как участников данного исследования. ",-1),N=t("p",null," При желании вы можете получить обратную связь по результатам исследования . ",-1),R={key:0},V=t("b",null,"К сожалению, вы не сможете пройти наш психологический тест с мобильного устройства. Пожалуйста, зайдите на эту страницу с компьютера. Спасибо!",-1),j=[V],B={class:"mt-3 text-center font-bold"},I={class:"w-full text-neutral-400"},E={__name:"HomePage",setup(L){const n=window.browserInfo.mobile,_=()=>{let a=window.localStorage.getItem("cid")+"_"+h()+"_"+m();window.localStorage.setItem("uid",a),window.location.reload()};return(r,a)=>{const s=u("RouterLink");return i(),c("div",b,[t("div",x,[t("div",w,[t("div",g,[k,v,C,y,N,d(n)?(i(),c("p",R,j)):f("",!0)]),t("div",B,[e(p,{disabled:d(n),to:"gilberttraining"},{default:o(()=>[l("Принять участие")]),_:1},8,["disabled"])]),t("div",I,[t("ul",null,[t("li",null,[e(s,{to:"gilbert"},{default:o(()=>[l("Тест Гилберта")]),_:1})]),t("li",null,[e(s,{to:"calibration"},{default:o(()=>[l("Калибровка")]),_:1})]),t("li",null,[e(s,{to:"pallete"},{default:o(()=>[l("Палитра")]),_:1})]),t("li",null,[e(s,{to:"picto"},{default:o(()=>[l("Пиктограммы")]),_:1})]),t("li",null,[e(s,{to:"ishihara"},{default:o(()=>[l("Тест Ишихары")]),_:1})]),t("li",null,[e(s,{to:"stroop"},{default:o(()=>[l("Тест Струпа")]),_:1})])])]),t("button",{onClick:_,class:"absolute bottom-5 right-5 cursor-pointer text-neutral-500 text-xl"},"Ψ")])])])}}};export{E as default};