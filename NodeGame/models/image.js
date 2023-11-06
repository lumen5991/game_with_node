const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
  url: String, // Ajoutez un champ pour l'URL
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
