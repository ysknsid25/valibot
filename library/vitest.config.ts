import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    benchmark: {
      enabled: true,
      include: ['**/*.bench.test.ts'],
    },
    environment: 'jsdom',
    isolate: false,
    coverage: {
      include: ['src'],
      exclude: [
        'src/types',
        'src/vitest',
        'src/regex.ts',
        '**/index.ts',
        '**/types.ts',
        '**/*.test.ts',
        '**/*.test-d.ts',
        '**/.DS_Store',
      ],
    },
  },
});
