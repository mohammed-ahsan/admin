import{a as Ze,P as $e,c as ke,r as Ge,u as He,C as Xe,b as Ke,d as Qe,A as We}from"./ProductServices-Rz27ds4X.js";import{d as M,u as ve}from"./Layout-XJLSbV9V.js";import{c as me,g as le,r as o,h as et,S as tt}from"./index-kaEKLpWB.js";import{n as f,a as x}from"./toast-33DDocbW.js";import{C as st}from"./CurrencyServices-Pic61tjR.js";import{L as nt}from"./LanguageServices-hLaudBO3.js";var fe={exports:{}};(function(b,N){(function(O,C){b.exports=C()})(me,function(){return function(O,C,L){C.prototype.isBetween=function(j,P,S,h){var R=L(j),l=L(P),J=(h=h||"()")[0]==="(",B=h[1]===")";return(J?this.isAfter(R,S):!this.isBefore(R,S))&&(B?this.isBefore(l,S):!this.isAfter(l,S))||(J?this.isBefore(R,S):!this.isAfter(R,S))&&(B?this.isAfter(l,S):!this.isBefore(l,S))}}})})(fe);var ot=fe.exports;const at=le(ot);var ge={exports:{}};(function(b,N){(function(O,C){b.exports=C()})(me,function(){return function(O,C,L){C.prototype.isToday=function(){var j="YYYY-MM-DD",P=L();return this.format(j)===P.format(j)}}})})(ge);var rt=ge.exports;const it=le(rt),dt={type:"object",properties:{_id:{type:"string"},name:{type:"object"},description:{type:"object"},icon:{type:"string"},status:{type:"string"}},required:["name"]},ut={type:"object",properties:{status:{type:"string"},title:{type:"object"},name:{type:"object"},variants:{type:"array"},option:{type:"string"},type:{type:"string"}},required:["name","title"]},pt={type:"object",properties:{title:{type:"object"},couponCode:{type:"string"},endTime:{type:"string"},discountPercentage:{type:"number"},minimumAmount:{type:"number"},productType:{type:"string"},logo:{type:"string"},discountType:{type:"object"},status:{type:"string"}},required:["title","couponCode","endTime","status"]},ct={type:"object",properties:{name:{type:"string"},email:{type:"string"}},required:["name","email"]},_t=b=>{const N=new Ze({allErrors:!0}),[O,C]=o.useState(""),[L,j]=o.useState(""),[P,S]=o.useState(""),[h,R]=o.useState(""),[l,J]=o.useState(""),[B,Se]=o.useState(""),[D,v]=o.useState(""),[A,ee]=o.useState(""),[U,te]=o.useState(""),[ye,we]=o.useState(""),[I,Ce]=o.useState(""),[$,he]=o.useState(""),[be,Le]=o.useState([]),[De,Ae]=o.useState([]),[Te,Oe]=o.useState([]),[k,Pe]=o.useState(""),[G,Re]=o.useState(""),[V,xe]=o.useState(""),[H,Ne]=o.useState(1),[je,se]=o.useState([]),[Be,_e]=o.useState(""),[Fe,Je]=o.useState(""),[Ue,Ie]=o.useState(""),[y,q]=o.useState([]),[Ee,Y]=o.useState(""),[Me,z]=o.useState(!1),[X,Ve]=o.useState(""),[K]=o.useState([]),ne=o.useRef(""),oe=o.useRef(""),ae=o.useRef(""),re=o.useRef(""),ie=o.useRef(""),Q=o.useRef(""),de=o.useRef(""),ue=o.useRef(""),pe=o.useRef(""),qe=o.useRef(""),ce=o.useRef("");M.extend(at),M.extend(it);const p=et(),{lang:E,setIsUpdate:_,setLoading:g}=o.useContext(tt),{globalSetting:F}=ve(),T=o.useMemo(()=>{const a=new Date;a.setDate(a.getDate()-V);let t=b==null?void 0:b.map(e=>{const i=new Date(e==null?void 0:e.updatedAt).toLocaleString("en-US",{timeZone:F==null?void 0:F.default_time_zone});return{...e,updatedDate:i==="Invalid Date"?"":i}});if(p.pathname==="/dashboard"){const e=t==null?void 0:t.filter(c=>c.status==="Pending");Le(e);const i=t==null?void 0:t.filter(c=>c.status==="Processing");Ae(i);const s=t==null?void 0:t.filter(c=>c.status==="Delivered");Oe(s);const u=t==null?void 0:t.filter(c=>M(c.createdAt).isToday()),m=u==null?void 0:u.reduce((c,w)=>c+w.total,0);_e(m);const n=t==null?void 0:t.filter(c=>M(c.createdAt).isBetween(new Date().setDate(new Date().getDate()-30),new Date)),r=n==null?void 0:n.reduce((c,w)=>c+w.total,0);Je(r);const W=t==null?void 0:t.reduce((c,w)=>c+w.total,0);Ie(W)}return O&&(t=t.filter(e=>e.parent===O)),L==="Low"&&(t=t.sort((e,i)=>e.price<i.price&&-1)),L==="High"&&(t=t.sort((e,i)=>e.price>i.price&&-1)),P&&(t=t.filter(e=>{var i;return(i=e==null?void 0:e.title)==null?void 0:i.toLowerCase().includes(P.toLowerCase())})),A&&(t=t.filter(e=>{var i,s,u;return((s=(i=e==null?void 0:e.title[E])==null?void 0:i.toLowerCase())==null?void 0:s.includes(A==null?void 0:A.toLowerCase()))||((u=e==null?void 0:e.attribute)==null?void 0:u.toLowerCase().includes(A==null?void 0:A.toLowerCase()))})),D&&(t=t.filter(e=>{var i,s,u;return((s=(i=e==null?void 0:e.name[E])==null?void 0:i.toLowerCase())==null?void 0:s.includes(D==null?void 0:D.toLowerCase()))||((u=e==null?void 0:e.category)==null?void 0:u.toLowerCase().includes(D==null?void 0:D.toLowerCase()))})),G&&(t=t.filter(e=>e.role===G)),h&&(t=t.filter(e=>{var i,s,u;return((i=e==null?void 0:e.name[E])==null?void 0:i.toLowerCase().includes(h.toLowerCase()))||((s=e==null?void 0:e.phone)==null?void 0:s.toLowerCase().includes(h.toLowerCase()))||((u=e==null?void 0:e.email)==null?void 0:u.toLowerCase().includes(h.toLowerCase()))})),l&&(t=t==null?void 0:t.filter(e=>{var i,s,u;return((s=(i=e==null?void 0:e.title[E])==null?void 0:i.toLowerCase())==null?void 0:s.includes(l==null?void 0:l.toLowerCase()))||((u=e==null?void 0:e.couponCode)==null?void 0:u.toLowerCase().includes(l==null?void 0:l.toLowerCase()))})),k&&(t=t.filter(e=>e.status===k)),B&&(t=t.filter(e=>e.contact.toLowerCase().includes(B.toLowerCase()))),V&&(t=t.filter(e=>M(e.createdAt).isBetween(a,new Date))),U&&(t=t.filter(e=>{var i,s;return((i=e==null?void 0:e.name)==null?void 0:i.toLowerCase().includes(U.toLowerCase()))||((s=e==null?void 0:e.iso_code)==null?void 0:s.toLowerCase().includes(U.toLowerCase()))})),X&&(t=t.filter(e=>e==null?void 0:e.name.toLowerCase().includes(X.toLowerCase()))),I&&(t=t.filter(e=>e.name.toLowerCase().includes(I.toLowerCase())||e.iso_code.toLowerCase().includes(I.toLowerCase())||e.language_code.toLowerCase().includes(I.toLowerCase()))),$&&(t=t.filter(e=>e.iso_code.toLowerCase().includes($.toLowerCase()))),t},[V,b,p.pathname,O,L,P,A,D,G,h,l,k,B,U,X,I,$,Q,F==null?void 0:F.default_time_zone,E]),Z=20,Ye=T==null?void 0:T.length,ze=a=>{Ne(a)};return o.useEffect(()=>{se(T==null?void 0:T.slice((H-1)*Z,H*Z))},[T,H,Z]),{userRef:ae,searchRef:oe,couponRef:re,orderRef:ie,categoryRef:Q,attributeRef:de,pending:be,processing:De,delivered:Te,todayOrder:Be,monthlyOrder:Fe,totalOrder:Ue,setFilter:C,setSortedField:j,setStatus:Pe,setRole:Re,time:V,zone:ye,setTime:xe,taxRef:qe,setZone:we,filename:Ee,countryRef:ue,dataTable:je,serviceData:T,country:U,setSearchText:S,setCountry:te,isDisabled:Me,languageRef:pe,currencyRef:ne,shippingRef:ce,setSearchUser:R,setDataTable:se,setCategoryType:v,handleChangePage:ze,totalResults:Ye,resultsPerPage:Z,handleOnDrop:a=>{for(let t=0;t<a.length;t++)K.push(a[t].data)},setSearchCoupon:J,setAttributeTitle:ee,handleSelectFile:a=>{var i;a.preventDefault();const t=new FileReader,e=(i=a.target)==null?void 0:i.files[0];if(e&&e.type==="application/json")Y(e==null?void 0:e.name),z(!0),t.readAsText(e,"UTF-8"),t.onload=s=>{let u=JSON.parse(s.target.result),m=[];p.pathname==="/categories"&&(m=u.map(n=>({_id:n._id,id:n.id,status:n.status,name:n.name,description:n.description,parentName:n.parentName,parentId:n.parentId,icon:n.icon}))),p.pathname==="/attributes"&&(m=u.map(n=>({_id:n._id,status:n.status,title:n.title,name:n.name,variants:n.variants,option:n.option,type:n.type}))),p.pathname==="/coupons"&&(m=u.map(n=>({title:n.title,couponCode:n.couponCode,endTime:n.endTime,discountPercentage:n.discountPercentage,minimumAmount:n.minimumAmount,productType:n.productType,logo:n.logo,discountType:n.discountType,status:n.status}))),p.pathname==="/customers"&&(m=u.map(n=>({name:n.name,email:n.email,password:n.password,phone:n.phone}))),q(m)};else if(e&&e.type==="text/csv")Y(e==null?void 0:e.name),z(!0),t.onload=async s=>{const u=s.target.result,m=await ke().fromString(u);let n=[];p.pathname==="/categories"&&(n=m.map(r=>({_id:r._id,id:r.id,status:r.status,name:JSON.parse(r.name),description:JSON.parse(r.description),parentName:r.parentName,parentId:r.parentId,icon:r.icon}))),p.pathname==="/attributes"&&(n=m.map(r=>({status:r.status,title:JSON.parse(r.title),name:JSON.parse(r.name),variants:JSON.parse(r.variants),option:r.option,type:r.type}))),p.pathname==="/coupons"&&(n=m.map(r=>({title:JSON.parse(r.title),couponCode:r.couponCode,endTime:r.endTime,discountPercentage:r.discountPercentage?JSON.parse(r.discountPercentage):0,minimumAmount:r.minimumAmount?JSON.parse(r.minimumAmount):0,productType:r.productType,logo:r.logo,status:r.status}))),p.pathname==="/customers"&&(n=m.map(r=>({name:r.name,email:r.email,password:r.password,phone:r.phone}))),q(n)},t.readAsText(e);else{Y(e==null?void 0:e.name),z(!0);const s=!!t.readAsBinaryString;t.onload=function(u){const m=u.target.result,n=Ge(m,{type:s?"binary":"array",bookVBA:!0}),r=n.SheetNames[0],W=n.Sheets[r],c=He.sheet_to_json(W);let w=[];p.pathname==="/categories"&&(w=c.map(d=>({_id:d._id,id:d.id,status:d.status,name:JSON.parse(d.name),description:JSON.parse(d.description),parentName:d.parentName,parentId:d.parentId,icon:d.icon}))),p.pathname==="/attributes"&&(w=c.map(d=>({status:d.status,title:JSON.parse(d.title),name:JSON.parse(d.name),variants:JSON.parse(d.variants),option:d.option,type:d.type}))),p.pathname==="/coupons"&&(w=c.map(d=>({title:JSON.parse(d.title),couponCode:d.couponCode,endTime:d.endTime,discountPercentage:d.discountPercentage,minimumAmount:d.minimumAmount,productType:d.productType,logo:d.logo,status:d.status}))),p.pathname==="/customers"&&(w=c.map(d=>({name:d.name,email:d.email,password:d.password?d.password:"null",phone:d.phone?d.phone:"null"}))),q(w)},s?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}},handleSubmitUser:a=>{a.preventDefault(),R(ae.current.value)},handleSubmitForAll:a=>{a.preventDefault(),S(oe.current.value)},handleSubmitCoupon:a=>{a.preventDefault(),J(re.current.value)},handleSubmitOrder:a=>{a.preventDefault(),Se(ie.current.value)},handleSubmitCategory:a=>{a.preventDefault(),v(Q.current.value)},handleSubmitAttribute:a=>{a.preventDefault(),ee(de.current.value)},handleUploadProducts:()=>{K.length<1?f("Please upload/select csv file first!"):$e.addAllProducts(K).then(a=>{x(a.message)}).catch(a=>f(a.message))},handleSubmitCountry:a=>{a.preventDefault(),te(ue.current.value)},handleSubmitCurrency:a=>{a.preventDefault(),he(ne.current.value)},handleSubmitShipping:a=>{a.preventDefault(),Ve(ce.current.value)},handleSubmitLanguage:a=>{a.preventDefault(),Ce(pe.current.value)},handleUploadMultiple:a=>{if(y.length>1){if(p.pathname==="/categories"){g(!0);let t=y.map(s=>N.validate(dt,s));const e=s=>s===!0;t.every(e)?Xe.addAllCategory(y).then(s=>{g(!1),_(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}if(p.pathname==="/customers"){g(!0);let t=y.map(s=>N.validate(ct,s));const e=s=>s===!0;t.every(e)?Ke.addAllCustomers(y).then(s=>{g(!1),_(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}if(p.pathname==="/coupons"){g(!0);let t=y.map(s=>N.validate(pt,s));const e=s=>s===!0;t.every(e)?Qe.addAllCoupon(y).then(s=>{g(!1),_(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}if(p.pathname==="/attributes"){g(!0);let t=y.map(s=>N.validate(ut,s));const e=s=>s===!0;t.every(e)?We.addAllAttributes(y).then(s=>{g(!1),_(!0),x(s.message)}).catch(s=>{g(!1),f(s?s.response.data.message:s.message)}):f("Please enter valid data!")}p.pathname==="/languages"&&nt.addAllLanguage(y).then(t=>{_(!0),x(t.message)}).catch(t=>f(t?t.response.data.message:t.message)),p.pathname==="/currencies"&&st.addAllCurrency(y).then(t=>{_(!0),x(t.message)}).catch(t=>f(t?t.response.data.message:t.message))}else f("Please select a valid .JSON/.CSV/.XLS file first!")},handleRemoveSelectFile:a=>{Y(""),q([]),setTimeout(()=>z(!1),1e3)}}};export{it as a,at as i,_t as u};