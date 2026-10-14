import{G as e,H as t,Lt as n,O as r,R as i,V as a,W as o,d as s,et as c,f as l,p as u,r as d,u as f}from"./B3DCclvL.js";import{F as p,Gt as m,L as h,O as g,Z as _,dt as v,l as y}from"#entry";import{t as b}from"./BjlWE0m2.js";import{t as x}from"./xxC1nh7x.js";import{t as S}from"./BkS8U6Ow.js";import{t as C}from"./C1Mm4G_D.js";var w=y.extend({name:`tabview`,style:`
    .p-tabview-tablist-container {
        position: relative;
    }

    .p-tabview-scrollable > .p-tabview-tablist-container {
        overflow: hidden;
    }

    .p-tabview-tablist-scroll-container {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tabview-tablist-scroll-container::-webkit-scrollbar {
        display: none;
    }

    .p-tabview-tablist {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
        background: dt('tabview.tab.list.background');
        border: 1px solid dt('tabview.tab.list.border.color');
        border-width: 0 0 1px 0;
        position: relative;
    }

    .p-tabview-tab-header {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        border-style: solid;
        border-width: 0 0 1px 0;
        border-color: transparent transparent dt('tabview.tab.border.color') transparent;
        color: dt('tabview.tab.color');
        padding: 1rem 1.125rem;
        font-weight: 600;
        border-top-right-radius: dt('border.radius.md');
        border-top-left-radius: dt('border.radius.md');
        transition:
            color dt('tabview.transition.duration'),
            outline-color dt('tabview.transition.duration');
        margin: 0 0 -1px 0;
        outline-color: transparent;
    }

    .p-tabview-tablist-item:not(.p-disabled) .p-tabview-tab-header:focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: -1px;
    }

    .p-tabview-tablist-item:not(.p-highlight):not(.p-disabled):hover > .p-tabview-tab-header {
        color: dt('tabview.tab.hover.color');
    }

    .p-tabview-tablist-item.p-highlight > .p-tabview-tab-header {
        color: dt('tabview.tab.active.color');
    }

    .p-tabview-tab-title {
        line-height: 1;
        white-space: nowrap;
    }

    .p-tabview-next-button,
    .p-tabview-prev-button {
        position: absolute;
        top: 0;
        margin: 0;
        padding: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabview.nav.button.background');
        color: dt('tabview.nav.button.color');
        width: 2.5rem;
        border-radius: 0;
        outline-color: transparent;
        transition:
            color dt('tabview.transition.duration'),
            outline-color dt('tabview.transition.duration');
        box-shadow: dt('tabview.nav.button.shadow');
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-tabview-next-button:focus-visible,
    .p-tabview-prev-button:focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-tabview-next-button:hover,
    .p-tabview-prev-button:hover {
        color: dt('tabview.nav.button.hover.color');
    }

    .p-tabview-prev-button {
        left: 0;
    }

    .p-tabview-next-button {
        right: 0;
    }

    .p-tabview-panels {
        background: dt('tabview.tab.panel.background');
        color: dt('tabview.tab.panel.color');
        padding: 0.875rem 1.125rem 1.125rem 1.125rem;
    }

    .p-tabview-ink-bar {
        z-index: 1;
        display: block;
        position: absolute;
        bottom: -1px;
        height: 1px;
        background: dt('tabview.tab.active.border.color');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,classes:{root:function(e){return[`p-tabview p-component`,{"p-tabview-scrollable":e.props.scrollable}]},navContainer:`p-tabview-tablist-container`,prevButton:`p-tabview-prev-button`,navContent:`p-tabview-tablist-scroll-container`,nav:`p-tabview-tablist`,tab:{header:function(e){var t=e.instance,n=e.tab,r=e.index;return[`p-tabview-tablist-item`,t.getTabProp(n,`headerClass`),{"p-tabview-tablist-item-active":t.d_activeIndex===r,"p-disabled":t.getTabProp(n,`disabled`)}]},headerAction:`p-tabview-tab-header`,headerTitle:`p-tabview-tab-title`,content:function(e){var t=e.instance,n=e.tab;return[`p-tabview-panel`,t.getTabProp(n,`contentClass`)]}},inkbar:`p-tabview-ink-bar`,nextButton:`p-tabview-next-button`,panelContainer:`p-tabview-panels`}}),T={name:`TabView`,extends:{name:`BaseTabView`,extends:b,props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0}},style:w,provide:function(){return{$pcTabs:void 0,$pcTabView:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:activeIndex`,`tab-change`,`tab-click`],data:function(){return{d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{activeIndex:function(e){this.d_activeIndex=e,this.scrollInView({index:e})}},mounted:function(){console.warn(`Deprecated since v4. Use Tabs component instead.`),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated:function(){this.updateInkBar(),this.scrollable&&this.updateButtonState()},methods:{isTabPanel:function(e){return e.type.name===`TabPanel`},isTabActive:function(e){return this.d_activeIndex===e},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getTabHeaderActionId:function(e){return`${this.$id}_${e}_header_action`},getTabContentId:function(e){return`${this.$id}_${e}_content`},getTabPT:function(e,t,n){var i=this.tabs.length,a={props:e.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:i,first:n===0,last:n===i-1,active:this.isTabActive(n)}};return r(this.ptm(`tabpanel.${t}`,{tabpanel:a}),this.ptm(`tabpanel.${t}`,a),this.ptmo(this.getTabProp(e,`pt`),t,a))},onScroll:function(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=h(e),n=e.scrollLeft-t;e.scrollLeft=n<=0?0:n},onNextButtonClick:function(){var e=this.$refs.content,t=h(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+t,r=e.scrollWidth-t;e.scrollLeft=n>=r?r:n},onTabClick:function(e,t,n){this.changeActiveIndex(e,t,n),this.$emit(`tab-click`,{originalEvent:e,index:n})},onTabKeyDown:function(e,t,n){switch(e.code){case`ArrowLeft`:this.onTabArrowLeftKey(e);break;case`ArrowRight`:this.onTabArrowRightKey(e);break;case`Home`:this.onTabHomeKey(e);break;case`End`:this.onTabEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`NumpadEnter`:case`Space`:this.onTabEnterKey(e,t,n)}},onTabArrowRightKey:function(e){var t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(e,t):this.onTabHomeKey(e),e.preventDefault()},onTabArrowLeftKey:function(e){var t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(e,t):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var t=this.findFirstHeaderAction();this.changeFocusedTab(e,t),e.preventDefault()},onTabEndKey:function(e){var t=this.findLastHeaderAction();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView({index:this.$refs.nav.children.length-2}),e.preventDefault()},onPageUpKey:function(e){this.scrollInView({index:0}),e.preventDefault()},onTabEnterKey:function(e,t,n){this.changeActiveIndex(e,t,n),e.preventDefault()},findNextHeaderAction:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.nextElementSibling;return t?p(t,`data-p-disabled`)||p(t,`data-pc-section`)===`inkbar`?this.findNextHeaderAction(t):v(t,`[data-pc-section="headeraction"]`):null},findPrevHeaderAction:function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?e:e.previousElementSibling;return t?p(t,`data-p-disabled`)||p(t,`data-pc-section`)===`inkbar`?this.findPrevHeaderAction(t):v(t,`[data-pc-section="headeraction"]`):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex:function(e,t,n){!this.getTabProp(t,`disabled`)&&this.d_activeIndex!==n&&(this.d_activeIndex=n,this.$emit(`update:activeIndex`,n),this.$emit(`tab-change`,{originalEvent:e,index:n}),this.scrollInView({index:n}))},changeFocusedTab:function(e,t){if(t&&(_(t),this.scrollInView({element:t}),this.selectOnFocus)){var n=parseInt(t.parentElement.dataset.pcIndex,10),r=this.tabs[n];this.changeActiveIndex(e,r,n)}},scrollInView:function(e){var t=e.element,n=e.index,r=n===void 0?-1:n,i=t||this.$refs.nav.children[r];i&&i.scrollIntoView&&i.scrollIntoView({block:`nearest`})},updateInkBar:function(){var e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=h(e)+`px`,this.$refs.inkbar.style.left=g(e).left-g(this.$refs.nav).left+`px`},updateButtonState:function(){var e=this.$refs.content,t=e.scrollLeft,n=e.scrollWidth,r=h(e);this.isPrevButtonDisabled=t===0,this.isNextButtonDisabled=parseInt(t)===n-r},getVisibleButtonWidths:function(){var e=this.$refs;return[e.prevBtn,e.nextBtn].reduce(function(e,t){return t?e+h(t):e},0)}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isTabPanel(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isTabPanel(n)&&t.push(n)}),t},[])},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:x},components:{ChevronLeftIcon:C,ChevronRightIcon:S}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},E(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?D(Object(n),!0).forEach(function(t){k(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function k(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=j(e,`string`);return E(t)==`symbol`?t:t+``}function j(e,t){if(E(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(E(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var M=[`tabindex`,`aria-label`],N=[`data-p-active`,`data-p-disabled`,`data-pc-index`],P=[`id`,`tabindex`,`aria-disabled`,`aria-selected`,`aria-controls`,`onClick`,`onKeydown`],F=[`tabindex`,`aria-label`],I=[`id`,`aria-labelledby`,`data-pc-index`,`data-p-active`];function L(p,h,g,_,v,y){var b=o(`ripple`);return i(),u(`div`,r({class:p.cx(`root`),role:`tablist`},p.ptmi(`root`)),[f(`div`,r({class:p.cx(`navContainer`)},p.ptm(`navContainer`)),[p.scrollable&&!v.isPrevButtonDisabled?c((i(),u(`button`,r({key:0,ref:`prevBtn`,type:`button`,class:p.cx(`prevButton`),tabindex:p.tabindex,"aria-label":y.prevButtonAriaLabel,onClick:h[0]||=function(){return y.onPrevButtonClick&&y.onPrevButtonClick.apply(y,arguments)}},O(O({},p.prevButtonProps),p.ptm(`prevButton`)),{"data-pc-group-section":`navbutton`}),[t(p.$slots,`previcon`,{},function(){return[(i(),s(e(p.prevIcon?`span`:`ChevronLeftIcon`),r({"aria-hidden":`true`,class:p.prevIcon},p.ptm(`prevIcon`)),null,16,[`class`]))]})],16,M)),[[b]]):l(``,!0),f(`div`,r({ref:`content`,class:p.cx(`navContent`),onScroll:h[1]||=function(){return y.onScroll&&y.onScroll.apply(y,arguments)}},p.ptm(`navContent`)),[f(`ul`,r({ref:`nav`,class:p.cx(`nav`)},p.ptm(`nav`)),[(i(!0),u(d,null,a(y.tabs,function(t,a){return i(),u(`li`,r({key:y.getKey(t,a),style:y.getTabProp(t,`headerStyle`),class:p.cx(`tab.header`,{tab:t,index:a}),role:`presentation`},{ref_for:!0},O(O(O({},y.getTabProp(t,`headerProps`)),y.getTabPT(t,`root`,a)),y.getTabPT(t,`header`,a)),{"data-pc-name":`tabpanel`,"data-p-active":v.d_activeIndex===a,"data-p-disabled":y.getTabProp(t,`disabled`),"data-pc-index":a}),[c((i(),u(`a`,r({id:y.getTabHeaderActionId(a),class:p.cx(`tab.headerAction`),tabindex:y.getTabProp(t,`disabled`)||!y.isTabActive(a)?-1:p.tabindex,role:`tab`,"aria-disabled":y.getTabProp(t,`disabled`),"aria-selected":y.isTabActive(a),"aria-controls":y.getTabContentId(a),onClick:function(e){return y.onTabClick(e,t,a)},onKeydown:function(e){return y.onTabKeyDown(e,t,a)}},{ref_for:!0},O(O({},y.getTabProp(t,`headerActionProps`)),y.getTabPT(t,`headerAction`,a))),[t.props&&t.props.header?(i(),u(`span`,r({key:0,class:p.cx(`tab.headerTitle`)},{ref_for:!0},y.getTabPT(t,`headerTitle`,a)),n(t.props.header),17)):l(``,!0),t.children&&t.children.header?(i(),s(e(t.children.header),{key:1})):l(``,!0)],16,P)),[[b]])],16,N)}),128)),f(`li`,r({ref:`inkbar`,class:p.cx(`inkbar`),role:`presentation`,"aria-hidden":`true`},p.ptm(`inkbar`)),null,16)],16)],16),p.scrollable&&!v.isNextButtonDisabled?c((i(),u(`button`,r({key:1,ref:`nextBtn`,type:`button`,class:p.cx(`nextButton`),tabindex:p.tabindex,"aria-label":y.nextButtonAriaLabel,onClick:h[2]||=function(){return y.onNextButtonClick&&y.onNextButtonClick.apply(y,arguments)}},O(O({},p.nextButtonProps),p.ptm(`nextButton`)),{"data-pc-group-section":`navbutton`}),[t(p.$slots,`nexticon`,{},function(){return[(i(),s(e(p.nextIcon?`span`:`ChevronRightIcon`),r({"aria-hidden":`true`,class:p.nextIcon},p.ptm(`nextIcon`)),null,16,[`class`]))]})],16,F)),[[b]]):l(``,!0)],16),f(`div`,r({class:p.cx(`panelContainer`)},p.ptm(`panelContainer`)),[(i(!0),u(d,null,a(y.tabs,function(t,n){return i(),u(d,{key:y.getKey(t,n)},[!p.lazy||y.isTabActive(n)?c((i(),u(`div`,r({key:0,id:y.getTabContentId(n),style:y.getTabProp(t,`contentStyle`),class:p.cx(`tab.content`,{tab:t}),role:`tabpanel`,"aria-labelledby":y.getTabHeaderActionId(n)},{ref_for:!0},O(O(O({},y.getTabProp(t,`contentProps`)),y.getTabPT(t,`root`,n)),y.getTabPT(t,`content`,n)),{"data-pc-name":`tabpanel`,"data-pc-index":n,"data-p-active":v.d_activeIndex===n}),[(i(),s(e(t)))],16,I)),[[m,p.lazy?!0:y.isTabActive(n)]]):l(``,!0)],64)}),128))],16)],16)}T.render=L;export{T as default};