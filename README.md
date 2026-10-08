# ERBEK GLOBAL INNOVATION

A Turkish company website built with Astro. The site is configured for `https://erbekglobal.com` on GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

## Edit content

First commit and push the repository-root `.pages.yml` file so Pages CMS can read the configuration. Then open [Pages CMS](https://app.pagescms.org/) and sign in with your GitHub account. Install the Pages CMS GitHub App for **erbekglobal/website** only, then select the `main` branch. Invite your father by email from the Pages CMS repository’s **Collaborators** settings. Edit company text in **Şirket bilgileri**. Edit page headings and copy in **Sayfalar**; About page content is under **Hakkımızda**. Keep optional company values empty when no value is available. Add projects in **Projeler**. Project photos belong in the gallery and are stored in `public/uploads/`. Add useful alternative text for each image. Do not add photos in the project body. A project with `draft: true` stays out of the public site.

Replace the supplied company text only when the correct details are available. Add project information and photos only after ERBEK GLOBAL INNOVATION provides them.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site when a change reaches `main`. In repository settings, set Pages to **GitHub Actions**. The public site content is Turkish.

The CMS setup is in the repository-root `.pages.yml` file. After the Pages CMS GitHub App is connected, saves update `main` and trigger the existing site deployment. After a successful switch, the former `erbek-cms-auth` LXC service is no longer needed.

In repository settings, configure `erbekglobal.com` as the GitHub Pages custom domain and add the DNS records required by GitHub Pages.
