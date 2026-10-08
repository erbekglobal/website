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

Decap CMS local editing works with the local server command above. Production CMS login is not configured. To enable it, provide a trusted GitHub OAuth service, set `backend.base_url` to its HTTPS origin, and set `backend.auth_endpoint` to its authentication path in `public/admin/config.yml`. Configure the OAuth app callback URL to the auth service's callback URL. Do not store OAuth secrets in this repository.

Configure the OAuth service at `auth.erbekglobal.com`. Set its `CMS_ORIGIN` to `https://erbekglobal.com` and restart the service if it is already running.

In repository settings, configure `erbekglobal.com` as the GitHub Pages custom domain and add the DNS records required by GitHub Pages.
