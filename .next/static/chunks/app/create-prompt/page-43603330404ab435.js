(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{849:function(e,t,a){Promise.resolve().then(a.bind(a,1665))},1665:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(9268),l=a(6006),r=a(6008),n=a(5846),o=a.n(n);let i=e=>{let{type:t,post:a,setPost:l,submitting:r,handleSubmit:n}=e;return(0,s.jsxs)("section",{className:"w-full max-w-full flex-start flex-col",children:[(0,s.jsx)("h1",{className:"head_text text-left",children:(0,s.jsxs)("span",{className:"blue_gradient",children:[t," Post"]})}),(0,s.jsxs)("p",{className:"desc text-left max-w-md",children:[t," and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform"]}),(0,s.jsxs)("form",{onSubmit:n,className:"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:"Your AI Prompt"}),(0,s.jsx)("textarea",{value:a.prompt,onChange:e=>l({...a,prompt:e.target.value}),placeholder:"Write your post here",required:!0,className:"form_textarea "})]}),(0,s.jsxs)("label",{children:[(0,s.jsxs)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:["Field of Prompt"," ",(0,s.jsx)("span",{className:"font-normal",children:"(#product, #webdevelopment, #idea, etc.)"})]}),(0,s.jsx)("input",{value:a.tag,onChange:e=>l({...a,tag:e.target.value}),type:"text",placeholder:"#Tag",required:!0,className:"form_input"})]}),(0,s.jsxs)("div",{className:"flex-end mx-3 mb-5 gap-4",children:[(0,s.jsx)(o(),{href:"/",className:"text-gray-500 text-sm",children:"Cancel"}),(0,s.jsx)("button",{type:"submit",disabled:r,className:"px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white",children:r?"".concat(t,"ing..."):t})]})]})]})},c=()=>{let e=(0,r.useRouter)(),[t,a]=(0,l.useState)(!1),[n,o]=(0,l.useState)({prompt:"",tag:""}),c=async t=>{t.preventDefault(),a(!0),console.log("form submitting");try{let t=await fetch("/api/prompt/new",{method:"POST",body:JSON.stringify({prompt:n.prompt,userId:"cool4uh@gmail.com",tag:n.tag})});console.log(t),t.ok&&e.push("/")}catch(e){console.log(e)}finally{a(!1)}};return(0,s.jsx)(i,{type:"Create",post:n,setPost:o,submitting:t,handleSubmit:c})};var m=c},6008:function(e,t,a){e.exports=a(167)}},function(e){e.O(0,[629,667,139,744],function(){return e(e.s=849)}),_N_E=e.O()}]);