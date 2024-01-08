# Triangler UI

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/schlerp/triangler-ui/main.svg)](https://results.pre-commit.ci/latest/github/schlerp/triangler-ui/main)

This is the repo for the Triangler applications UI.
This front end is written in svelte using sveltekit.
Currently this frontend is intended to only run browser side.

## Developing

```bash
# install the deps
pnpm install

# start the dev server
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

> Note: You will need to start the [Triangler API](https://github.com/schlerp/triangler-api) to use this application as this is only the frontend.

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Authors

- PattyC ([schlerp](https://github.com/schlerp))
