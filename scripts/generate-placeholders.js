const fs = require("fs");
const path = require("path");

// Create placeholder images with different colors
const colors = [
  "#FFB6C1", // Light pink
  "#FFC0CB", // Pink
  "#FFDAB9", // Peach
  "#E6E6FA", // Lavender
  "#F0F8FF", // Alice blue
];

const imagesDir = path.join(__dirname, "../public/images");

// Ensure the images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG placeholders
colors.forEach((color, index) => {
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="${color}"/>
      <text x="400" y="300" font-family="Arial" font-size="24" fill="#333" text-anchor="middle">
        Placeholder Image ${index + 1}
      </text>
    </svg>
  `;

  fs.writeFileSync(path.join(imagesDir, `couple-${index + 1}.svg`), svg);
});

// Create hero background
const heroSvg = `
  <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFB6C1;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#E6E6FA;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#grad)"/>
    <text x="960" y="540" font-family="Arial" font-size="48" fill="#333" text-anchor="middle">
      Hero Background
    </text>
  </svg>
`;

fs.writeFileSync(path.join(imagesDir, "hero-bg.svg"), heroSvg);

console.log("Placeholder images generated successfully!");
