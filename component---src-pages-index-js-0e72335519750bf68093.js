"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,a){var l=a(7294),i=a(1883),r=a(3723);t.Z=()=>{var e,t;const n=(0,i.useStaticQuery)("3257411868"),s=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,c=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:100,alt:"Profile picture",__imageData:a(262)}),(null==s?void 0:s.name)&&l.createElement("p",null,s.name,l.createElement("br",null)," ",(null==s?void 0:s.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==c?void 0:c.twitter)||"")},"Twitter"),"はこちら"))}},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var l=a(7294),i=a(1883),r=a(8771),n=a(8678),s=a(9357);t.default=e=>{var t;let{data:a,location:s}=e;const c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",o=a.allMarkdownRemark.nodes;return l.createElement(n.Z,{location:s,title:c},l.createElement("h1",{className:"h1-aboutpage"},"Home"),l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},l.createElement("h1",null,"Blog Posts"),o.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t)))),l.createElement("small",null,e.frontmatter.date),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const c=()=>l.createElement(s.Z,{title:"Home"})},262:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b115d104710be0254ddee6bf7a0d52b0/5861f/profile-pic.png","srcSet":"/static/b115d104710be0254ddee6bf7a0d52b0/5861f/profile-pic.png 50w,\\n/static/b115d104710be0254ddee6bf7a0d52b0/90cd3/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/b115d104710be0254ddee6bf7a0d52b0/a713c/profile-pic.avif 50w,\\n/static/b115d104710be0254ddee6bf7a0d52b0/322dd/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/b115d104710be0254ddee6bf7a0d52b0/9afd2/profile-pic.webp 50w,\\n/static/b115d104710be0254ddee6bf7a0d52b0/e64f1/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-0e72335519750bf68093.js.map