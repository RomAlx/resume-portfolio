import{$ as e,G as t,H as n,Lt as r,O as i,Pt as a,R as o,U as s,V as c,W as l,_ as u,d,et as f,f as p,p as m,r as h,u as g,v as _}from"./B3DCclvL.js";import{t as v}from"./CRHlWn3X.js";import{t as y}from"./cO8iUN-n.js";import{G as b,Ht as x,K as S,Mt as C,R as w,Z as T,b as E,dt as D,l as O,lt as k}from"#entry";import{t as A}from"./BjlWE0m2.js";import{t as j}from"./xxC1nh7x.js";import{t as M}from"./B7eB9Ral.js";import{t as N}from"./CXuEKba-.js";import{t as P}from"./Q0p3GRYR.js";var F=O.extend({name:`menu`,style:`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,classes:{root:function(e){return[`p-menu p-component`,{"p-menu-overlay":e.props.popup}]},start:`p-menu-start`,list:`p-menu-list`,submenuLabel:`p-menu-submenu-label`,separator:`p-menu-separator`,end:`p-menu-end`,item:function(e){var t=e.instance;return[`p-menu-item`,{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:`p-menu-item-content`,itemLink:`p-menu-item-link`,itemIcon:`p-menu-item-icon`,itemLabel:`p-menu-item-label`}}),I={name:`BaseMenu`,extends:A,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:`body`},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:F,provide:function(){return{$pcMenu:this,$parentInstance:this}}},L={name:`Menuitem`,hostName:`Menu`,extends:A,inheritAttrs:!1,emits:[`item-click`,`item-mousemove`],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?C(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,`command`);t&&t({originalEvent:e,item:this.item.item}),this.$emit(`item-click`,{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit(`item-mousemove`,{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:i({class:this.cx(`itemLink`),tabindex:`-1`},this.getPTOptions(`itemLink`)),icon:i({class:[this.cx(`itemIcon`),e.icon]},this.getPTOptions(`itemIcon`)),label:i({class:this.cx(`itemLabel`)},this.getPTOptions(`itemLabel`))}}},computed:{dataP:function(){return v({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:j}},R=[`id`,`aria-label`,`aria-disabled`,`data-p-focused`,`data-p-disabled`,`data-p`],z=[`data-p`],B=[`href`,`target`],V=[`data-p`],H=[`data-p`];function U(e,n,s,c,u,h){var _=l(`ripple`);return h.visible()?(o(),m(`li`,i({key:0,id:s.id,class:[e.cx(`item`),s.item.class],role:`menuitem`,style:s.item.style,"aria-label":h.label(),"aria-disabled":h.disabled(),"data-p-focused":h.isItemFocused(),"data-p-disabled":h.disabled()||!1,"data-p":h.dataP},h.getPTOptions(`item`)),[g(`div`,i({class:e.cx(`itemContent`),onClick:n[0]||=function(e){return h.onItemClick(e)},onMousemove:n[1]||=function(e){return h.onItemMouseMove(e)},"data-p":h.dataP},h.getPTOptions(`itemContent`)),[s.templates.item?s.templates.item?(o(),d(t(s.templates.item),{key:1,item:s.item,label:h.label(),props:h.getMenuItemProps(s.item)},null,8,[`item`,`label`,`props`])):p(``,!0):f((o(),m(`a`,i({key:0,href:s.item.url,class:e.cx(`itemLink`),target:s.item.target,tabindex:`-1`},h.getPTOptions(`itemLink`)),[s.templates.itemicon?(o(),d(t(s.templates.itemicon),{key:0,item:s.item,class:a(e.cx(`itemIcon`))},null,8,[`item`,`class`])):s.item.icon?(o(),m(`span`,i({key:1,class:[e.cx(`itemIcon`),s.item.icon],"data-p":h.dataP},h.getPTOptions(`itemIcon`)),null,16,V)):p(``,!0),g(`span`,i({class:e.cx(`itemLabel`),"data-p":h.dataP},h.getPTOptions(`itemLabel`)),r(h.label()),17,H)],16,B)),[[_]])],16,z)],16,R)):p(``,!0)}L.render=U;function W(e){return J(e)||q(e)||K(e)||G()}function G(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(e,t){if(e){if(typeof e==`string`)return Y(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}function q(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function J(e){if(Array.isArray(e))return Y(e)}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var X={name:`Menu`,extends:I,inheritAttrs:!1,emits:[`show`,`hide`,`focus`,`blur`],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&=(this.scrollHandler.destroy(),null),this.target=null,this.container&&this.autoZIndex&&y.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit(`focus`,e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit(`blur`,e)},onListKeyDown:function(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Space`:this.onSpaceKey(e);break;case`Escape`:this.popup&&(T(this.target),this.hide());case`Tab`:this.overlayVisible&&this.hide()}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)T(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(b(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`).length-1),e.preventDefault()},onEnterKey:function(e){var t=D(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&D(t,`a[data-pc-section="itemlink"]`);this.popup&&T(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=W(b(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t+1:0},findPrevOptionIndex:function(e){var t=W(b(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`)).findIndex(function(t){return t.id===e});return t>-1?t-1:0},changeFocusedOptionIndex:function(e){var t=b(this.container,`li[data-pc-section="item"][data-p-disabled="false"]`),n=e>=t.length?t.length-1:e<0?0:e;n>-1&&(this.focusedOptionIndex=t[n].getAttribute(`id`))},toggle:function(e,t){this.overlayVisible?this.hide():this.show(e,t)},show:function(e,t){this.overlayVisible=!0,this.target=t??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){w(e,{position:`absolute`,top:`0`}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&y.set(`menu`,e,this.baseZIndex||this.$primevue.config.zIndex.menu),this.popup&&T(this.list),this.$emit(`show`)},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit(`hide`)},onAfterLeave:function(e){this.autoZIndex&&y.clear(e)},alignOverlay:function(){E(this.container,this.target),k(this.target)>k(this.container)&&(this.container.style.minWidth=k(this.target)+`px`)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var n=e.container&&!e.container.contains(t.target),r=!e.target||e.target!==t.target&&!e.target.contains(t.target);e.overlayVisible&&n&&r?e.hide():!e.popup&&n&&r&&(e.focusedOptionIndex=-1)},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},bindScrollListener:function(){var e=this;this.scrollHandler||=new M(this.target,function(){e.overlayVisible&&e.hide()}),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!S()&&e.hide()},window.addEventListener(`resize`,this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&=(window.removeEventListener(`resize`,this.resizeListener),null)},visible:function(e){return typeof e.visible==`function`?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled==`function`?e.disabled():e.disabled},label:function(e){return typeof e.label==`function`?e.label():e.label},onOverlayClick:function(e){N.emit(`overlay-click`,{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex===-1?null:this.focusedOptionIndex},dataP:function(){return v({popup:this.popup})}},components:{PVMenuitem:L,Portal:P}},Z=[`id`,`data-p`],Q=[`id`,`tabindex`,`aria-activedescendant`,`aria-label`,`aria-labelledby`],$=[`id`];function ee(t,a,l,f,v,y){var b=s(`PVMenuitem`),S=s(`Portal`);return o(),d(S,{appendTo:t.appendTo,disabled:!t.popup},{default:e(function(){return[_(x,i({name:`p-anchored-overlay`,onEnter:y.onEnter,onLeave:y.onLeave,onAfterLeave:y.onAfterLeave},t.ptm(`transition`)),{default:e(function(){return[!t.popup||v.overlayVisible?(o(),m(`div`,i({key:0,ref:y.containerRef,id:t.$id,class:t.cx(`root`),onClick:a[3]||=function(){return y.onOverlayClick&&y.onOverlayClick.apply(y,arguments)},"data-p":y.dataP},t.ptmi(`root`)),[t.$slots.start?(o(),m(`div`,i({key:0,class:t.cx(`start`)},t.ptm(`start`)),[n(t.$slots,`start`)],16)):p(``,!0),g(`ul`,i({ref:y.listRef,id:t.$id+`_list`,class:t.cx(`list`),role:`menu`,tabindex:t.tabindex,"aria-activedescendant":v.focused?y.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:a[0]||=function(){return y.onListFocus&&y.onListFocus.apply(y,arguments)},onBlur:a[1]||=function(){return y.onListBlur&&y.onListBlur.apply(y,arguments)},onKeydown:a[2]||=function(){return y.onListKeyDown&&y.onListKeyDown.apply(y,arguments)}},t.ptm(`list`)),[(o(!0),m(h,null,c(t.model,function(e,a){return o(),m(h,{key:y.label(e)+a.toString()},[e.items&&y.visible(e)&&!e.separator?(o(),m(h,{key:0},[e.items?(o(),m(`li`,i({key:0,id:t.$id+`_`+a,class:[t.cx(`submenuLabel`),e.class],role:`none`},{ref_for:!0},t.ptm(`submenuLabel`)),[n(t.$slots,t.$slots.submenulabel?`submenulabel`:`submenuheader`,{item:e},function(){return[u(r(y.label(e)),1)]})],16,$)):p(``,!0),(o(!0),m(h,null,c(e.items,function(n,r){return o(),m(h,{key:n.label+a+`_`+r},[y.visible(n)&&!n.separator?(o(),d(b,{key:0,id:t.$id+`_`+a+`_`+r,item:n,templates:t.$slots,focusedOptionId:y.focusedOptionId,unstyled:t.unstyled,onItemClick:y.itemClick,onItemMousemove:y.itemMouseMove,pt:t.pt},null,8,[`id`,`item`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`])):y.visible(n)&&n.separator?(o(),m(`li`,i({key:`separator`+a+r,class:[t.cx(`separator`),e.class],style:n.style,role:`separator`},{ref_for:!0},t.ptm(`separator`)),null,16)):p(``,!0)],64)}),128))],64)):y.visible(e)&&e.separator?(o(),m(`li`,i({key:`separator`+a.toString(),class:[t.cx(`separator`),e.class],style:e.style,role:`separator`},{ref_for:!0},t.ptm(`separator`)),null,16)):(o(),d(b,{key:y.label(e)+a.toString(),id:t.$id+`_`+a,item:e,index:a,templates:t.$slots,focusedOptionId:y.focusedOptionId,unstyled:t.unstyled,onItemClick:y.itemClick,onItemMousemove:y.itemMouseMove,pt:t.pt},null,8,[`id`,`item`,`index`,`templates`,`focusedOptionId`,`unstyled`,`onItemClick`,`onItemMousemove`,`pt`]))],64)}),128))],16,Q),t.$slots.end?(o(),m(`div`,i({key:1,class:t.cx(`end`)},t.ptm(`end`)),[n(t.$slots,`end`)],16)):p(``,!0)],16,Z)):p(``,!0)]}),_:3},16,[`onEnter`,`onLeave`,`onAfterLeave`])]}),_:3},8,[`appendTo`,`disabled`])}X.render=ee;export{X as default};