(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{406:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("12a190a6",content,!0,{sourceMap:!1})},407:function(t,e,n){var o=n(19)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},408:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2e2bc7da",content,!0,{sourceMap:!1})},409:function(t,e,n){var o=n(19)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},412:function(t,e,n){"use strict";n.r(e);n(60),n(23),n(147);var o={data:function(){return{dialog:!1,dialogDelete:!1,Entity:"Role",model:"role",labels:{role:"Role",role_slug:"Slug"},headers:[{text:"Role",value:"role"},{text:"Slug",value:"role_slug"},{text:"Permissions",value:"permissions"},{text:"Actions",value:"actions",sortable:!1}],data:[],errors:[],editedIndex:-1,editedItem:{role:"",role_slug:"",permissions:[]},defaultItem:{role:"",role_slug:"",permissions:[]}}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog:function(t){t||this.close(),this.errors=[]},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;this.$axios.get("/".concat(this.model)).then((function(e){return t.data=e.data}))},editItem:function(t){this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t);var e=t.permissions.map((function(t){return t.permission}));this.editedItem.permissions=e,this.dialog=!0},deleteItem:function(t){this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){var t=this;this.$axios.delete("/".concat(this.model,"/").concat(this.editedItem.id)).then((function(e){t.data.splice(t.editedIndex,1),t.closeDelete()}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.editedIndex>-1?this.$axios.put("/".concat(this.model,"/").concat(this.editedItem.id),this.editedItem).then((function(e){console.log(e.data),e.data.status?(Object.assign(t.data[t.editedIndex],e.data.payload),t.errors=[],t.close()):t.errors=e.data.errors})):this.$axios.post("/".concat(this.model),this.editedItem).then((function(e){e.data.status?(t.data.push(e.data.payload),t.errors=[],t.close()):(console.log(e.data),t.errors=e.data.messages)})).catch((function(t){return console.log(t)}))}}},r=n(55),l=n(85),c=n.n(l),d=n(197),v=n(437),h=n(398),m=(n(9),n(5),n(7),n(12),n(8),n(13),n(99)),f=n(2),_=(n(15),n(52),n(406),n(408),n(97)),x=n(400),k=n(86),I=n(0).a.extend({name:"rippleable",directives:{ripple:k.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),y=n(411),C=n(10);function V(t){t.preventDefault()}var w=Object(C.a)(x.a,I,y.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=x.a.options.methods.genLabel.call(this);return label?(label.data.on={click:V},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:V},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),O=["title"];function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=w.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return $($({},x.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(m.a)(t,O));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",$($({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),j=n(440),A=n(498),E=n(396),T=n(502),P=n(501),z=n(441),B=n(171),M=n(499),R=n(394),F=n(434),L=n(46),K=n(183),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.data},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v(t._s(t.Entity)+" List")]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{small:"",color:"primary",dark:""}},"v-btn",r,!1),o),[t._v("\n             New "+t._s(t.Entity)+"\n           ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle)+" "+t._s(t.Entity))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:t.labels.role},model:{value:t.editedItem.role,callback:function(e){t.$set(t.editedItem,"role",e)},expression:"editedItem.role"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:t.labels.role_slug},model:{value:t.editedItem.role_slug,callback:function(e){t.$set(t.editedItem,"role_slug",e)},expression:"editedItem.role_slug"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-checkbox",{attrs:{dense:"",label:"Add",value:"add"},model:{value:t.editedItem.permissions,callback:function(e){t.$set(t.editedItem,"permissions",e)},expression:"editedItem.permissions"}})],1),t._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-checkbox",{attrs:{dense:"",label:"Edit",value:"edit"},model:{value:t.editedItem.permissions,callback:function(e){t.$set(t.editedItem,"permissions",e)},expression:"editedItem.permissions"}})],1),t._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-checkbox",{attrs:{dense:"",label:"View",value:"view"},model:{value:t.editedItem.permissions,callback:function(e){t.$set(t.editedItem,"permissions",e)},expression:"editedItem.permissions"}})],1),t._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-checkbox",{attrs:{dense:"",label:"Delete",value:"delete"},model:{value:t.editedItem.permissions,callback:function(e){t.$set(t.editedItem,"permissions",e)},expression:"editedItem.permissions"}})],1)],1)],1),t._v(" "),n("v-col",t._l(t.errors,(function(e,i){return n("ul",{key:i},[n("li",{staticClass:"red--text"},[t._v("\n                         "+t._s(e)+"\n                     ")])])})),0)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",dark:"",small:""},on:{click:t.close}},[t._v("\n               Cancel\n             ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",dark:"",small:""},on:{click:t.save}},[t._v("\n               Save\n             ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",small:"",dark:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",small:"",dark:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.permissions",fn:function(e){var o=e.item;return t._l(o.permissions,(function(e,o){return n("v-chip",{key:o,staticClass:"ma-1 primary"},[t._v("\n\n        "+t._s(e.permission)+"\n\n      ")])}))}},{key:"item.actions",fn:function(e){var o=e.item;return[n("v-btn",{staticClass:"info--text",attrs:{mall:"",text:""},on:{click:function(e){return t.editItem(o)}}},[n("v-icon",{attrs:{"x-small":""}},[t._v("\n       mdi-pencil\n     ")]),t._v("\n     Edit\n     ")],1),t._v(" "),n("v-btn",{staticClass:"error--text",attrs:{small:"",text:""},on:{click:function(e){return t.deleteItem(o)}}},[n("v-icon",{attrs:{color:"error",small:""}},[t._v("\n       mdi-delete\n       ")]),t._v("\n     delete")],1)]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("\n       Reset\n     ")])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCheckbox:S,VChip:j.a,VCol:A.a,VContainer:E.a,VDataTable:T.a,VDialog:P.a,VDivider:z.a,VIcon:B.a,VRow:M.a,VSpacer:R.a,VTextField:F.a,VToolbar:L.a,VToolbarTitle:K.a})}}]);