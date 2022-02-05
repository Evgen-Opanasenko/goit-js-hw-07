import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
galleryRef.innerHTML = galleryMarkup;
console.log(galleryItems);

const lbGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
// gallery.open();
// gallery.on("show.simplelightbox", function (e) {
//   e.preventDefault();
//   console.log(e);
//   if (e.target.tagName !== "IMG") {
//     return;
//   }

//   //   const originalImgSrc = e.target.dataset.source;
//   //   const instance = basicLightbox.create(`
//   //     <img src="${originalImgSrc}" width="800" height="600">
//   // `);
//   //   instance.show();
// });

// gallery.on("error.simplelightbox", function (e) {
//   console.log(e);tion
// });

// let gallery = $(".gallery a").simpleLightbox();
// gallery.on("show.simplelightbox", function () {

// });
