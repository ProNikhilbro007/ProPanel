const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry file (make sure this path exists)
  output: {
    filename: 'bundle.js',  // Output file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  mode: 'production',
};
