import{H as e,Lt as t,O as n,Pt as r,R as i,U as a,V as o,f as s,p as c,r as l,u,v as d}from"./B3DCclvL.js";import{t as f}from"./CRHlWn3X.js";import{l as p}from"#entry";import{t as m}from"./BjlWE0m2.js";var h=p.extend({name:`metergroup`,style:`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`,classes:{root:function(e){var t=e.props;return[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation===`horizontal`,"p-metergroup-vertical":t.orientation===`vertical`}]},meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:function(e){var t=e.props;return[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation===`horizontal`}]},label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`}}),g={name:`MeterGroup`,extends:m,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},style:h,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_(e)}function v(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=b(e,`string`);return _(t)==`symbol`?t:t+``}function b(e,t){if(_(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(_(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var x={name:`MeterGroupLabel`,hostName:`MeterGroup`,extends:m,inheritAttrs:!1,inject:[`$pcMeterGroup`],props:{value:{type:Array,default:null},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},computed:{dataP:function(){return f(v({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},S=[`data-p`];function C(a,s,d,f,p,m){return i(),c(`ol`,n({class:a.cx(`labelList`),"data-p":m.dataP},a.ptm(`labelList`)),[(i(!0),c(l,null,o(d.value,function(o,s){return i(),c(`li`,n({key:s+`_label`,class:a.cx(`label`)},{ref_for:!0},a.ptm(`label`)),[e(a.$slots,`icon`,{value:o,class:r(a.cx(`labelIcon`))},function(){return[o.icon?(i(),c(`i`,n({key:0,class:[o.icon,a.cx(`labelIcon`)],style:{color:o.color}},{ref_for:!0},a.ptm(`labelIcon`)),null,16)):(i(),c(`span`,n({key:1,class:a.cx(`labelMarker`),style:{backgroundColor:o.color}},{ref_for:!0},a.ptm(`labelMarker`)),null,16))]}),u(`span`,n({class:a.cx(`labelText`)},{ref_for:!0},a.ptm(`labelText`)),t(o.label)+` (`+t(a.$parentInstance.percentValue(o.value))+`)`,17)],16)}),128))],16,S)}x.render=C;function w(e){"@babel/helpers - typeof";return w=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},w(e)}function T(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=D(e,`string`);return w(t)==`symbol`?t:t+``}function D(e,t){if(w(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(w(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var O={name:`MeterGroup`,extends:g,inheritAttrs:!1,methods:{getPTOptions:function(e,t,n){return this.ptm(e,{context:{value:t,index:n}})},percent:function(){var e=((arguments.length>0&&arguments[0]!==void 0?arguments[0]:0)-this.min)/(this.max-this.min)*100;return Math.max(0,Math.min(100,e))},roundedPercent:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.round(this.percent(e))},percentValue:function(e){return this.roundedPercent(e)+`%`},meterCalculatedStyles:function(e){return{backgroundColor:e.color,width:this.orientation===`horizontal`&&this.percent(e.value)+`%`,height:this.orientation===`vertical`&&this.percent(e.value)+`%`}}},computed:{totalPercent:function(){return this.roundedPercent(this.value.reduce(function(e,t){return e+t.value},0))},percentages:function(){var e=0,t=[];return this.value.forEach(function(n){e+=n.value,t.push(e)}),t},dataP:function(){return f(T({},this.orientation,this.orientation))}},components:{MeterGroupLabel:x}},k=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-p`],A=[`data-p`],j=[`data-p`];function M(t,f,p,m,h,g){var _=a(`MeterGroupLabel`);return i(),c(`div`,n({class:t.cx(`root`),role:`meter`,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":g.totalPercent,"data-p":g.dataP},t.ptmi(`root`)),[t.labelPosition===`start`?e(t.$slots,`label`,{key:0,value:t.value,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[d(_,{value:t.value,labelPosition:t.labelPosition,labelOrientation:t.labelOrientation,unstyled:t.unstyled,pt:t.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):s(``,!0),e(t.$slots,`start`,{value:t.value,totalPercent:g.totalPercent,percentages:g.percentages}),u(`div`,n({class:t.cx(`meters`),"data-p":g.dataP},t.ptm(`meters`)),[(i(!0),c(l,null,o(t.value,function(a,o){return e(t.$slots,`meter`,{key:o,value:a,index:o,class:r(t.cx(`meter`)),orientation:t.orientation,size:g.percentValue(a.value),totalPercent:g.totalPercent},function(){return[g.roundedPercent(a.value)?(i(),c(`span`,n({key:0,class:t.cx(`meter`),style:g.meterCalculatedStyles(a),"data-p":g.dataP},{ref_for:!0},g.getPTOptions(`meter`,a,o)),null,16,j)):s(``,!0)]})}),128))],16,A),e(t.$slots,`end`,{value:t.value,totalPercent:g.totalPercent,percentages:g.percentages}),t.labelPosition===`end`?e(t.$slots,`label`,{key:1,value:t.value,totalPercent:g.totalPercent,percentages:g.percentages},function(){return[d(_,{value:t.value,labelPosition:t.labelPosition,labelOrientation:t.labelOrientation,unstyled:t.unstyled,pt:t.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):s(``,!0)],16,k)}O.render=M;export{O as default};