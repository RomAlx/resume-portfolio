import{t as e}from"./DK3Fl9T5.js";import{G as t,H as n,Lt as r,O as i,R as a,d as o,f as s,p as c}from"./B3DCclvL.js";import{t as l}from"./CRHlWn3X.js";import{l as u}from"#entry";import{t as d}from"./BjlWE0m2.js";import{t as f}from"./ZBbifMc3.js";var p=u.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),m=e({default:()=>h}),h={name:`Chip`,extends:{name:`BaseChip`,extends:d,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:p,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return l({removable:this.removable})}},components:{TimesCircleIcon:f}},g=[`aria-label`,`data-p`],_=[`src`];function v(e,l,u,d,f,p){return f.visible?(a(),c(`div`,i({key:0,class:e.cx(`root`),"aria-label":e.label},e.ptmi(`root`),{"data-p":p.dataP}),[n(e.$slots,`default`,{},function(){return[e.image?(a(),c(`img`,i({key:0,src:e.image},e.ptm(`image`),{class:e.cx(`image`)}),null,16,_)):e.$slots.icon?(a(),o(t(e.$slots.icon),i({key:1,class:e.cx(`icon`)},e.ptm(`icon`)),null,16,[`class`])):e.icon?(a(),c(`span`,i({key:2,class:[e.cx(`icon`),e.icon]},e.ptm(`icon`)),null,16)):s(``,!0),e.label===null?s(``,!0):(a(),c(`div`,i({key:3,class:e.cx(`label`)},e.ptm(`label`)),r(e.label),17))]}),e.removable?n(e.$slots,`removeicon`,{key:0,removeCallback:p.close,keydownCallback:p.onKeydown},function(){return[(a(),o(t(e.removeIcon?`span`:`TimesCircleIcon`),i({class:[e.cx(`removeIcon`),e.removeIcon],onClick:p.close,onKeydown:p.onKeydown},e.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):s(``,!0)],16,g)):s(``,!0)}h.render=v;export{h as n,m as t};