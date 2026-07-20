import { copyFileSync, cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";

mkdirSync("dist", { recursive: true });
mkdirSync("dist/server", { recursive: true });

writeFileSync(
  "dist/server/index.js",
  `export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
`,
);

if (existsSync("distribution")) {
  cpSync("distribution", "dist/distribution", { recursive: true });
}

if (existsSync("CNAME")) {
  copyFileSync("CNAME", "dist/CNAME");
}

writeFileSync("dist/.nojekyll", "");
