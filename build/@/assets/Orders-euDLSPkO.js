import{r as k,S as z,f as G,j as e,e as t}from"./index-kaEKLpWB.js";import{u as K,m as Q}from"./Layout-XJLSbV9V.js";import{e as E}from"./exportFromJSON-YB29QCxh.js";import{n as W}from"./toast-33DDocbW.js";import{u as X}from"./useAsync-9cJkpmkv.js";import{u as Y}from"./useFilter-Evbvc7OL.js";import{O as L}from"./OrderServices-iLqJNz_T.js";import{N as Z}from"./NotFound-3_tl_3Mc.js";import{P as ee}from"./PageTitle-uhVa4RAW.js";import{O as te}from"./OrderTable-4nlvP8yb.js";import{T as se}from"./TableLoading-qOnfK9mv.js";import{s as le}from"./spinner-R50PTWTV.js";import"./iconBase-SdznC8D3.js";import"./useDispatch-bCGmUp1F.js";import"./ProductServices-Rz27ds4X.js";import"./index-B-QvMZsz.js";import"./CurrencyServices-Pic61tjR.js";import"./LanguageServices-hLaudBO3.js";import"./Status-iatDq6Np.js";import"./Tooltip-tqve1L36.js";import"./index-iBgxihCJ.js";import"./SelectStatus-zfQSPy1-.js";const Oe=()=>{var O,D,S,P;const{time:h,setTime:x,status:u,endDate:g,setStatus:p,setEndDate:j,startDate:b,currentPage:I,searchText:f,searchRef:v,method:y,setMethod:C,setStartDate:T,setSearchText:M,handleChangePage:R,handleSubmitForAll:B,resultsPerPage:N}=k.useContext(z),{t:s}=G(),[d,c]=k.useState(!1),{data:l,loading:_,error:w}=X(()=>L.getAllOrders({day:h,method:y,status:u,page:I,endDate:g,startDate:b,limit:N,customerName:f})),{currency:V,getNumber:H,getNumberTwo:n}=K(),{dataTable:J,serviceData:m}=Y(l==null?void 0:l.orders),U=async()=>{var a,o,A;try{c(!0);const i=await L.getAllOrders({page:1,day:h,method:y,status:u,endDate:g,download:!0,startDate:b,limit:l==null?void 0:l.totalDoc,customerName:f}),q=(a=i==null?void 0:i.orders)==null?void 0:a.map(r=>{var F;return{_id:r._id,invoice:r.invoice,subTotal:n(r.subTotal),shippingCost:n(r.shippingCost),discount:n(r==null?void 0:r.discount),total:n(r.total),paymentMethod:r.paymentMethod,status:r.status,user_info:(F=r==null?void 0:r.user_info)==null?void 0:F.name,createdAt:r.createdAt,updatedAt:r.updatedAt}});E({data:q,fileName:"orders",exportType:E.types.csv}),c(!1)}catch(i){c(!1),W(((A=(o=i==null?void 0:i.response)==null?void 0:o.data)==null?void 0:A.message)||(i==null?void 0:i.message))}},$=()=>{x(""),C(""),p(""),j(""),T(""),M(""),v.current.value=""};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:s("Orders")}),e.jsx(t.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(t.CardBody,{children:e.jsxs("form",{onSubmit:B,children:[e.jsxs("div",{className:"grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-5 py-2",children:[e.jsx("div",{children:e.jsx(t.Input,{ref:v,type:"search",name:"search",placeholder:"Search by Customer Name"})}),e.jsx("div",{children:e.jsxs(t.Select,{onChange:a=>p(a.target.value),children:[e.jsx("option",{value:"Status",defaultValue:!0,hidden:!0,children:s("Status")}),e.jsx("option",{value:"Delivered",children:s("PageOrderDelivered")}),e.jsx("option",{value:"Pending",children:s("PageOrderPending")}),e.jsx("option",{value:"Processing",children:s("PageOrderProcessing")}),e.jsx("option",{value:"Cancel",children:s("OrderCancel")})]})}),e.jsx("div",{children:e.jsxs(t.Select,{onChange:a=>x(a.target.value),children:[e.jsx("option",{value:"Order limits",defaultValue:!0,hidden:!0,children:s("Orderlimits")}),e.jsx("option",{value:"5",children:s("DaysOrders5")}),e.jsx("option",{value:"7",children:s("DaysOrders7")}),e.jsx("option",{value:"15",children:s("DaysOrders15")}),e.jsx("option",{value:"30",children:s("DaysOrders30")})]})}),e.jsx("div",{children:e.jsxs(t.Select,{onChange:a=>C(a.target.value),children:[e.jsx("option",{value:"Method",defaultValue:!0,hidden:!0,children:s("Method")}),e.jsx("option",{value:"Cash",children:s("Cash")}),e.jsx("option",{value:"Card",children:s("Card")}),e.jsx("option",{value:"Credit",children:s("Credit")})]})}),e.jsx("div",{children:d?e.jsxs(t.Button,{disabled:!0,type:"button",className:"h-12 w-full",children:[e.jsx("img",{src:le,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsxs("button",{onClick:U,disabled:((O=l==null?void 0:l.orders)==null?void 0:O.length)<=0||d,type:"button",className:`${(((D=l==null?void 0:l.orders)==null?void 0:D.length)<=0||d)&&"opacity-50 cursor-not-allowed bg-emerald-600"} flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium px-6 py-2 rounded-md text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 `,children:["Download All Orders",e.jsx("span",{className:"ml-2 text-base",children:e.jsx(Q,{})})]})})]}),e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsxs("div",{children:[e.jsx(t.Label,{children:"Start Date"}),e.jsx(t.Input,{type:"date",name:"startDate",onChange:a=>T(a.target.value)})]}),e.jsxs("div",{children:[e.jsx(t.Label,{children:"End Date"}),e.jsx(t.Input,{type:"date",name:"startDate",onChange:a=>j(a.target.value)})]}),e.jsxs("div",{className:"mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[e.jsxs("div",{className:"w-full mx-1",children:[e.jsx(t.Label,{style:{visibility:"hidden"},children:"Filter"}),e.jsx(t.Button,{type:"submit",className:"h-12 w-full bg-emerald-700",children:"Filter"})]}),e.jsxs("div",{className:"w-full",children:[e.jsx(t.Label,{style:{visibility:"hidden"},children:"Reset"}),e.jsx(t.Button,{layout:"outline",onClick:$,type:"reset",className:"px-4 md:py-1 py-3 text-sm dark:bg-gray-700",children:e.jsx("span",{className:"text-black dark:text-gray-200",children:"Reset"})})]})]})]})]})})}),((S=l==null?void 0:l.methodTotals)==null?void 0:S.length)>0&&e.jsx(t.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 rounded-t-lg rounded-0 mb-4",children:e.jsx(t.CardBody,{children:e.jsx("div",{className:"flex gap-1",children:(P=l==null?void 0:l.methodTotals)==null?void 0:P.map((a,o)=>e.jsx("div",{className:"dark:text-gray-300",children:(a==null?void 0:a.method)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"font-medium",children:[" ",a.method]})," :"," ",e.jsxs("span",{className:"font-semibold mr-2",children:[V,H(a.total)]})]})},o+1))})})}),_?e.jsx(se,{row:12,col:7,width:160,height:20}):w?e.jsx("span",{className:"text-center mx-auto text-red-500",children:w}):(m==null?void 0:m.length)!==0?e.jsxs(t.TableContainer,{className:"mb-8 dark:bg-gray-900",children:[e.jsxs(t.Table,{children:[e.jsx(t.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(t.TableCell,{children:s("InvoiceNo")}),e.jsx(t.TableCell,{children:s("TimeTbl")}),e.jsx(t.TableCell,{children:s("CustomerName")}),e.jsx(t.TableCell,{children:s("MethodTbl")}),e.jsx(t.TableCell,{children:s("AmountTbl")}),e.jsx(t.TableCell,{children:s("OderStatusTbl")}),e.jsx(t.TableCell,{children:s("ActionTbl")}),e.jsx(t.TableCell,{className:"text-right",children:s("InvoiceTbl")})]})}),e.jsx(te,{orders:J})]}),e.jsx(t.TableFooter,{children:e.jsx(t.Pagination,{totalResults:l==null?void 0:l.totalDoc,resultsPerPage:N,onChange:R,label:"Table navigation"})})]}):e.jsx(Z,{title:"Sorry, There are no orders right now."})]})};export{Oe as default};
