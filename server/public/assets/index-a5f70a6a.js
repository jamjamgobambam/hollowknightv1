(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=[{id:"1",name:"Broken Vessel",health:525,image:"http://pa1.narvii.com/6609/84a4a9203980912269721c8ff403a7b1314540d9_00.gif",location:"Ancient Basin",description:"The shape of this creature... I have seen something like it before. More than once, perhaps. It looks a little like the bugs of Hallownest, but not quite the same. Where did these empty little wanderers come from?"},{id:"2",name:"Crystal Guardian",health:280,image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b368430-8d57-492e-bc0b-360ef75b19bd/df7btpo-b405685c-1f21-45ae-ae2d-ec2ccf9917ed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMzY4NDMwLThkNTctNDkyZS1iYzBiLTM2MGVmNzViMTliZFwvZGY3YnRwby1iNDA1Njg1Yy0xZjIxLTQ1YWUtYWUyZC1lYzJjY2Y5OTE3ZWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v0Ld-ubRZSjy9vAbVd0F2mvUm_ObG46xEsWW25NSiDM",location:"Crystal Peak",description:"How does the world look to this creature, gazing out from within its crystal prison? Does it see only light? Is that what drives it into a frenzy?"},{id:"3",name:"False Knight",health:355,image:"https://flipanim.com/gif/x/4/X4Khfx0b.gif",location:"Forgotten Crossroads",description:"Weak creatures love to steal the strength of others. Their lives are brief and fearful, and they yearn to have the power to dominate those who have dominated them."},{id:"4",name:"Hollow Knight",health:150,image:"https://media.tenor.com/HdBYk1CMyE4AAAAd/hollow-knight.gif",location:"Temple of the Black Egg",description:"The old King of Hallownest... he must have been desperate to save his crumbling little world. The sacrifices he imposed on others... all for nothing."},{id:"5",name:"Hornet Protector",health:225,image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a2d7d4d-0115-4ac6-8324-c15f9174c7d2/dda0aas-4df1cb55-fee4-4fbf-a8cb-dc2494df7544.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhMmQ3ZDRkLTAxMTUtNGFjNi04MzI0LWMxNWY5MTc0YzdkMlwvZGRhMGFhcy00ZGYxY2I1NS1mZWU0LTRmYmYtYThjYi1kYzI0OTRkZjc1NDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cqBK9ZSric91qct31u23_5mJjwwVI-CqxM5R4TreqwQ",location:"Greenpath",description:"I have seen this nimble little creature. I thought her prey and pounced at her, but with a flash she stabbed me with her flying stinger and darted away. Could she be... a Hunter?"},{id:"6",name:"Mantis Lords",health:530,image:"https://i.pinimg.com/originals/0b/1b/1a/0b1b1adb8550856395d18a379a9301e0.jpg",location:"Fungal Wastes",description:"The Mantis tribe and the bugs of old Hallownest had no love for each other. The Mantises outlived their rivals though, and their civilisation still stands."}];const l="/assets/shade-f1371e93.gif";document.querySelector("#banner").innerHTML=`
    <div class="nav-container">
        <h1>Hollow Knight</h1>
        <p>For those who are tired of being repeatedly defeated by the bosses 💀</p>
        <a href="/" role="button">All Bosses</a>
    </div>
`;const d=async()=>{for(const o of c)document.querySelector("#main-content").innerHTML+=`
      <article style="background: url(${o.image}); background-repeat: no-repeat; background-size: cover; background-position: center center">
        <div class="boss-card-overlay">
          <div class="boss-brief boss-card-name">
            <h3>${o.name}</h3>
            <hr>
            <div class="boss-brief boss-card-location">
              <p>${o.location}</p>
              <div class="boss-brief boss-card-link">
                <a href="/bosses/${o.id}" role="button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    `},h=async()=>{const o=window.location.pathname,s=o.substring(o.length-1);if(isNaN(s))r();else try{const i=c[s-1];document.querySelector("#main-content").innerHTML=`
        <div class="boss-info">
          <div class="boss-health-location">
            <h2>${i.name}</h2>
            <p><strong><span class="fa-solid fa-heart info-icon"></span> Health:</strong>${i.health}</p>
            <p><strong><span class="fa-solid fa-map-location-dot info-icon"></span>${i.location}</p>
            <p class="boss-info-description">${i.description}</p>
          </div>

          <img src=${i.image} />
        </div>
      `}catch{r()}},r=()=>{document.querySelector("#main-content").innerHTML=`
    <div class="page-not-found">
        <img src=${l} />
        <h2>There's nothing here!</h2>
        <p>The page you're looking for doesn't exist.</p>
    </div>
  `};window.location.pathname==="/"?d():h();
