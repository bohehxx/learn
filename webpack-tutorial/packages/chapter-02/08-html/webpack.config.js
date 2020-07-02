const {getEntry, getHtmlWebpackPlugins} = require('./webpack.glob.js');
const a = getEntry()
console.log(a,'aaaa')
console.log(...getHtmlWebpackPlugins(),'bbbb')
module.exports = {
    mode: 'development',
    entry:a,
    plugins: [
        //...
        ...getHtmlWebpackPlugins()
    ]
};
