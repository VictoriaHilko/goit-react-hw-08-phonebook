"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[111],{8111:function(t,e,n){n.r(e),n.d(e,{ContactsPage:function(){return M},default:function(){return U}});var r=n(6152),a=n(2791),s=n(887),c=n(9434),i=n(3661),u="ContactForm_form__dhl+T",o="ContactForm_formLabel__TSwxK",l="ContactForm_formInput__GszVU",d="ContactForm_saveButton__Ua4ZN",h=n(6916),f=function(t){return t.phonebook},m=(0,h.P1)(f,(function(t){return t.contacts})),p=(0,h.P1)(f,(function(t){return t.isLoading})),v=((0,h.P1)(f,(function(t){return t.error})),(0,h.P1)(f,(function(t){return t.filterTerm})),n(1686)),x=n(184),_=function(){var t=(0,s.cI)(),e=t.register,n=t.handleSubmit,h=t.reset,f=t.formState.errors,p=(0,c.I0)(),_=(0,c.v9)(m);(0,a.useEffect)((function(){p((0,i.yF)())}),[p]);return(0,x.jsx)("div",{children:(0,x.jsxs)("form",{className:u,onSubmit:n((function(t){var e={name:t.name,number:t.number};if(_.find((function(t){return t.name===e.name})))return v.Notify.failure("".concat(e.name," is already in contacts"));p((0,i.uK)(e)),h()})),children:[(0,x.jsxs)("label",{className:o,children:[(0,x.jsx)("span",{children:"Name:"}),(0,x.jsx)("input",(0,r.Z)((0,r.Z)({className:l},e("name",{required:!0})),{},{type:"text"})),f.name&&(0,x.jsx)("span",{children:"This field is required"})]}),(0,x.jsxs)("label",{className:o,children:[(0,x.jsx)("span",{children:"Number:"}),(0,x.jsx)("input",(0,r.Z)((0,r.Z)({className:l},e("number",{required:!0})),{},{type:"text"})),f.number&&(0,x.jsx)("span",{children:"This field is required"})]}),(0,x.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})})},j=n(8273),b=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(j.g4,{height:"80",width:"80",radius:"9",color:"black",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},visible:!0})})},C=function(t){return t.filter},g="ContactList_list__csErn",N="ContactList_listItem__SptUx",w="ContactList_deleteButton__3hT3n",y="ContactList_contactContainer_right__XOVTR",k=function(){var t=(0,c.I0)(),e=(0,c.v9)(m),n=(0,c.v9)(p),r=function(t,e){return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,(0,c.v9)(C));(0,a.useEffect)((function(){t((0,i.yF)())}),[t]);return(0,x.jsxs)("div",{children:[n&&(0,x.jsx)(b,{}),(0,x.jsx)("ul",{className:g,children:Array.isArray(e)&&(null===r||void 0===r?void 0:r.map((function(e){return(0,x.jsxs)("li",{className:N,children:[(0,x.jsx)("h3",{children:e.name}),(0,x.jsxs)("div",{className:y,children:[(0,x.jsx)("p",{children:e.number}),(0,x.jsx)("button",{className:w,onClick:function(){return n=e.id,void t((0,i.GK)(n));var n},children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[" ",(0,x.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"})," ",(0,x.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})," "]})})]})]},e.id)})))})]})},F="Filter_filterContainer__8G57N",V="Filter_filterField__hjFfe",Z="Filter_filterInput__1Cysk",L=n(6895),I=function(){var t=(0,c.I0)(),e=(0,c.v9)(C);return(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("p",{className:V,children:"Find contact by name"}),(0,x.jsx)("input",{className:Z,name:"filter",type:"text",id:"filter",value:e,onChange:function(e){return t((0,L.T)(e.target.value))}})]})},T=n(5861),P=n(4687),z=n.n(P),S=n(6382),A=n(1243);A.Z.defaults.baseURL="https://653fa39c9e8bd3be29e0f4f2.mockapi.io/api/v1";var W=(0,S.hg)("contacts/fetchContacts",function(){var t=(0,T.Z)(z().mark((function t(e,n){var r,a;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,A.Z.get("/contacts");case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),q=((0,S.hg)("contacts/addContact",function(){var t=(0,T.Z)(z().mark((function t(e,n){var r,a,s,c;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,a=e.phone,s=n.rejectWithValue,t.prev=2,t.next=5,A.Z.post("/contacts",{name:r,phone:a});case 5:return c=t.sent,t.abrupt("return",c.data);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",s(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),(0,S.hg)("contacts/deleteContact",function(){var t=(0,T.Z)(z().mark((function t(e,n){var r,a;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,A.Z.delete("/contacts/".concat(e));case 4:return a=t.sent,t.abrupt("return",a.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),"ContactsPage_container__jIags"),E="ContactsPage_sectionContainer__7Wvpj",H="ContactsPage_title__TdWmn",M=function(){var t=(0,c.I0)();return(0,a.useEffect)((function(){t(W())}),[t]),(0,x.jsxs)("div",{className:q,children:[(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)("h2",{className:H,children:"Add new contact"}),(0,x.jsx)(_,{})]}),(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)("h2",{className:H,children:"Contacts list"}),(0,x.jsx)(I,{}),(0,x.jsx)(k,{})]})]})},U=M}}]);
//# sourceMappingURL=111.2c4cf926.chunk.js.map