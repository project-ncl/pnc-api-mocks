module.exports = [
  {
    id: 100,
    artifactsSource: {
      thisMilestone: 15,
    },
    deliveredArtifactsSource: {
      thisMilestone: 6,
      previousMilestones: 5,
      otherProducts: 13,
      noMilestone: 2,
      noBuild: 0,
    },
    artifactQuality: {
      NEW: 10,
      IMPORTED: 10,
      VERIFIED: 2,
      DEPRECATED: 3,
    },
    repositoryType: {
      MAVEN: 15,
      NPM: 4,
      GENERIC_PROXY: 4,
      COCOA_POD: 1,
      DISTRIBUTION_ARCHIVE: 1,
    },
  },
];
