## Development

### Longevity and Simplicity

This site should follow a barebones development philosophy so it remains
maintainable over many years. Prefer semantic HTML, plain CSS, and standard
browser APIs whenever they are sufficient. Keep JavaScript, dependencies, and
framework-specific abstractions to a minimum, and add a package or tool only
when its benefits clearly outweigh its long-term maintenance and upgrade cost.

Use the existing Astro setup pragmatically, but do not introduce additional
frameworks or unnecessary layers for small features. Favor portable, easily
understood solutions and deliberate upgrades over keeping up with a fast-moving
ecosystem.

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
