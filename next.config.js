// module.exports = {
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         images : {
//           domains: ["localhost:3000"]
//       },
//         use: ["@svgr/webpack"]
//       });
  
//       return config;
//     }
//   };

const withImages = require('next-images')
module. exports = withImages()
