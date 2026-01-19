import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: '📖 Overview',
    },
    {
      type: 'doc',
      id: 'configuration',
      label: '⚙️ Configuration',
    },
    {
      type: 'doc',
      id: 'syntax',
      label: '⌨️ General Syntax',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: '🔄 Changelog',
    },
    {
      type: 'category',
      label: '🤝 Compatibility',
      collapsed: true,
      link: {
        type: 'doc',
        id: "compatibility",
      },
      items: [
        {
          type: 'doc',
          id: "compatibility/cosmetics-core",
          label: '💄 CosmeticsCore',
        },
        {
          type: 'doc',
          id: "compatibility/craft-engine",
          label: '📦 CraftEngine',
        },
        {
          type: 'doc',
          id: "compatibility/custom-crops",
          label: '🍅 CustomCrops',
        },
        {
          type: 'doc',
          id: "compatibility/custom-fishing",
          label: '🎣 CustomFishing',
        },
        {
          type: 'doc',
          id: "compatibility/custom-nameplates",
          label: '🍀 CustomNameplates',
        },
        {
          type: 'doc',
          id: "compatibility/hmc-cosmetics",
          label: '🧢 HMCCosmetics',
        },
        {
          type: 'doc',
          id: "compatibility/items-adder",
          label: '💎 ItemsAdder',
        },
        {
          type: 'doc',
          id: "compatibility/nexo",
          label: '☄️ Nexo',
        },
        {
          type: 'doc',
          id: "compatibility/typewriter",
          label: '⌨️ Typewriter',
        },
      ]
    },

  ]
};

export default sidebars;
