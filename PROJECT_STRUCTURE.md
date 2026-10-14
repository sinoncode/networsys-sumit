# Networsys Project Structure

This document describes the complete project layout at the repository root. It includes every project-owned file currently present outside installed dependencies and framework build output.

## Project Overview

Networsys is an npm-workspaces monorepo with two applications:

- `apps/web`: Next.js 16 website using React 18, the App Router, Tailwind CSS, and reusable UI components.
- `apps/pocketbase`: PocketBase backend with JavaScript hooks, migrations, local data stores, and the PocketBase executable.

The frontend uses route files in `apps/web/app` and reusable page implementations in `apps/web/src/views`. PocketBase supplies the backend service on port `8090`; the web app runs on port `3000`.

## Root Files

| File | Purpose |
| --- | --- |
| `.env` | Local environment variables. Contains sensitive PocketBase credentials; do not commit or publish its values. |
| `.nvmrc` | Node.js version selector. |
| `.version` | Project/version marker. |
| `knip.json` | Knip configuration for workspace entry points and unused-file analysis. |
| `package.json` | Root workspace manifest, shared scripts, and development dependencies. |
| `package-lock.json` | Locked npm dependency graph for the workspace. |
| `PROJECT_STRUCTURE.md` | This project structure and file reference. |

## Workspace Commands

Run these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `npm run setup` | Install workspace dependencies. |
| `npm run dev` | Start the web and PocketBase development processes together. |
| `npm run build` | Build the web application. |
| `npm run start` | Start the PocketBase production-style process. |
| `npm run lint` | Run the web lint command. |

Application-level commands are defined in each app's `package.json`.

## Complete File Tree

The following tree lists every project-owned file currently present. Database journals and runtime files are listed as files because they are part of the local PocketBase state.

