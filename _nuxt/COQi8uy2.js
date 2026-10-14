import{t as e}from"./DK3Fl9T5.js";import{H as t,O as n,R as r,f as i,p as a,u as o}from"./B3DCclvL.js";import{l as s}from"#entry";import{t as c}from"./BjlWE0m2.js";var l=s.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),u=e({default:()=>d}),d={name:`Card`,extends:{name:`BaseCard`,extends:c,style:l,provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function f(e,s,c,l,u,d){return r(),a(`div`,n({class:e.cx(`root`)},e.ptmi(`root`)),[e.$slots.header?(r(),a(`div`,n({key:0,class:e.cx(`header`)},e.ptm(`header`)),[t(e.$slots,`header`)],16)):i(``,!0),o(`div`,n({class:e.cx(`body`)},e.ptm(`body`)),[e.$slots.title||e.$slots.subtitle?(r(),a(`div`,n({key:0,class:e.cx(`caption`)},e.ptm(`caption`)),[e.$slots.title?(r(),a(`div`,n({key:0,class:e.cx(`title`)},e.ptm(`title`)),[t(e.$slots,`title`)],16)):i(``,!0),e.$slots.subtitle?(r(),a(`div`,n({key:1,class:e.cx(`subtitle`)},e.ptm(`subtitle`)),[t(e.$slots,`subtitle`)],16)):i(``,!0)],16)):i(``,!0),o(`div`,n({class:e.cx(`content`)},e.ptm(`content`)),[t(e.$slots,`content`)],16),e.$slots.footer?(r(),a(`div`,n({key:1,class:e.cx(`footer`)},e.ptm(`footer`)),[t(e.$slots,`footer`)],16)):i(``,!0)],16)],16)}d.render=f;export{d as n,u as t};