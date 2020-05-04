module.exports = {
    ci: false,
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            },
        ],
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
                tarballDir: 'dist',
            },
        ],
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md'],
            },
        ],
    ],
};
