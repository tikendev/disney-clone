// @ts-check
import { defineConfig, envField } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    integrations: [icon()],    
    env: {
        schema: {
            MOVIEDB_API_KEY: envField.string({ context: 'server', access: 'secret' })
        }
    }
});