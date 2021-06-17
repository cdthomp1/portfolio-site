(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,c){},57:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(18),n=c.n(s),a=c(4),i=c(13),l=c(42),o=c(43),j=c(11),d="PROJECT_LIST_REQUEST",b="PROJECT_LIST_SUCCESS",h="PROJECT_LIST_FAIL",p="PROJECT_DETAILS_REQUEST",u="PROJECT_DETAILS_SUCCESS",O="PROJECT_DETAILS_FAIL",m="ARTICLES_LIST_REQUEST",x="ARTICLES_LIST_SUCCESS",g="ARTICLES_LIST_FAIL",v="ARTICLE_REQUEST",f="ARTICLE_SUCCESS",y="ARTICLE_FAIL",w=Object(i.combineReducers)({projectList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{projects:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0,projects:[]};case b:return{loading:!1,projects:t.payload};case h:return{loading:!1,error:t.payload};default:return e}},projectDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{project:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)({loading:!0},e);case u:return{loading:!1,project:t.payload};case O:return{loading:!1,error:t.payload};default:return e}},articleList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{articles:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0,articles:[]};case x:return{loading:!1,articles:t.payload};case g:return{loading:!1,error:t.payload};default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case f:return{loading:!1,article:t.payload};case y:return{loading:!1,error:t.payload};default:return e}}}),N=[l.a],S=Object(i.createStore)(w,{},Object(o.composeWithDevTools)(i.applyMiddleware.apply(void 0,N))),T=(c(57),c(24)),C=c(3),E=c(9),k=c.n(E),L=c(12),I=c(15),_=c.n(I),R=function(){return function(){var e=Object(L.a)(k.a.mark((function e(t){var c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:d}),e.next=4,_.a.get("/api/getProjects");case 4:c=e.sent,r=c.data,t({type:b,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:h,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},A=function(){return function(){var e=Object(L.a)(k.a.mark((function e(t){var c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:m}),e.next=4,_.a.get("https://dev.to/api/articles?username=cdthomp1");case 4:c=e.sent,r=c.data,t({type:x,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:g,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},F=c(0),M=function(e){var t,c=e.project;return t=c.liveLink?Object(F.jsx)("a",{className:"read-more",rel:"noreferrer",target:"_blank",href:c.liveLink,children:"Live Site"}):Object(F.jsx)(F.Fragment,{}),Object(F.jsx)("div",{children:Object(F.jsxs)("div",{className:"wrapper",children:[Object(F.jsxs)("div",{className:"dots-wrapper card-header",children:[Object(F.jsx)("div",{id:"dot-1",className:"browser-dot"}),Object(F.jsx)("div",{id:"dot-2",className:"browser-dot"}),Object(F.jsx)("div",{id:"dot-3",className:"browser-dot"})]}),Object(F.jsxs)("div",{className:"post",children:[Object(F.jsx)("img",{className:"thumbnail",src:c.image,alt:"Cover"}),Object(F.jsxs)("div",{className:"post-preview",children:[Object(F.jsx)("h6",{className:"post-title",children:c.title}),Object(F.jsx)("p",{className:"post-intro",children:c.description}),Object(F.jsxs)("div",{className:"link-container",children:[Object(F.jsx)("a",{className:"read-more",rel:"noreferrer",target:"_blank",href:c.repoLink,children:"Repo Link"}),t]})]})]})]})})},D=function(e){var t=e.article;return Object(F.jsx)("div",{children:Object(F.jsxs)("div",{className:"wrapper",children:[Object(F.jsxs)("div",{className:"dots-wrapper card-header",children:[Object(F.jsx)("div",{id:"dot-1",className:"browser-dot"}),Object(F.jsx)("div",{id:"dot-2",className:"browser-dot"}),Object(F.jsx)("div",{id:"dot-3",className:"browser-dot"})]}),Object(F.jsxs)("div",{className:"post",children:[Object(F.jsx)("img",{className:"thumbnail",src:t.cover_image,alt:"Cover"}),Object(F.jsxs)("div",{className:"post-preview",children:[Object(F.jsx)("h6",{className:"post-title",children:t.title}),Object(F.jsx)("p",{className:"post-intro",children:t.description}),Object(F.jsx)("div",{className:"link-container",children:Object(F.jsx)("a",{className:"read-more",rel:"noreferrer",target:"_blank",href:t.url,children:"Read Article"})})]})]})]})})},U=function(){var e=Object(a.b)(),t=Object(a.b)(),c=Object(a.c)((function(e){return e.projectList})).projects,s=Object(a.c)((function(e){return e.articleList})).articles;return Object(r.useEffect)((function(){e(R())}),[e]),Object(r.useEffect)((function(){t(A())}),[t]),Object(F.jsxs)("div",{children:[Object(F.jsx)("section",{className:"s1",children:Object(F.jsxs)("div",{className:"main-container",children:[Object(F.jsx)("div",{className:"greeting-wrapper",children:Object(F.jsx)("h1",{children:"Hi, I'm Cameron Thompson"})}),Object(F.jsxs)("div",{className:"intro-wrapper",children:[Object(F.jsx)("div",{className:"left-column",children:Object(F.jsx)("img",{id:"profile_pic",alt:"Cameron Thompson",src:"./images/thompsonCameron.jpg"})}),Object(F.jsx)("div",{className:"right-column",children:Object(F.jsxs)("div",{id:"preview",children:[Object(F.jsx)("h3",{children:"What I Do"}),Object(F.jsx)("p",{children:"I am a student of Software Engineering with an emphasis in Web Development! "})]})})]})]})}),Object(F.jsx)("section",{className:"s2",children:Object(F.jsx)("div",{className:"main-container",children:Object(F.jsxs)("div",{className:"about-wrapper",children:[Object(F.jsxs)("div",{className:"about-me",children:[Object(F.jsx)("h4",{children:"More about me"}),Object(F.jsx)("p",{children:"I work hard to learn new technologies but I found a few to stick to!"}),Object(F.jsx)("hr",{}),Object(F.jsx)("h4",{children:"Top Technologies"}),Object(F.jsxs)("p",{children:["Fullstack developer with primary focus on Node + React: ",Object(F.jsx)("a",{target:"_blank",href:"./assets/resume.pdf",children:"Download Resume"})]}),Object(F.jsxs)("div",{id:"skills",children:[Object(F.jsx)("p",{children:"JavaScript"}),Object(F.jsx)("p",{children:"Node.js"}),Object(F.jsx)("p",{children:"React"}),Object(F.jsx)("p",{children:"MongoDB"}),Object(F.jsx)("p",{children:"Express.js"}),Object(F.jsx)("p",{children:"Heroku"}),Object(F.jsx)("p",{children:"Netlify"}),Object(F.jsx)("p",{children:"HTML/CSS"}),Object(F.jsx)("p",{children:"JAM Stack (Learning)"}),Object(F.jsx)("p",{children:"Serverless (Learning)"})]})]}),Object(F.jsxs)("div",{className:"social-links",children:[Object(F.jsx)("img",{id:"social_img",alt:"MERN Stack",src:"./images/mern.jpg"}),Object(F.jsxs)("h3",{children:["My Main Focus: ",Object(F.jsx)("br",{}),"The MERN Stack"]})]})]})})}),Object(F.jsxs)("section",{className:"s1",children:[Object(F.jsxs)("div",{className:"main-container",children:[Object(F.jsx)("h3",{style:{textAlign:"center"},children:"Some of my latest projects"}),Object(F.jsx)("div",{className:"post-wrapper",id:"projects",children:c.slice(0,3).map((function(e){return console.log(e._id),Object(F.jsx)(M,{project:e},e._id)}))}),Object(F.jsx)("div",{className:"more-button",children:Object(F.jsx)("a",{href:"/projects",children:"See More"})})]}),Object(F.jsxs)("div",{className:"main-container",children:[Object(F.jsx)("h3",{style:{textAlign:"center"},children:"Some of my latest articles"}),Object(F.jsx)("div",{className:"post-wrapper",id:"articles",children:s.slice(0,4).map((function(e){return null!==e.cover_image?Object(F.jsx)(D,{article:e},e.id):Object(F.jsx)(F.Fragment,{})}))}),Object(F.jsx)("div",{id:"bottom-button",className:"more-button",children:Object(F.jsx)("a",{href:"/articles",children:"See More"})})]})]})]})},P=c(20),J=c.n(P),H=(c(36),c(46)),B=c(44),q=c(19),Q="SUBMITTING",W="SUCCESS",G="ERROR",z="FIELD",K=function(e,t){switch(t.type){case Q:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case G:return Object(j.a)(Object(j.a)({},e),{},{errMsg:t.msg,loading:!1});case W:return Object(j.a)(Object(j.a)({},e),{},{successMsg:t.msg,loading:!1});case z:return Object(j.a)(Object(j.a)({},e),{},Object(q.a)({},t.target,t.value));default:return e}},V={errMsg:"",email:"",name:"",body:"",successMsg:"",loading:!1};function X(e){var t=Object(r.useReducer)(K,V),c=Object(H.a)(t,2),s=c[0],n=c[1],a=s.errMsg,i=s.email,l=s.name,o=s.subject,j=s.body,d=s.successMsg,b=s.loading,h=function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")},p=function(){var t=Object(L.a)(k.a.mark((function t(c){var r,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),l?B.validate(i)?o?j||(r="Don't forget to write a message!"):r="What is this message about?":r="Please enter a valid email":r="Please include your name",!r){t.next=4;break}return t.abrupt("return",n({type:G,msg:r}));case 4:return t.prev=4,n({type:Q}),t.next=8,fetch("/success",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:h({"form-name":"contact",email:i,name:l,subject:o,body:j})});case 8:200===t.sent.status?(s=e.successMsg||"Thanks for reaching out!",n({type:W,msg:s})):("Ooops... something went wrong.",n({type:G,msg:"Ooops... something went wrong."})),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),"Ooops... something went wrong 2.",n({type:G,msg:"Ooops... something went wrong 2."});case 16:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[d&&Object(F.jsx)("h2",{className:"h2 text-center",children:d}),!d&&Object(F.jsxs)("form",{onSubmit:p,id:"contact-form",children:[Object(F.jsx)("label",{children:"Name"}),Object(F.jsx)("input",{className:"input-field",type:"text",name:"name",required:!0,onChange:function(e){return n({type:z,target:"name",value:e.target.value})},value:l}),Object(F.jsx)("label",{children:"Subject"}),Object(F.jsx)("input",{className:"input-field",type:"text",name:"subject",required:!0,onChange:function(e){return n({type:z,target:"subject",value:e.target.value})},value:o}),Object(F.jsx)("label",{children:"Email"}),Object(F.jsx)("input",{className:"input-field",type:"text",name:"email",required:!0,onChange:function(e){return n({type:z,target:"email",value:e.target.value})},value:i}),Object(F.jsx)("label",{children:"Message"}),Object(F.jsx)("textarea",{className:"input-field",name:"message",required:!0,onChange:function(e){return n({type:z,target:"body",value:e.target.value})},value:j}),Object(F.jsx)("button",{type:"submit",className:"btn",id:"submit-btn",children:b?Object(F.jsx)("div",{className:"loader"}):"Submit"}),a&&Object(F.jsx)("p",{className:"error",children:Object(F.jsx)("small",{children:a})})]})]})}var Y=function(){J.a.highlightAll();return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("section",{className:"s2",children:Object(F.jsxs)("div",{className:"main-container",children:[Object(F.jsx)("h3",{style:{textAlign:"center"},children:"Get In Touch"}),Object(F.jsx)("h5",{style:{textAlign:"center"},children:"Send me a message here or get my npm card!"}),Object(F.jsxs)("div",{className:"npm-card",onClick:function(){navigator.clipboard.writeText("npx cameronthompson"),document.getElementById("copy-notice").innerText="Copied!",setTimeout((function(){document.getElementById("copy-notice").innerText="Click to Copy!"}),3e3)},children:[Object(F.jsx)("pre",{children:Object(F.jsx)("code",{className:"language-powershell",id:"npx",children:"npx cameronthompson"})}),Object(F.jsx)("p",{className:"copy-notice",id:"copy-notice",children:"Click to Copy!"})]}),Object(F.jsx)(X,{})]})})})},Z=(c(78),function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{class:"main-container",children:[Object(F.jsx)("div",{class:"greeting-wrapper",children:Object(F.jsx)("h1",{children:"Message Sent!"})}),Object(F.jsxs)("div",{class:"contact window-card",children:[Object(F.jsxs)("div",{class:"nav-wrapper",children:[Object(F.jsx)("a",{href:"/",children:Object(F.jsxs)("div",{class:"dots-wrapper",children:[Object(F.jsx)("div",{id:"dot-1",class:"browser-dot"}),Object(F.jsx)("div",{id:"dot-2",class:"browser-dot"}),Object(F.jsx)("div",{id:"dot-3",class:"browser-dot"})]})}),Object(F.jsx)("ul",{id:"navigation",children:Object(F.jsx)("li",{children:Object(F.jsx)("a",{href:"/",children:"Back"})})})]}),Object(F.jsx)("div",{id:"success",class:"whole-span",children:Object(F.jsx)("h3",{children:"Thanks for your message, I will get back with you soon! :)"})})]})]})})});c(79);var $=function(){return Object(F.jsx)("div",{className:"load",children:Object(F.jsx)("span",{className:"loader"})})},ee=function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Uh Oh!"}),Object(F.jsx)("h2",{children:"There is Nothing Here!"}),Object(F.jsx)("div",{className:"return-home",children:Object(F.jsx)("a",{href:"/",children:"Return Home"})})]})},te=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.articleList})),c=t.articles,s=t.loading,n=t.error;return Object(r.useEffect)((function(){e(A())}),[e]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h1",{children:"Articles"}),Object(F.jsx)("div",{class:"post-wrapper",id:"articles",children:s?Object(F.jsx)($,{}):n?Object(F.jsx)(ee,{variant:"danger",children:n}):!1===s&&null!==c?c.map((function(e){return null!==e.cover_image?Object(F.jsx)(D,{article:e},e.id):Object(F.jsx)(F.Fragment,{})})):Object(F.jsx)(F.Fragment,{})})]})},ce=c(45),re=function(){Object(r.useEffect)((function(){J.a.highlightAll()}));var e=Object(a.b)(),t=Object(C.f)().slug,c=Object(a.c)((function(e){return e.article}));Object(r.useEffect)((function(){e(function(e){return function(){var t=Object(L.a)(k.a.mark((function t(c){var r,s,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:v}),r={method:"get",url:"/api/getArticle/".concat(e),headers:{slug:e}},t.next=5,_()(r);case 5:s=t.sent,n=s.data,c({type:f,payload:n.article}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:y,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e,t]);var s=c.loading,n=c.article,i=c.error;if(!1===s&&!i)var l=n.title,o=Object(ce.a)(n.sanitizedHtml);return Object(F.jsx)(F.Fragment,{children:s?Object(F.jsx)($,{}):i?Object(F.jsx)(ee,{variant:"danger",children:i}):!1===s&&null!==n?Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:l}),Object(F.jsx)("div",{className:"article-body",children:o})]}):Object(F.jsx)(F.Fragment,{})})},se=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.projectList})),c=t.projects,s=t.loading,n=t.error;return Object(r.useEffect)((function(){e(R())}),[e]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h1",{children:"Projects"}),Object(F.jsx)("div",{class:"post-wrapper",id:"projects",children:s?Object(F.jsx)($,{}):n?Object(F.jsx)(ee,{variant:"danger",children:n}):!1===s&&null!==c?c.map((function(e){return e.public&&"TEST PROJECT"!==e.title?Object(F.jsx)(M,{project:e},e._id):Object(F.jsx)(F.Fragment,{})})):Object(F.jsx)(F.Fragment,{})})]})},ne=function(){return Object(F.jsx)("nav",{children:Object(F.jsxs)("div",{className:"nav-wrapper",children:[Object(F.jsx)("div",{children:Object(F.jsx)("a",{href:"/",children:Object(F.jsx)("img",{className:"logo",src:"/images/Dev.png",alt:"Logo"})})}),Object(F.jsxs)("div",{id:"navigation",children:[Object(F.jsx)("a",{href:"/",children:"Home"}),Object(F.jsx)("a",{href:"/projects",children:"Projects"}),Object(F.jsx)("a",{href:"/articles",children:"Articles"}),Object(F.jsx)("a",{href:"/contact",children:"Contact"})]})]})})},ae=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("footer",{children:[Object(F.jsx)("img",{id:"footerImg",alt:"logo",src:"/images/Dev.png"}),Object(F.jsx)("p",{children:"\xa9 Cameron Thompson 2021"}),Object(F.jsxs)("ul",{className:"footerLinks",children:[Object(F.jsx)("li",{children:Object(F.jsx)("a",{href:"https://www.linkedin.com/in/cameron-thompson96/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(F.jsx)("li",{children:Object(F.jsx)("a",{href:"https://github.com/cdthomp1",target:"_blank",rel:"noopener noreferrer",children:"Github"})}),Object(F.jsx)("li",{children:Object(F.jsx)("a",{href:"/contact",children:"Contact"})}),Object(F.jsx)("li",{children:Object(F.jsx)("a",{href:"https://twitter.com/DeveloperCam",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})})]})]})})};var ie=function(){return Object(F.jsxs)(T.a,{children:[Object(F.jsx)(ne,{}),Object(F.jsx)("main",{children:Object(F.jsxs)(C.c,{children:[Object(F.jsx)(C.a,{path:"/contact",component:Y}),Object(F.jsx)(C.a,{path:"/success",component:Z}),Object(F.jsx)(C.a,{path:"/articles",component:te}),Object(F.jsx)(C.a,{path:"/projects",component:se}),Object(F.jsx)(C.a,{path:"/article/:slug",component:re}),Object(F.jsx)(C.a,{path:"/",component:U,exact:!0}),Object(F.jsx)(C.a,{component:ee})]})}),Object(F.jsx)(ae,{})]})};n.a.render(Object(F.jsx)(a.a,{store:S,children:Object(F.jsx)(ie,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7e9b6b60.chunk.js.map