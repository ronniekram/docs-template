// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
		starlight({
            title: `OffSec Marketing Site`,
            logo: {
                src: `./src/assets/logo.svg`,
            },
            sidebar: [
                {
                    label: `Guides`,
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: `Example Guide`, slug: `guides/example` },
                    ],
                },
                {
                    label: `Reference`,
                    autogenerate: { directory: `reference` },
                },
            ],
		}), 
		tailwind(),
        clerk(),
	],
    adapter: node({ mode: "standalone" }),
    output: "server",
});
