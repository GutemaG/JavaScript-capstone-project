(()=>{"use strict";const n=document.querySelector("#app");n.innerHTML='\n    <div class="cardContainer"></div>\n  ',(async()=>{const n=document.querySelector(".cardContainer");(await(async()=>{const n=(await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=",{method:"GET"})).json();return await n.then((n=>n.meals))})()).forEach((e=>{n.appendChild((n=>{const e=document.createElement("div");return e.classList.add("card"),e.innerHTML=`\n    <img src=${n.strMealThumb} alt="food-one" />\n    <div class="card__body">\n      <div class="card__body__top">\n        <span>${n.strMeal}</span>\n        <span class="like-icon">\n          <i class="fa-regular fa-heart fa-2x"></i>\n        </span>\n      </div>\n      <div class="card__body__buttons">\n        <button class="btn comment-btn" id="${n.idMeal}">Comments</button>\n      </div>\n    </div>\n  `,e})(e))})),document.querySelectorAll(".comment-btn").forEach((n=>{n.addEventListener("click",(async n=>{const e=(n=>{const e=document.createElement("div");return e.classList.add("pop-up"),e.innerHTML=`\n      <div class="image-container">\n          <img src="${n.strMealThumb}" alt="" />\n        </div>\n        <button class="btn-close">\n          <i class="fa-solid fa-xmark fa-2x"></i>\n        </button>\n        <h3>${n.strMeal}</h3>\n  \n        <div class="meal-info">\n          <div class="info">\n            <h5>Category</h5>\n            <span>${n.strCategory}</span>\n          </div>\n          <div class="info">\n            <h5>Area</h5>\n            <span>${n.strArea}</span>\n          </div>\n          <div class="info">\n            <h5>Source</h5>\n            <span>\n              <a href="${n.strSource}">click</a>\n            </span>\n          </div>\n          <div class="info">\n            <h5>YouTube Video</h5>\n            <span>\n              <a href="${n.strYoutube}">click</a>\n            </span>\n          </div>\n          <div class="info info-detail">\n            <details>\n              <summary>Instruction</summary>\n              ${n.strInstructions}\n            </details>\n          </div>\n          <div class="info info-detail">\n            <details>\n              <summary>Measurement</summary>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,\n              officia optio. Soluta eum commodi, vero quidem iste sed ullam\n              accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing\n              elit. Minus id et quae amet numquam voluptatem laudantium hic natus\n              quisquam beatae, commodi, animi nulla reprehenderit aspernatur\n              expedita nihil fuga itaque. Dolores.\n            </details>\n          </div>\n        </div>\n        <div class="comments">\n          <h4>Comments(4)</h4>\n          <ul class="comment-list">\n            <li>comment1</li>\n            <li>comment2</li>\n            <li>comment3</li>\n            <li>comment4</li>\n          </ul>\n          <div class="add-comment-form">\n            <h4>Add Comment</h4>\n            <form action="#" method="post" class="comment-form">\n              <input type="text" name="name" placeholder="Your Name" />\n              <textarea name="body" placeholder="Your Insights"></textarea>\n              <button type="submit" class="btn">Comment</button>\n            </form>\n          </div>\n        </div>\n    `,e})((await(async n=>{const e=(await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n}`,{method:"GET"})).json();return await e.then((n=>n.meals))})(n.target.id))[0]);document.querySelector("#app").appendChild(e);const t=document.querySelectorAll(".btn-close"),a=document.querySelectorAll(".pop-up");t.forEach((n=>{n.addEventListener("click",(()=>{a.forEach((n=>{n.style.display="none"}))}))}))}))}))})()})();