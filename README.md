# Erbek Global

A Turkish company website built with Astro. The site uses the GitHub Pages address `https://sodasyrup.github.io/erbek-global/` and the `/erbek-global/` base path.

## Run locally

```sh
npm install
npm run dev
```

To edit content with Decap CMS locally, start a second terminal and run:

```sh
BIND_HOST=127.0.0.1 npx decap-server
```

Then open `http://localhost:4321/erbek-global/admin/`. The local CMS server writes to this repository. Stop it when finished.

## Edit content

Edit company text and contact details in `src/data/company.json`. Add a project in `/admin/` or create a Markdown file in `src/content/projects/`. Project photos belong in the gallery field and are stored in `public/uploads/`. Add useful alternative text for each image. Do not add photos in the project body. A project with `draft: true` stays out of the public site.

Replace the supplied company text only when the correct details are available. Add project information and photos only after Erbek Global provides them.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site when a change reaches `main`. In repository settings, set Pages to **GitHub Actions**. The public site content is Turkish.

Decap CMS local editing works with the local server command above. Production CMS login is not configured. To enable it, provide a trusted GitHub OAuth service, set `backend.base_url` to its HTTPS origin, and set `backend.auth_endpoint` to its authentication path in `public/admin/config.yml`. Configure the OAuth app callback URL to the auth service's callback URL. Do not store OAuth secrets in this repository.

## Optional custom domain

When `erbekglobal.com` is connected to GitHub Pages, configure the domain in repository Pages settings, add the required DNS records, and add `public/CNAME` with `erbekglobal.com`. Then change `site` in `astro.config.mjs` to `https://erbekglobal.com`, remove the `base: '/erbek-global'` setting, and update Decap's `public_folder` in `public/admin/config.yml` to `/uploads`.
