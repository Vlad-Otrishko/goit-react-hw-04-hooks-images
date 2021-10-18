(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2J55M","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__7m_b_"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__14TEa",Modal:"Modal_Modal__3c2dV"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3S1G3"}},17:function(e,t,a){e.exports={rejected:"Rejected_rejected__q6FxY",blur:"Rejected_blur__kBslI"}},18:function(e,t,a){e.exports={idle:"IdleMessage_idle__Cj3bY"}},19:function(e,t,a){e.exports={container:"App_container__3n7tp"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),s=(a(24),a(3)),i=a(4),u=a(6),l=a(5),h=a(10),d=(a(25),a(8)),m=a.n(d),j=a(1),p=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({query:a})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return h.b.error("Cannot search for empty request. Please, dial in something");e.props.onSubmit(e.state.query)},e.reset=function(){e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:m.a.searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:m.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:m.a["SearchForm-button"],children:Object(j.jsx)("span",{className:m.a["SearchForm-button-label"],children:"Search"})}),Object(j.jsx)("input",{id:"home",className:m.a["SearchForm-input"],type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(r.Component),b=p,f=a(14),y=a(15),g=a.n(y),O=a(12),v=a.n(O),_=a(13),x=a.n(_),S=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).modalButtonShutDown=function(t){"Escape"===t.code&&e.props.onClose()},e.modalClickShutDown=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.modalButtonShutDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.modalButtonShutDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:x.a.Overlay,onClick:this.modalClickShutDown,children:Object(j.jsx)("div",{className:x.a.Modal,children:this.props.children})}),S)}}]),a}(r.Component),k=a(16),I=a.n(k),q=(a(47),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(I.a,{type:"Watch",color:"#00BFFF",height:100,width:100,timeout:1500})}}]),a}(r.Component)),B=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:this.props.route,alt:this.props.description,"data-source":this.props.bigPicture,className:v.a["ImageGalleryItem-image"],onClick:this.toggleModal})}),e&&Object(j.jsxs)(w,{onClose:this.toggleModal,children:[Object(j.jsx)(q,{}),Object(j.jsx)("img",{src:this.props.bigPicture,alt:this.props.description})]})]})}}]),a}(r.Component),C=a(9),F=a.n(C),M=function(e){var t=e.handleClick;return Object(j.jsxs)("div",{className:F.a.wrapper,children:[Object(j.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:"Load more"}),Object(j.jsx)("div",{className:F.a.returnButton,children:Object(j.jsx)("a",{href:"#home",className:F.a.returnButtonLink,children:"Back"})})]})},N=a(17),G=a.n(N),L=function(e){var t=e.message;return Object(j.jsx)("h1",{className:G.a.rejected,children:t})},A=a(18),D=a.n(A),E=function(){return Object(j.jsx)("div",{className:D.a.idle,children:"Waiting for your valuable query to start search.."})},P=new(function(){function e(){Object(s.a)(this,e),this.query="",this.page=1,this.totalFound=0,this.key="22940858-92f18eb28c187ec286dac5649"}return Object(i.a)(e,[{key:"fetchCards",value:function(){var e=this,t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(this.query,"&page=").concat(this.page,"&per_page=12&key=").concat(this.key);return fetch(t).then((function(t){return t.ok?t.json():Promise.reject(new Error("No data for the query'".concat(e.query,"'")))}))}},{key:"reset",value:function(){this.page=1,this.totalFound=0}},{key:"request",set:function(e){this.query=e}}]),e}()),R=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],error:null,status:"idle"},e.updateImagesArray=function(t){1!==P.page?e.setState((function(e){return{images:[].concat(Object(f.a)(e.images),Object(f.a)(t)),status:"resolved"}})):e.setState({images:t,status:"resolved"})},e.scrollView=function(){e.state.images.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.loadMore=function(){e.setState({status:"pending"}),e.handleQuery("cat")},e}return Object(i.a)(a,[{key:"handleQuery",value:function(){var e=this;P.fetchCards().then((function(t){if(t.hits.length>0)return e.updateImagesArray(t.hits),P.page+=1,void e.scrollView();throw new Error("Sorry, but no result for ".concat(P.query))})).catch((function(t){return e.setState({error:t,status:"rejected"})}))}},{key:"componentDidUpdate",value:function(e,t){var a=e.query,r=this.props.query;a!==r&&(this.setState({status:"pending"}),P.reset(),P.request=r,this.handleQuery(r))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,r=e.status;return"idle"===r?Object(j.jsx)(E,{}):"pending"===r?Object(j.jsx)(q,{}):"rejected"===r?Object(j.jsx)(L,{message:a.message}):"resolved"===r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:g.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(B,{route:e.webformatURL,bigPicture:e.largeImageURL,description:e.tags},e.id)}))}),Object(j.jsx)(M,{handleClick:this.loadMore})]}):void 0}}]),a}(r.Component),Q=R,T=a(19),U=a.n(T),V=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:"",showModal:!1},e.formSubmitHandler=function(t){e.setState({query:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:U.a.container,children:[Object(j.jsx)(b,{onSubmit:this.formSubmitHandler}),Object(j.jsx)(h.a,{autoClose:3e3,position:"top-right"}),Object(j.jsx)(Q,{query:this.state.query})]})}}]),a}(n.a.Component),W=V;c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"SearchBar_searchbar__2ghVp",SearchForm:"SearchBar_SearchForm__1Fwjz","SearchForm-button":"SearchBar_SearchForm-button__mSys2","SearchForm-button-label":"SearchBar_SearchForm-button-label__3k7th","SearchForm-input":"SearchBar_SearchForm-input__2Lf30"}},9:function(e,t,a){e.exports={wrapper:"Button_wrapper__1NyRx",Button:"Button_Button__1zWqQ",returnButton:"Button_returnButton__1wKjv",returnButtonLink:"Button_returnButtonLink__2s2_s"}}},[[48,1,2]]]);
//# sourceMappingURL=main.19203e6d.chunk.js.map