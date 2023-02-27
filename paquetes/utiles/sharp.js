const sharp = require('sharp');

sharp('./Ana-de-Armas.jpg')
    .resize(80)
    .grayscale()
    .toFile('resized.jpg');