(this["webpackJsonpapp-vacinas"]=this["webpackJsonpapp-vacinas"]||[]).push([[0],{102:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),s=a.n(o),c=(a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)}))},d=a(40),u=a(11),p=a(7),h=a(160),j=a(158),b=a(159),v=a(47),g=a(166),f=a(161),m=a(183),O=a(155),x=a(167),w=a(2),k=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},buttonProgress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"}}}));var C=function(){var e=k(),t=Object(u.f)(),a=i.a.useState(!1),o=Object(p.a)(a,2),s=o[0],c=o[1],r=i.a.useState(),l=Object(p.a)(r,2),d=l[0],O=l[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("login"),a=localStorage.getItem("token");e&&a&&t.push("/selecao")}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(j.a,{position:"static",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(v.a,{variant:"h6",className:e.title,children:"Vacina SM"})})}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(f.a,{}),Object(w.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var a=e.target.elements.user.value,n=e.target.elements.password.value;if(O(null),!s){c(!0);var i=new URLSearchParams;i.append("login",a),i.append("password",n),i.append("type","doLogin"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:i}).then((function(e){return e.json().then((function(e){console.log(e),c(!1),e.success?(localStorage.setItem("login",a),localStorage.setItem("token",e.token),t.push("/selecao")):O(e.message)}))})).catch((function(e){console.log(e),c(!1),alert("N\xe3o foi poss\xedvel conectar ao servidor.")}))}},children:[Object(w.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user",label:"Usu\xe1rio",name:"user",autoComplete:"user",autoFocus:!0,error:!!d}),Object(w.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password",error:!!d,helperText:d||""}),Object(w.jsxs)("div",{className:e.wrapper,children:[Object(w.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:s,className:e.submit,children:"Entrar"}),s&&Object(w.jsx)(x.a,{size:24,className:e.buttonProgress})]})]})]})]})},S=a(46),y=a(185),N=a(172),P=a(182),D=a(184),L=a(171),T=a(164),A=a(181),R=a(120),_=a(168),U=a(169),E=a(170),I=Object(O.a)((function(e){return{title:{flexGrow:1}}}));var W=function(e){var t=I(),a=Object(n.useState)(!1),i=Object(p.a)(a,2),o=i[0],s=i[1],c=Object(n.useState)(!1),r=Object(p.a)(c,2),l=r[0],d=r[1],h=Object(u.f)();return Object(n.useEffect)((function(){e.backButton&&s(!0),e.logoutButton&&d(!0)}),[e.backButton,e.logoutButton]),Object(w.jsx)(j.a,{position:"static",children:Object(w.jsxs)(b.a,{children:[o?Object(w.jsx)(_.a,{edge:"start",color:"inherit","aria-label":"voltar",onClick:function(){h.goBack()},children:Object(w.jsx)(U.a,{})}):null,Object(w.jsx)(v.a,{variant:"h6",className:t.title,children:"Vacina SM"}),l?Object(w.jsx)("div",{children:Object(w.jsx)(_.a,{edge:"end",color:"inherit","aria-label":"sair",onClick:function(){localStorage.removeItem("token"),h.push("/")},children:Object(w.jsx)(E.a,{})})}):null]})})},B=a(29),$=Object(O.a)((function(e){return{stepper:{position:"fixed",bottom:0,width:"100%"},buttons:{position:"fixed",bottom:100,right:20},formControl:{margin:e.spacing(1),minWidth:200},buttonConfirmar:{position:"fixed",bottom:100,left:"50%",width:120,"margin-left":"-60px"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var F=function(e){var t=$(),a=i.a.useState(0),o=Object(p.a)(a,2),s=o[0],c=o[1],r=["Selecione o grupo","Selecione a vacina","Selecione o lote"],l=i.a.useState(""),d=Object(p.a)(l,2),j=d[0],b=d[1],v=i.a.useState(""),m=Object(p.a)(v,2),O=m[0],k=m[1],C=i.a.useState(""),_=Object(p.a)(C,2),U=_[0],E=_[1],I=i.a.useState([]),F=Object(p.a)(I,2),Y=F[0],V=F[1],G=i.a.useState([]),z=Object(p.a)(G,2),X=z[0],Z=z[1],H=i.a.useState([]),K=Object(p.a)(H,2),M=K[0],q=K[1],Q=i.a.useState(!1),J=Object(p.a)(Q,2),ee=J[0],te=J[1],ae=[j,O,U],ne=Object(u.f)();Object(n.useEffect)((function(){var e=localStorage.getItem("token"),t=new B.a("Cadastros");if(t.version(3).stores({cadastros:"++id, cpf, status",selecao:"++id"}),e){te(!0);var a=new URLSearchParams;a.append("token",e),a.append("type","getGrupoVacinaLote"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:a}).then((function(e){return e.json().then((function(e){console.log(e),te(!1),e.success?(V(e.grupos.map((function(e){return e[0]})).filter((function(e,t,a){return a.indexOf(e)===t})).sort()),Z(e.vacinas.map((function(e){return e[0]}))),q(e.lotes.map((function(e){return e[0]}))),t.selecao.put({id:0,vacinas:e.vacinas.map((function(e){return e[0]})),lotes:e.lotes.map((function(e){return e[0]})),grupos:e.grupos})):(localStorage.removeItem("token"),ne.push("/"))}))})).catch((function(e){console.log(e),t.selecao.get(0).then((function(e){console.log("dbload"),e?(Z(e.vacinas),q(e.lotes),V(e.grupos.map((function(e){return e[0]})).filter((function(e,t,a){return a.indexOf(e)===t})).sort())):alert("N\xe3o foi poss\xedvel conectar ao servidor, verifique sua conex\xe3o com a internet."),te(!1)})).catch((function(e){console.log(e),alert("N\xe3o foi poss\xedvel conectar ao servidor, verifique sua conex\xe3o com a internet."),te(!1)}))}))}else ne.push("/")}),[]);var ie=function(e){b(e.target.value)},oe=function(e){k(e.target.value)},se=function(e){E(e.target.value)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(R.a,{className:t.backdrop,open:ee,children:Object(w.jsx)(x.a,{color:"inherit"})}),Object(w.jsx)(f.a,{}),Object(w.jsx)(W,{logoutButton:!0}),s===r.length?Object(w.jsxs)(h.a,{children:[Object(w.jsxs)("p",{children:["Grupo: ",j]}),Object(w.jsxs)("p",{children:["Vacina: ",O]}),Object(w.jsxs)("p",{children:["Lote: ",U]}),Object(w.jsx)("div",{className:t.centerDiv,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.buttonConfirmar,onClick:function(e){ne.push("/cadastros",{grupo:j,vacina:O,lote:U})},children:"Confirmar"})})]}):Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{style:{textAlign:"center"},children:function(e){switch(e){case 0:return Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(D.a,{id:"grupo-select-label",children:"Grupo"}),Object(w.jsx)(A.a,{labelId:"grupo-select-label",id:"grupo-select",value:j,onChange:ie,children:Y.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]});case 1:return Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(D.a,{id:"vacina-select-label",children:"Vacina"}),Object(w.jsx)(A.a,{labelId:"vacina-select-label",id:"vacina-select",value:O,onChange:oe,children:X.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]});case 2:return Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(D.a,{id:"lote-select-label",children:"Lote"}),Object(w.jsx)(A.a,{labelId:"lote-select-label",id:"lote-select",value:U,onChange:se,children:M.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]});default:return"Unknown step"}}(s)}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:0===s,onClick:function(){c((function(e){return e+-1}))},children:"Voltar"}),Object(w.jsx)(g.a,{disabled:""===ae[s],variant:"contained",color:"primary",onClick:function(){c((function(e){return e+1}))},children:"Pr\xf3ximo"})]})]}),Object(w.jsx)("div",{className:t.stepper,children:Object(w.jsx)(y.a,{activeStep:s,children:r.map((function(e,t){return Object(w.jsx)(N.a,Object(S.a)(Object(S.a)({},{}),{},{children:Object(w.jsx)(P.a,{children:e})}),e)}))})})]})},Y=a(173),V=a(165),G=a(119),z=a(174),X=Object(O.a)((function(e){return{card:{marginTop:"20px"},buttonDiv:{position:"fixed",bottom:20,textAlign:"center",width:"100%"},buttonAdd:{width:"100px"},listDiv:{paddingBottom:"40px"},list:{maxHeight:"80vh",overflow:"auto"},progress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var Z=function(e){var t=X(),a=Object(n.useState)(),i=Object(p.a)(a,2),o=i[0],s=i[1],c=Object(n.useState)(),r=Object(p.a)(c,2),l=r[0],d=r[1],h=Object(n.useState)(),j=Object(p.a)(h,2),b=j[0],m=j[1],O=Object(n.useState)([]),k=Object(p.a)(O,2),C=k[0],S=k[1],y=Object(n.useState)(!1),N=Object(p.a)(y,2),P=N[0],D=N[1],L=Object(u.f)();return Object(n.useEffect)((function(){var t=localStorage.getItem("token");if(t)if(e.location.state){D(!0),s(e.location.state.grupo),d(e.location.state.vacina),m(e.location.state.lote);var a=new URLSearchParams;a.append("token",t),a.append("grupo",e.location.state.grupo),a.append("vacina",e.location.state.vacina),a.append("lote",e.location.state.lote),a.append("type","getListGrupoVacinaLote"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:a}).then((function(e){return e.json().then((function(e){console.log(e),D(!1),e.success?S(e.vacinacoesPaciente):(localStorage.removeItem("token"),L.push("/"))}))})).catch((function(e){console.log(e),D(!1),alert("N\xe3o foi poss\xedvel conectar ao servidor.")}))}else L.push("/selecao");else L.push("/")}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(W,{backButton:!0,logoutButton:!0}),Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{variant:"h6",children:["Grupo: ",o]}),Object(w.jsxs)(v.a,{variant:"h6",children:["Vacina: ",l]}),Object(w.jsxs)(v.a,{variant:"h6",children:["Lote: ",b]})]}),Object(w.jsx)(Y.a,{variant:"middle"}),Object(w.jsxs)("div",{className:t.listDiv,children:[Object(w.jsx)(v.a,{variant:"h6",children:"Registros de vacina\xe7ao"}),Object(w.jsx)(V.a,{dense:!0,className:t.list,children:C.map((function(e){return Object(w.jsx)(G.a,{button:!0,divider:!0,onClick:function(){return t=e[7],void L.push("/vacinar",{grupo:o,vacina:l,lote:b,cpf:t});var t},children:Object(w.jsx)(z.a,{primary:e[8],secondary:"CPF: "+(t=e[7],t.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1"))})},e[7]);var t}))}),P&&Object(w.jsx)(x.a,{size:24,className:t.progress})]}),Object(w.jsx)("div",{className:t.buttonDiv,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.buttonAdd,onClick:function(){L.push("/vacinar",{grupo:o,vacina:l,lote:b})},children:"Adicionar"})})]})},H=a(122),K=a(77),M=a.n(K),q=Object(O.a)((function(e){return{divCenter:{width:"100%",textAlign:"center"},tfCpf:{width:"90%"},button:{marginTop:"20px"},pacienteDiv:{paddingLeft:"20px"},buttonProgress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var Q=function(e){var t=q(),a=Object(u.f)(),o=i.a.useState(!1),s=Object(p.a)(o,2),c=s[0],r=s[1],l=i.a.useState(!1),d=Object(p.a)(l,2),h=d[0],j=d[1],b=i.a.useState(!1),O=Object(p.a)(b,2),k=O[0],C=O[1],S=i.a.useState(),y=Object(p.a)(S,2),N=y[0],P=y[1],D=i.a.useState(),L=Object(p.a)(D,2),T=L[0],A=L[1],R=i.a.useState(),_=Object(p.a)(R,2),U=_[0],E=_[1],I=i.a.useState(),$=Object(p.a)(I,2),F=$[0],V=$[1],G=i.a.useState(),z=Object(p.a)(G,2),X=z[0],Z=z[1],K=i.a.useState(),Q=Object(p.a)(K,2),J=Q[0],ee=Q[1],te=i.a.useState(),ae=Object(p.a)(te,2),ne=ae[0],ie=ae[1],oe=i.a.useState(),se=Object(p.a)(oe,2),ce=se[0],re=se[1],le=i.a.useState(),de=Object(p.a)(le,2),ue=de[0],pe=de[1],he=i.a.useState(),je=Object(p.a)(he,2),be=je[0],ve=je[1],ge=new Date,fe=i.a.useState(!1),me=Object(p.a)(fe,2),Oe=me[0],xe=me[1],we=i.a.useState(""),ke=Object(p.a)(we,2),Ce=ke[0],Se=ke[1],ye=i.a.useState(!1),Ne=Object(p.a)(ye,2),Pe=Ne[0],De=Ne[1];Object(n.useEffect)((function(){var t=localStorage.getItem("token"),n=localStorage.getItem("login");t&&n?(ve(n),e.location.state?(ie(e.location.state.grupo),re(e.location.state.vacina),pe(e.location.state.lote),e.location.state.cpf&&Le(null,e.location.state.cpf)):a.push("/selecao")):a.push("/")}),[]);var Le=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a?t=a:(e.preventDefault(),t=e.target.elements.cpf.value.replace(/\D/g,"")),!h){j(!0),C(!1);var n=new URLSearchParams;n.append("cpf",t),n.append("type","getPaciente"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:n}).then((function(e){return e.json().then((function(e){console.log(e),e.success?(P(e.paciente[0]),A(e.paciente[1]),E(e.paciente[2]),V(e.paciente[3]),Z(e.dose1[0]),ee(e.dose2[0]),r(!0)):C(!0),j(!1)}))}))}},Te=function(){xe(!0)},Ae=function(){xe(!1)},Re=Object(w.jsxs)("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},className:t.paper,children:[Object(w.jsxs)("h2",{id:"simple-modal-title",children:["Cadastrar ",Ce,"\xaa dose"]}),Object(w.jsxs)("div",{id:"simple-modal-description",children:[Object(w.jsxs)("p",{children:["Grupo: ",ne]}),Object(w.jsxs)("p",{children:["Vacina: ",ce]}),Object(w.jsxs)("p",{children:["Lote: ",ue]}),Object(w.jsxs)("p",{children:["Data: ",ge.toLocaleDateString()]}),Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,disabled:Pe,onClick:function(){if(!Pe){De(!0);var e=new URLSearchParams;e.append("login",be),e.append("cpf",N),e.append("time",ge),e.append("grupo",ne),e.append("vacina",ce),e.append("lote",ue),e.append("dose",Ce),e.append("type","setVacinacao"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:e}).then((function(e){return e.json().then((function(e){console.log(e),e.success?(1===Ce?Z([be,N,ge,ne,ce,ue]):2===Ce&&ee([be,N,ge,ne,ce,ue]),Ae()):alert("Erro no cadastro"),De(!1),j(!1)}))})).catch((function(e){console.log(e.message);var t=new B.a("Vacinas");t.version(1).stores({vacinacoes:"login, cpf, time, grupo, vacina, lote, dose"}),t.vacinacoes.add({login:be,cpf:N,time:ge,grupo:ne,vacina:ce,lote:ue,dose:Ce}).then((function(e){"serviceWorker"in navigator&&"SyncManager"in window?navigator.serviceWorker.ready.then((function(e){return e.sync.register("sendVacinacao")})).catch((function(){alert("Erro no envio do registro de vacina\xe7\xe3o")})):alert("Erro no envio do registro de vacina\xe7\xe3o")}))}))}},children:"Confirmar"})})]})]});return Object(w.jsxs)("div",{children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(W,{backButton:!0,logoutButton:!0}),Object(w.jsxs)("div",{className:t.divCenter,children:[Object(w.jsx)(v.a,{variant:"h6",children:"Buscar paciente"}),Object(w.jsxs)("form",{onSubmit:Le,children:[Object(w.jsx)(m.a,{className:t.tfCpf,id:"cpf",label:"CPF",name:"cpf",inputProps:{maxLength:14},error:k,helperText:k?"CPF n\xe3o encontrado.":"",onChange:function(e){e.target.value=e.target.value.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1")}}),Object(w.jsxs)("div",{className:t.wrapper,children:[Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,startIcon:Object(w.jsx)(M.a,{}),disabled:h,type:"submit",children:"Buscar"}),h&&Object(w.jsx)(x.a,{size:24,className:t.buttonProgress})]})]})]}),c?Object(w.jsxs)("div",{className:t.pacienteDiv,children:[Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Nome: ",T]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Data de nascimento: ",U]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Sexo: ",F]}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(v.a,{variant:"h6",children:"1\xaa Dose"}),X?Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Data: ",new Date(X[2]).toLocaleDateString()]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Grupo: ",X[3]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Vacina: ",X[4]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Lote: ",X[5]]})]}):Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){Se(1),Te()},children:"Cadastrar 1\xaa Dose"})}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(v.a,{variant:"h6",children:"2\xaa Dose"}),J?Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Data: ",new Date(J[2]).toLocaleDateString()]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Grupo: ",J[3]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Vacina: ",J[4]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Lote: ",J[5]]})]}):Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){Se(2),Te()},children:"Cadastrar 2\xaa Dose"})})]}):null,Object(w.jsx)(H.a,{open:Oe,onClose:Ae,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Re})]})},J=a(175),ee=a(176),te=a(177),ae=a(178),ne=a(179),ie=a(180),oe=function(e){return e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1")},se=function(e){return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{4})\d+?$/,"$1")},ce=function e(t){return t instanceof e?t:this instanceof e?void(this._wrapped=t):new e(t)};function re(e,t){var a=new Image;a.onload=function(){t.cxt.clearRect(0,0,this.width,this.height),t.cxt.drawImage(a,0,0)},a.src=e}(ce.Canvas=function(e,t){this.canvas=e,this.cxt=e.getContext("2d"),this.cxt.lineCap="round",this.cxt.lineJoin="round",this.lineWidth=t||3,this.width=e.width,this.height=e.height,this.drawing=!1,this.handwritingX=[],this.handwritingY=[],this.trace=[],this.options={},this.step=[],this.redo_step=[],this.redo_trace=[],this.allowUndo=!1,this.allowRedo=!1,e.addEventListener("mousedown",this.mouseDown.bind(this)),e.addEventListener("mousemove",this.mouseMove.bind(this)),e.addEventListener("mouseup",this.mouseUp.bind(this)),e.addEventListener("touchstart",this.touchStart.bind(this)),e.addEventListener("touchmove",this.touchMove.bind(this)),e.addEventListener("touchend",this.touchEnd.bind(this)),this.callback=void 0,this.recognize=ce.recognize}).prototype.set_Undo_Redo=function(e,t){this.allowUndo=e,this.allowRedo=!!e&&t,this.allowUndo||(this.step=[],this.redo_step=[],this.redo_trace=[])},ce.Canvas.prototype.setLineWidth=function(e){this.lineWidth=e},ce.Canvas.prototype.setCallBack=function(e){this.callback=e},ce.Canvas.prototype.setOptions=function(e){this.options=e},ce.Canvas.prototype.mouseDown=function(e){this.cxt.lineWidth=this.lineWidth,this.handwritingX=[],this.handwritingY=[],this.drawing=!0,this.cxt.beginPath();var t=this.canvas.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top;this.cxt.moveTo(a,n),this.handwritingX.push(a),this.handwritingY.push(n)},ce.Canvas.prototype.mouseMove=function(e){if(this.drawing){var t=this.canvas.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top;this.cxt.lineTo(a,n),this.cxt.stroke(),this.handwritingX.push(a),this.handwritingY.push(n)}},ce.Canvas.prototype.mouseUp=function(){var e=[];e.push(this.handwritingX),e.push(this.handwritingY),e.push([]),this.trace.push(e),this.drawing=!1,this.allowUndo&&this.step.push(this.canvas.toDataURL())},ce.Canvas.prototype.touchStart=function(e){e.preventDefault(),this.cxt.lineWidth=this.lineWidth,this.handwritingX=[],this.handwritingY=[];var t=document.documentElement,a=this.canvas.getBoundingClientRect(),n=a.top+window.pageYOffset-t.clientTop,i=a.left+window.pageXOffset-t.clientLeft,o=e.changedTouches[0],s=o.pageX-i,c=o.pageY-n;this.handwritingX.push(s),this.handwritingY.push(c),this.cxt.beginPath(),this.cxt.moveTo(s,c)},ce.Canvas.prototype.touchMove=function(e){e.preventDefault();var t=e.targetTouches[0],a=document.documentElement,n=this.canvas.getBoundingClientRect(),i=n.top+window.pageYOffset-a.clientTop,o=n.left+window.pageXOffset-a.clientLeft,s=t.pageX-o,c=t.pageY-i;this.handwritingX.push(s),this.handwritingY.push(c),this.cxt.lineTo(s,c),this.cxt.stroke()},ce.Canvas.prototype.touchEnd=function(e){var t=[];t.push(this.handwritingX),t.push(this.handwritingY),t.push([]),this.trace.push(t),this.allowUndo&&this.step.push(this.canvas.toDataURL())},ce.Canvas.prototype.undo=function(){!this.allowUndo||this.step.length<=0||(1===this.step.length?this.allowRedo&&(this.redo_step.push(this.step.pop()),this.redo_trace.push(this.trace.pop()),this.cxt.clearRect(0,0,this.width,this.height)):(this.allowRedo?(this.redo_step.push(this.step.pop()),this.redo_trace.push(this.trace.pop())):(this.step.pop(),this.trace.pop()),re(this.step.slice(-1)[0],this)))},ce.Canvas.prototype.redo=function(){!this.allowRedo||this.redo_step.length<=0||(this.step.push(this.redo_step.pop()),this.trace.push(this.redo_trace.pop()),re(this.step.slice(-1)[0],this))},ce.Canvas.prototype.erase=function(){this.cxt.clearRect(0,0,this.width,this.height),this.step=[],this.redo_step=[],this.redo_trace=[],this.trace=[]},ce.recognize=function(e,t,a){ce.Canvas&&this instanceof ce.Canvas?(e=this.trace,t=this.options,a=this.callback):t||(t={});var n=JSON.stringify({options:"enable_pre_space",requests:[{writing_guide:{writing_area_width:t.width||this.width||void 0,writing_area_height:t.height||this.width||void 0},ink:e,language:t.language||"zh_TW"}]}),i=new XMLHttpRequest;i.addEventListener("readystatechange",(function(){if(4===this.readyState)switch(this.status){case 200:var e,n=JSON.parse(this.responseText);1===n.length?a(void 0,new Error(n[0])):e=n[1][0][1],t.numOfWords&&(e=e.filter((function(e){return e.length===t.numOfWords}))),t.numOfReturn&&(e=e.slice(0,t.numOfReturn)),a(e,void 0);break;case 403:a(void 0,new Error("access denied"));break;case 503:a(void 0,new Error("can't connect to recognition server"));break;default:console.log("Status inv\xe1lido")}})),i.open("POST","https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8"),i.setRequestHeader("content-type","application/json"),i.send(n)};var le=ce,de=Object(O.a)((function(e){return{btGroup:{marginTop:"10px"},canvas:{display:"block",width:"300px",height:"300px",border:"2px solid",cursor:"crosshair",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}}}));var ue=function(e){var t=de(),a=i.a.useRef(),o=i.a.useRef(),s=function(e,t){if(t)throw t;console.log(e)};return Object(n.useEffect)((function(){o.current=new le.Canvas(a.current),o.current.setLineWidth(3),o.current.setOptions({language:"pt_BR"}),o.current.setCallBack(s),e.setCanvas(a)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("canvas",{ref:a,className:t.canvas,width:300,height:300}),Object(w.jsx)(g.a,{onClick:function(e){o.current.erase()},variant:"outlined",color:"primary",className:t.btGroup,children:"Apagar"})]})},pe=a(78),he=a.n(pe),je=(a(114),function(e){var t,a=0;if("00000000000"===(e=e.replace(/\D/g,"")))return!1;for(var n=1;n<=9;n++)a+=parseInt(e.substring(n-1,n))*(11-n);if(10!==(t=10*a%11)&&11!==t||(t=0),t!==parseInt(e.substring(9,10)))return!1;a=0;for(var i=1;i<=10;i++)a+=parseInt(e.substring(i-1,i))*(12-i);return 10!==(t=10*a%11)&&11!==t||(t=0),t===parseInt(e.substring(10,11))}),be=function(e){if(!/^\d\d\/\d\d\/\d\d\d\d$/.test(e))return!1;var t=e.split("/").map((function(e){return parseInt(e,10)}));t[1]-=1;var a=new Date(t[2],t[1],t[0]);return a.getMonth()===t[1]&&a.getDate()===t[0]&&a.getFullYear()===t[2]},ve=Object(O.a)((function(e){return{divCenter:{width:"100%",textAlign:"center"},btGroup:{paddingTop:"10px"},textField:{display:"block",width:"90%",maxWidth:"500px",marginLeft:"auto",marginRight:"auto"},canvas:{display:"block",width:"300px",height:"300px",border:"2px solid",cursor:"crosshair",marginTop:"10px",marginLeft:"auto",marginRight:"auto"},buttons:{position:"absolute",bottom:10,left:"50%",width:200,"margin-left":"-100px"},stepper:{width:"100%"},keyboard:{position:"absolute",width:"100%",bottom:0},kbTheme:{fontSize:"23px"},error:{color:"red"},progress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:e.spacing(1),width:"90%"}}}));var ge=function(e){var t=ve(),a=Object(u.f)(),o=i.a.useState(""),s=Object(p.a)(o,2),c=s[0],r=s[1],l=i.a.useState(""),d=Object(p.a)(l,2),h=d[0],j=d[1],b=i.a.useState(""),f=Object(p.a)(b,2),O=f[0],k=f[1],C=i.a.useState(!1),R=Object(p.a)(C,2),_=R[0],U=R[1],E=i.a.useState(!1),I=Object(p.a)(E,2),$=I[0],F=I[1],Y=i.a.useState(!1),V=Object(p.a)(Y,2),G=V[0],z=V[1],X=i.a.useState(),Z=Object(p.a)(X,2),H=Z[0],K=Z[1],M=i.a.useState(),q=Object(p.a)(M,2),Q=q[0],ce=q[1],re=i.a.useState(0),le=Object(p.a)(re,2),de=le[0],pe=le[1],ge=["CPF","Nome","Data de nascimento","Assinatura","Categoria"],fe=[h,O,c],me=i.a.useRef(),Oe=i.a.useState("numericCPF"),xe=Object(p.a)(Oe,2),we=xe[0],ke=xe[1],Ce=i.a.useState("nameInput"),Se=Object(p.a)(Ce,2),ye=Se[0],Ne=Se[1],Pe=i.a.useState(!1),De=Object(p.a)(Pe,2),Le=De[0],Te=De[1],Ae=i.a.useState(),Re=Object(p.a)(Ae,2),_e=Re[0],Ue=Re[1],Ee=i.a.useState(!1),Ie=Object(p.a)(Ee,2),We=Ie[0],Be=Ie[1],$e=Object(J.a)("(min-height:590px)"),Fe=i.a.useState(""),Ye=Object(p.a)(Fe,2),Ve=Ye[0],Ge=Ye[1],ze=i.a.useState([]),Xe=Object(p.a)(ze,2),Ze=Xe[0],He=Xe[1],Ke=new B.a("Cadastros");Ke.version(3).stores({cadastros:"++id, cpf, status",selecao:"++id"}),Object(n.useEffect)((function(){var t=localStorage.getItem("token");t?e.location.state?(Ue(t),Ke.selecao.get(0).then((function(t){var a=t.grupos.filter((function(t){return t[0]===e.location.state.grupo})).map((function(e){return e[1]})).sort();He(a)}))):a.push("/selecao"):a.push("/")}),[]);var Me=function(e){var t=e.target.value.replace(/[^A-Z\xc7 ]/g,"");j(t),me.current.setInput(t)},qe=function(e){me.current.setInput(e.target.value),e.target.value=oe(e.target.value),14!==e.target.value.length||je(e.target.value)?(e.target.value.length<14||je(e.target.value))&&F(!1):F(!0),r(e.target.value)},Qe=function(e){me.current.setInput(e.target.value),e.target.value=se(e.target.value),10!==e.target.value.length||be(e.target.value)?(e.target.value.length<10||be(e.target.value))&&z(!1):z(!0),k(e.target.value)},Je=function(){0!==de||je(c)?1!==de||h?2!==de||be(O)?(0===de?ke("default"):1===de?ke("numericDn"):3===de&&ce(H.current.toDataURL("image/png").split(";base64,")[1]),Ne(tt(de+1)),pe((function(e){return e+1}))):z(!0):U(!0):F(!0)},et=function(){Ne(tt(de-1)),1===de&&ke("numericCPF"),2===de&&ke("default"),3===de&&ke("numericDn"),pe((function(e){return e-1}))},tt=function(e){switch(e){case 0:return"nameCpf";case 1:return"nameInput";case 2:return"nameDn"}},at=function(){console.log(we);var e="default"===we?"shift":"default";console.log(e),ke(e)},nt=function(){Te(!1)},it=function(e){Ge(e.target.value)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(W,{backButton:!0,logoutButton:!0}),$e&&Object(w.jsx)("div",{className:t.stepper,children:Object(w.jsx)(y.a,{activeStep:de,alternativeLabel:!0,children:ge.map((function(e,t){return Object(w.jsx)(N.a,Object(S.a)(Object(S.a)({},{}),{},{children:Object(w.jsx)(P.a,{children:e})}),e)}))})}),de===ge.length?Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{children:["Vacina: ",e.location.state.vacina]}),Object(w.jsxs)(v.a,{children:["Lote: ",e.location.state.lote]}),Object(w.jsxs)(v.a,{children:["Grupo: ",e.location.state.grupo]}),Object(w.jsxs)(v.a,{children:["Categoria: ",Ve]}),Object(w.jsxs)(v.a,{children:["CPF: ",je(c)?c:Object(w.jsx)("span",{className:t.error,children:"CPF inv\xe1lido"})]}),Object(w.jsxs)(v.a,{children:["Nome: ",h||Object(w.jsx)("span",{className:t.error,children:"N\xe3o preenchido"})]}),Object(w.jsxs)(v.a,{children:["Data de Nascimento: ",be(O)?O:Object(w.jsx)("span",{className:t.error,children:"Data inv\xe1lida"})]}),Object(w.jsxs)(v.a,{children:["Assinatura: ",!Q&&Object(w.jsx)("span",{className:t.error,children:"N\xe3o assinado"})]}),Object(w.jsx)("div",{children:Q&&Object(w.jsx)("img",{src:"data:image/png;base64,"+Q,alt:"assinatura"})}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:We,onClick:et,children:"Voltar"}),Object(w.jsx)(g.a,{disabled:We,variant:"contained",color:"primary",className:t.button,onClick:function(){var t;h&&be(O)&&je(c)&&Q?(Be(!0),(t="pend",Ke.cadastros.add({nome:h,dn:O,cpf:c,assinatura:Q,vacina:e.location.state.vacina,lote:e.location.state.lote,grupo:e.location.state.grupo,subgrupo:Ve,time:new Date(Date.now()).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"}),status:t,token:_e})).then((function(t){var n=new URLSearchParams;n.append("token",_e),n.append("nome",h),n.append("dn",O),n.append("cpf",c),n.append("type","setCadastro"),n.append("assinatura",Q),n.append("vacina",e.location.state.vacina),n.append("lote",e.location.state.lote),n.append("grupo",e.location.state.grupo),n.append("subgrupo",Ve),n.append("time",new Date(Date.now()).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:n}).then((function(n){n.json().then((function(n){var i;n.success?(i=t,Ke.cadastros.update(i,{status:"ok"}),Be(!1),a.push("/cadastros",{vacina:e.location.state.vacina,lote:e.location.state.lote,grupo:e.location.state.grupo})):alert("N\xe3o foi poss\xedvel enviar o cadastro.")}))})).catch((function(t){console.log(t),"serviceWorker"in navigator&&"SyncManager"in window?navigator.serviceWorker.ready.then((function(t){return Be(!1),a.push("/cadastros",{vacina:e.location.state.vacina,lote:e.location.state.lote,grupo:e.location.state.grupo}),t.sync.register("sendCadastros")})).catch((function(e){Be(!1),alert("N\xe3o foi poss\xedvel armazenar o cadastro no dispositivo. Sincronia em plano de fundo n\xe3o dispon\xedvel.")})):(Be(!1),alert("N\xe3o foi poss\xedvel armazenar o cadastro no dispositivo. Service Worker n\xe3o dispon\xedvel."))}))})).catch((function(e){Be(!1),alert("N\xe3o foi poss\xedvel armazenar o cadastro no dispositivo.")}))):Te(!0)},children:"Confirmar"}),We&&Object(w.jsx)(x.a,{size:24,className:t.progress})]})]}):Object(w.jsx)("div",{children:Object(w.jsx)("div",{style:{textAlign:"center"},children:function(e){switch(e){case 0:return Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(m.a,{error:$,fullWidth:!0,id:"cpfInput",className:t.textField,label:"CPF",helperText:$?"CPF inv\xe1lido.":"",inputProps:{inputMode:"none",style:{fontSize:"23px"}},onChange:qe,value:c})});case 1:return Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(m.a,{error:_,fullWidth:!0,id:"nameInput",className:t.textField,label:"Nome",helperText:_?"Nome inv\xe1lido.":"",value:h,inputProps:{inputMode:"none",style:{fontSize:"23px"}},onChange:Me})});case 2:return Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(m.a,{error:G,fullWidth:!0,id:"dnInput",className:t.textField,label:"Data de Nascimento",helperText:G?"Data inv\xe1lida.":"",inputProps:{inputMode:"none",style:{fontSize:"23px"}},onChange:Qe,value:O})});case 3:return Object(w.jsxs)("div",{className:t.divCenter,children:[Object(w.jsx)(ue,{setCanvas:K}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:0===de,onClick:et,children:"Voltar"}),Object(w.jsx)(g.a,{disabled:""===fe[de],variant:"contained",color:"primary",onClick:Je,children:"Pr\xf3ximo"})]})]});case 4:return Object(w.jsxs)("div",{className:t.divCenter,children:[Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(D.a,{id:"vacina-select-label",children:"Categoria do grupo priorit\xe1rio"}),Object(w.jsx)(A.a,{labelId:"vacina-select-label",id:"vacina-select",value:Ve,onChange:it,children:Ze.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:0===de,onClick:et,children:"Voltar"}),Object(w.jsx)(g.a,{disabled:""===fe[de],variant:"contained",color:"primary",onClick:Je,children:"Pr\xf3ximo"})]})]});default:return"Unknown step"}}(de)})}),de<3&&Object(w.jsx)("div",{className:t.keyboard,children:Object(w.jsx)(he.a,{layout:{shift:["q w e r t y u i o p","a s d f g h j k l \xe7","z x c v b n m {backspace}","{shift} {space} {prox}"],default:["Q W E R T Y U I O P","A S D F G H J K L \xc7","Z X C V B N M {backspace}","{volt} {space} {prox}"],numericCPF:["1 2 3","4 5 6","7 8 9","0 {backspace}","{prox}"],numericDn:["1 2 3","4 5 6","7 8 9","0 {backspace}","{volt} {prox}"]},display:{"{shift}":"\u21e7","{prox}":"Pr\xf3ximo","{volt}":"Voltar","{space}":" ","{backspace}":"\u232b"},buttonAttributes:[{attribute:"style",value:"flex-basis:68%",buttons:"{space} 0"}],theme:t.kbTheme+" hg-theme-default",layoutName:we,onChange:function(e){switch(de){case 0:var t=oe(e);14!==t.length||je(t)?(t.length<14||je(t))&&F(!1):F(!0),r(t);break;case 1:j(e.replace(/[^A-Z\xc7 ]/g,""));break;case 2:var a=se(e);10!==a.length||be(a)?(a.length<10||be(a))&&z(!1):z(!0),k(a)}},onKeyPress:function(e){switch(e){case"{prox}":Je();break;case"{volt}":et();break;case"{shift}":at()}},keyboardRef:function(e){return me.current=e},inputName:ye,useMouseEvents:!0})}),Object(w.jsxs)(ee.a,{open:Le,onClose:nt,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(w.jsx)(te.a,{id:"alert-dialog-title",children:"Erro no cadastro"}),Object(w.jsx)(ae.a,{children:Object(w.jsx)(ne.a,{id:"alert-dialog-description",children:"Informe CPF, nome, data de nascimento e assinatura."})}),Object(w.jsx)(ie.a,{children:Object(w.jsx)(g.a,{onClick:nt,color:"primary",children:"OK"})})]})]})},fe=a(66),me=a.n(fe),Oe=a(79),xe=Object(O.a)((function(e){return{list:{paddingBottom:"100px"},progress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonDiv:{position:"fixed",bottom:20,textAlign:"center",width:"100%"}}}));var we=function(e){var t=xe(),a=Object(u.f)(),o=i.a.useState([]),s=Object(p.a)(o,2),c=s[0],r=s[1],l=i.a.useState(!1),d=Object(p.a)(l,2),h=d[0],j=d[1],b=i.a.useState(0),f=Object(p.a)(b,2),m=f[0],O=f[1],k=i.a.useState(0),C=Object(p.a)(k,2),S=C[0],y=C[1],N=new B.a("Cadastros");N.version(3).stores({cadastros:"++id, cpf, status",selecao:"++id"}),Object(n.useEffect)((function(){e.location.state?P():a.push("/selecao")}),[]);var P=function(){var e=Object(Oe.a)(me.a.mark((function e(){var t;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,N.cadastros.toArray();case 3:t=e.sent,r(t),O(t.length),y(t.filter((function(e){return"ok"===e.status})).length),j(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(W,{logoutButton:!0,backButton:!0}),Object(w.jsxs)("div",{children:[Object(w.jsx)(v.a,{variant:"h6",children:"Registros"}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Registrados: ",m]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Enviados: ",S]}),Object(w.jsx)(V.a,{dense:!0,className:t.list,children:c.map((function(e){return Object(w.jsx)(G.a,{button:!0,divider:!0,children:Object(w.jsx)(z.a,{primary:e.nome,secondary:"CPF: "+e.cpf+" - "+("ok"===e.status?"Enviado":"Pendente")})},e.id)}))}),h&&Object(w.jsx)(x.a,{size:24,className:t.progress})]}),Object(w.jsx)("div",{className:t.buttonDiv,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){a.push("/novocadastro",{vacina:e.location.state.vacina,lote:e.location.state.lote,grupo:e.location.state.grupo})},children:"Adicionar"})})]})},ke=function(){return Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"/",component:C,exact:!0}),Object(w.jsx)(u.a,{path:"/selecao",component:F}),Object(w.jsx)(u.a,{path:"/listavacinados",component:Z}),Object(w.jsx)(u.a,{path:"/vacinar",component:Q}),Object(w.jsx)(u.a,{path:"/cadastros",component:we}),Object(w.jsx)(u.a,{path:"/novocadastro",component:ge})]})};s.a.render(Object(w.jsx)(d.a,{children:Object(w.jsx)(ke,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):r(t,e)}))}}(),l()}},[[116,1,2]]]);
//# sourceMappingURL=main.8e087ad5.chunk.js.map