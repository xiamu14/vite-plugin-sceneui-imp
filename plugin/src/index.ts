import { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";
export default function vitePluginSceneuiImp(): Plugin {
  return {
    name: "vite-plugin-sceneui-imp",
    transform(code, id) {
      if (!/(node_modules)/.test(id) && /@sceneui\/[a-z]{1,}/.test(code)) {
        const matcherArray = code.match(/@sceneui\/[a-z]{1,}/);
        const componentName = (matcherArray && matcherArray[0]) as string;
        const stylePath = `${componentName}/dist/style.css`;
        const fullStylePath = path.resolve(
          process.cwd(),
          "node_modules",
          stylePath
        );
        const stat = fs.statSync(fullStylePath);

        if (!stat.isFile) return { code, map: null };
        return {
          code: `import '${componentName}/dist/style.css';${code}`,
          map: null,
        };
      }
      return {
        code,
        map: null,
      };
    },
  };
}
