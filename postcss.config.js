const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);

module.exports = {
  plugins: [
    autoprefixer({
      ignoreUnknownVersions: true,
    }),
    cssnano({
      autoprefixer: false,
      calc: true,
      colormin: true,
      convertValues: true,
      core: true,
      discardComments: { removeAll: true },
      discardDuplicates: true,
      discardEmpty: true,
      discardOverridden: true,
      filterOptimiser: true,
      filterPlugins: true,
      mergeRules: true,
      minifyFontValues: true,
      minifyGradients: true,
      minifyParams: true,
      minifySelectors: true,
      normalizeCharset: true,
      normalizeUrl: true,
      orderedValues: true,
      reduceBackgroundRepeat: true,
      reduceInitial: true,
      reducePositions: true,
      reduceTimingFunctions: true,
      reduceTransforms: true,
      safe: true,
      sourcemap: true,
      svgo: true,
      uniqueSelectors: true,
      zindex: false,
    }),
  ],
};
