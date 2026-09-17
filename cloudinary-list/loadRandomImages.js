function loadRandomImages() {

  fetch('images.json')
    .then(response => response.json())
    .then(images => {

      // Pick 3 random images
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 3);

      const container = document.getElementById("random-images-container");

      // Clear the current images
      container.innerHTML = "";

      // Add the new ones
      selected.forEach(url => {
        const img = document.createElement("img");

        img.src = url;
        img.className = "img-fluid rounded mb-3";

        container.appendChild(img);
      });
    });
}