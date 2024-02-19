const pkg = require("./package.json");
const fs = require("fs/promises");
const path = require("path");

const common = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  external: [...Object.keys(pkg.peerDependencies)],
  // logLevel: 'info',
};

require("esbuild")
  .build({
    ...common,
    minifySyntax: true,
    format: "esm",
    outfile: "lib/esm/index.js",
  })
  .then(() => fs.copyFile("lib/esm/index.css", "lib/index.css").catch(() => {}))
  .catch(() => process.exit(1));

require("esbuild")
  .build({
    ...common,
    format: "cjs",
    outfile: "lib/cjs/index.cjs.js",
  })
  .catch(() => process.exit(1));
