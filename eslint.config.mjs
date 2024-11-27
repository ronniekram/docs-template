import importQuotes from "eslint-plugin-import-quotes";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: [
            "**/dist",
            "**/node_modules",
            "**/.github",
            "**/types.generated.d.ts",
            "**/*.d.ts",
        ],
    }, 
    ...compat.extends("plugin:astro/recommended"), 
    {
        plugins: {
            "import-quotes": importQuotes,
            prettier,
        },
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                tsconfigRootDir: "/Users/ronnie/Documents/projects/docs",
            },
        },
    }, 
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: parser,
            ecmaVersion: 5,
            sourceType: "script",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },
        rules: {
            "react/no-unescaped-entities": "off",
            "unicorn/prefer-export-from": "off",
            "unicorn/no-null": "off",
            "unicorn/prefer-optional-catch-binding": "off",
            "unicorn/explicit-length-check": "off",
            "unicorn/no-negated-condition": "off",
            "unicorn/expiring-todo-comments": "off",
            "import-quotes/import-quotes": [1, "double"],
            "import/no-anonymous-default-export": "off",
            "css.lint.unknownAtRules": "off",
        },
    },
];