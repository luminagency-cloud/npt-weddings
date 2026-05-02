# Deploy

## Goal

Deploy a credible MVP to Vercel as soon as the public-facing site is strong enough to show.

This is a launch checklist, not a long-term ops manual.

## Target

- Vercel

## Pre-Deploy Checklist

### Product

- Homepage looks polished on desktop and mobile
- Launch nav contains only real pages
- No obvious placeholder copy on public pages
- No empty categories in public navigation
- At least the MVP minimum number of real businesses is live
- At least 5 strong editorial/planning pages are published

### Technical

- `npm install` completes cleanly
- `npm run build` passes
- environment variables are defined
- public metadata is in place
- sitemap works correctly
- obvious route/data bugs are fixed

### Content

- category intros are unique
- page titles and descriptions are not generic
- AI-assisted content has been reviewed and tightened by hand
- weak pages are removed from nav instead of padded

## Environment Variables

Required for deployment:

- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

Optional for later phases:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `CLOUDFLARE_R2_ACCOUNT_ID`
- `CLOUDFLARE_R2_ACCESS_KEY_ID`
- `CLOUDFLARE_R2_SECRET_ACCESS_KEY`
- `CLOUDFLARE_R2_BUCKET_NAME`

## Vercel Notes

When the app is ready:

1. Create the Vercel project.
2. Connect the Git repo or deploy the current codebase directly.
3. Add the required environment variables.
4. Set `NEXT_PUBLIC_SITE_URL` to the real production domain.
5. Run the first production deploy.
6. Verify public routes, admin login, and metadata output.

## Post-Deploy Checks

- Open the homepage
- Open the directory landing page
- Open at least two category pages
- Open at least one vendor detail page
- Check mobile layout
- Check sitemap output
- Confirm the production domain is used in metadata and sitemap URLs

## Do Not Block Launch On

- vendor claim flow
- Stripe integration
- vendor self-service tooling
- full admin CMS

If the public-facing site is strong, launch first and expand from there.
