import { useEffect } from 'react'
import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

/**
 * The token layer resolves differently per platform and theme:
 *   src/tokens/numeric.css   :root[data-platform="mobile"]  — denser spacing/sizing
 *   src/tokens/semantic.css  :root[data-theme="dark"]       — the dark palette
 *
 * Nothing stamps those attributes on its own, so without the decorator below
 * every story renders in Web + light and both modes are undocumentable.
 */

/**
 * In "auto", the platform follows the component's Figma prefix, so an `m`
 * component documents itself with the Mobile token values it was designed
 * against without every story file having to opt in. `g` components are
 * cross-platform and stay on the Web canonical values unless overridden.
 */
function resolvePlatform(platform: string, title: string | undefined) {
  if (platform !== 'auto') return platform;
  const name = title?.split('/').pop() ?? '';
  return name.startsWith('m') ? 'mobile' : 'web';
}

const preview: Preview = {
  globalTypes: {
    platform: {
      description: 'Which platform mode the numeric tokens resolve to',
      toolbar: {
        title: 'Platform',
        icon: 'mobile',
        items: [
          { value: 'auto', title: 'Auto (by g/m/w prefix)' },
          { value: 'web', title: 'Web' },
          { value: 'mobile', title: 'Mobile' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Which theme the semantic color tokens resolve to',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: { platform: 'auto', theme: 'light' },

  decorators: [
    (Story, context) => {
      const platform = resolvePlatform(context.globals.platform, context.title)
      const theme = context.globals.theme

      useEffect(() => {
        const root = document.documentElement
        // Web is the canonical `:root` values, so it is the absence of the attribute.
        if (platform === 'mobile') root.setAttribute('data-platform', 'mobile')
        else root.removeAttribute('data-platform')
        root.setAttribute('data-theme', theme)
      }, [platform, theme])

      return <Story />
    },
  ],

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
