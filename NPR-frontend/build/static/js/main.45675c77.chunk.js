(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),r=s(17),o=s.n(r),i=(s(23),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))}),l=s(2),h=s(3),d=s(5),m=s(4),u=s(6),j=s.n(u),b=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={fieldIsPassword:!0,successMessage:"",message:!1,username:"",password:""},e.handleLogin=function(){e.setState({message:!0});var t={username:e.state.username,password:e.state.password};j.a.post("http://127.0.0.1:8000/login/",t).then((function(t){e.setState(t.data),"User logined successfully."===e.state.successMessage&&localStorage.removeItem("user"),localStorage.setItem("user",t.data.user),e.props.chechUserAuth(t.data.user)})).catch((function(e){console.log(e)}))},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form-group",children:[Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.message:""}),Object(a.jsx)("label",{children:"Username :"}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.username:""}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"e.g. sumit@123",onChange:function(t){e.setState({username:t.target.value,message:!1})}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Password :"}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.password:""}),Object(a.jsx)("input",{type:this.state.fieldIsPassword?"password":"text",className:"form-control",placeholder:"e.g. password@123",onChange:function(t){e.setState({password:t.target.value,message:!1})}}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{onClick:function(){e.setState({fieldIsPassword:!e.state.fieldIsPassword})},className:"btn btn-danger btn-sm",children:this.state.fieldIsPassword?"SHOW":"HIDE"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h6",{className:"message",children:this.state.successMessage}),Object(a.jsx)("h1",{type:"submit",className:"btn btn-success m-2 form-control",onClick:this.handleLogin,children:"LOGIN"})]})})}}]),s}(n.Component),p=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={passwordFieldIsPassword:!0,password2FieldIsPassword:!0,successMessage:"",message:!1,username:"",email:"",first_name:"",last_name:"",password:"",password2:"",loginStart:!1},e.handleLogin=function(){if(e.state.loginStart){var t={username:e.state.username,password:e.state.password};j.a.post("http://127.0.0.1:8000/login/",t).then((function(t){e.setState(t.data),"User logined successfully."===e.state.successMessage?(localStorage.setItem("user",t.data.user),e.props.chechUserAuth(t.data.user)):e.setState({message:!0})})).catch((function(e){console.log(e)}))}},e.handleSignup=function(){var t={username:e.state.username,email:e.state.email,first_name:e.state.first_name,last_name:e.state.last_name,password:e.state.password,password2:e.state.password2};j.a.post("http://127.0.0.1:8000/signup/",t).then((function(t){e.setState({message:!0}),e.setState(t.data),"User created successfully."===e.state.successMessage&&e.setState({message:!1})})).catch((function(e){console.error(e)})),e.setState({loginStart:!0})},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username :"}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.username:""}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"e.g. sumit123",onChange:function(t){e.setState({username:t.target.value,message:!1})}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"First Name :"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"e.g. Sumit",onChange:function(t){e.setState({first_name:t.target.value})}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Last Name :"}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"e.g. Dhakad",onChange:function(t){e.setState({last_name:t.target.value})}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Email :"}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.email:""}),Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"e.g. sumitdhakad123@gmail.com",onChange:function(t){e.setState({emial:t.target.value,message:!1})}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Password :"}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.password:""}),Object(a.jsx)("input",{type:this.state.passwordFieldIsPassword?"password":"text",className:"form-control",placeholder:"Make strong password.",onChange:function(t){e.setState({password:t.target.value,message:!1})}}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{onClick:function(){e.setState({passwordFieldIsPassword:!e.state.passwordFieldIsPassword})},className:"btn btn-danger btn-sm",children:this.state.passwordFieldIsPassword?"SHOW":"HIDE"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Confirm password :"}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.password2:""}),Object(a.jsx)("input",{type:this.state.password2FieldIsPassword?"password":"text",className:"form-control",placeholder:"Both password should be same.",onChange:function(t){e.setState({password2:t.target.value,message:!1})}}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{onClick:function(){e.setState({password2FieldIsPassword:!e.state.password2FieldIsPassword})},className:"btn btn-danger btn-sm",children:this.state.password2FieldIsPassword?"SHOW":"HIDE"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h6",{className:"message",children:this.state.successMessage}),Object(a.jsx)("h6",{className:"message",children:this.state.message?this.state.message:""}),Object(a.jsx)("h1",{type:"submit",className:"btn btn-success m-2 form-control",onClick:this.state.loginStart?this.handleLogin:this.handleSignup,children:this.state.loginStart?"NOW LOGIN":"SIGNUP"})]})})}}]),s}(n.Component),g=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={loginPage:!0},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.props.chechUserAuth;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"jumbotron",style:{padding:"5px 0px"},children:Object(a.jsx)("h3",{className:"text-center",children:"NPR"})}),Object(a.jsx)("button",{className:"btn btn-default m-2 btn-sm",onClick:function(){e.setState({loginPage:!e.state.loginPage})},children:this.state.loginPage?"SIGNUP":"LOGIN"}),Object(a.jsx)("hr",{}),this.state.loginPage?Object(a.jsx)(b,{chechUserAuth:t}):Object(a.jsx)(p,{chechUserAuth:t})]})}}]),s}(n.Component),O=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container p-2 m-2 bg-warning product",onClick:this.props.onClick,children:[Object(a.jsx)("span",{children:Object(a.jsx)("img",{src:this.props.Image,alt:"product img",className:"productImg"})}),Object(a.jsxs)("span",{children:[Object(a.jsx)("h4",{className:"m-2 link productHead",children:this.props.ProductName}),Object(a.jsxs)("div",{className:"sortProductDetail",children:[Object(a.jsxs)("h6",{className:"m-2",children:["Likes:",this.props.Likes]}),Object(a.jsxs)("h6",{className:"m-2",children:["Comments:",this.props.Comments]}),Object(a.jsxs)("h6",{className:"m-2",children:["Dislikes:",this.props.Dislikes]}),Object(a.jsxs)("h6",{className:"m-2",children:["Launched on:",this.props.LaunchDate]})]})]})]})}}]),s}(n.Component),f=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:[],filteredData:[],searchData:""},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://127.0.0.1:8000/productList/?format=json").then((function(t){e.setState({data:t.data,filteredData:t.data})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"cotainer",children:[Object(a.jsxs)("div",{className:"jumbotron form-inline navBar",style:{padding:"5px 4px"},children:[Object(a.jsx)("h3",{className:"m-2",children:"NPR"}),Object(a.jsx)("div",{className:"cotainer",children:Object(a.jsx)("input",{type:"search",onChange:function(t){e.setState({filteredData:e.state.data.filter((function(e){return e.product_name.includes(t.target.value.toUpperCase())}))})},className:"form-control p-1 cm-10 m-2",placeholder:"Search product"})}),Object(a.jsx)("span",{className:"btnForHover"}),Object(a.jsxs)("div",{className:"form-inline logoutBtn",children:[Object(a.jsx)("h5",{className:"",children:localStorage.getItem("user")}),Object(a.jsx)("h3",{className:"btn btn-danger btn-sm",onClick:this.props.handleLogout,children:"logout"})]})]}),Object(a.jsx)("hr",{className:"TopHr"}),Object(a.jsx)("div",{children:this.state.filteredData.map((function(t){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(O,{ProductName:t.product_name,Image:t.Image,Likes:t.no_of_likes,Comments:t.no_of_comments,Dislikes:t.no_of_dislikes,LaunchDate:t.launched_on,onClick:function(){return e.props.onClick(t.id)}})},t.id)}))})]})}}]),s}(n.Component),x=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={Username:localStorage.getItem("user"),data:e.props.data},e}return Object(h.a)(s,[{key:"handleDeleteComment",value:function(e){var t="http://127.0.0.1:8000/destroyComment/"+e,s=this.state.data.filter((function(t){return t.id!==e}));j.a.delete(t),this.setState({data:s})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"container",children:this.state.data.map((function(t){return Object(a.jsxs)("div",{className:"comment",children:[Object(a.jsxs)("h5",{children:[t.Username," :-"]}),Object(a.jsx)("p",{children:t.Comment}),e.state.Username===t.Username?Object(a.jsx)("h6",{className:"btn btn-danger btn-sm",onClick:function(){e.handleDeleteComment(t.id)},children:"Delete"}):null]},t.id)}))})}}]),s}(n.Component),v=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={writenComment:""},e.fetchData=function(){var t="http://127.0.0.1:8000/product/"+e.props.ProductId+"/";j.a.get(t).then((function(t){e.setState(t.data)})).catch((function(e){console.error(e)}))},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"handleLike",value:function(e,t){var s=this,a={ProductId:e,Username:localStorage.getItem("user"),Like:t};j.a.post("http://127.0.0.1:8000/updateLike",a).then((function(e){s.setState(e.data)})).catch((function(e){console.error(e)}))}},{key:"handleComment",value:function(e){var t=this;if(0!==e.length){var s={ProductId:this.props.ProductId,Username:localStorage.getItem("user"),Comment:e};j.a.post("http://127.0.0.1:8000/createComment",s).then((function(e){var s=t.state.AllComments;s[s.length]=e.data,t.setState({AllComments:s,writenComment:""})})).catch((function(e){console.error(e)}))}}},{key:"render",value:function(){var e=this;return this.state.AllComments?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"jumbotron navBar",style:{padding:"5px 0px"},children:Object(a.jsx)("h3",{className:"text-center",children:"NPR"})}),Object(a.jsx)("hr",{className:"TopHr"}),Object(a.jsx)("h6",{className:"btn btn-danger btn-sm",onClick:this.props.handleBack,children:"Back"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("img",{src:this.state.Image,className:"productDetailImg",alt:"Product img"}),Object(a.jsx)("h1",{className:"productDetailTittle",children:this.state.product_name}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"container sortDetail",children:[Object(a.jsxs)("h6",{className:"btn btn-success btn-sm m-3",onClick:function(){e.handleLike(e.props.ProductId,"1")},children:[this.state.no_of_likes," likes"]}),Object(a.jsxs)("h6",{className:"btn btn-danger btn-sm m-3",onClick:function(){e.handleLike(e.props.ProductId,"0")},children:[this.state.no_of_dislikes," dislikes"]}),Object(a.jsx)("h6",{className:"btn btn-warning btn-sm m-3",onClick:function(){e.handleLike(e.props.ProductId,"-1")},children:"remove both"}),Object(a.jsxs)("h6",{children:["Comments : ",this.state.no_of_comments]}),Object(a.jsxs)("h6",{children:["Launch Date : ",this.state.launched_on]})]}),Object(a.jsxs)("div",{className:"container comments",children:[Object(a.jsx)("h3",{className:"productDetailTittle",children:"COMMENTS"}),Object(a.jsx)(x,{data:this.state.AllComments}),Object(a.jsx)("hr",{}),Object(a.jsx)("textarea",{className:"form-control container",rows:"6",value:this.state.writenComment,onChange:function(t){e.setState({writenComment:t.target.value})}}),Object(a.jsx)("div",{className:"m-3"}),Object(a.jsx)("h5",{className:"btn btn-primary btn-sm",onClick:function(){e.handleComment(e.state.writenComment)},children:"Comment"})]})]})]}):null}}]),s}(n.Component),N=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={detailedProductPage:!1,idToFetchDetail:0},e.handleProductDetial=function(t){e.setState({detailedProductPage:!0,idToFetchDetail:t})},e.handlingBackEvent=function(){e.setState({detailedProductPage:!1})},e.handleLogout=function(){var t={username:localStorage.getItem("user")};j.a.post("http://127.0.0.1:8000/logout/",t).then((function(t){"User logout successfully."===t.data.successMessage&&(localStorage.removeItem("user"),e.props.chechUserAuth(""))})).catch((function(e){console.log(e)}))},e}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"cotainer",children:this.state.detailedProductPage?Object(a.jsx)(v,{handleBack:this.handlingBackEvent,ProductId:this.state.idToFetchDetail}):Object(a.jsx)(f,{handleLogout:this.handleLogout,onClick:this.handleProductDetial})})}}]),s}(n.Component),w=(s(42),function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={auth:!1},e.chechUserAuth=function(t){j.a.post("http://127.0.0.1:8000/",{user:t}).then((function(t){console.log(t.data),0!==t.data.username?e.setState({data:t.data,auth:!0}):e.setState({data:t.data,auth:!1})})).catch((function(e){console.error(e)}))},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user")||"";this.chechUserAuth(e)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:this.state.auth?Object(a.jsx)(N,{chechUserAuth:this.chechUserAuth}):Object(a.jsx)(g,{chechUserAuth:this.chechUserAuth})})}}]),s}(n.Component));var C=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(w,{})})};s(43);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),i()}},[[44,1,2]]]);
//# sourceMappingURL=main.45675c77.chunk.js.map