module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/changelog",
    "@semantic-release/github",
    // "@semantic-release/release-notes-generator",
    // [
    //   "@semantic-release/changelog",
    //   {
    //     changelogFile: "CHANGELOG.md",
    //   },
    // ],
    // "@semantic-release/npm",
    // [
    //   "@semantic-release/git",
    //   {
    //     assets: ["package.json", "CHANGELOG.md", "dist/**"],
    //     message:
    //       "chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    //   },
    // ],
    // "@semantic-release/github",
  ],
};
