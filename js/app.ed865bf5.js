(function(t){function a(a){for(var r,s,l=a[0],i=a[1],c=a[2],m=0,d=[];m<l.length;m++)s=l[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,l=1;l<e.length;l++){var i=e[l];0!==o[i]&&(r=!1)}r&&(n.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},o={app:0},n=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var u=i;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"00b4":function(t,a,e){},"034f":function(t,a,e){"use strict";e("85ec")},"0ba2":function(t,a,e){"use strict";e("ed09")},"1cc3":function(t,a,e){},"276c":function(t,a,e){},"2c36":function(t,a,e){"use strict";e("00b4")},4725:function(t,a,e){"use strict";e("5e2f")},"4fd5":function(t,a,e){"use strict";e("a71c")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{"mosta-menu":!t.mostramenu},attrs:{id:"app"}},[e("cabecalho",{attrs:{title:"",menu:!1}}),e("minu"),e("conteudo"),e("rodape")],1)},n=[],s=e("2f62"),l=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("header",{staticClass:"cabecalho"},[r("span",{staticClass:"spanimg"},[t.menu?t._e():r("img",{attrs:{src:e("a70f"),alt:"menu"},on:{click:t.mostrarmenu}})]),r("h1",{staticClass:"title"},[t._m(0),t._v(" "+t._s(t.title)+" ")])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("strong",[t._v("Financeiro")]),t._v(" Fno´s")])}],c={name:"Cabecalho",props:{title:String,menu:Boolean},computed:{ico:function(){return"↓"}},methods:{mostrarmenu:function(){this.$store.commit("mostrarmenu")}}},u=c,m=(e("d3c7"),e("2877")),d=Object(m["a"])(u,l,i,!1,null,null,null),f=d.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.mostramenu,expression:"mostramenu"}],staticClass:"menu"},[e("v-toolbar-items",{staticClass:"vrap"},[e("router-link",{staticClass:"bta",attrs:{to:"/vuefno",flat:""}},[t._v("Home")]),e("router-link",{staticClass:"bta",attrs:{to:"/new",flat:""}},[t._v("Novo Lanc.")]),e("router-link",{staticClass:"bta",attrs:{to:"/manutencao",flat:""}},[t._v("Manutenção")]),e("router-link",{staticClass:"bta",attrs:{to:"/relatorio",flat:""}},[t._v("Relatório")])],1)],1)},b=[],v={name:"Menu",computed:Object(s["b"])(["mostramenu"])},h=v,_=(e("2c36"),e("6544")),g=e.n(_),j=e("2a7f"),C=Object(m["a"])(h,p,b,!1,null,null,null),x=C.exports;g()(C,{VToolbarItems:j["a"]});var y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"conteudo"},[e("router-view")],1)},P=[],O={name:"Conteudo"},w=O,E=(e("ed45"),Object(m["a"])(w,y,P,!1,null,null,null)),S=E.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"rodape",attrs:{app:""}},[e("v-spacer"),e("div",[t._v("Projeto Financiamento © "+t._s((new Date).getFullYear())+" By.:Ednei Vieira")])],1)},$=[],D={name:"Rodape"},k=D,z=(e("4fd5"),e("2fa4")),J=Object(m["a"])(k,A,$,!1,null,null,null),q=J.exports;g()(J,{VSpacer:z["a"]});var I={name:"App",components:{cabecalho:f,minu:x,conteudo:S,rodape:q},computed:Object(s["b"])(["mostramenu"])},M=I,F=(e("034f"),Object(m["a"])(M,o,n,!1,null,null,null)),T=F.exports,V=e("f309");r["default"].use(V["a"]);var R=new V["a"]({});r["default"].use(s["a"]);var B=new s["a"].Store({state:{mostramenu:!0},mutations:{mostrarmenu:function(t,a){t.mostramenu=void 0===a?!t.mostramenu:a}}}),N=e("8c4f"),L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lancar"},[e("pagina",{attrs:{icon:"fa fa-cogs",main:"Incluir Contrato",sub:"incluir novo contrato"}}),e("formulario")],1)},Q=[],H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagina"},[e("h1",[t.icon?e("strong",{class:t.icon}):t._e(),t._v(" "+t._s(t.main))]),e("h4",[t._v(t._s(t.sub))]),e("hr")])},G=[],Y={name:"Pagina",props:["icon","main","sub"]},K=Y,U=(e("b168"),Object(m["a"])(K,H,G,!1,null,null,null)),W=U.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("b-card",{attrs:{"no-body":""}},[e("b-tabs",{attrs:{card:""}},[e("b-tab",{attrs:{title:"Lançar",ative:""}},[e("formulario")],1),e("b-tab",{attrs:{title:"Novo Modelo",ative:""}},[e("modelo")],1)],1)],1)],1)])},Z=[],tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-form",[e("b-row",[e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Empresa"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Banco"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"3",sm:"12"}},[e("b-form-group",{attrs:{label:"Linha de crédito"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:"Valor Financiado"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Quant. de parcelas"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"Taxa"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Data do crédito"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Data da 1º Parc."}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Carência"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Modelo"}},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control btn btn-secondary",attrs:{name:"",id:""}},[e("option",[t._v("modelo1")]),e("option",[t._v("modelo2")]),e("option",[t._v("modelo3")])])])])],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v("Gerar Contrato")])])],1)],1)],1)},at=[],et={},rt=et,ot=Object(m["a"])(rt,tt,at,!1,null,null,null),nt=ot.exports,st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-form",[e("b-row",[e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"SAC/PRICE"}},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control btn btn-secondary",attrs:{name:"",id:""}},[e("option",[t._v("SAC")]),e("option",[t._v("PRICE")])])])])],1),e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"Adicional"}},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control btn btn-secondary",attrs:{name:"",id:""}},[e("option",[t._v("IPCA")]),e("option",[t._v("CDI")]),e("option",[t._v("IOF")]),e("option",[t._v("FAM")]),e("option",[t._v("IOF")])])])])],1),e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"%"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Opção1"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Opção2"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"-----"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v("Salvar")])])],1)],1)],1)],1)},lt=[],it={},ct=it,ut=Object(m["a"])(ct,st,lt,!1,null,null,null),mt=ut.exports,dt={components:{formulario:nt,modelo:mt},data:function(){return{alerta:"",Empresa:"","NºdoContrato":"",Modelo:"","DatadoCrédito":"",Base:"",Carencia:"",Bonus:"",IPCASAC:"","Amotizaçãoperíodo":"","Jurosperíodo":"",Valordocontrato:"",Quantdeparcelas:"",Taxadocontrato:"",Datadaprimeiraparcela:""}},methods:{gerarContrato:function(){return this.Quantdeparcelas>420?this.alerta="Numero de parcelas acima do permitido":this.Valordocontrato?this.Quantdeparcelas?this.Taxadocontrato?this.Datadaprimeiraparcela?this.Empresa>1?this.alerta="Existre uma simulação de Fno já lançado, a pagina será recarregada":void 0:this.alerta="Informe uma data":this.alerta="Taxa não informada":this.alerta="Parcela não informada":this.alerta="valor não informado"}}},ft=dt,pt=(e("b390"),Object(m["a"])(ft,X,Z,!1,null,null,null)),bt=pt.exports,vt={name:"Lancar",components:{pagina:W,formulario:bt}},ht=vt,_t=Object(m["a"])(ht,L,Q,!1,null,null,null),gt=_t.exports,jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alterar"},[e("pagina",{attrs:{icon:"fa fa-cogs",main:"Ajustar Contrato",sub:"Alterar parcela de contrato"}}),e("manutencao")],1)},Ct=[],xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("manutencao")],1)},yt=[],Pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-table",{attrs:{"sticky-header":"600px",striped:"",hover:"",fields:t.fields,items:t.items,"head-variant":"dark","Table-options":"small"},scopedSlots:t._u([{key:"cell(tabb)",fn:function(a){return[e("b-button",{staticClass:"mr-2 taby",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.seditar(a.item.id)}}},[t._v("editar")]),e("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(e){return t.deletar(a.item.id)}}},[t._v("deletar")])]}}])})],1)},Ot=[],wt={data:function(){return{items:[{id:0,dias:"125",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"a",Juros:"j","Prestação":"s",Saldo:"l"},{id:1,dias:"125",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"a",Juros:"j","Prestação":"s",Saldo:"l"},{id:2,dias:"14",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"b",Juros:"j","Prestação":"s",Saldo:"l"},{id:3,dias:"4",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"c",Juros:"j","Prestação":"s",Saldo:"l"},{id:4,dias:"4",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"c",Juros:"j","Prestação":"s",Saldo:"l"},{id:5,dias:"4",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"c",Juros:"j","Prestação":"s",Saldo:"l"},{id:6,dias:"4",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"c",Juros:"j","Prestação":"s",Saldo:"l"},{id:7,dias:"4",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"c",Juros:"j","Prestação":"s",Saldo:"l"},{id:8,dias:"4",taxa:"jh",venc:"dd",Parc:"w",Amortiz:"c",Juros:"j","Prestação":"s",Saldo:"l"}],fields:[{key:"id",label:"corretot",sortable:!0},{key:"dias",label:"Dias"},{key:"taxa",label:"percentual"},{key:"venc",label:"vencimento"},{key:"Parc",label:"parcela"},{key:"tabb",label:"editar"}]}},methods:{seditar:function(t){this.items[t].dias="5555"},deletar:function(t){var a=this.items[t];this.items[t]={},console.log(a)}}},Et=wt,St=(e("4725"),Object(m["a"])(Et,Pt,Ot,!1,null,null,null)),At=St.exports,$t={components:{manutencao:At}},Dt=$t,kt=Object(m["a"])(Dt,xt,yt,!1,null,null,null),zt=kt.exports,Jt={name:"Alterar",components:{pagina:W,manutencao:zt}},qt=Jt,It=Object(m["a"])(qt,jt,Ct,!1,null,null,null),Mt=It.exports,Ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relatorio"},[e("pagina",{attrs:{icon:"fa fa-cogs",main:"Relatório",sub:"Relatório de todos os contratos"}}),e("relatorio")],1)},Tt=[],Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("relatorio")],1)},Rt=[],Bt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"result"},[e("table",{staticClass:"tabela"},[e("thead",[e("tr",{staticClass:"tabela"},[e("th",[t._v("dias")]),e("th",[t._v("taxa")]),e("th",[t._v("Venc ")]),e("th",[t._v("Parc.")]),e("th",[t._v("Amortiz.")]),e("th",[t._v("Juros")]),e("th",[t._v("Prestação")]),e("th",[t._v("Saldo")])])])])])}],Lt={},Qt=Lt,Ht=(e("0ba2"),Object(m["a"])(Qt,Bt,Nt,!1,null,null,null)),Gt=Ht.exports,Yt={components:{relatorio:Gt}},Kt=Yt,Ut=Object(m["a"])(Kt,Vt,Rt,!1,null,null,null),Wt=Ut.exports,Xt={name:"Relatorio",components:{pagina:W,relatorio:Wt}},Zt=Xt,ta=Object(m["a"])(Zt,Ft,Tt,!1,null,null,null),aa=ta.exports,ea=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},ra=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("img",{attrs:{src:"https://myrp.com.br/wp-content/uploads/2020/03/pdf-myrp-funcionalidades.png",alt:"img"}})])}],oa={name:"Home"},na=oa,sa=(e("83c2"),Object(m["a"])(na,ea,ra,!1,null,null,null)),la=sa.exports;r["default"].use(N["a"]);var ia=[{name:"home",path:"/vuefno",component:la},{name:"lancar",path:"/new",component:gt},{name:"manutencao",path:"/manutencao",component:Mt},{name:"relatorio",path:"/relatorio",component:aa}],ca=new N["a"]({mode:"history",routes:ia}),ua=e("5f5b"),ma=e("b1e0");e("f9e3"),e("2dd8");r["default"].use(ua["a"]),r["default"].use(ma["a"]),r["default"].config.productionTip=!1,new r["default"]({BootstrapVue:ua["a"],store:B,router:ca,vuetify:R,render:function(t){return t(T)}}).$mount("#app")},"5e2f":function(t,a,e){},7137:function(t,a,e){},"83c2":function(t,a,e){"use strict";e("1cc3")},"83e8":function(t,a,e){},"85ec":function(t,a,e){},"8b6b":function(t,a,e){},a70f:function(t,a,e){t.exports=e.p+"img/ico.41fdca37.png"},a71c:function(t,a,e){},b168:function(t,a,e){"use strict";e("83e8")},b390:function(t,a,e){"use strict";e("8b6b")},d3c7:function(t,a,e){"use strict";e("7137")},ed09:function(t,a,e){},ed45:function(t,a,e){"use strict";e("276c")}});
//# sourceMappingURL=app.ed865bf5.js.map