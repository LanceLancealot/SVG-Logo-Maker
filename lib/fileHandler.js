// lib/fileHandler.js
const fs = require('fs/promises');

async function saveToFile(filename, data) {
  await fs.writeFile(filename, data);
}

module.exports = saveToFile;
