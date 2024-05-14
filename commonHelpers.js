import{S as m,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="43798487-cffd9f7a4f04e7c4b426bb2b8",d="https://pixabay.com/api/",h=(o="flower")=>{const s=new URLSearchParams({key:f,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:6,q:o});return fetch(`${d}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},g=o=>o.map(({largeImageURL:s,webformatURL:r,tags:a,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
          class="gallery-image"
          src="${r}"
          alt="${a}"
        />
      </a>
      <ul class="image-info">
        <li class="info-item">Likes: ${e}</li>
        <li class="info-item">Views: ${t}</li>
        <li class="info-item">Comments: ${i}</li>
        <li class="info-item">Downloads: ${u}</li>
      </ul>
    </li>`).join(""),l=document.querySelector(".gallery"),p=document.querySelector(".myForm"),c=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){o.preventDefault();const s=o.target.elements.textInput.value.trim();if(s===""){l.innerHTML="",o.target.reset(),n.error({position:"topRight",class:"error",message:"Please put your request",timeout:2e3});return}l.innerHTML="",c.classList.remove("is-hidden"),h(s).then(r=>{r.total===0&&(o.target.reset(),n.error({position:"topRight",class:"error",message:"Sorry, there are no images matching your search query. Please try again!",timeout:2e3})),l.innerHTML=g(r.hits),y.refresh(),o.target.reset(),c.classList.add("is-hidden")}).catch(r=>console.log(r))}p.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