```text
.
|-- .env
|-- .nvmrc
|-- .version
|-- knip.json
|-- package-lock.json
|-- package.json
|-- PROJECT_STRUCTURE.md
|-- vault
|   `-- temp
|       `-- SESSION_JOURNAL.md
|-- apps
|   |-- pocketbase
|   |   |-- .pocketbase-version
|   |   |-- database-types.d.ts
|   |   |-- package.json
|   |   |-- pocketbase
|   |   |-- pb_data
|   |   |   |-- .notify
|   |   |   |-- auxiliary.db
|   |   |   |-- auxiliary.db-shm
|   |   |   |-- auxiliary.db-wal
|   |   |   |-- data.db
|   |   |   |-- data.db-shm
|   |   |   |-- data.db-wal
|   |   |   |-- types.d.ts
|   |   |-- pb_data_backup
|   |   |   |-- .notify
|   |   |   |-- auxiliary.db
|   |   |   |-- auxiliary.db-shm
|   |   |   |-- auxiliary.db-wal
|   |   |   |-- data.db
|   |   |   |-- data.db-shm
|   |   |   |-- data.db-wal
|   |   |   |-- types.d.ts
|   |   |-- pb_data_before_restore
|   |   |   |-- .notify
|   |   |   |-- auxiliary.db
|   |   |   |-- auxiliary.db-shm
|   |   |   |-- auxiliary.db-wal
|   |   |   |-- data.db
|   |   |   |-- data.db-shm
|   |   |   |-- data.db-wal
|   |   |   |-- types.d.ts
|   |   |-- pb_hooks
|   |   |   |-- builder-mailer.pb.js
|   |   |   |-- custom-migrations-cmd.pb.js
|   |   |   |-- external-dashboard.pb.js
|   |   |   |-- logs-forwarder.pb.js
|   |   |-- pb_migrations
|   |   |   |-- 1759383931_initial_app_settings.js
|   |   |   |-- 1764579159_create_superuser.js
|   |   |   |-- 1769159103_disable_auth_alert_superusers.js
|   |   |   |-- 1769164585_set_rate_limits.js
|   |   |   |-- 1775709407_disable_auth_alert_users.js
|   |   |   |-- 1789136727_collections_snapshot.js
|   |-- web
|       |-- app
|       |   |-- layout.jsx
|       |   |-- not-found.jsx
|       |   |-- page.jsx
|       |   |-- about
|       |   |   |-- page.jsx
|       |   |-- accelerators
|       |   |   |-- page.jsx
|       |   |-- aegis360
|       |   |   |-- page.jsx
|       |   |-- appmind
|       |   |   |-- page.jsx
|       |   |-- careers
|       |   |   |-- page.jsx
|       |   |-- contact
|       |   |   |-- page.jsx
|       |   |-- industries
|       |   |   |-- banking
|       |   |   |   |-- page.jsx
|       |   |   |-- fintech
|       |   |   |   |-- page.jsx
|       |   |   |-- healthcare
|       |   |   |   |-- page.jsx
|       |   |-- insights
|       |   |   |-- page.jsx
|       |   |   |-- [slug]
|       |   |   |   |-- page.jsx
|       |   |-- neuralcore
|       |   |   |-- page.jsx
|       |   |-- portfolio
|       |   |   |-- page.jsx
|       |   |-- security-advisories
|       |   |   |-- page.jsx
|       |   |-- success-stories
|       |   |   |-- page.jsx
|       |   |   |-- [slug]
|       |   |   |   |-- page.jsx
|       |   |-- webinars
|       |   |   |-- page.jsx
|       |   |-- white-papers
|       |   |   |-- page.jsx
|       |   |-- [solutionSlug]
|       |       |-- [slug]
|       |           |-- page.jsx
|       |-- components.json
|       |-- eslint.config.mjs
|       |-- eslint.unicode-escapes-formatter.mjs
|       |-- eslint.unicode-escapes-plugin.mjs
|       |-- jsconfig.json
|       |-- next.config.mjs
|       |-- package.json
|       |-- postcss.config.js
|       |-- rename-pages.js
|       |-- src
|       |   |-- components
|       |   |   |-- CookieConsent.jsx
|       |   |   |-- CountUp.jsx
|       |   |   |-- EnquiryForm.jsx
|       |   |   |-- FloatingChat.jsx
|       |   |   |-- Footer.jsx
|       |   |   |-- GpuChip.jsx
|       |   |   |-- IconTile.jsx
|       |   |   |-- Navbar.jsx
|       |   |   |-- NeuralMesh.jsx
|       |   |   |-- NeuralSphere.jsx
|       |   |   |-- PhoneDashboard.jsx
|       |   |   |-- ProtectedRoute.jsx
|       |   |   |-- Providers.jsx
|       |   |   |-- Reveal.jsx
|       |   |   |-- Schema.jsx
|       |   |   |-- ScrollToTop.jsx
|       |   |   |-- SectionHeading.jsx
|       |   |   |-- Seo.jsx
|       |   |   |-- ShieldMesh.jsx
|       |   |   |-- TrustedStrip.jsx
|       |   |   |-- TypedHeadline.jsx
|       |   |   `-- ui
|       |   |       |-- accordion.jsx
|       |   |       |-- alert-dialog.jsx
|       |   |       |-- alert.jsx
|       |   |       |-- aspect-ratio.jsx
|       |   |       |-- avatar.jsx
|       |   |       |-- badge.jsx
|       |   |       |-- breadcrumb.jsx
|       |   |       |-- button-group.jsx
|       |   |       |-- button.jsx
|       |   |       |-- calendar.jsx
|       |   |       |-- card.jsx
|       |   |       |-- carousel.jsx
|       |   |       |-- chart.jsx
|       |   |       |-- checkbox.jsx
|       |   |       |-- collapsible.jsx
|       |   |       |-- command.jsx
|       |   |       |-- context-menu.jsx
|       |   |       |-- dialog.jsx
|       |   |       |-- drawer.jsx
|       |   |       |-- dropdown-menu.jsx
|       |   |       |-- empty.jsx
|       |   |       |-- field.jsx
|       |   |       |-- form.jsx
|       |   |       |-- hover-card.jsx
|       |   |       |-- input-group.jsx
|       |   |       |-- input.jsx
|       |   |       |-- input-otp.jsx
|       |   |       |-- item.jsx
|       |   |       |-- kbd.jsx
|       |   |       |-- label.jsx
|       |   |       |-- menubar.jsx
|       |   |       |-- navigation-menu.jsx
|       |   |       |-- pagination.jsx
|       |   |       |-- popover.jsx
|       |   |       |-- progress.jsx
|       |   |       |-- radio-group.jsx
|       |   |       |-- resizable.jsx
|       |   |       |-- scroll-area.jsx
|       |   |       |-- select.jsx
|       |   |       |-- separator.jsx
|       |   |       |-- sheet.jsx
|       |   |       |-- sidebar.jsx
|       |   |       |-- skeleton.jsx
|       |   |       |-- slider.jsx
|       |   |       |-- sonner.jsx
|       |   |       |-- spinner.jsx
|       |   |       |-- switch.jsx
|       |   |       |-- table.jsx
|       |   |       |-- tabs.jsx
|       |   |       |-- textarea.jsx
|       |   |       |-- toaster.jsx
|       |   |       |-- toast.jsx
|       |   |       |-- toggle-group.jsx
|       |   |       |-- toggle.jsx
|       |   |       `-- tooltip.jsx
|       |   |-- contexts
|       |   |   `-- AuthContext.jsx
|       |   |-- data
|       |   |   |-- placeholders.js
|       |   |   |-- resources.js
|       |   |   |-- serviceDetails.js
|       |   |   |-- site.js
|       |   |   `-- solutions.js
|       |   |-- hooks
|       |   |   |-- use-mobile.jsx
|       |   |   `-- use-toast.js
|       |   |-- index.css
|       |   |-- lib
|       |   |   |-- format.js
|       |   |   |-- pocketbaseClient.js
|       |   |   `-- utils.js
|       |   `-- views
|       |       |-- AboutPage.jsx
|       |       |-- AcceleratorsPage.jsx
|       |       |-- Aegis360Page.jsx
|       |       |-- AppMindPage.jsx
|       |       |-- BankingPage.jsx
|       |       |-- BlogPostPage.jsx
|       |       |-- CareersPage.jsx
|       |       |-- CaseStudyPage.jsx
|       |       |-- ContactPage.jsx
|       |       |-- FintechPage.jsx
|       |       |-- HealthcarePage.jsx
|       |       |-- HomePage.jsx
|       |       |-- InsightsPage.jsx
|       |       |-- NeuralCorePage.jsx
|       |       |-- NotFoundPage.jsx
|       |       |-- PlaceholderPage.jsx
|       |       |-- PortfolioPage.jsx
|       |       |-- SecurityAdvisoriesPage.jsx
|       |       |-- ServiceDetailPage.jsx
|       |       |-- SuccessStoriesPage.jsx
|       |       |-- WebinarsPage.jsx
|       |       `-- WhitePapersPage.jsx
|       |-- tailwind.config.js
```

