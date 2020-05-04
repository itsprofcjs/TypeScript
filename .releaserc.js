module.exports = {
    ci: false,
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'docs/CHANGELOG.md',
            },
        ],
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
                tarballDir: 'dist',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['docs/CHANGELOG.md'],
            },
        ],
    ],
};
