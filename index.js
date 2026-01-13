// Updated Image data with working URLs
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Mountain Landscape",
    category: "nature",
    effect: "3D Depth Effect",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "City Skyline",
    category: "city",
    effect: "Urban 3D Perspective",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Lion Portrait",
    category: "animals",
    effect: "Wildlife 3D Close-up",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Aurora Borealis",
    category: "nature",
    effect: "Northern Lights 3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "New York City",
    category: "city",
    effect: "Metropolis 3D View",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Elephant in Wild",
    category: "animals",
    effect: "Safari 3D Experience",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Beach Paradise",
    category: "travel",
    effect: "Tropical 3D Scene",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Snowy Mountains",
    category: "nature",
    effect: "Alpine 3D Landscape",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Tokyo Street",
    category: "city",
    effect: "Neon 3D Cityscape",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Jungle Adventure",
    category: "travel",
    effect: "Rainforest 3D Depth",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Parrot Colors",
    category: "animals",
    effect: "Vibrant 3D Feathers",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Northern Lights",
    category: "nature",
    effect: "Celestial 3D Display",
  },
];

// DOM elements
const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-content");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxCategory = document.querySelector(".lightbox-category");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Current image index for lightbox navigation
let currentImageIndex = 0;
let isLightboxOpen = false;

// Initialize gallery with 3D entrance animation
function initGallery() {
  gallery.innerHTML = "";

  images.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = `gallery-item ${image.category}`;
    galleryItem.setAttribute("data-category", image.category);
    galleryItem.setAttribute("data-index", index);

    // Apply entrance animation with delay
    galleryItem.style.animation = `galleryEntrance 0.8s ease-out ${
      index * 0.1
    }s both`;

    galleryItem.innerHTML = `
                    <img src="${image.src}" alt="${
      image.title
    }" class="gallery-img">
                    <div class="image-info">
                        <h4 class="image-title">${image.title}</h4>
                        <p class="image-category">${
                          image.category.charAt(0).toUpperCase() +
                          image.category.slice(1)
                        } | ${image.effect}</p>
                    </div>
                `;

    gallery.appendChild(galleryItem);

    // Add 3D mouse move effect
    galleryItem.addEventListener("mousemove", (e) => {
      if (isLightboxOpen) return;

      const itemRect = galleryItem.getBoundingClientRect();
      const x = e.clientX - itemRect.left;
      const y = e.clientY - itemRect.top;

      const centerX = itemRect.width / 2;
      const centerY = itemRect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 5;
      const rotateX = ((centerY - y) / centerY) * 5;

      galleryItem.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
    });

    galleryItem.addEventListener("mouseleave", () => {
      if (isLightboxOpen) return;
      galleryItem.style.transform =
        "rotateX(0) rotateY(0) translateZ(0) scale(1)";
    });

    // Add click event to open lightbox with 3D effect
    galleryItem.addEventListener("click", () => openLightbox(index));
  });
}

// Filter gallery items with 3D transition
function filterGallery(filter) {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item, index) => {
    if (filter === "all" || item.getAttribute("data-category") === filter) {
      // 3D flip-in animation for filtered items
      item.style.animation = `galleryEntrance 0.6s ease-out ${
        index * 0.05
      }s both`;
      setTimeout(() => {
        item.style.display = "block";
      }, 300);
    } else {
      // 3D flip-out animation for hidden items
      item.style.animation = "none";
      item.style.transform =
        "rotateX(-90deg) rotateY(20deg) translateZ(-100px)";
      item.style.opacity = "0";
      setTimeout(() => {
        item.style.display = "none";
      }, 500);
    }
  });

  // Update active button with 3D effect
  filterButtons.forEach((btn) => {
    if (btn.getAttribute("data-filter") === filter) {
      btn.classList.add("active");
      // Add 3D bounce effect to active button
      btn.style.animation = "none";
      setTimeout(() => {
        btn.style.animation = "galleryEntrance 0.5s ease-out";
      }, 10);
    } else {
      btn.classList.remove("active");
    }
  });
}

// Open lightbox with 3D animation
function openLightbox(index) {
  isLightboxOpen = true;
  currentImageIndex = parseInt(index);
  updateLightbox();

  // Reset lightbox 3D transform
  lightboxImg.style.transform =
    "rotateY(90deg) rotateX(-20deg) translateZ(-200px)";
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";

  // Animate lightbox entrance
  setTimeout(() => {
    lightboxImg.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)";
  }, 50);

  // Add mouse move effect to lightbox image
  lightbox.addEventListener("mousemove", lightboxMouseMove);
}

// 3D lightbox mouse move effect
function lightboxMouseMove(e) {
  const lightboxRect = lightbox.getBoundingClientRect();
  const x = e.clientX - lightboxRect.left;
  const y = e.clientY - lightboxRect.top;

  const centerX = lightboxRect.width / 2;
  const centerY = lightboxRect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 5;
  const rotateX = ((centerY - y) / centerY) * 5;

  lightboxImg.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(50px)`;
}

// Update lightbox content
function updateLightbox() {
  const image = images[currentImageIndex];
  lightboxImg.src = image.src;
  lightboxImg.alt = image.title;
  lightboxTitle.textContent = image.title;
  lightboxCategory.textContent = `${
    image.category.charAt(0).toUpperCase() + image.category.slice(1)
  } | ${image.effect}`;
}

// Close lightbox with 3D animation
function closeLightbox() {
  isLightboxOpen = false;

  // Animate lightbox exit
  lightboxImg.style.transform =
    "rotateY(90deg) rotateX(-20deg) translateZ(-200px)";

  setTimeout(() => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";

    // Reset gallery items
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.style.transform = "rotateX(0) rotateY(0) translateZ(0) scale(1)";
    });
  }, 500);

  // Remove mouse move effect
  lightbox.removeEventListener("mousemove", lightboxMouseMove);
}

// Navigate to previous image with 3D flip
function prevImage() {
  // Flip out animation
  lightboxImg.style.transform = "rotateY(90deg) rotateX(0) translateZ(-100px)";

  setTimeout(() => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightbox();

    // Flip in animation
    lightboxImg.style.transform =
      "rotateY(-90deg) rotateX(0) translateZ(-100px)";

    setTimeout(() => {
      lightboxImg.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
    }, 50);
  }, 300);
}

// Navigate to next image with 3D flip
function nextImage() {
  // Flip out animation
  lightboxImg.style.transform = "rotateY(-90deg) rotateX(0) translateZ(-100px)";

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightbox();

    // Flip in animation
    lightboxImg.style.transform =
      "rotateY(90deg) rotateX(0) translateZ(-100px)";

    setTimeout(() => {
      lightboxImg.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
    }, 50);
  }, 300);
}

// Event Listeners
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filterGallery(filter);
  });
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  }
});

// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  filterGallery("all");

  // Log to console that all images should be working
  console.log("Image Gallery Loaded Successfully!");
  console.log("Total Images: " + images.length);
  console.log(
    "Animal Images: " +
      images.filter((img) => img.category === "animals").length
  );
});
