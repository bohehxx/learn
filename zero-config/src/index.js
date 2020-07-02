module.exports = 'hello';
if (module.hot) {
    // 通知 webpack 该模块接受 hmr
    module.hot.accept(err => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }
    });
}