## Directory Responsibilities

### `apps/web/app`

Next.js App Router entry points. Each `page.jsx` maps a URL segment to the corresponding page implementation. Bracketed directories are dynamic route parameters:

- `[slug]`: dynamic insight or success-story record.
- `[solutionSlug]/[slug]`: dynamic solution/service detail route.
- `layout.jsx`: shared application layout.
- `not-found.jsx`: route-level not-found experience.

### `apps/web/src/components`

Shared presentation and interaction components such as navigation, forms, SEO, animated visuals, protection wrappers, and layout helpers. The `ui` directory contains reusable primitive controls used throughout the frontend.

### `apps/web/src/views`

Page-level view components. These separate page content and composition from the thin App Router route files.

### `apps/web/src/data`

Content and configuration data for site pages, solutions, resources, services, and placeholders.

### `apps/web/src/hooks`, `contexts`, and `lib`

- `hooks`: reusable React hooks for responsive behavior and toast state.
- `contexts`: shared authentication state.
- `lib`: formatting, utility, and PocketBase client helpers.

### `apps/pocketbase/pb_hooks`

PocketBase event and server hooks. These handle mail delivery, custom migration commands, external dashboard behavior, and log forwarding.

### `apps/pocketbase/pb_migrations`

Ordered PocketBase schema/data migrations. Numeric prefixes determine migration order.

### `apps/pocketbase/pb_data*`

Local PocketBase runtime state and snapshots:

- `pb_data`: active local database.
- `pb_data_backup`: backup database state.
- `pb_data_before_restore`: pre-restore database state.
- `*.db`: SQLite database files.
- `*.db-shm` and `*.db-wal`: SQLite shared-memory and write-ahead-log files.
- `.notify`: PocketBase filesystem notification state.
- `types.d.ts`: generated database type declarations.

These directories contain mutable runtime data. They should be backed up carefully and should not be treated like source code.

## Configuration and Runtime Notes

- Root workspaces are declared in `package.json` as `apps/*`.
- The web app uses `next.config.mjs` with standalone output enabled.
- The web app is served at `http://localhost:3000` by its npm scripts.
- PocketBase is served at `http://localhost:8090` by its npm scripts.
- PocketBase scripts read `PB_ENCRYPTION_KEY` from the environment.
- `.env` currently contains local credentials and must remain private.

## Generated and Installed Directories

The filesystem also contains directories that are not listed file-by-file above because they are generated or installed artifacts:

- `node_modules/` and `apps/web/node_modules/`: npm-installed dependencies.
- `apps/web/.next/`: Next.js build, cache, and route output.

These directories can contain many thousands of files and should be regenerated from the manifests and lockfile rather than documented or edited manually.

## Maintenance Rule

Update this document when adding or removing a project-owned file, especially a route, migration, hook, configuration file, or shared component. Keep secrets, database credentials, and mutable local runtime state out of documentation.