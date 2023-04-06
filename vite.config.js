/** @type {import('vite').UserConfig} */
module.exports = {
  base: '/game-train-with-light-bulbs/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js'
      }
    }
  }
};
