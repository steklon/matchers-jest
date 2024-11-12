import HtmlWebPackPlugin from 'html-webpack-plugin';

export default {
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', },
            },
            {
                test: /\.html$/,
                use: [ { loader: 'html-loader', }, ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ]
};