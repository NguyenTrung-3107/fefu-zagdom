const mix = require('laravel-mix');
const { resolve } = require('path');

mix
    .setPublicPath('public')
    .js('resources/scripts/main.js', 'build/bundle.js')
    .sass('resources/styles/main.scss', 'build/bundle.css', {}, [
      require('postcss-axis')
    ])
    .browserSync({
        watch: true,
        proxy: 'localhost',
        files: [
            'resources/components/footer/**/*',
            'resources/components/header/**/*',
            'resources/components/**/*',
            'resources/lang/**/*',
            'resources/layouts/**/*',
            'resources/**/*.twig',
            'resources/components/**/*.twig',
            'resources/vies/**/*.twig',
            'public/**/*',
            'resources/views/**/*',
            'resources/scripts/**/*',
            'resources/styles/**/*',
            'resources/routes/**/*',
            'resources/**/*',
        ],
    });

mix.alias({'uikit-util': resolve(__dirname, 'node_modules/uikit/src/js/util')});
