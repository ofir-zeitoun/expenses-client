import lodash from "lodash";

export default function (plop) {
  plop.setHelper("kebab-case", function (text) {
    return lodash.kebabCase(text);
  });

  plop.setGenerator("component", {
    description: "Application component skeleton",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{kebab-case name}}/{{kebab-case name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{kebab-case name}}/{{kebab-case name}}.css",
        templateFile: "plop-templates/Component.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{kebab-case name}}/{{kebab-case name}}.translation.en.ts",
        templateFile: "plop-templates/Component.translation.en.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{kebab-case name}}/index.ts",
        templateFile: "plop-templates/index.ts.hbs",

      },
    ],
  });
}
