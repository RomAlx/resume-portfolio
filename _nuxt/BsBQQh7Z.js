import{H as e,O as t,R as n,U as r,p as i,v as a}from"./B3DCclvL.js";import{l as o}from"#entry";import{n as s}from"./DYAFxXaU.js";var c=o.extend({name:`overlaybadge`,style:`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,classes:{root:`p-overlaybadge`}}),l={name:`OverlayBadge`,extends:{name:`OverlayBadge`,extends:s,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},inheritAttrs:!1,components:{Badge:s}};function u(o,s,c,l,u,d){var f=r(`Badge`);return n(),i(`div`,t({class:o.cx(`root`)},o.ptmi(`root`)),[e(o.$slots,`default`),a(f,t(o.$props,{pt:o.ptm(`pcBadge`)}),null,16,[`pt`])],16)}l.render=u;export{l as default};