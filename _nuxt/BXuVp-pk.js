import{$ as e,G as t,H as n,Lt as r,O as i,Pt as a,R as o,U as s,V as c,d as l,f as u,p as d,r as f,v as p}from"./B3DCclvL.js";import{l as m}from"#entry";import{t as h}from"./BjlWE0m2.js";import{t as g}from"./BkS8U6Ow.js";import{t as _}from"./hkq8kaPC.js";import v from"./ChfOLTfJ.js";import y from"./Cf1YlfkR.js";import b from"./CpEbGybg.js";var x=m.extend({name:`accordion`,style:`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,classes:{root:`p-accordion p-component`}}),S={name:`Accordion`,extends:{name:`BaseAccordion`,extends:h,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:x,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:value`,`update:activeIndex`,`tab-open`,`tab-close`,`tab-click`],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){return this.multiple?this.d_value?.includes(e):this.d_value===e},updateValue:function(e){var t=this.isItemActive(e);this.multiple?t?this.d_value=this.d_value.filter(function(t){return t!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=t?null:e,this.$emit(`update:value`,this.d_value),this.$emit(`update:activeIndex`,this.multiple?this.d_value?.map(Number):Number(this.d_value)),this.$emit(t?`tab-close`:`tab-open`,{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name===`AccordionTab`},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,`header`)||t},getHeaderPT:function(e,t){var n=this;return{root:i({onClick:function(e){return n.onTabClick(e,t)}},this.getTabProp(e,`headerProps`),this.getTabPT(e,`header`,t)),toggleicon:i(this.getTabProp(e,`headeractionprops`),this.getTabPT(e,`headeraction`,t))}},getContentPT:function(e,t){return{root:i(this.getTabProp(e,`contentProps`),this.getTabPT(e,`toggleablecontent`,t)),transition:this.getTabPT(e,`transition`,t),content:this.getTabPT(e,`content`,t)}},getTabPT:function(e,t,n){var r=this.tabs.length,a={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:n,count:r,first:n===0,last:n===r-1,active:this.isItemActive(`${n}`)}};return i(this.ptm(`accordiontab.${t}`,a),this.ptmo(this.getTabProp(e,`pt`),t,a))},onTabClick:function(e,t){this.$emit(`tab-click`,{originalEvent:e,index:t})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,n){return e.isAccordionTab(n)?t.push(n):n.children&&n.children instanceof Array&&n.children.forEach(function(n){e.isAccordionTab(n)&&t.push(n)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:b,AccordionHeader:y,AccordionContent:v,ChevronUpIcon:_,ChevronRightIcon:g}};function C(m,h,g,_,v,y){var b=s(`AccordionHeader`),x=s(`AccordionContent`),S=s(`AccordionPanel`);return o(),d(`div`,i({class:m.cx(`root`)},m.ptmi(`root`)),[y.hasAccordionTab?(o(!0),d(f,{key:0},c(y.tabs,function(n,s){return o(),l(S,{key:y.getKey(n,s),value:`${s}`,pt:{root:y.getTabPT(n,`root`,s)},disabled:y.getTabProp(n,`disabled`)},{default:e(function(){return[p(b,{class:a(y.getTabProp(n,`headerClass`)),pt:y.getHeaderPT(n,s)},{toggleicon:e(function(e){return[e.active?(o(),l(t(m.$slots.collapseicon?m.$slots.collapseicon:m.collapseIcon?`span`:`ChevronDownIcon`),i({key:0,class:[m.collapseIcon,e.class],"aria-hidden":`true`},{ref_for:!0},y.getTabPT(n,`headericon`,s)),null,16,[`class`])):(o(),l(t(m.$slots.expandicon?m.$slots.expandicon:m.expandIcon?`span`:`ChevronUpIcon`),i({key:1,class:[m.expandIcon,e.class],"aria-hidden":`true`},{ref_for:!0},y.getTabPT(n,`headericon`,s)),null,16,[`class`]))]}),default:e(function(){return[n.children&&n.children.headericon?(o(),l(t(n.children.headericon),{key:0,isTabActive:y.isItemActive(`${s}`),active:y.isItemActive(`${s}`),index:s},null,8,[`isTabActive`,`active`,`index`])):u(``,!0),n.props&&n.props.header?(o(),d(`span`,i({key:1,ref_for:!0},y.getTabPT(n,`headertitle`,s)),r(n.props.header),17)):u(``,!0),n.children&&n.children.header?(o(),l(t(n.children.header),{key:2})):u(``,!0)]}),_:2},1032,[`class`,`pt`]),p(x,{pt:y.getContentPT(n,s)},{default:e(function(){return[(o(),l(t(n)))]}),_:2},1032,[`pt`])]}),_:2},1032,[`value`,`pt`,`disabled`])}),128)):n(m.$slots,`default`,{key:1})],16)}S.render=C;export{S as default};