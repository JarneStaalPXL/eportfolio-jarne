module.exports = {
    chainWebpack: (config) => {
      // Clear existing rules for PDFs
      const rules = config.module.rules.delete('pdf');
  
      // Add your own rule for PDFs which uses file-loader
      config.module
        .rule('pdf')
        .test(/\.pdf$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/[name].[hash:8].[ext]'
        });
    },
  };
  