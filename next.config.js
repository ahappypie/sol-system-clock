const repo_url = 'sol-system-clock'

if(!process.env.DEV) {
    module.exports = {
        basePath: `/${repo_url}`,
        assetPrefix: `/${repo_url}/`
    }
}