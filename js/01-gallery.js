import { galleryItems } from "./gallery-items.js";
// Change code below this line
// {
/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
// }
const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") {
    // window.removeEventListener("keydown", escCloseModal);
    return;
  }

  const originalImgSrc = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${originalImgSrc}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", escCloseModal);
  function escCloseModal(e) {
    console.log(e);
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", escCloseModal);
    }
  }

  console.log(originalImgSrc);
}
// onClose: (instance) => {
//   window.removeEventListener("keydown", escCloseModal);
// };  не могу понять как применить
console.log(galleryItems);
