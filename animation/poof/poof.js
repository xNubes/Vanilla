window.addEventListener('load', function () {
    animate();
  });
  
  let animationFrame = null;
  let position = 0; // Initial position
  
  function animate() {
    const path = document.getElementById("circle");
    if (!path) {
      console.error("Path element not found!");
      return;
    }
  
    // Move the path horizontally by updating its transform
    position += 2;
    if (position > 600) {
      position = 0; // Reset position
    }
  
    // Apply the translation using a transform
    path.setAttribute("transform", `translate(${position}, 0)`);
      
    // Schedule the next frame
    animationFrame = requestAnimationFrame(animate);
  }