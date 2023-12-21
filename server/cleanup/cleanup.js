const fs = require('fs');
const path = require('path');

function cleanupUploads() {
    const uploadDir = path.join(__dirname, '../uploads');

    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error(`Error reading files in ${uploadDir}:`, err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(uploadDir, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Error deleting file ${filePath}:`, err);
                } else {
                    console.log(`Deleted file: ${filePath}`);
                }
            });
        });
    });
}

module.exports = cleanupUploads;