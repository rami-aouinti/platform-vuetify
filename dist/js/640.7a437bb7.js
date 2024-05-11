"use strict";(self["webpackChunkvuetify_material_dashboard_pro"]=self["webpackChunkvuetify_material_dashboard_pro"]||[]).push([[640],{24794:(t,s,a)=>{a.d(s,{A:()=>d});var i=a(23772),e=(a(94009),a(52231),a(24462)),o=a(68767),n=a(45063),r=a(79623),l=a(4815),c=a(66960),h=a(65604),v=a(3507);const d=(0,v.A)(o.A,n.A,r.A,l.A).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,s=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,e=!1!==this.attach?s.offsetLeft:s.left,o=0;return this.top||this.bottom||i?o=e+s.width/2-a.width/2:(this.left||this.right)&&(o=e+(this.right?s.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,s=t.activator,a=t.content,i=!1!==this.attach?s.offsetTop:s.top,e=0;return this.top||this.bottom?e=i+(this.bottom?s.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(e=i+s.height/2-a.height/2),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),!1===this.attach&&(e+=this.pageYOffset),"".concat(this.calcYOverflow(e),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:(0,c.Dg)(this.maxWidth),minWidth:(0,c.Dg)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===(0,c.fo)(this,"activator",!0)&&(0,h.yA)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,s=e.A.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(s.focus=function(s){t.getActivator(s),t.runDelay("open")},s.blur=function(s){t.getActivator(s),t.runDelay("close")}),s.keydown=function(s){s.keyCode===c.uP.esc&&(t.getActivator(s),t.runDelay("close"))},s},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(0,i.A)((0,i.A)((0,i.A)({},this.contentClass,!0),"menuable__content__active",this.isActive),"v-tooltip__content--fixed",this.activatorFixed),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var s=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[s.genTransition()]})),this.genActivator()])}})},62640:(t,s,a)=>{a.r(s),a.d(s,{default:()=>x});var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"transform-scale-7"},[i("v-container",{staticClass:"py-6",attrs:{fluid:""}},[i("v-row",{staticClass:"pt-16 mt-16"},[i("v-col",{staticClass:"ms-14 text-center",attrs:{md:"1"}},[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,o=s.attrs;return[i("v-avatar",t._g(t._b({staticClass:"border-radius-lg mx-auto mb-3 d-block",attrs:{width:"48px",rounded:""}},"v-avatar",o,!1),e),[i("img",{staticClass:"border-radius-lg",attrs:{src:a(5425),alt:"Avatar"}})])]}}])},[i("span",[t._v("My profile")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"\n                mt-2\n                px-2\n                py-2\n                mx-auto\n                shadow shadow-sm\n                border-radius-lg\n                d-block\n              ",attrs:{"min-width":"45",ripple:!1,height:"45",width:"45",color:"white"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"18"}},[t._v("home")])],1)]}}])},[i("span",[t._v("Home")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"\n                mt-3\n                px-2\n                py-2\n                mx-auto\n                shadow shadow-sm\n                border-radius-lg\n                d-block\n              ",attrs:{"min-width":"45",ripple:!1,height:"45",width:"45",color:"white"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"18"}},[t._v("search")])],1)]}}])},[i("span",[t._v("Search")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"\n                mt-3\n                px-2\n                py-2\n                mx-auto\n                shadow shadow-sm\n                border-radius-lg\n                d-block\n              ",attrs:{"min-width":"45",ripple:!1,height:"45",width:"45",color:"white"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"18"}},[t._v("more_horiz")])],1)]}}])},[i("span",[t._v("Minimize")])])],1),i("v-col",{staticClass:"ms-0 text-center",attrs:{lg:"8",md:"11"}},[i("div",{staticClass:"d-flex"},[i("div",{staticClass:"me-auto"},[i("h1",{staticClass:"display-h-1 font-weight-bold mt-n6 mb-0 text-white"},[t._v(" 28°C ")]),i("h6",{staticClass:"\n                text-uppercase text-h6\n                font-weight-bold\n                text-white text-left\n                mb-0\n                ms-1\n              "},[t._v(" Cloudy ")])]),i("div",{staticClass:"ms-auto text-end"},[i("img",{staticClass:"w-50 mt-lg-n4",attrs:{src:a(54003),alt:"image sun"}})])]),i("v-row",{staticClass:"mt-6"},[i("v-col",{attrs:{md:"4"}},[i("v-card",{staticClass:"move-on-hover border-radius-xl overflow-hidden"},[i("div",{staticClass:"px-6 py-6"},[i("div",{staticClass:"d-flex"},[i("h6",{staticClass:"text-h6 text-typo font-weight-bold mb-0 me-3"},[t._v(" 08:00 ")]),i("h6",{staticClass:"\n                      text-h6 text-typo\n                      font-weight-bold\n                      d-block\n                      text-left\n                      mb-0\n                    "},[t._v(" Synk up with Mark "),i("small",{staticClass:"text-secondary font-weight-light d-block"},[t._v("Hangouts")])])]),i("hr",{staticClass:"horizontal dark my-4"}),i("div",{staticClass:"d-flex"},[i("h6",{staticClass:"text-h6 text-typo font-weight-bold mb-0 me-3"},[t._v(" 09:30 ")]),i("h6",{staticClass:"\n                      text-h6 text-typo\n                      font-weight-bold\n                      d-block\n                      text-left\n                      mb-0\n                    "},[t._v(" Gym "),i("small",{staticClass:"text-secondary font-weight-light d-block"},[t._v("World Class")])])]),i("hr",{staticClass:"horizontal dark my-4"}),i("div",{staticClass:"d-flex"},[i("h6",{staticClass:"text-h6 text-typo font-weight-bold mb-0 me-3"},[t._v(" 11:00 ")]),i("h6",{staticClass:"\n                      text-h6 text-typo\n                      font-weight-bold\n                      d-block\n                      text-left\n                      mb-0\n                    "},[t._v(" Design Review "),i("small",{staticClass:"text-secondary font-weight-light d-block"},[t._v("Zoom")])])])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"w-100 text-primary",attrs:{"min-width":"45",elevation:"0",ripple:!1,height:"35",width:"45",color:"#f8f9fa"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"20"}},[t._v("expand_more")])],1)]}}])},[i("span",[t._v("Show More")])])],1)],1),i("v-col",{attrs:{md:"4"}},[i("v-card",{staticClass:"\n                bg-gradient-default\n                move-on-hover\n                border-radius-xl\n                overflow-hidden\n              "},[i("div",{staticClass:"px-6 py-6"},[i("div",{staticClass:"d-flex"},[i("h5",{staticClass:"mb-0 text-h5 font-weight-bold text-white"},[t._v(" To Do ")]),i("div",{staticClass:"ms-auto"},[i("h1",{staticClass:"\n                        text-white text-h1\n                        font-weight-bold\n                        text-end\n                        mb-0\n                        mt-n2\n                      "},[t._v(" 7 ")]),i("p",{staticClass:"text-sm mb-0 text-white font-weight-light"},[t._v(" items ")])])]),i("p",{staticClass:"text-white font-weight-light text-left mb-0"},[t._v(" Shopping ")]),i("p",{staticClass:"text-white font-weight-light text-left mb-0"},[t._v(" Meeting ")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"w-100 text-white",attrs:{"min-width":"45",elevation:"0",ripple:!1,height:"35",width:"45",color:"transparent"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"20"}},[t._v("expand_more")])],1)]}}])},[i("span",[t._v("Show More")])])],1),i("v-card",{staticClass:"move-on-hover border-radius-xl mt-6"},[i("div",{staticClass:"px-6 py-6"},[i("div",{staticClass:"d-flex align-center"},[i("p",{staticClass:"mb-0 text-body"},[t._v("Emails (21)")]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"text-capitalize ms-auto px-0 py-0",attrs:{text:"",large:"",color:"#344767"}},"v-btn",e,!1),a),[t._v("Check")])]}}])},[i("span",[t._v("Check your emails")])])],1)])])],1),i("v-col",{attrs:{md:"4"}},[i("v-card",{staticClass:"move-on-hover border-radius-xl",style:"background-image: url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'); background-size: cover;"},[i("span",{staticClass:"mask bg-gradient-default opacity-8"}),i("div",{staticClass:"px-6 py-6 z-index-2 position-relative"},[i("h5",{staticClass:"text-white text-h5 font-weight-bold text-left mb-0"},[t._v(" Night Jazz ")]),i("p",{staticClass:"text-white text-sm font-weight-light text-left"},[t._v(" Gary Coleman ")]),i("div",{staticClass:"d-flex mt-10 text-left"},[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",outlined:"",rounded:"",color:"#fff",width:"45px",height:"45px"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"18"}},[t._v("skip_previous")])],1)]}}])},[i("span",[t._v("Prev")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{icon:"",outlined:"",rounded:"",color:"#fff",width:"45px",height:"45px"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"18"}},[t._v("play_arrow")])],1)]}}])},[i("span",[t._v("Pause")])]),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,e=s.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",outlined:"",rounded:"",color:"#fff",width:"45px",height:"45px"}},"v-btn",e,!1),a),[i("v-icon",{staticClass:"material-icons-round",attrs:{size:"18"}},[t._v("skip_next")])],1)]}}])},[i("span",[t._v("Next")])])],1)])]),i("v-card",{staticClass:"move-on-hover border-radius-xl mt-6"},[i("div",{staticClass:"px-6 py-6"},[i("div",{staticClass:"d-flex"},[i("p",{staticClass:"my-auto text-body"},[t._v("Messages")]),i("div",{staticClass:"ms-auto"},[i("span",{staticClass:"avatar-group d-flex"},[i("v-tooltip",{attrs:{top:"",color:"#212529"},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,o=s.attrs;return[i("v-avatar",t._g(t._b({attrs:{size:"36"}},"v-avatar",o,!1),e),[i("img",{attrs:{src:a(5425),alt:"Avatar"}})])]}}])},[i("span",[t._v("2 New Messages")])]),i("v-tooltip",{attrs:{top:"",color:"#212529"},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,o=s.attrs;return[i("v-avatar",t._g(t._b({attrs:{size:"36"}},"v-avatar",o,!1),e),[i("img",{attrs:{src:a(47654),alt:"Avatar"}})])]}}])},[i("span",[t._v("1 New Message")])]),i("v-tooltip",{attrs:{top:"",color:"#212529"},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,o=s.attrs;return[i("v-avatar",t._g(t._b({attrs:{size:"36"}},"v-avatar",o,!1),e),[i("img",{attrs:{src:a(86179),alt:"Avatar"}})])]}}])},[i("span",[t._v("13 New Messages")])]),i("v-tooltip",{attrs:{top:"",color:"#212529"},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on,o=s.attrs;return[i("v-avatar",t._g(t._b({attrs:{size:"36"}},"v-avatar",o,!1),e),[i("img",{attrs:{src:a(44528),alt:"Avatar"}})])]}}])},[i("span",[t._v("7 New Messages")])])],1)])])])])],1)],1)],1)],1)],1)],1)},e=[];const o={name:"Vr-info"},n=o;var r=a(81656),l=a(9963),c=a.n(l),h=a(56074),v=a(375),d=a(61689),p=a(51526),u=a(46278),f=a(69456),m=a(18412),g=a(24794),b=(0,r.A)(n,i,e,!1,null,null,null);const x=b.exports;c()(b,{VAvatar:h.A,VBtn:v.A,VCard:d.A,VCol:p.A,VContainer:u.A,VIcon:f.A,VRow:m.A,VTooltip:g.A})},54003:(t,s,a)=>{t.exports=a.p+"img/icon-sun-cloud.c4e5a659.png"},5425:(t,s,a)=>{t.exports=a.p+"img/team-1.cd822dc7.jpg"},44528:(t,s,a)=>{t.exports=a.p+"img/team-4.f9d98090.jpg"}}]);
//# sourceMappingURL=640.7a437bb7.js.map