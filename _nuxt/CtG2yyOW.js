import{H as e,O as t,R as n,p as r}from"./B3DCclvL.js";import{t as i}from"./C5STy1Vp.js";import{l as a}from"#entry";import{t as o}from"./BrhcTjnK.js";var s=a.extend({name:`checkboxgroup`,style:`
    .p-checkbox-group {
        display: inline-flex;
    }
`,classes:{root:`p-checkbox-group p-component`}}),c={name:`CheckboxGroup`,extends:{name:`BaseCheckboxGroup`,extends:o,style:s,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(e){this.groupName=e||i(`checkbox-group-`)}},mounted:function(){this.groupName=this.groupName||i(`checkbox-group-`)}};function l(i,a,o,s,c,l){return n(),r(`div`,t({class:i.cx(`root`)},i.ptmi(`root`)),[e(i.$slots,`default`)],16)}c.render=l;export{c as default};