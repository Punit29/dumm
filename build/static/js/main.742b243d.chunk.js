(this["webpackJsonptrello-react-punit"]=this["webpackJsonptrello-react-punit"]||[]).push([[0],{31:function(t,e,c){},32:function(t,e,c){},42:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),s=c(15),i=c.n(s),o=(c(31),c(32),c(11)),r=c(1);var d=function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("img",{className:"homeImg",src:"https://img.icons8.com/windows/32/000000/home-page.png",alt:"none"})}),Object(r.jsx)(o.b,{to:"/boards",children:Object(r.jsx)("button",{className:"btn btn-outline-light boardButton",children:"Boards"})}),Object(r.jsx)("div",{className:"trello-img",children:Object(r.jsx)("img",{src:"https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png",alt:"none"})})]})},l=c(4),h=c(5),u=c(7),p=c(6),b=function(t){return Object(r.jsx)("div",{children:Object(r.jsx)(o.b,{to:"/board/".concat(t.boards.id),children:Object(r.jsx)("button",{className:"boardB btn btn-primary active",children:t.boards.name})})})},j=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={boards:[]},t}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.trello.com/1/members/me/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=".concat("0411d596f676963925b6cdc26d6adbbf","&token=").concat("421401dc0406c370d37fcae4d35286fca589168586da4d3d914aa56f04324919"),{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.setState({boards:e})}))}},{key:"render",value:function(){return this.state.boards.map((function(t){return Object(r.jsx)(b,{boards:t},t.id)}))}}]),c}(n.Component),f=function(){return Object(r.jsx)("h1",{className:"homeContent",children:"Welcome to My trello"})},m=c(20),k=c.n(m),v=c(24),O=function(t){return Object(r.jsxs)("div",{onClick:function(){return t.openModal(t.cards)},className:"cardDiv",children:[Object(r.jsx)("h6",{className:"cardName",children:t.cards.name}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(e){return t.deleteCard(e,t.cards.id)},className:"deleteButton btn btn-xsm",children:Object(r.jsx)("i",{className:"fa fa-trash"})})})]})},x=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(h.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"hideDiv",style:{display:this.props.style.display},children:[Object(r.jsx)("div",{className:"hideInputDiv",children:Object(r.jsx)("input",{onChange:this.props.inputState,className:"input",type:"text",value:this.props.input,placeholder:"enter title"})}),Object(r.jsxs)("div",{className:"hideButtons",children:[Object(r.jsx)("button",{onClick:this.props.addNewCard,className:"hideButton",children:"Add ".concat(this.props.buttonTitle)}),Object(r.jsx)("button",{onClick:this.props.closeInputDiv,className:"hideButton1",children:"X"})]})]})}}]),c}(a.a.Component),y="421401dc0406c370d37fcae4d35286fca589168586da4d3d914aa56f04324919",C="0411d596f676963925b6cdc26d6adbbf",D=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={cards:[],hideDiv:!1,inputValue:""},t.openHideDiv=function(){t.setState({hideDiv:!0})},t.closeInputDiv=function(){t.setState({hideDiv:!1})},t.inputState=function(e){t.setState({inputValue:e.target.value})},t.addNewCard=Object(v.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.trello.com/1/cards?idList=".concat(t.props.lists.id,"&name=").concat(t.state.inputValue,"&keepFromSource=all&key=").concat(C,"&token=").concat(y),{method:"POST"}).then((function(t){return t.json()})).then((function(e){t.setState({cards:t.state.cards.concat([e]),inputValue:""})}));case 2:case"end":return e.stop()}}),e)}))),t.deleteCard=function(e,c){e.stopPropagation(),fetch("https://api.trello.com/1/cards/".concat(c,"?key=").concat(C,"&token=").concat(y),{method:"DELETE"}).then((function(){t.setState({cards:t.state.cards.filter((function(t){return t.id!==c}))})}))},t}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.trello.com/1/lists/".concat(this.props.lists.id,"/cards?key=").concat(C,"&token=").concat(y),{}).then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({cards:e})}))}},{key:"render",value:function(){var t=this,e=this.state.hideDiv?"none":"block",c=this.state.hideDiv?"block":"none",n=this.state.cards.map((function(e){return Object(r.jsx)(O,{cards:e,deleteCard:t.deleteCard,openModal:t.props.openModal},e.id)}));return Object(r.jsxs)("div",{className:"listContainer",children:[Object(r.jsxs)("div",{className:"listHead",children:[Object(r.jsx)("h5",{className:"listName",children:this.props.lists.name}),Object(r.jsx)("button",{onClick:function(){return t.props.deleteList(t.props.lists.id)},className:"btn-default deleteButtonForList",children:"X"})]}),Object(r.jsx)("div",{className:"cards",children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:this.openHideDiv,className:"addButton btn btn-success",style:{display:e,backgroundColor:"rgb(0, 0, 0, 0.2)",border:"none",color:"black",fontStyle:"bold"},children:"+Add New Card"})}),Object(r.jsx)(x,{style:{display:c},closeInputDiv:this.closeInputDiv,inputState:this.inputState,input:this.state.inputValue,addNewCard:this.addNewCard,buttonTitle:"card"})]})}}]),c}(n.Component),I=c(25),N=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(h.a)(c,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"checkItem",children:[Object(r.jsx)("input",{onChange:function(){return t.props.updateCheckItem(event,t.props.checkItem)},type:"checkBox",className:"checkBox",checked:"complete"===this.props.checkItem.state,readOnly:!0}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:this.props.checkItem.name})}),Object(r.jsx)("button",{onClick:function(){return t.props.deleteCheckItem(t.props.checkItem.id)},className:"deleteButtonForItem",children:"x"})]})}}]),c}(n.Component),S="421401dc0406c370d37fcae4d35286fca589168586da4d3d914aa56f04324919",L="0411d596f676963925b6cdc26d6adbbf",g=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={checkItems:[]},t.openHideDiv=function(){t.setState({hideDiv:!0})},t.closeInputDiv=function(){t.setState({hideDiv:!1})},t.inputState=function(e){t.setState({inputValue:e.target.value})},t.addNewCheckItem=function(){fetch("https://api.trello.com/1/checklists/".concat(t.props.checkList.id,"/checkItems?name=").concat(t.state.inputValue,"&pos=bottom&checked=false&key=").concat(L,"&token=").concat(S),{method:"POST"}).then((function(t){return t.json()})).then((function(e){return t.setState({checkItems:t.state.checkItems.concat([e]),inputValue:""})}))},t.deleteCheckItem=function(e){fetch("https://api.trello.com/1/checklists/".concat(t.props.checkList.id,"/checkItems/").concat(e,"?key=").concat(L,"&token=").concat(S),{method:"DELETE"}).then((function(){t.setState({checkItems:t.state.checkItems.filter((function(t){return t.id!==e}))})}))},t.updateCheckItem=function(e,c){var n=e.target.checked?"complete":"incomplete";fetch("https://api.trello.com/1/cards/".concat(t.props.checkList.idCard,"/checkItem/").concat(c.id,"?state=").concat(n,"&key=").concat(L,"&token=").concat(S),{method:"PUT"}).then((function(t){return t.json()})).then((function(e){var n=t.state.checkItems;n[n.indexOf(c)].state=e.state,t.setState({checkItems:n})}))},t}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.trello.com/1/checklists/".concat(this.props.checkList.id,"/checkItems?key=").concat(L,"&token=").concat(S),{method:"GET"}).then((function(t){return t.json()})).then((function(e){return t.setState({checkItems:e})}))}},{key:"render",value:function(){var t=this,e=this.state.hideDiv?"none":"block",c=this.state.hideDiv?"block":"none",n=this.state.checkItems.map((function(e){return Object(r.jsx)(N,{checkItem:e,deleteCheckItem:t.deleteCheckItem,updateCheckItem:t.updateCheckItem},e.id)}));return Object(r.jsxs)("div",{className:"checkListContainer",children:[Object(r.jsx)("h3",{children:this.props.checkList.name}),Object(r.jsx)("div",{className:"itemsContainer",children:n}),Object(r.jsxs)("div",{className:"buttonsOfCheckList",children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){return t.props.deleteCheckList(t.props.checkList.id)},className:"deleteButtonForCheckList btn btn-danger btn-xsm",children:"Delete"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:this.openHideDiv,style:{display:e},className:"addButtonForCheckItem btn btn-primary btn-xsm",children:"add items"}),Object(r.jsx)(x,{style:{display:c},closeInputDiv:this.closeInputDiv,inputState:this.inputState,input:this.state.inputValue,addNewCard:this.addNewCheckItem,buttonTitle:"check item"})]})]})]})}}]),c}(n.Component),w="421401dc0406c370d37fcae4d35286fca589168586da4d3d914aa56f04324919",T="0411d596f676963925b6cdc26d6adbbf",B={fontFamily:"sans-serif",textAlign:"center"},M=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={cardId:"",checkLists:[],hideDiv:!1},t.openHideDiv=function(){t.setState({hideDiv:!0})},t.closeInputDiv=function(){t.setState({hideDiv:!1})},t.inputState=function(e){t.setState({inputValue:e.target.value})},t.addNewCheckList=function(){fetch("https://api.trello.com/1/cards/".concat(t.props.card.id,"/checklists?name=").concat(t.state.inputValue,"&key=").concat(T,"&token=").concat(w),{method:"POST"}).then((function(t){return t.json()})).then((function(e){t.setState({checkLists:t.state.checkLists.concat([e]),inputValue:""})}))},t.deleteCheckList=function(e){fetch("https://api.trello.com/1/checklists/".concat(e,"?key=").concat(T,"&token=").concat(w),{method:"DELETE"}).then((function(){t.setState({checkLists:t.state.checkLists.filter((function(t){return t.id!==e}))})}))},t}return Object(h.a)(c,[{key:"componentDidUpdate",value:function(t){var e=this;this.props.card.id!==t.card.id&&fetch("https://api.trello.com/1/cards/".concat(this.props.card.id,"/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=").concat(T,"&token=").concat(w),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return e.setState({checkLists:t})}))}},{key:"render",value:function(){var t=this,e=this.state.hideDiv?"none":"block",c=this.state.hideDiv?"block":"none",n=this.state.checkLists.map((function(e){return Object(r.jsx)(g,{checkList:e,deleteCheckList:t.deleteCheckList},e.id)}));return Object(r.jsx)("div",{style:B,children:Object(r.jsxs)(I.a,{open:this.props.openModal,onClose:this.props.closeModal,children:[Object(r.jsx)("h2",{children:"".concat(this.props.card.name)}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:this.openHideDiv,style:{display:e},className:"btn btn-primary",children:"Add checkList"}),Object(r.jsx)(x,{style:{display:c},closeInputDiv:this.closeInputDiv,inputState:this.inputState,input:this.state.inputValue,addNewCard:this.addNewCheckList,buttonTitle:"check list"})]}),Object(r.jsx)("div",{children:n})]})})}}]),c}(a.a.Component),V="421401dc0406c370d37fcae4d35286fca589168586da4d3d914aa56f04324919",E="0411d596f676963925b6cdc26d6adbbf",A=function(t){Object(u.a)(c,t);var e=Object(p.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={lists:[],hideDiv:!1,inputValue:"",open:!1,card:{}},t.openHideDiv=function(){t.setState({hideDiv:!0})},t.closeInputDiv=function(){t.setState({hideDiv:!1})},t.inputState=function(e){t.setState({inputValue:e.target.value})},t.addNewList=function(){fetch("https://api.trello.com/1/lists?name=".concat(t.state.inputValue,"&idBoard=").concat(t.props.match.params.id,"&pos=bottom&key=").concat(E,"&token=").concat(V),{method:"POST"}).then((function(t){return t.json()})).then((function(e){t.setState({lists:t.state.lists.concat([e]),inputValue:""})}))},t.deleteList=function(e){fetch("https://api.trello.com/1/lists/".concat(e,"/closed?value=true&key=").concat(E,"&token=").concat(V),{method:"PUT"}).then((function(){t.setState({lists:t.state.lists.filter((function(t){return t.id!==e}))})}))},t.openModal=function(e){t.setState({open:!0,card:e})},t.onCloseModal=function(){t.setState({open:!1})},t}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.trello.com/1/boards/".concat(this.props.match.params.id,"/lists?key=").concat(E,"&token=").concat(V),{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.setState({lists:e})}))}},{key:"render",value:function(){var t=this,e=this.state.hideDiv?"none":"block",c=this.state.hideDiv?"block":"none",n=this.state.lists.map((function(e){return Object(r.jsx)(D,{lists:e,deleteList:t.deleteList,openModal:t.openModal},e.id)}));return Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},className:"allLists",children:[n,Object(r.jsx)("button",{onClick:this.openHideDiv,className:"newListButton",style:{display:e},children:"+Add List"}),Object(r.jsx)(x,{style:{display:c},closeInputDiv:this.closeInputDiv,inputState:this.inputState,input:this.state.inputValue,addNewCard:this.addNewList,buttonTitle:"list"}),Object(r.jsx)(M,{openModal:this.state.open,closeModal:this.onCloseModal,card:this.state.card,checkLists:this.state.checkLists})]})}}]),c}(n.Component),F=c(2);var H=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)(F.a,{path:"/",exact:!0,component:f}),Object(r.jsx)(F.a,{path:"/boards",exact:!0,component:j}),Object(r.jsx)(F.a,{path:"/board/:id",exact:!0,component:A})]})})},P=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),s(t),i(t)}))};c(41);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root")),P()}},[[42,1,2]]]);
//# sourceMappingURL=main.742b243d.chunk.js.map