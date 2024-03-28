import{f as N,j as e,e as l,r as f,S,A as k}from"./index-kaEKLpWB.js";import{l as E,u as I,g as R}from"./Layout-XJLSbV9V.js";import{u as F}from"./useAsync-9cJkpmkv.js";import{u as B}from"./useFilter-Evbvc7OL.js";import{T as w,D as U,u as z,M as v}from"./DrawerButton-fnQ8qkSd.js";import{E as j}from"./index.esm-UHEZOc8y.js";import{I as b}from"./InputArea-6bVCC4zo.js";import{u as L}from"./useStaffSubmit-ooPo20qH.js";import{S as Z}from"./SelectRole-QSyKg_jA.js";import{L as g}from"./LabelArea-0V6LeSph.js";import{U as J}from"./Uploader-cS0uZHKZ.js";import{T as M}from"./TableLoading-qOnfK9mv.js";import{S as _}from"./Status-iatDq6Np.js";import{D as $,E as O}from"./EditDeleteButton--eCAtp8b.js";import{a as V}from"./index.prod-QLvVMLGD.js";import{A as C}from"./AdminServices-Qg-G-GcP.js";import{a as q,n as H}from"./toast-33DDocbW.js";import{N as G}from"./NotFound-3_tl_3Mc.js";import{P as K}from"./PageTitle-uhVa4RAW.js";import"./iconBase-SdznC8D3.js";import"./useDispatch-bCGmUp1F.js";import"./ProductServices-Rz27ds4X.js";import"./index-B-QvMZsz.js";import"./CurrencyServices-Pic61tjR.js";import"./LanguageServices-hLaudBO3.js";import"./SelectLanguageTwo-yftg4yHI.js";import"./spinner-R50PTWTV.js";import"./tslib.es6-YYMLUA4o.js";import"./Tooltip-tqve1L36.js";const T=({id:t})=>{const{register:r,handleSubmit:h,onSubmit:m,errors:i,imageUrl:x,setImageUrl:c,isSubmitting:p,selectedDate:n,setSelectedDate:o,handleSelectLanguage:a}=L(t),{t:d}=N();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300",children:t?e.jsx(w,{register:r,handleSelectLanguage:a,title:d("UpdateStaff"),description:d("UpdateStaffdescription")}):e.jsx(w,{register:r,handleSelectLanguage:a,title:d("AddStaffTitle"),description:d("AddStaffdescription")})}),e.jsx(E.Scrollbars,{className:"w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200",children:e.jsx(l.Card,{className:"overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:h(m),children:[e.jsxs("div",{className:"px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Staff Image"}),e.jsx("div",{className:"col-span-8 sm:col-span-4",children:e.jsx(J,{imageUrl:x,setImageUrl:c,folder:"admin"})})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Name"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:r,label:"Name",name:"name",type:"text",autoComplete:"username",placeholder:"Staff name"}),e.jsx(j,{errorName:i.name})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Email"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:r,label:"Email",name:"email",type:"text",autoComplete:"username",pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,placeholder:"Email"}),e.jsx(j,{errorName:i.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Password"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[t?e.jsx(b,{required:!0,register:r,label:"Password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password"}):e.jsx(b,{register:r,label:"Password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password"}),e.jsx(j,{errorName:i.password})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Contact Number"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(b,{register:r,label:"Contact Number",name:"phone",pattern:/^[+]?\d*$/,minLength:6,maxLength:15,type:"text",placeholder:"Phone number"}),e.jsx(j,{errorName:i.phone})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Joining Date"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(l.Input,{onChange:u=>o(u.target.value),label:"Joining Date",name:"joiningDate",value:n,type:"date",placeholder:d("StaffJoiningDate")}),e.jsx(j,{errorName:i.joiningDate})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6",children:[e.jsx(g,{label:"Staff Role"}),e.jsxs("div",{className:"col-span-8 sm:col-span-4",children:[e.jsx(Z,{register:r,label:"Role",name:"role"}),e.jsx(j,{errorName:i.role})]})]})]}),e.jsx(U,{id:t,title:"Staff",isSubmitting:p})]})})})})]})},Q=({id:t,status:r,option:h,staff:m})=>{const{setIsUpdate:i}=f.useContext(S),x=async(c,p)=>{var n,o;try{let a;r==="Active"?a="Inactive":a="Active";const d=await C.updateStaffStatus(c,{status:a});i(!0),q(d.message);return}catch(a){H(a?(o=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:o.message:a==null?void 0:a.message)}};return e.jsx(e.Fragment,{children:e.jsx(V,{onChange:()=>x(t),checked:r==="Active",className:"react-switch md:ml-0",uncheckedIcon:e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",width:120,fontSize:14,color:"white",paddingRight:22,paddingTop:1}}),width:30,height:15,handleDiameter:13,offColor:"#E53E3E",onColor:"#2F855A",checkedIcon:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:73,height:"100%",fontSize:14,color:"white",paddingLeft:20,paddingTop:1}})})})},W=({staffs:t,lang:r})=>{const{title:h,serviceId:m,handleModalOpen:i,handleUpdate:x,isSubmitting:c,handleResetPassword:p}=z(),{showDateFormat:n,showingTranslateValue:o}=I();return e.jsxs(e.Fragment,{children:[e.jsx($,{id:m,title:h}),e.jsx(v,{children:e.jsx(T,{id:m})}),e.jsx(l.TableBody,{children:t==null?void 0:t.map(a=>e.jsxs(l.TableRow,{children:[e.jsx(l.TableCell,{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(l.Avatar,{className:"hidden mr-3 md:block bg-gray-50",src:a.image,alt:"staff"}),e.jsx("div",{children:e.jsx("h2",{className:"text-sm font-medium",children:o(a==null?void 0:a.name)})})]})}),e.jsxs(l.TableCell,{children:[e.jsx("span",{className:"text-sm",children:a.email})," "]}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm ",children:a.phone})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm",children:n(a.joiningData)})}),e.jsx(l.TableCell,{children:e.jsx("span",{className:"text-sm font-semibold",children:a==null?void 0:a.role})}),e.jsx(l.TableCell,{className:"text-center text-xs",children:e.jsx(_,{status:a.status})}),e.jsx(l.TableCell,{className:"text-center",children:e.jsx(Q,{id:a==null?void 0:a._id,staff:a,option:"staff",status:a.status})}),e.jsx(l.TableCell,{children:e.jsx(O,{id:a._id,staff:a,isSubmitting:c,handleUpdate:x,handleModalOpen:i,handleResetPassword:p,title:o(a==null?void 0:a.name)})})]},a._id))})]})},Ae=()=>{const{state:t}=f.useContext(k),{adminInfo:r}=t,{toggleDrawer:h,lang:m}=f.useContext(S),{data:i,loading:x,error:c}=F(()=>C.getAllStaff({email:r.email})),{userRef:p,setRole:n,totalResults:o,resultsPerPage:a,dataTable:d,serviceData:u,handleChangePage:y,handleSubmitUser:A}=B(i),{t:s}=N(),D=()=>{n(""),p.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[s("StaffPageTitle")," "]}),e.jsx(v,{children:e.jsx(T,{})}),e.jsx(l.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(l.CardBody,{children:e.jsxs("form",{onSubmit:A,className:"py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex",children:[e.jsxs("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx(l.Input,{ref:p,type:"search",name:"search",placeholder:s("StaffSearchBy")}),e.jsx("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),e.jsx("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:e.jsxs(l.Select,{onChange:P=>n(P.target.value),children:[e.jsx("option",{value:"All",defaultValue:!0,hidden:!0,children:s("StaffRole")}),e.jsx("option",{value:"Admin",children:s("StaffRoleAdmin")}),e.jsx("option",{value:"Cashier",children:s("SelectCashiers")}),e.jsx("option",{value:"Super Admin",children:s("SelectSuperAdmin")})]})}),e.jsx("div",{className:"w-full md:w-56 lg:w-56 xl:w-56",children:e.jsxs(l.Button,{onClick:h,className:"w-full rounded-md h-12",children:[e.jsx("span",{className:"mr-3",children:e.jsx(R,{})}),s("AddStaff")]})}),e.jsxs("div",{className:"mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsx("div",{className:"w-full mx-1",children:e.jsx(l.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})}),e.jsx("div",{className:"w-full",children:e.jsx(l.Button,{layout:"outline",onClick:D,type:"reset",className:"px-4 md:py-1 py-3 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})})]})]})})}),x?e.jsx(M,{row:12,col:7,width:163,height:20}):c?e.jsx("span",{className:"text-center mx-auto text-red-500",children:c}):(u==null?void 0:u.length)!==0?e.jsxs(l.TableContainer,{className:"mb-8 rounded-b-lg",children:[e.jsxs(l.Table,{children:[e.jsx(l.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(l.TableCell,{children:s("StaffNameTbl")}),e.jsx(l.TableCell,{children:s("StaffEmailTbl")}),e.jsx(l.TableCell,{children:s("StaffContactTbl")}),e.jsx(l.TableCell,{children:s("StaffJoiningDateTbl")}),e.jsx(l.TableCell,{children:s("StaffRoleTbl")}),e.jsx(l.TableCell,{className:"text-center",children:s("OderStatusTbl")}),e.jsx(l.TableCell,{className:"text-center",children:s("PublishedTbl")}),e.jsx(l.TableCell,{className:"text-right",children:s("StaffActionsTbl")})]})}),e.jsx(W,{staffs:d,lang:m})]}),e.jsx(l.TableFooter,{children:e.jsx(l.Pagination,{totalResults:o,resultsPerPage:a,onChange:y,label:"Table navigation"})})]}):e.jsx(G,{title:"Sorry, There are no staff right now."})]})};export{Ae as default};