// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // если используешь
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        // Твой HtmlWebpackPlugin (если есть)
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // HtmlWebpackPlugin автоматически вставит нужные теги
        }),

        // ✅ Workbox: генерация service worker
        new GenerateSW({
            // Имя service worker'а
            swDest: 'sw.js',

            // Глобальные настройки кэширования
            clientsClaim: true,
            skipWaiting: true,

            // Кэшируем все сборочные ассеты (js, css, изображения и т.д.)
            globPatterns: ['**/*.{js,css,html,png,jpg,svg,json}'],

            // Runtime-кэширование (для динамических запросов)
            runtimeCaching: [
                {
                    // Кэшируем статику (скрипты, стили, шрифты)
                    urlPattern: /\.(?:js|css|woff2)$/i,
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'static-resources',
                        expiration: {
                            maxEntries: 30,
                            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
                        },
                    },
                },
                {
                    // Кэшируем изображения
                    urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 дней
                        },
                    },
                },
                {
                    // Кэшируем Google Fonts (опционально)
                    urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-fonts',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 год
                        },
                    },
                },
            ],
        }),
    ],

    // ... остальное: module, devServer и т.д.
};
