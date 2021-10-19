(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,n){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__33b0L","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1Bdq_"}},14:function(e,t,n){e.exports={Overlay:"Modal_Overlay__oDDFq",Modal:"Modal_Modal__3S92i"}},16:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__1_fvo"}},18:function(e,t,n){e.exports={rejected:"Rejected_rejected__2T7vz",blur:"Rejected_blur__Su0ml"}},19:function(e,t,n){e.exports={idle:"IdleMessage_idle__1ONSF"}},20:function(e,t,n){e.exports={container:"App_container__3qYdk"}},27:function(e,t,n){},5:function(e,t,n){e.exports={searchbar:"SearchBar_searchbar__2bXmo",SearchForm:"SearchBar_SearchForm__37LCB","SearchForm-button":"SearchBar_SearchForm-button__1JQUc","SearchForm-button-label":"SearchBar_SearchForm-button-label__2SBN9","SearchForm-input":"SearchBar_SearchForm-input__11b7R"}},51:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),i=(n(27),n(3)),s=n(11),u=(n(28),n(5)),l=n.n(u),h=n(1),m=function(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(h.jsx)("header",{className:l.a.searchbar,children:Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),console.log(c),""===c.trim())return s.b.error("Cannot search for empty request. Please, dial in something");t(c),o("")},className:l.a.SearchForm,children:[Object(h.jsx)("button",{type:"submit",className:l.a["SearchForm-button"],children:Object(h.jsx)("span",{className:l.a["SearchForm-button-label"],children:"Search"})}),Object(h.jsx)("input",{id:"home",className:l.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value)}})]})})},j=n(15),d=n(16),b=n.n(d),p=n(13),f=n.n(p),O=n(9),g=n(10),_=n(22),y=n(21),x=n(14),S=n.n(x),v=document.querySelector("#modal-root"),k=function(e){Object(_.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(O.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).modalButtonShutDown=function(t){"Escape"===t.code&&e.props.onClose()},e.modalClickShutDown=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.modalButtonShutDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.modalButtonShutDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(h.jsx)("div",{className:S.a.Overlay,onClick:this.modalClickShutDown,children:Object(h.jsx)("div",{className:S.a.Modal,children:this.props.children})}),v)}}]),n}(r.Component),B=n(17),w=n.n(B),I=(n(50),function(){return Object(h.jsx)(w.a,{type:"Watch",color:"#00BFFF",height:100,width:100,timeout:500})}),F=function(e){var t=e.route,n=e.description,a=e.bigPicture,c=Object(r.useState)(!1),o=Object(i.a)(c,2),s=o[0],u=o[1],l=function(){u(!s)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(h.jsx)("img",{src:t,alt:n,"data-source":a,className:f.a["ImageGalleryItem-image"],onClick:l})}),s&&Object(h.jsxs)(k,{onClose:l,children:[Object(h.jsx)(I,{}),Object(h.jsx)("img",{src:a,alt:n})]})]})},N=n(7),C=n.n(N),q=function(e){var t=e.handleClick;return Object(h.jsxs)("div",{className:C.a.wrapper,children:[Object(h.jsx)("button",{type:"button",className:C.a.Button,onClick:t,children:"Load more"}),Object(h.jsx)("div",{className:C.a.returnButton,children:Object(h.jsx)("a",{href:"#home",className:C.a.returnButtonLink,children:"Back"})})]})},G=n(18),D=n.n(G),L=function(e){var t=e.message;return Object(h.jsx)("h1",{className:D.a.rejected,children:t})},E=n(19),M=n.n(E),R=function(){return Object(h.jsx)("div",{className:M.a.idle,children:"Waiting for your valuable query to start search.."})},P=new(function(){function e(){Object(O.a)(this,e),this.query="",this.page=1,this.totalFound=0,this.key="22940858-92f18eb28c187ec286dac5649"}return Object(g.a)(e,[{key:"fetchCards",value:function(){var e=this,t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(this.query,"&page=").concat(this.page,"&per_page=12&key=").concat(this.key);return fetch(t).then((function(t){return t.ok?t.json():Promise.reject(new Error("No data for the query'".concat(e.query,"'")))}))}},{key:"reset",value:function(){this.page=1,this.totalFound=0}},{key:"request",set:function(e){this.query=e}}]),e}()),T=function(e){var t=e.query,n=Object(r.useState)([]),a=Object(i.a)(n,2),c=a[0],o=a[1],s=Object(r.useState)(null),u=Object(i.a)(s,2),l=u[0],m=u[1],d=Object(r.useState)("idle"),p=Object(i.a)(d,2),f=p[0],O=p[1];function g(){P.fetchCards().then((function(e){if(e.hits.length>0)return _(e.hits),P.page+=1,e;throw new Error("Sorry, but no result for ".concat(P.query))})).catch((function(e){m(e),O("rejected")}))}var _=function(e){return O("resolved"),1===P.page?o(e):o((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e))}))};Object(r.useEffect)((function(){t&&(O("pending"),P.reset(),P.request=t,g())}),[t]),Object(r.useEffect)((function(){0!==c.length&&c.length>12&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[c]);return"idle"===f?Object(h.jsx)(R,{}):"pending"===f?Object(h.jsx)(I,{}):"rejected"===f?Object(h.jsx)(L,{message:l.message}):"resolved"===f?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:b.a.ImageGallery,children:c.map((function(e){return Object(h.jsx)(F,{route:e.webformatURL,bigPicture:e.largeImageURL,description:e.tags},e.id)}))}),Object(h.jsx)(q,{handleClick:function(){O("pending"),g()}})]}):void 0},U=n(20),J=n.n(U),W=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{className:J.a.container,children:[Object(h.jsx)(m,{onSubmit:function(e){a(e)}}),Object(h.jsx)(s.a,{autoClose:3e3,position:"top-right"}),Object(h.jsx)(T,{query:n})]})};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={wrapper:"Button_wrapper__1ffD1",Button:"Button_Button__3Jf1u",returnButton:"Button_returnButton__UpBRe",returnButtonLink:"Button_returnButtonLink__2ZT7D"}}},[[51,1,2]]]);
//# sourceMappingURL=main.d4b0db9c.chunk.js.map