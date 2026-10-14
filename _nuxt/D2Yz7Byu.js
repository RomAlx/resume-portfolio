import{G as e,H as t,Lt as n,O as r,Pt as i,R as a,U as o,V as s,d as c,f as l,p as u,r as d,u as f,v as p}from"./B3DCclvL.js";import{l as m}from"#entry";import{t as h}from"./BjlWE0m2.js";import{t as g}from"./BkS8U6Ow.js";var _=m.extend({name:`breadcrumb`,style:`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,classes:{root:`p-breadcrumb p-component`,list:`p-breadcrumb-list`,homeItem:`p-breadcrumb-home-item`,separator:`p-breadcrumb-separator`,separatorIcon:`p-breadcrumb-separator-icon`,item:function(e){return[`p-breadcrumb-item`,{"p-disabled":e.instance.disabled()}]},itemLink:`p-breadcrumb-item-link`,itemIcon:`p-breadcrumb-item-icon`,itemLabel:`p-breadcrumb-item-label`}}),v={name:`BaseBreadcrumb`,extends:h,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:_,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},y={name:`BreadcrumbItem`,hostName:`Breadcrumb`,extends:h,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible==`function`?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled==`function`?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label==`function`?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,n=e.url,r=typeof window<`u`?window.location.pathname:``;return t===r||n===r?`page`:void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:r({class:this.cx(`itemLink`),"aria-current":this.isCurrentUrl(),onClick:function(t){return e.onClick(t)}},this.ptm(`itemLink`,this.ptmOptions)),icon:r({class:[this.cx(`icon`),this.item.icon]},this.ptm(`icon`,this.ptmOptions)),label:r({class:this.cx(`label`)},this.ptm(`label`,this.ptmOptions))}}}},b=[`href`,`target`,`aria-current`];function x(t,o,s,d,f,p){return p.visible()?(a(),u(`li`,r({key:0,class:[t.cx(`item`),s.item.class]},t.ptm(`item`,p.ptmOptions)),[s.templates.item?(a(),c(e(s.templates.item),{key:1,item:s.item,label:p.label(),props:p.getMenuItemProps},null,8,[`item`,`label`,`props`])):(a(),u(`a`,r({key:0,href:s.item.url||`#`,class:t.cx(`itemLink`),target:s.item.target,"aria-current":p.isCurrentUrl(),onClick:o[0]||=function(){return p.onClick&&p.onClick.apply(p,arguments)}},t.ptm(`itemLink`,p.ptmOptions)),[s.templates&&s.templates.itemicon?(a(),c(e(s.templates.itemicon),{key:0,item:s.item,class:i(t.cx(`itemIcon`,p.ptmOptions))},null,8,[`item`,`class`])):s.item.icon?(a(),u(`span`,r({key:1,class:[t.cx(`itemIcon`),s.item.icon]},t.ptm(`itemIcon`,p.ptmOptions)),null,16)):l(``,!0),s.item.label?(a(),u(`span`,r({key:2,class:t.cx(`itemLabel`)},t.ptm(`itemLabel`,p.ptmOptions)),n(p.label()),17)):l(``,!0)],16,b))],16)):l(``,!0)}y.render=x;var S={name:`Breadcrumb`,extends:v,inheritAttrs:!1,components:{BreadcrumbItem:y,ChevronRightIcon:g}};function C(e,n,i,m,h,g){var _=o(`BreadcrumbItem`),v=o(`ChevronRightIcon`);return a(),u(`nav`,r({class:e.cx(`root`)},e.ptmi(`root`)),[f(`ol`,r({class:e.cx(`list`)},e.ptm(`list`)),[e.home?(a(),c(_,r({key:0,item:e.home,class:e.cx(`homeItem`),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm(`homeItem`)),null,16,[`item`,`class`,`templates`,`pt`,`unstyled`])):l(``,!0),(a(!0),u(d,null,s(e.model,function(n,i){return a(),u(d,{key:n.label+`_`+i},[e.home||i!==0?(a(),u(`li`,r({key:0,class:e.cx(`separator`)},{ref_for:!0},e.ptm(`separator`)),[t(e.$slots,`separator`,{},function(){return[p(v,r({"aria-hidden":`true`,class:e.cx(`separatorIcon`)},{ref_for:!0},e.ptm(`separatorIcon`)),null,16,[`class`])]})],16)):l(``,!0),p(_,{item:n,index:i,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,[`item`,`index`,`templates`,`pt`,`unstyled`])],64)}),128))],16)],16)}S.render=C;export{S as default};