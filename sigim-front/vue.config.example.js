module.exports = {
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    disableHostCheck: true,
    port: 9000,
    public: "192.168.11.7:9000",
    host: '192.168.11.7',//your ip address
  },
  publicPath: "/",
};
