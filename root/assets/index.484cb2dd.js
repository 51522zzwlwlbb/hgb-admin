import{B as N}from"./BasicUpload.0b530d16.js";import{d as S,cx as P,r as v,u as T,b,o as G,c as H,a as B,i as u,w as e,j as s,h as t,B as J,_ as M,k as Q,ad as W,ab as Z,ct as $,a4 as z,cu as I,m as K,n as O,cr as X,cs as Y}from"./index.f90bf1ac.js";import"./componentSetting.d8a0c79d.js";import"./DeleteOutlined.06af836a.js";import"./PlusOutlined.4c3ee100.js";const uu={class:"n-layout-page-header"},eu={style:{"margin-left":"80px"}},ru=S({__name:"index",setup(tu){const C=P(),A=[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],D=[{label:"\u674E\u533B\u751F",value:1},{label:"\u9EC4\u533B\u751F",value:2},{label:"\u5F20\u533B\u751F",value:3}],x={name:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u59D3\u540D",trigger:"blur"},remark:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8",trigger:"blur"},mobile:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u7535\u8BDD\u53F7\u7801",trigger:["input"]},datetime:{required:!0,type:"number",message:"\u8BF7\u9009\u62E9\u9884\u7EA6\u65F6\u95F4",trigger:["blur","change"]},doctor:{required:!0,type:"number",message:"\u8BF7\u9009\u62E9\u9884\u7EA6\u533B\u751F",trigger:"change"}},_=v(null),m=T(),{uploadUrl:h}=C,i=()=>({name:"",mobile:"",remark:"",sex:1,matter:null,doctor:null,datetime:[]});let a=b(i());const d=v(["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]),k=b({platform:"miniPrograms",timestamp:new Date().getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="});function y(){_.value.validate(r=>{r?m.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):m.success("\u9A8C\u8BC1\u6210\u529F")})}function U(){_.value.restoreValidation(),a=Object.assign(t(a),i())}function V(r){console.log(r)}return(r,l)=>{const c=J,p=M,o=Q,j=W,F=Z,f=$,g=z,q=I,E=K,w=O,L=X,R=Y;return G(),H("div",null,[B("div",uu,[u(c,{bordered:!1,title:"\u57FA\u7840\u8868\u5355"},{default:e(()=>[s(" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002\u8868\u5355\u57DF\u6807\u7B7E\u4E5F\u53EF\u652F\u6301\u54CD\u5E94\u5F0F\u3002 ")]),_:1})]),u(c,{bordered:!1,class:"mt-4 proCard"},{default:e(()=>[u(R,{cols:"1 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:e(()=>[u(L,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:e(()=>[u(w,{"label-width":80,model:t(a),rules:x,"label-placement":"left",ref_key:"formRef",ref:_,class:"py-8"},{default:e(()=>[u(o,{label:"\u9884\u7EA6\u59D3\u540D",path:"name"},{default:e(()=>[u(p,{value:t(a).name,"onUpdate:value":l[0]||(l[0]=n=>t(a).name=n),placeholder:"\u8F93\u5165\u59D3\u540D"},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u53F7\u7801",path:"mobile"},{default:e(()=>[u(p,{placeholder:"\u7535\u8BDD\u53F7\u7801",value:t(a).mobile,"onUpdate:value":l[1]||(l[1]=n=>t(a).mobile=n)},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u65F6\u95F4",path:"datetime"},{default:e(()=>[u(j,{type:"datetime",value:t(a).datetime,"onUpdate:value":l[2]||(l[2]=n=>t(a).datetime=n)},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u533B\u751F",path:"doctor"},{default:e(()=>[u(F,{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u533B\u751F",options:D,value:t(a).doctor,"onUpdate:value":l[3]||(l[3]=n=>t(a).doctor=n)},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u4E8B\u9879",path:"matter"},{default:e(()=>[u(F,{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u4E8B\u9879",options:A,value:t(a).matter,"onUpdate:value":l[4]||(l[4]=n=>t(a).matter=n),multiple:""},null,8,["value"])]),_:1}),u(o,{label:"\u6027\u522B",path:"sex"},{default:e(()=>[u(q,{value:t(a).sex,"onUpdate:value":l[5]||(l[5]=n=>t(a).sex=n),name:"sex"},{default:e(()=>[u(g,null,{default:e(()=>[u(f,{value:1},{default:e(()=>[s("\u7537")]),_:1}),u(f,{value:2},{default:e(()=>[s("\u5973")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u5907\u6CE8",path:"remark"},{default:e(()=>[u(p,{value:t(a).remark,"onUpdate:value":l[6]||(l[6]=n=>t(a).remark=n),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8"},null,8,["value"])]),_:1}),u(o,{label:"\u56FE\u7247",path:"img"},{default:e(()=>[u(t(N),{action:`${t(h)}/v1.0/files`,headers:k,data:{type:0},name:"files",width:100,height:100,onUploadChange:V,value:d.value,"onUpdate:value":l[7]||(l[7]=n=>d.value=n),helpText:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC720MB\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F2010\u4E2A\u6587\u4EF6"},null,8,["action","headers","value"])]),_:1}),B("div",eu,[u(g,null,{default:e(()=>[u(E,{type:"primary",onClick:y},{default:e(()=>[s("\u63D0\u4EA4\u9884\u7EA6")]),_:1}),u(E,{onClick:U},{default:e(()=>[s("\u91CD\u7F6E")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{ru as default};
