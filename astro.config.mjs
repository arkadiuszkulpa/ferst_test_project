import { defineConfig } from 'astro/config';

// A thin ferst-core client: no bespoke integrations. All components, layouts,
// schemas and the content collections come from the published `ferst-core`
// package; this repo holds only content DATA + brand/config.
export default defineConfig({
  output: 'static',
});
