(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},28:function(e,t,a){e.exports=a(59)},54:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),l=a(63),s=a(2),i=a(3),u=a(5),m=a(4),d=a(6),p=a(65),h=a(61),g=a(11),f=a.n(g),b=new(function(){function e(){Object(s.a)(this,e),this.auth=f.a.create({baseURL:"".concat("http://localhost:5000"),withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.email,r=e.phone;return this.auth.post("/auth/signup",{username:t,password:a,email:n,phone:r}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),v=r.a.createContext(),E=v.Consumer,y=v.Provider,N=function(e){return function(t){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(E,null,function(a){return r.a.createElement(e,Object.assign({login:a.login,signup:a.signup,user:a.user,logout:a.logout,isLoggedin:a.isLoggedin,orderList:a.orderList,setOrderList:a.setOrderList},t.props))})}}]),a}(n.Component)},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0,orderList:[]},a.signup=function(e){var t=e.username,n=e.password;b.signup({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;a.setState({message:t.statusMessage})})},a.login=function(e){var t=e.username,n=e.password;b.login({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(){})},a.logout=function(){console.log("logout"),b.logout().then(function(){a.setState({isLoggedin:!1,user:null})}).catch(function(){})},a.setOrderList=function(e){a.setState({orderList:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1,orderList:t.orderList})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1,orderList:[]})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,c=e.orderList;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(y,{value:{isLoggedin:a,user:n,orderList:c,setOrderList:this.setOrderList,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(n.Component),j={weight:"40px",height:"40px"},L=N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedin;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron m-1 p-2"},r.a.createElement("h1",{className:"font-weight-bold"},"FUNGYUAN  \u8c50\u5143\u4f01\u696d\u6709\u9650\u516c\u53f8"),r.a.createElement("h3",null,"The Best Grinding Wheel Wholesaler")),r.a.createElement("div",{className:"navbar navbar-expand-md navbar-dark bg-dark sticky-top"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"../images/logo.png",alt:"Logo",style:j}),r.a.createElement("h3",{className:"text-light"}," Welcome: ",t.username),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#collapse_target"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapse_target"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item",style:{margin:"10px"}},r.a.createElement(h.a,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-item",style:{margin:"10px"}},r.a.createElement(h.a,{to:"/orderList"},"My Order")),r.a.createElement("li",{className:"nav-item",style:{margin:"10px"}},r.a.createElement("button",{className:"logout-button",onClick:a},"Logout"))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"../images/logo.png",alt:"Logo",style:j}),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#collapse_target"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapse_target"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item",style:{margin:"10px"}},r.a.createElement(h.a,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-item",style:{margin:"10px"}},r.a.createElement(h.a,{to:"/form/login"},"Login")),r.a.createElement("li",{className:"nav-item",style:{margin:"10px"}},r.a.createElement(h.a,{to:"/form/singup"},"Signup")))))))}}]),t}(n.Component)),w=N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome ",this.props.user.username))}}]),t}(n.Component)),x=a(17),k=a(64),C=a(62);var P=N(function(e){var t=e.component,a=e.isLoggedin,n=Object(x.a)(e,["component","isLoggedin"]);return r.a.createElement(k.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(C.a,{to:"/"})}}))});var S=N(function(e){var t=e.component,a=e.isLoggedin,n=Object(x.a)(e,["component","isLoggedin"]);return r.a.createElement(k.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(C.a,{to:"/category"}):r.a.createElement(t,e)}}))}),F={width:"60%",margin:"auto"},U=N(function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:"../images/background wheels.jpg",alt:"",className:"img-fluid",style:{width:"100%",height:"250px"}})),r.a.createElement("div",{className:"main-products"},r.a.createElement("h2",{className:"text-center mb-2"},"Our New Products"),r.a.createElement("div",{id:"carouselProducts",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block img-fluid",src:"../images/mounted-points/point-2.jpeg",alt:"",style:F})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block img-fluid",src:"../images/surface/surface-1.jpg",alt:"",style:F})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block img-fluid",src:"../images/mounted-points/point-3.jpg",alt:"",style:F})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block img-fluid img-center",src:"../images/traditional/t-2.jpg",alt:"",style:F})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block img-fluid",src:"../images/diamond-dresser/dresser-3.jpg",alt:"",style:F}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselProducts",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon bg-danger"})),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselProducts",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon bg-danger"}))),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(h.a,{to:"/form"},r.a.createElement("button",{className:"btn btn-info",active:"active"},"See More")))))}}]),t}(n.Component)),A=a(13),D=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",email:"",phone:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password,c=t.email,o=t.phone;a.props.signup({username:n,password:r,email:c,phone:o})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.email,c=e.phone;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("form",{className:"add-form ",onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelUsername"},"Username:"),r.a.createElement("input",{className:"form-control border border-secondary",id:"labelUsername",placeholder:"Username",type:"text",name:"username",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelPassword"},"Password:"),r.a.createElement("input",{className:"form-control border border-secondary",id:"labelPassword",placeholder:"Passwprd",type:"password",name:"password",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelE-mail"},"E-mail:"),r.a.createElement("input",{className:"form-control border border-secondary",id:"labelE-mail",placeholder:"E-mail",type:"text",name:"email",value:n,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelPhone"},"Phone:"),r.a.createElement("input",{className:"form-control border border-secondary",id:"labelPhone",placeholder:"Phone",type:"text",name:"phone",value:c,onChange:this.handleChange})),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{className:"btn btn-info",active:"active",type:"submit",value:"Signup"},"Signup")))))}}]),t}(n.Component)),_=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"add-form2",onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelUsername"},"Username:"),r.a.createElement("input",{className:"form-control border border-secondary",id:"labelUsername",placeholder:"Username",type:"text",name:"username",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelPassword"},"Password:"),r.a.createElement("input",{className:"form-control border border-secondary",id:"labelPassword",placeholder:"Passwprd",type:"password",name:"password",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{className:"btn btn-info",active:"active",type:"submit",value:"Login"},"Login"))))}}]),t}(n.Component));var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about-us  mb-3"},r.a.createElement("div",{className:"about-us-card"},r.a.createElement("h2",{className:"text-center pt-4"},"About Us"),r.a.createElement("h4",{className:"text-center p-3"},"FUNGYUAN Grinding Wheel Ltd. is located in Taichung, Taiwan. It is the best grinding wheel sholesaler with over 50 years experience of selling our products. Our goal is to provide a product with the best quality with good fit with your need. We promise to offer the fastest service to your company."))),r.a.createElement("div",{className:"form"},r.a.createElement("h2",{className:"ml-5"},"Signup"),r.a.createElement(D,null),r.a.createElement("h2",{className:"ml-5 mt-5"},"Login"),r.a.createElement(_,null)))},M=new(function(){function e(){Object(s.a)(this,e),this.category=f.a.create({baseURL:"".concat("http://localhost:5000","/category"),withCredentials:!0})}return Object(i.a)(e,[{key:"getAll",value:function(){return this.category.get("/").then(function(e){return e.data})}}]),e}()),R=(a(20),{weight:"200px",height:"200px"});var W=function(e){var t=e.category,a=t.title,n=t.image,c=t._id;return r.a.createElement("div",{className:"category"},r.a.createElement(h.a,{to:"/category/".concat(c)},r.a.createElement("img",{className:"shrink mb-3",src:n,alt:"category",style:R}),r.a.createElement("h3",{className:"text-center"},a)))},B=(a(54),N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={categories:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.getAll().then(function(t){return e.setState({categories:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product-box"},r.a.createElement("h2",{className:"text-center"},"Our Products"),r.a.createElement("div",{className:"product"},this.state.categories&&this.state.categories.map(function(e){return r.a.createElement(W,{category:e,key:e._id})}),r.a.createElement(h.a,{to:"/addProduct"},"admin"===this.props.user.username?r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{className:"btn btn-info mt-2",active:"active",type:"submit",value:"submit"},"Add New Products")):null))))}}]),t}(n.Component))),T=a(14),I=new(function(){function e(){Object(s.a)(this,e),this.product=f.a.create({baseURL:"".concat("http://localhost:5000","/product"),withCredentials:!0})}return Object(i.a)(e,[{key:"getProduct",value:function(e){return this.product.get("/getCategory/".concat(e)).then(function(e){return e.data})}},{key:"getOneProduct",value:function(e){return this.product.get("/getOne/".concat(e)).then(function(e){return e.data})}},{key:"createProduct",value:function(e){return this.product.post("/",e).then(function(e){return e.data})}},{key:"imageUpload",value:function(e){return this.product.post("/image",e).then(function(e){return e.data})}},{key:"deleteProduct",value:function(e){return this.product.delete("/"+e,I).then(function(e){return e.data})}}]),e}()),q=I,H=(a(55),{weight:"180px",height:"180px"}),J=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleSwitch=function(){return a.props.orderList&&a.props.orderList.includes(a.props.product._id)?r.a.createElement("button",{onClick:function(){a.props.handleRemove(a.props.product._id)}},"Remove -"):r.a.createElement("button",{onClick:function(){a.props.handleAdd(a.props.product._id)}},"Add To Order List +")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product,a=t.name,n=t.img,c=t.description;return r.a.createElement("div",{className:"prodcut-card"},r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},a)),r.a.createElement("div",null,r.a.createElement("img",{src:n,alt:"",style:H})),r.a.createElement("div",null,r.a.createElement("p",{className:"text-center"},c),"admin"===this.props.user.username?r.a.createElement("button",{onClick:function(){e.props.handleDelete(e.props.product._id)}},"Delete"):this.handleSwitch(this.props)))}}]),t}(n.Component)),Y=new(function(){function e(){Object(s.a)(this,e),this.orderList=f.a.create({baseURL:"".concat("http://localhost:5000","/orderList"),withCredentials:!0})}return Object(i.a)(e,[{key:"getOrderList",value:function(e){return this.orderList.get("/".concat(e)).then(function(e){return e.data})}},{key:"updatedOrderList",value:function(e){return console.log("orderList"),this.orderList.put("/",e).then(function(e){return e.data})}}]),e}()),z=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[]},a.handleDelete=function(e){q.deleteProduct(e).then(function(){var t=a.state.products.filter(function(t){return e!==t._id});a.setState({products:t})})},a.handleAdd=function(e){var t=Object(T.a)(a.props.orderList),n=[].concat(Object(T.a)(t),[e]);a.props.setOrderList(n);var r=Object.assign({},a.props.user);r.orderList=n,Y.updatedOrderList(r)},a.handleRemove=function(e){var t=Object(T.a)(a.props.orderList).filter(function(t){return e!==t});a.props.setOrderList(t);var n=Object.assign({},a.props.user);n.orderList=t,Y.updatedOrderList(n)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;q.getProduct(this.props.match.params.id).then(function(t){e.setState({products:t})})}},{key:"showTitle",value:function(){return this.state.products[0]?r.a.createElement("h2",{className:"text-center"},this.state.products[0].category_id.title):null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.showTitle(),this.state.products.map(function(t){return r.a.createElement(J,{product:t,key:t._id,handleDelete:e.handleDelete,handleAdd:e.handleAdd,handleRemove:e.handleRemove})}),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(h.a,{to:"/category"},r.a.createElement("button",{className:"btn btn-info",active:"active"},"Go Back"))))}}]),t}(n.Component)),K={height:"80px",width:"80px",margin:"10px"},Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={category_id:"",name:"",imageUrl:"",description:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.category_id,r=t.name,c=t.imageUrl,o=t.description;q.createProduct({category_id:n,name:r,imageUrl:c,description:o}).then(function(){a.props.history.push("/category")})},a.fileOnchange=function(e){var t=e.target.files[0],n=new FormData;n.append("photo",t),q.imageUpload(n).then(function(e){a.setState({imageUrl:e})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.category_id,a=e.name,n=e.imageUrl,c=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center m-3"},"Add a New Product"),r.a.createElement("form",{className:"add-form",onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"exampleFormControlSelect"},"Find a Category"),r.a.createElement("select",{className:"form-control border border-secondary",id:"exampleFormControlSelect",name:"category_id",required:!0,onChange:this.handleChange},r.a.createElement("option",{value:t},"Category"),r.a.createElement("option",{value:"5d384b74fbf2fa0d640da184"},"Metal Bond"),r.a.createElement("option",{value:"5d384b74fbf2fa0d640da185"},"Mounted-Points"),r.a.createElement("option",{value:"5d384b74fbf2fa0d640da186"},"Traditional Grinder Wheels"),r.a.createElement("option",{value:"5d384b74fbf2fa0d640da181"},"Bench Grinder Wheels"),r.a.createElement("option",{value:"5d384b74fbf2fa0d640da182"},"Surface Grinder Wheels"),r.a.createElement("option",{value:"5d384b74fbf2fa0d640da183"},"Diamond Dresser"))),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelUsername"},"Product Name"),r.a.createElement("input",{className:"input form-control border border-secondary",id:"labelProductName",placeholder:"ProductName",type:"text",name:"name",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("label",{for:"labelDescription"},"Description"),r.a.createElement("input",{className:"input form-control  border border-secondary",id:"labelDescription",placeholder:"Description",type:"description",name:"description",value:c,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group text-center "},r.a.createElement("label",{for:"exampleFormControlFile"},"Image"),r.a.createElement("input",{className:"form-control-file border border-secondary",id:"exampleFormControlFile",type:"file",onChange:this.fileOnchange}),r.a.createElement("img",{src:n,alt:"",style:K}),r.a.createElement("input",{className:"input border border-secondary",type:"submit",value:"submit"}))),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(h.a,{to:"/category"},r.a.createElement("button",{className:"btn btn-info",active:"active",type:"submit",value:"back"},"Go Back")))))}}]),t}(n.Component),V={weight:"180px",height:"180px"},X=N(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={orderList:a.props.user.orderList,productList:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=0;t<this.state.orderList.length;t++)q.getOneProduct(this.state.orderList[t]).then(function(t){var a=[].concat(Object(T.a)(e.state.productList),[t]);e.setState({productList:a})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center m-3"},"My Order List"),r.a.createElement("br",null),this.state.productList.map(function(e){var t=e.name,a=e.img,n=e.description;return r.a.createElement("div",{className:"prodcut-card"},r.a.createElement("h3",null,t),r.a.createElement("img",{src:a,alt:"",style:V}),r.a.createElement("p",null,n))}),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(h.a,{to:"/category"},r.a.createElement("button",{className:"btn btn-info",active:"active",type:"submit",value:"goback"},"Go Back"))))}}]),t}(n.Component)),Z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement("div",{className:"container"},r.a.createElement(L,{className:"nav"}),r.a.createElement(p.a,null,r.a.createElement(S,{className:"main-products info",exact:!0,path:"/",component:U}),r.a.createElement(S,{className:"about-us",path:"/form",component:G}),r.a.createElement(P,{path:"/private",component:w}),r.a.createElement(P,{exact:!0,path:"/category",component:B}),r.a.createElement(P,{path:"/category/:id",component:z}),r.a.createElement(P,{className:"add-form",exact:!0,path:"/addProduct",component:Q}),r.a.createElement(P,{className:"order-list",path:"/orderList",component:X}))))}}]),t}(n.Component);a(56).config(),o.a.render(r.a.createElement(l.a,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c6a5231f.chunk.js.map