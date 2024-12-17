// eslint.config.js
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';
import { fileURLToPath } from 'url';
import path from 'path';

// Resolve __dirname equivalent in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    files: ['src/**/*.ts'], // Specify that these settings apply to TypeScript files
    languageOptions: {
      parser: tsParser, // Specify the parser in languageOptions
      parserOptions: {
        project: path.join(__dirname, './tsconfig.json'),
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Add browser globals needed for the browser environment
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      // Your custom rules go here
    },
  },
  js.configs.recommended,
  prettierConfig,
];
