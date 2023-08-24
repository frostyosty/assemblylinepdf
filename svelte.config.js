import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    // Options for the svelte-kit adapter
    adapter: adapter(),
    target: '#svelte',
  },
};
