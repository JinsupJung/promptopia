(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8115:function(e,s,t){Promise.resolve().then(t.t.bind(t,3724,23)),Promise.resolve().then(t.bind(t,2787)),Promise.resolve().then(t.bind(t,5775))},5775:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var n=t(9268),l=t(5846),i=t.n(l),a=t(6394),r=t.n(a),c=t(6006),o=t(9425);let d=new o.Schema({email:{type:String,unique:[!0,"Email already exists!"],required:[!0,"Email is required!"]},username:{type:String,required:[!0,"Username is required!"],match:[RegExp("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"),"Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]},image:{type:String}});(0,o.model)("User",d);let u=()=>{let[e,s]=(0,c.useState)(null),[t,l]=(0,c.useState)(!1),[a,o]=(0,c.useState)(!1),[d,u]=(0,c.useState)(!1),m=()=>{o(!0)},h=()=>{o(!1)};return(0,n.jsxs)("nav",{className:"flex-between w-full mb-16 pt-3",children:[(0,n.jsxs)(i(),{href:"/",className:"flex gap-2 flex-center",children:[(0,n.jsx)(r(),{src:"/assets/images/logo.svg",alt:"logo",width:30,height:30,className:"object-contain"}),(0,n.jsx)("p",{className:"logo_text",children:"Promptopia"})]}),(0,n.jsx)("div",{className:"sm:flex hidden",children:a?(0,n.jsxs)("div",{className:"flex gap-3 md:gap-5",children:[(0,n.jsx)(i(),{href:"/create-prompt",className:"black_btn",children:"Create Post"}),(0,n.jsx)("button",{type:"button",onClick:h,className:"outline_btn",children:"Sign Out"}),(0,n.jsx)(i(),{href:"/profile",children:(0,n.jsx)(r(),{src:"/assets/images/logo.svg",width:37,height:37,className:"rounded-full",alt:"profile"})})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{type:"button",onClick:m,className:"black_btn",children:"Sign in"},"key1")})}),(0,n.jsx)("div",{className:"sm:hidden flex relative",children:a?(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(r(),{src:"/assets/images/logo.svg",width:37,height:37,className:"rounded-full",alt:"profile",onClick:()=>l(!t)}),t&&(0,n.jsxs)("div",{className:"dropdown",children:[(0,n.jsx)(i(),{href:"/profile",className:"dropdown_link",onClick:()=>l(!1),children:"My Profile"}),(0,n.jsx)(i(),{href:"/create-prompt",className:"dropdown_link",onClick:()=>l(!1),children:"Create Prompt"}),(0,n.jsx)("button",{type:"button",onClick:h,className:"mt-5 w-full black_btn",children:"Sign Out"})]})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{type:"button",onClick:m,className:"black_btn",children:"Sign in"},"key1")})})]})};var m=u},2787:function(e,s,t){"use strict";t.r(s);let n=e=>{let{children:s,session:t}=e;return{children:s}};s.default=n},3724:function(){}},function(e){e.O(0,[294,629,394,667,139,744],function(){return e(e.s=8115)}),_N_E=e.O()}]);