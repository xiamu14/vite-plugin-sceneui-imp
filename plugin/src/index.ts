import { Plugin } from "vite";

export default function vitePluginSceneuiImp(): Plugin {
  return {
    name: "vite-plugin-sceneui-imp",
    transform(code, id) {
      if (!/(node_modules)/.test(id) && /@sceneui\/[a-z]{1,}/.test(code)) {
        const matcherArray = code.match(/@sceneui\/[a-z]{1,}/);
        const componentName = (matcherArray && matcherArray[0]) as string;
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
