# ERBEK GLOBAL INNOVATION

A Turkish company website built with Astro. The site is configured for `https://erbekglobal.com` on GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

To edit content with Decap CMS locally, start a second terminal and run:

```sh
BIND_HOST=127.0.0.1 npx decap-server
```

Then open `http://localhost:4321/admin/`. The local CMS server writes to this repository. Stop it when finished.

## Edit content

Edit company text and contact details in `src/data/company.json`. Add a project in `/admin/` or create a Markdown file in `src/content/projects/`. Project photos belong in the gallery field and are stored in `public/uploads/`. Add useful alternative text for each image. Do not add photos in the project body. A project with `draft: true` stays out of the public site.

Replace the supplied company text only when the correct details are available. Add project information and photos only after ERBEK GLOBAL INNOVATION provides them.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site when a change reaches `main`. In repository settings, set Pages to **GitHub Actions**. The public site content is Turkish.

The admin page uses Decap CMS 3.16.3 from `public/admin/decap-cms.js`; the MIT license is in `public/admin/decap-cms.MIT.txt`, and bundle notices are in `public/admin/decap-cms.js.LICENSE.txt`.

Decap CMS is configured to use the GitHub OAuth service at `https://auth.erbekglobal.com`. Set the GitHub OAuth app callback URL to `https://auth.erbekglobal.com/callback` and set `CMS_ORIGIN` to `https://erbekglobal.com`. Keep the OAuth client credentials on the LXC host only. Users need GitHub write access to this repository to sign in at `/admin/`. CMS saves update `main` and trigger the site deployment. Login requires the auth service and DNS for `auth.erbekglobal.com` to be configured.

In repository settings, configure `erbekglobal.com` as the GitHub Pages custom domain and add the DNS records required by GitHub Pages.
