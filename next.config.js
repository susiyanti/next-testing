const isGHPages = process.env.DEPLOY_ENV === 'GH_PAGES'

module.exports = {
    basePath: isGHPages ? '/next-testing' : '',
    trailingSlash: true,
}