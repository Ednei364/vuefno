(function(t){function a(a){for(var o,n,i=a[0],c=a[1],l=a[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(a);while(m.length)m.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],o=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(o=!1)}o&&(s.splice(a--,1),t=n(n.s=e[0]))}return t}var o={},r={app:0},s=[];function n(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=o,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)n.d(e,o,function(a){return t[a]}.bind(null,o));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"00b4":function(t,a,e){},"034f":function(t,a,e){"use strict";e("85ec")},"1cc3":function(t,a,e){},"276c":function(t,a,e){},"2c36":function(t,a,e){"use strict";e("00b4")},"392b":function(t,a,e){"use strict";e("efec")},4326:function(t,a,e){},"4fd5":function(t,a,e){"use strict";e("a71c")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{"mosta-menu":!t.mostramenu},attrs:{id:"app"}},[e("cabecalho",{attrs:{title:"",menu:!1}}),e("minu"),e("conteudo"),e("rodape")],1)},s=[],n=e("1da1"),i=(e("96cf"),e("2f62")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"cabecalho"},[t.menu?t._e():e("v-btn",{staticClass:"mx-2 spanimg",attrs:{dark:"",color:"red"},on:{click:t.mostrarmenu}},[e("v-icon",{attrs:{dark:""}},[t._v(" mdi-format-list-bulleted-square ")])],1),e("h1",{staticClass:"title"},[t._m(0),t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"alerta"},[e("v-alert",{attrs:{color:"pink",dark:"",dismissible:"",border:"bottom",type:"error",transition:"scale-transition"},model:{value:t.informe,callback:function(a){t.informe=a},expression:"informe"}},[t._v(t._s(t.alerta))])],1)],1)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("strong",[t._v("Financeiro")]),t._v(" Fno´s")])}],d={computed:Object(i["b"])(["informe","alerta"]),name:"Cabecalho",props:{title:String,menu:Boolean},methods:{mostrarmenu:function(){this.$store.commit("mostrarmenu")}}},u=d,m=(e("d3c7"),e("2877")),h=e("6544"),f=e.n(h),p=e("0798"),v=e("8336"),b=e("132d"),x=Object(m["a"])(u,c,l,!1,null,null,null),g=x.exports;f()(x,{VAlert:p["a"],VBtn:v["a"],VIcon:b["a"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.mostramenu,expression:"mostramenu"}],staticClass:"menu"},[e("v-toolbar-items",{staticClass:"vrap"},[e("router-link",{staticClass:"bta",attrs:{to:"/vuefno",flat:""}},[t._v("Home")]),e("router-link",{staticClass:"bta",attrs:{to:"/new",flat:""}},[t._v("Novo Lanc.")]),e("router-link",{staticClass:"bta",attrs:{to:"/manutencao",flat:""}},[t._v("Manutenção")]),e("router-link",{staticClass:"bta",attrs:{to:"/relatorio",flat:""}},[t._v("Relatório")])],1)],1)},_=[],D={name:"Menu",computed:Object(i["b"])(["mostramenu"])},C=D,I=(e("2c36"),e("2a7f")),y=Object(m["a"])(C,$,_,!1,null,null,null),k=y.exports;f()(y,{VToolbarItems:I["a"]});var j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"conteudo"},[e("router-view")],1)},P=[],F={name:"Conteudo"},O=F,A=(e("ed45"),Object(m["a"])(O,j,P,!1,null,null,null)),V=A.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"rodape",attrs:{app:""}},[e("v-spacer"),e("div",[t._v("Projeto Financiamento © "+t._s((new Date).getFullYear())+" By.:Ednei Vieira")])],1)},M=[],T={name:"Rodape"},E=T,q=(e("4fd5"),e("2fa4")),N=Object(m["a"])(E,w,M,!1,null,null,null),S=N.exports;f()(N,{VSpacer:q["a"]});var z={name:"App",components:{cabecalho:g,minu:k,conteudo:V,rodape:S},computed:Object(i["b"])(["mostramenu"]),created:function(){this.resolucao()},methods:{resolucao:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:"xs"!==t.$mq&&"sm"!==t.$mq||t.$store.commit("mostrarmenu",!1);case 1:case"end":return a.stop()}}),a)})))()}}},R=z,B=(e("034f"),Object(m["a"])(R,r,s,!1,null,null,null)),U=B.exports,L=e("f309");o["default"].use(L["a"]);var Q=new L["a"]({});o["default"].use(i["a"]);var J=new i["a"].Store({state:{mostramenu:!0,informe:!1,alerta:""},mutations:{mostrarmenu:function(t,a){t.mostramenu=void 0===a?!t.mostramenu:a},alertando:function(t,a){t.informe=!0,t.alerta=a,setTimeout((function(){t.informe=!1}),5e3)}}}),Y=e("8c4f"),H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lancar"},[e("pagina",{attrs:{icon:"fa fa-cogs",main:"Incluir Contrato",sub:"incluir novo contrato"}}),e("formulario")],1)},G=[],K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagina"},[e("h1",[t.icon?e("strong",{class:t.icon}):t._e(),t._v(" "+t._s(t.main))]),e("h4",[t._v(t._s(t.sub))]),e("hr")])},W=[],X={name:"Pagina",props:["icon","main","sub"]},Z=X,tt=(e("b168"),Object(m["a"])(Z,K,W,!1,null,null,null)),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("b-card",{attrs:{"no-body":""}},[e("b-tabs",{attrs:{card:""}},[e("b-tab",{attrs:{title:"Lançar",ative:""}},[e("formulario")],1),e("b-tab",{attrs:{title:"Novo Modelo",ative:""}},[e("modelo")],1)],1)],1)],1)])},ot=[],rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-form",[e("b-row",[e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"Empresa"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."},model:{value:t.empresa,callback:function(a){t.empresa=a},expression:"empresa"}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Nº Contrato"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."},model:{value:t.numeroContrato,callback:function(a){t.numeroContrato=a},expression:"numeroContrato"}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Modelo"}},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control btn btn-secondary",attrs:{name:"",id:""}},[e("option",[t._v("modelo1")]),e("option",[t._v("modelo2")]),e("option",[t._v("modelo3")])])])])],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Data do Crédito"}},[e("b-form-input",{attrs:{type:"date",value:"2020-11-18"},model:{value:t.datadocred,callback:function(a){t.datadocred=a},expression:"datadocred"}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Banco"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."},model:{value:t.banco,callback:function(a){t.banco=a},expression:"banco"}})],1)],1),e("b-col",{attrs:{md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:"Valor Financ."}},[e("b-form-input",{attrs:{placeholder:"Digite aqui...",maxlength:"15"},on:{keyup:t.formatarValorFinanciado},model:{value:t.valorFinanciado,callback:function(a){t.valorFinanciado=a},expression:"valorFinanciado"}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Quant. de parcelas"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui...",maxlength:"3"},on:{keyup:t.formatarNumerosParcelas},model:{value:t.quantParc,callback:function(a){t.quantParc=a},expression:"quantParc"}})],1)],1),e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"Taxa"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui...",maxlength:"5"},on:{keyup:t.formatarTaxa},model:{value:t.taxa,callback:function(a){t.taxa=a},expression:"taxa"}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Data da 1º Parc."}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Carência"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}}),e("b-col",{attrs:{md:"2",sm:"12"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.gerar}},[t._v("Gerar Contrato")])])],1)],1)],1)},st=[],nt=(e("159b"),e("b680"),e("99af"),e("5319"),e("ac1f"),{data:function(){return{datadocred:"",banco:"",valorFinanciado:"",empresa:"",numeroContrato:"",quantParc:"",taxa:"",i:1,paras:"",dyas:"",NovaData:"",dyas2:"",taxamem:"",fin:"",Amort:"",saldo:"",parc:"",taxa1:"",taxaDoMes1:"",ar1:[],ar2:[],ar3:[],ar4:[],ar5:[],ar6:[],ar7:[],ar8:[],resultado:[]}},methods:{gerar:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log(t.datadocred),t.empresa){a.next=3;break}return a.abrupt("return",t.$store.commit("alertando","Empresa não informado"));case 3:if(t.numeroContrato){a.next=5;break}return a.abrupt("return",t.$store.commit("alertando","Contrato não informado"));case 5:if(t.datadocred){a.next=7;break}return a.abrupt("return",t.$store.commit("alertando","Data não informado"));case 7:if(t.banco){a.next=9;break}return a.abrupt("return",t.$store.commit("alertando"," Banco não informado"));case 9:if(t.valorFinanciado){a.next=11;break}return a.abrupt("return",t.$store.commit("alertando"," valor não informado"));case 11:if(!(t.quantParc>420)){a.next=13;break}return a.abrupt("return",t.$store.commit("alertando","Numero de parcelas acima do permitido "));case 13:if(t.quantParc){a.next=15;break}return a.abrupt("return",t.$store.commit("alertando"," Parcela não informada"));case 15:if(t.taxa){a.next=17;break}return a.abrupt("return",t.$store.commit("alertando","Taxa não informada "));case 17:for(t.NovaData=new Date(t.datadocred),t.dyas=t.NovaData,t.informe=!1,e=0;e<t.quantParc;e++)t.diasDaUltimaParcela(),t.taxaDoMesProporcional(),t.DataDoPagamento(),t.numeroDaParcela(),t.amortcal(),t.taxacal(),t.prestcal(),t.saldocal();t.ar1.forEach((function(a,e){t.resultado.push({emp:t.empresa,banco:t.banco,contrato:t.numeroContrato,id:e,dias:t.ar1[e],taxaMes:t.ar2[e],vencimento:t.ar3[e],Parc:t.ar4[e],"amortização":t.ar5[e],juros:t.ar6[e],"prestação":t.ar7[e],saldo:t.ar8[e]})})),o=t.resultado,t.$http.put("".concat(t.numeroContrato,".json"),{dados:o}).then((function(t){return console.log(t)})),t.resultado=[],t.ar1=[],t.ar2=[],t.ar3=[],t.ar4=[],t.ar5=[],t.ar6=[],t.ar7=[],t.ar8=[],t.dados="",t.$store.commit("alertando","Contrato lançado com sucesso");case 27:case"end":return a.stop()}}),a)})))()},diasDaUltimaParcela:function(){void 0===this.dyas2||void 0===this.dyas||this.dyas2<1||this.dyas<1?this.taxamem="":this.taxamem=Math.abs((this.dyas-this.dyas2)/1e3/60/60/24),this.ar1.push(this.taxamem)},taxaDoMesProporcional:function(){void 0===this.dyas2&&void 0===this.dyas2?this.taxaDoMes1="":this.taxaDoMes1=(Math.pow(1+parseFloat(this.taxa)/100,this.taxamem/360)-1).toFixed(5),this.ar2.push(this.taxaDoMes1)},DataDoPagamento:function(){function t(t){return 0===t?12:t<=9?"0".concat(t):"".concat(t)}function a(a){var e=t(a.getDate()),o=t(a.getMonth()),r=t(a.getFullYear());return"".concat(e,"-").concat(o,"-").concat(r)}var e,o=this.NovaData.setMonth(this.NovaData.getMonth()+1);e=void 0===this.dyas2&&void 0===this.dyas2?"":a(this.NovaData),this.ar3.push(e),this.i%2===0?this.dyas=o:this.dyas2=o},numeroDaParcela:function(){var t;t=""===this.taxaDoMes1?"":"".concat(this.i,"ª"),this.ar4.push(t)},amortcal:function(){this.fin=parseFloat(this.valorFinanciado.replace(/\./gi,"").replace(/,/,".")),this.Amort=this.fin/parseFloat(this.quantParc),this.saldo=this.fin-this.Amort*this.i,this.taxa1=(this.saldo+this.Amort)*parseFloat(this.taxa)/100,this.parc=this.Amort+this.taxa1;var t=",$1",a=this.Amort,e=function(){return a>999999?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.ar5.push("".concat(this.Amort.toFixed(2).replace(o,t)))},taxacal:function(){this.fin=parseFloat(this.valorFinanciado.replace(/\./gi,"").replace(/,/,".")),this.Amort=this.fin/parseFloat(this.quantParc),this.saldo=this.fin-this.Amort*this.i,this.taxa1=(this.saldo+this.Amort)*this.taxaDoMes1,this.parc=this.Amort+this.taxa1;var t=",$1",a=this.taxa1,e=function(){return a>999999.99?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999.99?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.ar6.push("".concat(this.taxa1.toFixed(2).replace(o,t)))},prestcal:function(){this.fin=parseFloat(this.valorFinanciado.replace(/\./gi,"").replace(/,/,".")),this.Amort=this.fin/parseFloat(this.quantParc),this.saldo=this.fin-this.Amort*this.i,this.taxa1=(this.saldo+this.Amort)*this.taxaDoMes1,this.parc=this.Amort+this.taxa1;var t=",$1",a=this.parc,e=function(){return a>999999.99?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999.99?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.ar7.push("".concat(this.parc.toFixed(2).replace(o,t)))},saldocal:function(){var t=",$1",a=this.saldo,e=function(){return a>999999.99?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999.99?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.ar8.push("".concat(this.saldo.toFixed(2).replace(o,t))),this.i++},formatarValorFinanciado:function(){var t=this.valorFinanciado;t+="",t=parseInt(t.replace(/\D+/g,"")),t+="",t=t.replace(/([0-9]{2})$/g,",$1"),t.length>9?t=t.replace(/([0-9]{3})([0-9]{3}),([0-9]{2}$)/g,".$1.$2,$3 "):t.length>6&&(t=t.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),this.valorFinanciado=t,"NaN"==t&&(this.valorFinanciado="")},formatarNumerosParcelas:function(){var t=this.quantParc;t+="",t=parseInt(t.replace(/\D+/g,"")),t+="","NaN"==t&&(this.quantParc=""),this.quantParc>420&&this.$store.commit("alertando","Numero de parcelas acima do permitido ")},formatarTaxa:function(){var t=this.taxa;t+="",t=parseInt(t.replace(/\D+/g,"")),t+="","NaN"==t&&(this.taxa="")}}}),it=nt,ct=(e("392b"),Object(m["a"])(it,rt,st,!1,null,null,null)),lt=ct.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-form",[e("b-row",[e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"SAC/PRICE"}},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control btn btn-secondary",attrs:{name:"",id:""}},[e("option",[t._v("SAC")]),e("option",[t._v("PRICE")])])])])],1),e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"Adicional"}},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control btn btn-secondary",attrs:{name:"",id:""}},[e("option",[t._v("IPCA")]),e("option",[t._v("CDI")]),e("option",[t._v("IOF")]),e("option",[t._v("FAM")]),e("option",[t._v("IOF")])])])])],1),e("b-col",{attrs:{md:"1",sm:"12"}},[e("b-form-group",{attrs:{label:"%"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Opção1"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"Opção2"}},[e("b-form-input",{attrs:{placeholder:"Digite aqui..."}})],1)],1),e("b-col",{attrs:{md:"2",sm:"12"}},[e("b-form-group",{attrs:{label:"-----"}},[e("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[t._v("Salvar")])])],1)],1)],1)],1)},ut=[],mt={},ht=mt,ft=Object(m["a"])(ht,dt,ut,!1,null,null,null),pt=ft.exports,vt={components:{formulario:lt,modelo:pt},data:function(){return{alerta:"",Empresa:"","NºdoContrato":"",Modelo:"","DatadoCrédito":"",Base:"",Carencia:"",Bonus:"",IPCASAC:"","Amotizaçãoperíodo":"","Jurosperíodo":"",Valordocontrato:"",Quantdeparcelas:"",Taxadocontrato:"",Datadaprimeiraparcela:""}},methods:{gerarContrato:function(){return this.Quantdeparcelas>420?this.alerta="Numero de parcelas acima do permitido":this.Valordocontrato?this.Quantdeparcelas?this.Taxadocontrato?this.Datadaprimeiraparcela?this.Empresa>1?this.alerta="Existre uma simulação de Fno já lançado, a pagina será recarregada":void 0:this.alerta="Informe uma data":this.alerta="Taxa não informada":this.alerta="Parcela não informada":this.alerta="valor não informado"}}},bt=vt,xt=(e("b390"),Object(m["a"])(bt,et,ot,!1,null,null,null)),gt=xt.exports,$t={name:"Lancar",components:{pagina:at,formulario:gt}},_t=$t,Dt=Object(m["a"])(_t,H,G,!1,null,null,null),Ct=Dt.exports,It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"alterar"},[e("pagina",{attrs:{icon:"fa fa-cogs",main:"Ajustar Contrato",sub:"Alterar parcela de contrato"}}),e("manutencao")],1)},yt=[],kt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("manutencao")],1)},jt=[],Pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-app":""}},[e("button",{on:{click:t.alterarrr}},[t._v("teste")]),t._m(0),e("v-col",{staticClass:"d-flex",attrs:{md:"2",cols:"12"}},[e("v-select",{attrs:{items:t.items,outlined:""},on:{change:function(a){return t.teste()}},model:{value:t.index,callback:function(a){t.index=a},expression:"index"}})],1),e("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"blue-grey"},on:{click:t.importar}},[t._v(" Importar "),e("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-cloud-upload ")])],1),e("br"),e("br"),e("br"),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"Parc"},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v("Contrato "),e("strong",[t._v(" "+t._s(t.index))]),t._v(" em fase de ajuste ainda")]),e("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{type:"date",label:"Vencimento"},model:{value:t.editedItem.vencimento,callback:function(a){t.$set(t.editedItem,"vencimento",a)},expression:"editedItem.vencimento"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Correção"},model:{value:t.ajustes,callback:function(a){t.ajustes=a},expression:"ajustes"}})],1),e("v-col",{staticClass:"cos",attrs:{cols:"12",sm:"6",md:"4","background-color":"red"}},[e("v-input",{attrs:{error:""}},[t._v("R$ "+t._s(t.editedItem.prestação))])],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var o=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.editItem(o)}}},[t._v(" mdi-pencil ")])]}}])})],1)},Ft=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h5",[e("strong",[t._v(">>Contrato")])])}],Ot=e("53ca"),At=(e("b64b"),{data:function(){return{i:"",dyas:"",dyas2:"",taxamem:"",ajustes:"",index:[],items:[],dialog:!1,headers:[{text:"emp",value:"emp"},{text:"Parc",value:"Parc"},{text:"banco",value:"banco"},{text:"contrato",value:"contrato"},{text:"vencimento",value:"vencimento"},{text:"amortização",value:"amortização",sortable:!1},{text:"juros",value:"juros",sortable:!1},{text:"prestação",value:"prestação",sortable:!1},{text:"saldo",value:"saldo",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],desserts:[],contratoalterado:[],editedIndex:-1,editedItem:{Parc:"","amortização":"",banco:"",contrato:"",dias:"",emp:"",id:"",juros:"","prestação":"",saldo:"",taxaMes:"",vencimento:""},defaultItem:{vencimento:"",Parc:0,"amortização":0,juros:0,"prestação":0}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nova parcela":"Editar parcela"}},created:function(){this.selecaoContrato()},methods:{alterarrr:function(){console.log(this.desserts),console.log(this.index),console.log(this.editedItem),console.log(this.desserts[2].dias),console.log(this.editedItem.contrato),this.contratoalterado,this.contratoalterado[3]["dias"]=5555,console.log(this.contratoalterado),console.log(this.contratoalterado[3]),console.log(this.contratoalterado[3].dias)},selecaoContrato:function(){var t=this;console.log("idenxxxx"),this.$http.get(".json").then((function(a){t.items=Object.keys(a.data)}))},teste:function(){console.log(this.editedItem),console.log(this.desserts)},importar:function(){"object"==Object(Ot["a"])(this.index)?this.$store.commit("alertando","Selecione um contrato"):this.importando()},importando:function(){var t=this;this.$store.commit("alertando","carregando"),this.$http.get("".concat(this.index,".json")).then((function(a){t.desserts=a.data.dados,t.$store.commit("alertando","Contrato importado com sucesso"),console.log(a),console.log(a.data),console.log(a.data.dados)}))},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,console.log(this.editedItem)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t;this.i=this.editedIndex;var a=this.editedItem.contrato,e=this.editedItem;if(this.contratoalterado=this.desserts,!e.vencimento)return this.$store.commit("alertando","Data não informado");this.NovaData=new Date(this.datadocred),this.dyas=this.NovaData;for(var o=this.editedIndex;o<=this.desserts.length-1;o++)this.diasDaUltimaParcela(),this.taxaDoMesProporcional(),this.DataDoPagamento();t=this.contratoalterado,this.desserts=t,this.$http.put("".concat(a,".json"),{dados:t}).then((function(t){return console.log(t,a)})),this.close()},diasDaUltimaParcela:function(){void 0===this.dyas2||void 0===this.dyas||this.dyas2<1||this.dyas<1?this.taxamem="":this.taxamem=Math.abs((this.dsyas-this.dyas2)/1e3/60/60/24),this.contratoalterado[this.i].dias=this.taxamem},taxaDoMesProporcional:function(){void 0===this.dyas2&&void 0===this.dyas2?this.taxaDoMes1="":this.taxaDoMes1=(Math.pow(1+parseFloat(this.taxa)/100,this.taxamem/360)-1).toFixed(5),this.contratoalterado[this.i].taxaMes=this.taxaDoMes1},DataDoPagamento:function(){function t(t){return 0===t?12:t<=9?"0".concat(t):"".concat(t)}function a(a){var e=t(a.getDate()),o=t(a.getMonth()),r=t(a.getFullYear());return"".concat(e,"-").concat(o,"-").concat(r)}var e,o=this.NovaData.setMonth(this.NovaData.getMonth()+1);e=void 0===this.dyas2&&void 0===this.dyas2?"":a(this.NovaData),this.contratoalterado[this.i].vencimento=e,this.i%2===0?this.dyas=o:this.dyas2=o},numeroDaParcela:function(){var t;t=""===this.taxaDoMes1?"":"".concat(this.i,"ª"),this.contratoalterado[this.i].Parc=t},amortcal:function(){this.fin=parseFloat(this.valorFinanciado.replace(/\./gi,"").replace(/,/,".")),this.Amort=this.fin/parseFloat(this.quantParc),this.saldo=this.fin-this.Amort*this.i,this.taxa1=(this.saldo+this.Amort)*parseFloat(this.taxa)/100,this.parc=this.Amort+this.taxa1;var t=",$1",a=this.Amort,e=function(){return a>999999?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.contratoalterado[this.i].amortização="".concat(this.Amort.toFixed(2).replace(o,t))},taxacal:function(){this.fin=parseFloat(this.valorFinanciado.replace(/\./gi,"").replace(/,/,".")),this.Amort=this.fin/parseFloat(this.quantParc),this.saldo=this.fin-this.Amort*this.i,this.taxa1=(this.saldo+this.Amort)*this.taxaDoMes1,this.parc=this.Amort+this.taxa1;var t=",$1",a=this.taxa1,e=function(){return a>999999.99?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999.99?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.contratoalterado[this.i].juros="".concat(this.taxa1.toFixed(2).replace(o,t))},prestcal:function(){this.fin=parseFloat(this.valorFinanciado.replace(/\./gi,"").replace(/,/,".")),this.Amort=this.fin/parseFloat(this.quantParc),this.saldo=this.fin-this.Amort*this.i,this.taxa1=(this.saldo+this.Amort)*this.taxaDoMes1,this.parc=this.Amort+this.taxa1;var t=",$1",a=this.parc,e=function(){return a>999999.99?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999.99?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.contratoalterado[this.i].prestação="".concat(this.parc.toFixed(2).replace(o,t))},saldocal:function(){var t=",$1",a=this.saldo,e=function(){return a>999999.99?(t=".$1.$2,$3",/([0-9]{3})([0-9]{3}).([0-9]{2}$)/g):a>999.99?(t=".$1,$2",/([0-9]{3}).([0-9]{2}$)/g):/.([0-9]{2})$/g},o=e();this.contratoalterado[this.i].saldo="".concat(this.saldo.toFixed(2).replace(o,t)),this.i++}}}),Vt=At,wt=(e("8f33"),e("b0af")),Mt=e("99d9"),Tt=e("62ad"),Et=e("a523"),qt=e("8fea"),Nt=e("169a"),St=e("b675"),zt=e("0fd9"),Rt=e("b974"),Bt=e("8654"),Ut=e("71d9"),Lt=Object(m["a"])(Vt,Pt,Ft,!1,null,"fb573b2c",null),Qt=Lt.exports;f()(Lt,{VBtn:v["a"],VCard:wt["a"],VCardActions:Mt["a"],VCardText:Mt["b"],VCardTitle:Mt["c"],VCol:Tt["a"],VContainer:Et["a"],VDataTable:qt["a"],VDialog:Nt["a"],VIcon:b["a"],VInput:St["a"],VRow:zt["a"],VSelect:Rt["a"],VSpacer:q["a"],VTextField:Bt["a"],VToolbar:Ut["a"],VToolbarTitle:I["b"]});var Jt={components:{manutencao:Qt}},Yt=Jt,Ht=Object(m["a"])(Yt,kt,jt,!1,null,null,null),Gt=Ht.exports,Kt={name:"Alterar",components:{pagina:at,manutencao:Gt}},Wt=Kt,Xt=Object(m["a"])(Wt,It,yt,!1,null,null,null),Zt=Xt.exports,ta=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relatorio"},[e("pagina",{attrs:{icon:"fa fa-cogs",main:"Relatório",sub:"Relatório de todos os contratos"}}),e("relatorio")],1)},aa=[],ea=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("relatorio")],1)},oa=[],ra=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-app":""}},[e("button",{on:{click:t.alguma}},[e("h1",[t._v("sdfasdfasdfasdf")])]),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"Parc"},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[e("strong",[t._v(" Em fase de ajuste ainda :D")])]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,r=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),o),[t._v(" New Item ")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Dessert vencimento"},model:{value:t.editedItem.vencimento,callback:function(a){t.$set(t.editedItem,"vencimento",a)},expression:"editedItem.vencimento"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"Parc"},model:{value:t.editedItem.Parc,callback:function(a){t.$set(t.editedItem,"Parc",a)},expression:"editedItem.Parc"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"amortização"},model:{value:t.editedItem.amortização,callback:function(a){t.$set(t.editedItem,"amortização",a)},expression:"editedItem.amortização"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"juros"},model:{value:t.editedItem.juros,callback:function(a){t.$set(t.editedItem,"juros",a)},expression:"editedItem.juros"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[e("v-text-field",{attrs:{label:"prestação"},model:{value:t.editedItem.prestação,callback:function(a){t.$set(t.editedItem,"prestação",a)},expression:"editedItem.prestação"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Save ")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(a){t.dialogDelete=a},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v("Deseja realmente excluir?")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),e("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(a){var o=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return t.editItem(o)}}},[t._v(" mdi-pencil ")]),e("v-icon",{attrs:{small:""},on:{click:function(a){return t.deleteItem(o)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[e("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}])})],1)},sa=[],na=(e("a434"),{data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"vencimento",value:"vencimento"},{text:"Parc",value:"Parc"},{text:"amortização",value:"amortização",sortable:!1},{text:"juros",value:"juros",sortable:!1},{text:"prestação",value:"prestação",sortable:!1},{text:"saldo",value:"saldo",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{vencimento:"",Parc:0,"amortização":0,juros:0,"prestação":0},defaultItem:{vencimento:"",Parc:0,"amortização":0,juros:0,"prestação":0}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nova parcela":"Editar parcela"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.impa()},methods:{alguma:function(){this.$store.commit("alertando")},impa:function(){var t=this;console.log("carregando"),this.$http.get("as.json").then((function(a){t.desserts=a.data.dados,console.log("carregoouuu")}))},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}}),ia=na,ca=e("ce7e"),la=Object(m["a"])(ia,ra,sa,!1,null,null,null),da=la.exports;f()(la,{VBtn:v["a"],VCard:wt["a"],VCardActions:Mt["a"],VCardText:Mt["b"],VCardTitle:Mt["c"],VCol:Tt["a"],VContainer:Et["a"],VDataTable:qt["a"],VDialog:Nt["a"],VDivider:ca["a"],VIcon:b["a"],VRow:zt["a"],VSpacer:q["a"],VTextField:Bt["a"],VToolbar:Ut["a"],VToolbarTitle:I["b"]});var ua={components:{relatorio:da}},ma=ua,ha=Object(m["a"])(ma,ea,oa,!1,null,null,null),fa=ha.exports,pa={name:"Relatorio",components:{pagina:at,relatorio:fa}},va=pa,ba=Object(m["a"])(va,ta,aa,!1,null,null,null),xa=ba.exports,ga=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},$a=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("img",{attrs:{draggable:"false",src:"https://myrp.com.br/wp-content/uploads/2020/03/pdf-myrp-funcionalidades.png",alt:"img"}})])}],_a={name:"Home"},Da=_a,Ca=(e("83c2"),Object(m["a"])(Da,ga,$a,!1,null,null,null)),Ia=Ca.exports;o["default"].use(Y["a"]);var ya=[{name:"home",path:"/vuefno",component:Ia},{name:"lancar",path:"/new",component:Ct},{name:"manutencao",path:"/manutencao",component:Zt},{name:"relatorio",path:"/relatorio",component:xa}],ka=new Y["a"]({mode:"history",routes:ya}),ja=e("bc3a"),Pa=e.n(ja);Pa.a.defaults.baseURL="https://vuefno-9928a-default-rtdb.firebaseio.com/",o["default"].use({install:function(t){t.prototype.$http=Pa.a}});var Fa=e("660e");o["default"].use(Fa["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1140,xl:1/0}});var Oa=e("5f5b"),Aa=e("b1e0");e("f9e3"),e("2dd8");o["default"].use(Oa["a"]),o["default"].use(Aa["a"]),o["default"].config.productionTip=!1,new o["default"]({BootstrapVue:Oa["a"],store:J,router:ka,vuetify:Q,render:function(t){return t(U)}}).$mount("#app")},7137:function(t,a,e){},"83c2":function(t,a,e){"use strict";e("1cc3")},"83e8":function(t,a,e){},"85ec":function(t,a,e){},"8b6b":function(t,a,e){},"8f33":function(t,a,e){"use strict";e("4326")},a71c:function(t,a,e){},b168:function(t,a,e){"use strict";e("83e8")},b390:function(t,a,e){"use strict";e("8b6b")},d3c7:function(t,a,e){"use strict";e("7137")},ed45:function(t,a,e){"use strict";e("276c")},efec:function(t,a,e){}});
//# sourceMappingURL=app.bc4efdd3.js.map