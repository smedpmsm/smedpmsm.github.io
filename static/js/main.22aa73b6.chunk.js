(this["webpackJsonpapp-vacinas"]=this["webpackJsonpapp-vacinas"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),s=a.n(i);a(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,172)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},r=a(35),l=a(11),d=a(12),j=a(151),b=a(148),p=a(150),u=a(54),h=a(157),O=a(152),x=a(168),m=a(145),v=a(158),f=a(2),g=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},buttonProgress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"}}}));var w=function(){var e=g(),t=Object(l.f)(),a=c.a.useState(!1),n=Object(d.a)(a,2),i=n[0],s=n[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{position:"static",children:Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{variant:"h6",className:e.title,children:"Vacinas"})})}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(O.a,{}),Object(f.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var a=e.target.elements.user.value,n=e.target.elements.password.value;if(!i){s(!0);var c=new URLSearchParams;c.append("login",a),c.append("password",n),c.append("type","doLogin"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:c}).then((function(e){return e.json().then((function(e){console.log(e),s(!1),t.push("/selecao",{login:a,grupos:e.data.grupos,vacinas:e.data.vacinas,lotes:e.data.lotes})}))}))}},children:[Object(f.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user",label:"Usu\xe1rio",name:"user",autoComplete:"user",autoFocus:!0}),Object(f.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password"}),Object(f.jsxs)("div",{className:e.wrapper,children:[Object(f.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:i,className:e.submit,children:"Entrar"}),i&&Object(f.jsx)(v.a,{size:24,className:e.buttonProgress})]})]})]})]})},C=a(64),N=a(170),S=a(160),y=a(167),k=a(169),D=a(159),P=a(155),A=a(165),L=Object(m.a)((function(e){return{stepper:{position:"fixed",bottom:0,width:"100%"},buttons:{position:"fixed",bottom:100,right:20},formControl:{margin:e.spacing(1),minWidth:200},buttonConfirmar:{position:"fixed",bottom:100,left:"50%",width:120,"margin-left":"-60px"}}}));var T=function(e){var t=L(),a=c.a.useState(0),n=Object(d.a)(a,2),i=n[0],s=n[1],o=["Selecione o grupo","Selecione a vacina","Selecione o lote"],r=c.a.useState(""),x=Object(d.a)(r,2),m=x[0],v=x[1],g=c.a.useState(""),w=Object(d.a)(g,2),T=w[0],U=w[1],V=c.a.useState(""),F=Object(d.a)(V,2),G=F[0],W=F[1];console.log(e.location.state);var _=e.location.state.login,B=e.location.state.grupos,I=e.location.state.vacinas,R=e.location.state.lotes,E=[m,T,G],H=Object(l.f)(),K=function(e){v(e.target.value)},Y=function(e){U(e.target.value)},Z=function(e){W(e.target.value)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(O.a,{}),Object(f.jsx)(b.a,{position:"static",children:Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{variant:"h6",className:t.title,children:"Vacinas"})})}),i===o.length?Object(f.jsxs)(j.a,{children:[Object(f.jsxs)("p",{children:["Grupo: ",m]}),Object(f.jsxs)("p",{children:["Vacina: ",T]}),Object(f.jsxs)("p",{children:["Lote: ",G]}),Object(f.jsx)("div",{className:t.centerDiv,children:Object(f.jsx)(h.a,{variant:"contained",color:"primary",className:t.buttonConfirmar,onClick:function(e){H.push("/listavacinados",{login:_,grupo:m,vacina:T,lote:G})},children:"Confirmar"})})]}):Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{style:{textAlign:"center"},children:function(e){switch(e){case 0:return Object(f.jsxs)(P.a,{className:t.formControl,children:[Object(f.jsx)(k.a,{id:"grupo-select-label",children:"Grupo"}),Object(f.jsx)(A.a,{labelId:"grupo-select-label",id:"grupo-select",value:m,onChange:K,children:B.map((function(e){return Object(f.jsx)(D.a,{value:e,children:e},e)}))})]});case 1:return Object(f.jsxs)(P.a,{className:t.formControl,children:[Object(f.jsx)(k.a,{id:"vacina-select-label",children:"Vacina"}),Object(f.jsx)(A.a,{labelId:"vacina-select-label",id:"vacina-select",value:T,onChange:Y,children:I.map((function(e){return Object(f.jsx)(D.a,{value:e,children:e},e)}))})]});case 2:return Object(f.jsxs)(P.a,{className:t.formControl,children:[Object(f.jsx)(k.a,{id:"lote-select-label",children:"Lote"}),Object(f.jsx)(A.a,{labelId:"lote-select-label",id:"lote-select",value:G,onChange:Z,children:R.map((function(e){return Object(f.jsx)(D.a,{value:e,children:e},e)}))})]});default:return"Unknown step"}}(i)}),Object(f.jsxs)("div",{className:t.buttons,children:[Object(f.jsx)(h.a,{disabled:0===i,onClick:function(){s((function(e){return e+-1}))},children:"Voltar"}),Object(f.jsx)(h.a,{disabled:""===E[i],variant:"contained",color:"primary",onClick:function(){s((function(e){return e+1}))},children:"Pr\xf3ximo"})]})]}),Object(f.jsx)("div",{className:t.stepper,children:Object(f.jsx)(N.a,{activeStep:i,children:o.map((function(e,t){return Object(f.jsx)(S.a,Object(C.a)(Object(C.a)({},{}),{},{children:Object(f.jsx)(y.a,{children:e})}),e)}))})})]})},U=a(161),V=a(162),F=a(163),G=a(156),W=a(114),_=a(164),B=Object(m.a)((function(e){return{card:{marginTop:"20px"},buttonDiv:{position:"fixed",bottom:20,textAlign:"center",width:"100%"},buttonAdd:{width:"100px"}}}));var I=function(e){var t=B(),a=e.location.state.login,n=e.location.state.grupo,c=e.location.state.vacina,i=e.location.state.lote,s=Object(l.f)();return Object(f.jsxs)("div",{children:[Object(f.jsx)(O.a,{}),Object(f.jsx)(b.a,{position:"static",children:Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{variant:"h6",children:"Vacinas"})})}),Object(f.jsx)(U.a,{className:t.card,children:Object(f.jsxs)(V.a,{children:[Object(f.jsxs)("p",{children:["Grupo: ",n]}),Object(f.jsxs)("p",{children:["Vacina: ",c]}),Object(f.jsxs)("p",{children:["Lote: ",i]})]})}),Object(f.jsx)(F.a,{variant:"middle"}),Object(f.jsx)(u.a,{variant:"h6",children:"Registros de vacina\xe7ao"}),Object(f.jsx)(G.a,{dense:!0,children:[].map((function(e){return Object(f.jsx)(W.a,{button:!0,divider:!0,children:Object(f.jsx)(_.a,{primary:e.nome,secondary:e.cpf})},e.cpf)}))}),Object(f.jsx)("div",{className:t.buttonDiv,children:Object(f.jsx)(h.a,{variant:"contained",color:"primary",className:t.buttonAdd,onClick:function(){s.push("/vacinar",{login:a,grupo:n,vacina:c,lote:i})},children:"Adicionar"})})]})},R=a(166),E=a(75),H=a.n(E),K=Object(m.a)((function(e){return{divCenter:{width:"100%",textAlign:"center"},tfCpf:{width:"90%"},button:{marginTop:"20px"},pacienteDiv:{paddingLeft:"20px"},buttonProgress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var Y=function(e){var t=K(),a=(Object(l.f)(),c.a.useState(!1)),n=Object(d.a)(a,2),i=n[0],s=n[1],o=c.a.useState(!1),r=Object(d.a)(o,2),j=r[0],m=r[1],g=c.a.useState(!1),w=Object(d.a)(g,2),C=w[0],N=w[1],S=c.a.useState(),y=Object(d.a)(S,2),k=y[0],D=y[1],P=c.a.useState(),A=Object(d.a)(P,2),L=A[0],T=A[1],U=c.a.useState(),V=Object(d.a)(U,2),G=V[0],W=V[1],_=c.a.useState(),B=Object(d.a)(_,2),I=B[0],E=B[1],Y=c.a.useState(),Z=Object(d.a)(Y,2),Q=Z[0],q=Z[1],z=c.a.useState(),J=Object(d.a)(z,2),$=J[0],M=J[1],X=new Date,ee=c.a.useState(!1),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],ce=c.a.useState(""),ie=Object(d.a)(ce,2),se=ie[0],oe=ie[1],re=c.a.useState(!1),le=Object(d.a)(re,2),de=le[0],je=le[1],be=function(){ne(!0)},pe=function(){ne(!1)},ue=Object(f.jsxs)("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},className:t.paper,children:[Object(f.jsxs)("h2",{id:"simple-modal-title",children:["Cadastrar ",se,"\xaa dose"]}),Object(f.jsxs)("div",{id:"simple-modal-description",children:[Object(f.jsxs)("p",{children:["Grupo: ",e.location.state.grupo]}),Object(f.jsxs)("p",{children:["Vacina: ",e.location.state.vacina]}),Object(f.jsxs)("p",{children:["Lote: ",e.location.state.lote]}),Object(f.jsxs)("p",{children:["Data: ",X.toLocaleDateString()]}),Object(f.jsx)("div",{className:t.divCenter,children:Object(f.jsx)(h.a,{variant:"contained",color:"primary",className:t.button,disabled:de,onClick:function(){if(!de){je(!0);var t=new URLSearchParams;t.append("login",e.location.state.login),t.append("cpf",k),t.append("time",X),t.append("grupo",e.location.state.grupo),t.append("vacina",e.location.state.vacina),t.append("lote",e.location.state.lote),t.append("dose",se),t.append("type","setVacinacao"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:t}).then((function(t){return t.json().then((function(t){console.log(t),t.success?(1===se?q([e.location.state.login,k,X,e.location.state.grupo,e.location.state.vacina,e.location.state.lote]):2===se&&M([e.location.state.login,k,X,e.location.state.grupo,e.location.state.vacina,e.location.state.lote]),pe()):alert("Erro no cadastro"),je(!1),m(!1)}))}))}},children:"Confirmar"})})]})]});return Object(f.jsxs)("div",{children:[Object(f.jsx)(O.a,{}),Object(f.jsx)(b.a,{position:"static",children:Object(f.jsx)(p.a,{children:Object(f.jsx)(u.a,{variant:"h6",children:"Vacinas"})})}),Object(f.jsxs)("div",{className:t.divCenter,children:[Object(f.jsx)(u.a,{variant:"h6",children:"Buscar paciente"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.cpf.value;if(!j){m(!0),N(!1);var a=new URLSearchParams;a.append("cpf",t),a.append("type","getPaciente"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:a}).then((function(e){return e.json().then((function(e){console.log(e),e.success?(D(e.paciente[0]),T(e.paciente[1]),W(e.paciente[2]),E(e.paciente[3]),q(e.dose1[0]),M(e.dose2[0]),s(!0)):N(!0),m(!1)}))}))}},children:[Object(f.jsx)(x.a,{className:t.tfCpf,id:"cpf",label:"CPF",name:"cpf",error:C,helperText:C?"CPF n\xe3o encontrado.":""}),Object(f.jsxs)("div",{className:t.wrapper,children:[Object(f.jsx)(h.a,{variant:"contained",color:"primary",className:t.button,startIcon:Object(f.jsx)(H.a,{}),disabled:j,type:"submit",children:"Buscar"}),j&&Object(f.jsx)(v.a,{size:24,className:t.buttonProgress})]})]})]}),i?Object(f.jsxs)("div",{className:t.pacienteDiv,children:[Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Nome: ",L]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Data de nascimento: ",G]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Sexo: ",I]}),Object(f.jsx)(F.a,{}),Object(f.jsx)(u.a,{variant:"h6",children:"1\xaa Dose"}),Q?Object(f.jsxs)("div",{children:[Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Data: ",new Date(Q[2]).toLocaleDateString()]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Grupo: ",Q[3]]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Vacina: ",Q[4]]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Lote: ",Q[5]]})]}):Object(f.jsx)("div",{className:t.divCenter,children:Object(f.jsx)(h.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){oe(1),be()},children:"Cadastrar 1\xaa Dose"})}),Object(f.jsx)(F.a,{}),Object(f.jsx)(u.a,{variant:"h6",children:"2\xaa Dose"}),$?Object(f.jsxs)("div",{children:[Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Data: ",new Date($[2]).toLocaleDateString()]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Grupo: ",$[3]]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Vacina: ",$[4]]}),Object(f.jsxs)(u.a,{variant:"subtitle1",children:["Lote: ",$[5]]})]}):Object(f.jsx)("div",{className:t.divCenter,children:Object(f.jsx)(h.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){oe(2),be()},children:"Cadastrar 2\xaa Dose"})})]}):null,Object(f.jsx)(R.a,{open:ae,onClose:pe,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:ue})]})},Z=function(){return Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{path:"/",component:w,exact:!0}),Object(f.jsx)(l.a,{path:"/selecao",component:T}),Object(f.jsx)(l.a,{path:"/listavacinados",component:I}),Object(f.jsx)(l.a,{path:"/vacinar",component:Y})]})};s.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),o()},96:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.22aa73b6.chunk.js.map