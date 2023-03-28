# webstorm-vue-i18n-bug

## Problem
Using the `$tc` method with more than one parameter on template highlights an **Invalid number of arguments, expected 1** error.

The same problem does not happen on script.

This project already has the minimum code to reproduce the problem, just open it using WebStorm and check the `App.vue` file.

## How to reproduce
1. Create a new project with vite running `npm create vite@latest` selecting vue and typescript
2. Add vue-i18n as dependency running `npm install vue-i18n@9`
3. Configure vue-i18n on `main.ts` as described on [vue-i18n docs](https://vue-i18n.intlify.dev/guide/installation.html)
4. Add a call to `$tc` with more than one parameter on `App.vue` template using the "Mustache" syntax 
