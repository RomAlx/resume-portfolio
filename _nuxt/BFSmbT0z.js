import{$ as e,G as t,H as n,Lt as r,O as i,Pt as a,R as o,U as s,d as c,et as l,f as u,p as d,u as f,v as p}from"./B3DCclvL.js";import{t as m}from"./CRHlWn3X.js";import{Gt as h,Ht as g,l as _}from"#entry";import{t as v}from"./BjlWE0m2.js";import{t as y}from"./xxC1nh7x.js";import{n as b}from"./BYg77N0K.js";import{t as x}from"./COseQBni.js";import{t as S}from"./BzfkD1Ka.js";var C=_.extend({name:`panel`,style:`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),w={name:`Panel`,extends:{name:`BasePanel`,extends:v,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}}},style:C,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return m({toggleable:this.toggleable})}},components:{PlusIcon:S,MinusIcon:x,Button:b},directives:{ripple:y}},T=[`data-p`],E=[`data-p`],D=[`id`],O=[`id`,`aria-labelledby`];function k(m,_,v,y,b,x){var S=s(`Button`);return o(),d(`div`,i({class:m.cx(`root`),"data-p":x.dataP},m.ptmi(`root`)),[f(`div`,i({class:m.cx(`header`),"data-p":x.dataP},m.ptm(`header`)),[n(m.$slots,`header`,{id:m.$id+`_header`,class:a(m.cx(`title`)),collapsed:b.d_collapsed},function(){return[m.header?(o(),d(`span`,i({key:0,id:m.$id+`_header`,class:m.cx(`title`)},m.ptm(`title`)),r(m.header),17,D)):u(``,!0)]}),f(`div`,i({class:m.cx(`headerActions`)},m.ptm(`headerActions`)),[n(m.$slots,`icons`),m.toggleable?n(m.$slots,`togglebutton`,{key:0,collapsed:b.d_collapsed,toggleCallback:function(e){return x.toggle(e)},keydownCallback:function(e){return x.onKeyDown(e)}},function(){return[p(S,i({id:m.$id+`_header`,class:m.cx(`pcToggleButton`),"aria-label":x.buttonAriaLabel,"aria-controls":m.$id+`_content`,"aria-expanded":!b.d_collapsed,unstyled:m.unstyled,onClick:_[0]||=function(e){return x.toggle(e)},onKeydown:_[1]||=function(e){return x.onKeyDown(e)}},m.toggleButtonProps,{pt:m.ptm(`pcToggleButton`)}),{icon:e(function(e){return[n(m.$slots,m.$slots.toggleicon?`toggleicon`:`togglericon`,{collapsed:b.d_collapsed},function(){return[(o(),c(t(b.d_collapsed?`PlusIcon`:`MinusIcon`),i({class:e.class},m.ptm(`pcToggleButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]}):u(``,!0)],16)],16,E),p(g,i({name:`p-collapsible`},m.ptm(`transition`)),{default:e(function(){return[l(f(`div`,i({id:m.$id+`_content`,class:m.cx(`contentContainer`),role:`region`,"aria-labelledby":m.$id+`_header`},m.ptm(`contentContainer`)),[f(`div`,i({class:m.cx(`contentWrapper`)},m.ptm(`contentWrapper`)),[f(`div`,i({class:m.cx(`content`)},m.ptm(`content`)),[n(m.$slots,`default`)],16),m.$slots.footer?(o(),d(`div`,i({key:0,class:m.cx(`footer`)},m.ptm(`footer`)),[n(m.$slots,`footer`)],16)):u(``,!0)],16)],16,O),[[h,!b.d_collapsed]])]}),_:3},16)],16,T)}w.render=k;export{w as default};