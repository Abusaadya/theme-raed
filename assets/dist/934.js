"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[934],{934:(s,e,t)=>{t.r(e),t.d(e,{salla_search:()=>r});var h=t(531);const r=class{constructor(s){(0,h.r)(this,s),this.fetchStatus="",this.showModal=!1,this.searchPlaceholder="Search here ...",this.noResultsText="There are no results at the moment",this.handleChange=s=>{this.searchTerm=s.target.value,this.fetchStatus="loading",this.showResult=!1,this.results=[],this.searchTerm.length>2&&window.salla.search.api.search(this.searchTerm).then((s=>s)).then((s=>{console.log("response",s),this.fetchStatus="idle",this.results=s.results,this.showResult=!0,this.results.length<1&&(this.fetchStatus="error")})).catch((s=>{this.showResult=!0,this.fetchStatus="error",console.log(s)}))},this.openSearch=()=>{this.searchTerm="",this.fetchStatus="",this.results=[],this.showModal=!0,window.scrollTo(0,0),document.getElementsByTagName("html")[0].style.position="fixed",document.getElementsByTagName("html")[0].style.overflowY="scroll"},this.closeSearch=()=>{this.searchTerm="",this.fetchStatus="",this.results=[],document.getElementsByTagName("html")[0].style.position="static",document.getElementsByTagName("html")[0].style.overflowY="auto",this.showModal=!1}}componentWillLoad(){this.hasSearchIconSlot=!!this.hostElement.querySelector('[slot="search-icon"]'),this.hasProductTemplateSlot=!!this.hostElement.querySelector('[slot="product-template"]'),this.hasProductTemplateSlot&&(this.productTemplateHtml=this.hostElement.querySelector('[slot="product-template"]').innerHTML)}getProduct(s){var e,t;if(this.hasProductTemplateSlot){let t=this.productTemplateHtml.replace("{title}",s.title).replace("{price}",null===(e=s.price)||void 0===e?void 0:e.after).replace("{url}",s.url).replace("{thumb}",s.thumb);return(0,h.h)("div",{class:"s-search-product",innerHTML:t})}return(0,h.h)("div",{class:"s-search-product"},(0,h.h)("a",{target:"_blank",href:s.url,class:"s-search-product-image-container"},(0,h.h)("img",{class:"s-search-product-image",src:s.thumb})),(0,h.h)("div",{class:"s-search-product-details"},(0,h.h)("div",{class:"s-search-product-title"},s.title),(0,h.h)("div",{class:"s-search-product-price"},null===(t=s.price)||void 0===t?void 0:t.after)))}render(){return(0,h.h)(h.H,{class:"s-search"},(0,h.h)("button",{type:"button",onClick:this.openSearch,class:"s-search-search-button-icon"},this.hasSearchIconSlot?(0,h.h)("slot",{name:"search-icon"}):(0,h.h)("i",{class:"sicon-search font-bold"})),this.showModal&&(0,h.h)("div",{class:"s-search-container",style:{backgroundColor:"rgba(0,0,0,0.5)"}},(0,h.h)("div",{class:"s-search-wrapper",onClick:this.closeSearch},(0,h.h)("div",{class:"s-search-inner",onClick:s=>{s.stopPropagation()}},(0,h.h)("div",{class:"s-search-search-box-container"},(0,h.h)("div",{class:this.showResult?"s-search-search-box-inner-open":"s-search-search-box-inner"},(0,h.h)("input",{class:"s-search-input",type:"text",placeholder:this.searchPlaceholder,value:this.searchTerm,onInput:s=>this.handleChange(s)}),"loading"!=this.fetchStatus?(0,h.h)("button",{class:"s-search-search-icon"},(0,h.h)("i",{class:"sicon-search"})):(0,h.h)("span",{class:"s-search-spinner"},(0,h.h)("span",{class:"s-search-spinner-loader"})))),(0,h.h)("div",{class:"s-search-search-results"},"error"===this.fetchStatus&&(0,h.h)("p",{class:"s-search-no-results error p-4 text-sm text-gray-text"},this.noResultsText),this.results&&this.results.map((s=>this.getProduct(s))))))))}get hostElement(){return(0,h.g)(this)}}}}]);