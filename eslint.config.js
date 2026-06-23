import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin'
import { importX } from 'eslint-plugin-import-x'
import noSecrets from 'eslint-plugin-no-secrets'
import { defineConfig, globalIgnores } from 'eslint/config'
import json from '@eslint/json'
import promise from 'eslint-plugin-promise'
import packageJson from 'eslint-plugin-package-json'
import regexp from 'eslint-plugin-regexp'
import sonarjs from 'eslint-plugin-sonarjs'
import tanstackQuery from '@tanstack/eslint-plugin-query'

//NOTE: side-effect import: patches Linter.verify to upgrade all warnings to errors
import 'eslint-plugin-only-error'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'import-x': importX,
      'no-secrets': noSecrets,
      promise: promise
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      //tanstack query
      tanstackQuery.configs.recommended,

      // vite recommendation for prod apps
      tseslint.configs.recommended,
      tseslint.configs.stylisticTypeChecked,

      // react eslint plugins
      eslintReact.configs['recommended-typescript'],

      // import-x
      'import-x/flat/recommended',
      //promise plugin
      promise.configs['flat/recommended'],
      //regexp
      regexp.configs.recommended,
      //sonarjs
      sonarjs.configs.recommended
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      },
      globals: globals.browser
    },
    rules: {
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      'no-secrets/no-secrets': 'error'
    }
  },
  {
    plugins: {
      json,
      'no-secrets': noSecrets
    }
  },

  // lint JSON files and JSON with comments
  // I want json files to have comments, no matter the file.
  {
    files: ['**/*.json', '**/*.jsonc', '.vscode/*.json'],
    language: 'json/jsonc',
    rules: {
      'json/no-duplicate-keys': 'error'
    }
  },
  // lint JSON5 files
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    rules: {
      'json/no-duplicate-keys': 'error'
    }
  },
  {
    extends: [packageJson.configs.recommended],
    files: ['package.json'],
    rules: {
      'package-json/require-author': 'error'
    }
  }
])
