const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg",
    description: "Hokkaido Flower"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg",
    description: "Aerial Beach View"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape"
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea"
  }
];

const gallery = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const currentImage = modalWindow.querySelector(".lightbox__image");
const closeBtn = document.querySelector("button[data-action=close-lightbox]");
const modalDrop = document.querySelector(".js-content");

gallery.addEventListener("click", openItem);
closeBtn.addEventListener("click", closeItem);
modalDrop.addEventListener("click", handleOverlayClick);
window.addEventListener("keydown", keyPress);

function createMarkup(item) {
  return `
  <li class="gallery__item">
  <a
class="gallery__link"
href=${item.preview}
>
<img
class="gallery__image"
src=${item.preview}
data-source=${item.original}
alt="${item.description}"
/>

<span class="gallery__icon">
<i class="material-icons">zoom_out_map</i>
</span>
</a>
</li> `;
}

function createListItem(array) {
  array.forEach(arr => {
    const markup = createMarkup(arr);
    gallery.insertAdjacentHTML("beforeend", markup);
  });
}

createListItem(images);

function openItem(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalWindow.classList.add("is-open");
  const currentImageSrc = event.target.dataset.source;
  currentImage.setAttribute("src", currentImageSrc);
}

function closeItem() {
  modalWindow.classList.remove("is-open");
  currentImage.removeAttribute("src");
}

function handleOverlayClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeItem();
}

function keyPress(event) {
  if (event.code === "Escape") {
    closeItem();
  }
  //  else if (modalWindow.classList.contains("is-open")) {
  //   if (event.code === "ArrowRight") {
  //     console.log("Rigth");
  //     nextImage();
  //   } else if (event.code === "ArrowLeft") {
  //     console.log("Left");
  //   }
  // }
}

// function nextImage() {
//   const galleryItems = currentImage.closest(".js-lightbox")
//     .previousElementSibling.children;
//   console.log(...galleryItems);
// }
