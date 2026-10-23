# Global Industries

https://globalindustries.cc · contact@globalindustries.cc

A complete responsive website for industrial construction and services, built with Next.js and TypeScript. All photography and fonts are served locally.

## Run locally

```sh
npm ci
npm run dev
```

## Production

```sh
npm run lint
npm run build
npm start
```

## Pages

Home, capabilities, industries, the group, our approach, operations management, construction management, careers, field notes (three full articles), contact, privacy, and a custom 404. Existing leadership, companies, news, careers, and contact routes are retained.

## Inquiry handling

The previous forms simulated successful delivery. The rebuilt form validates details, offers an editable review, and can copy or download a brief. It does not store personal information or claim to submit it. The email handoff goes to contact@globalindustries.cc and the canonical origin is https://globalindustries.cc (both set in `src/lib/site.ts`; override with `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_SITE_URL`). The user sends through their own email app.

## Content integrity

Removed unverified executives and stock portraits, financial and safety statistics, project awards, office addresses, phone numbers, certification claims, fictional subsidiaries, salary/benefit promises, and invented vacancies. Field notes are original general planning articles, not company project announcements. Service descriptions are based on the source website's scope; they should be confirmed by the business before publication.

## Assets

Fonts: Barlow Condensed and Manrope, distributed under the SIL Open Font License (see public/fonts). Photography: locally cached Unsplash images, used as illustrative industrial photography rather than images of claimed Global Industries projects. Image source records are in public/images/SOURCES.txt.

The site is prepared for local review. Publishing and connecting an inquiry delivery service require the relevant hosting and company account details.
