module.exports = {
  extends: ['nhuesmann-ts-react', 'plugin:@next/next/recommended'],
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'warn',
      },
    },
  ],
};
