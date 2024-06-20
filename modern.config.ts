import { moduleTools, defineConfig } from '@modern-js/module-tools';
import { modulePluginDoc } from '@modern-js/plugin-rspress';

export default defineConfig({
  plugins: [moduleTools(), modulePluginDoc()],
  buildPreset: 'npm-library',
});
