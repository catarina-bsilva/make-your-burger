"use strict";(self["webpackChunkpburger"]=self["webpackChunkpburger"]||[]).push([[699],{3780:function(e,t,s){s.r(t),s.d(t,{default:function(){return z}});var a=s(3396);const n={class:"main-container"},i=(0,a._)("h1",null,"Gerenciar Pedidos:",-1);function o(e,t,s,o,l,u){const r=(0,a.up)("Dashboard");return(0,a.wg)(),(0,a.iD)("div",n,[i,(0,a.Wm)(r)])}var l=s(9242),u=s(7139);const r=e=>((0,a.dD)("data-v-b576a2ea"),e=e(),(0,a.Cn)(),e),d={id:"burger-table"},c=r((()=>(0,a._)("div",{id:"burger-table-heading"},[(0,a._)("div",{class:"order-id"},"#:"),(0,a._)("div",null,"Cliente:"),(0,a._)("div",null,"Pão:"),(0,a._)("div",null,"Carne:"),(0,a._)("div",null,"Opcionais:"),(0,a._)("div",null,"Ações:")],-1))),g={id:"burger-table-rows"},h={class:"order-number"},v=["onChange"],p=r((()=>(0,a._)("option",{value:""},"Seleccione ",-1))),b=["value","selected"],m=["onClick"];function w(e,t,s,n,i,o){const r=(0,a.up)("Message");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",null,[(0,a.wy)((0,a.Wm)(r,{msg:i.msg},null,8,["msg"]),[[l.F8,i.msg]]),c,(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.burgers,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"burger-table-row",key:e.id},[(0,a._)("div",h,(0,u.zw)(e.id),1),(0,a._)("div",null,(0,u.zw)(e.nome),1),(0,a._)("div",null,(0,u.zw)(e.pao),1),(0,a._)("div",null,(0,u.zw)(e.carne),1),(0,a._)("div",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.opcionais,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,u.zw)(e),1)))),128))])]),(0,a._)("div",null,[(0,a._)("select",{name:"status",class:"status",onChange:t=>o.updateBurger(t,e.id)},[p,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.status,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.id,value:t.tipo,selected:e.status==t.tipo},(0,u.zw)(t.tipo),9,b)))),128))],40,v),(0,a._)("button",{class:"delete-btn",onClick:t=>o.deleteBurger(e.id)},"Cancelar",8,m)])])))),128))])])])}var _=s(8950),f={name:"Dashboard",data(){return{burgers:null,burger_id:null,status:[],msg:null}},components:{Message:_.Z},methods:{async getPedidos(){const e=await fetch("http://localhost:3000/burgers"),t=await e.json();this.burgers=t,this.getStatus()},async getStatus(){const e=await fetch("http://localhost:3000/status"),t=await e.json();this.status=t},async deleteBurger(e){const t=await fetch(`http://localhost:3000/burgers/${e}`,{method:"DELETE"});await t.json();this.getPedidos(),this.msg="Pedido removido com sucesso!",setTimeout((()=>this.msg=""),3e3)},async updateBurger(e,t){const s=e.target.value,a=JSON.stringify({status:s}),n=await fetch(`http://localhost:3000/burgers/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:a}),i=await n.json();console.log(i),this.msg=`O pedido Nº ${t} foi actualizado para ${i.status}`,setTimeout((()=>this.msg=""),3e3)}},mounted(){this.getPedidos()}},D=s(89);const C=(0,D.Z)(f,[["render",w],["__scopeId","data-v-b576a2ea"]]);var y=C,k={name:"Pedidos",components:{Dashboard:y}};const P=(0,D.Z)(k,[["render",o]]);var z=P}}]);
//# sourceMappingURL=Pedidos.192d10a9.js.map