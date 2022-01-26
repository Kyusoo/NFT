const ghpages = require('gh-pages');

const config = {
    branch: 'pages',
    repo: 'https://github.com/Kyusoo/NFT/'
}

ghpages.publish('dist', config, function (err) {
    console.error(err)
});