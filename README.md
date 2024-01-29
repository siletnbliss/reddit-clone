# Reddit Clone

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

As you may know, Next.js uses Server Side Rendering to make applications more lightweight on the client; as well as providing other useful features such as Node.js runtimes, Dynamic Routing and Image and Font Optimization.

I used the current latest Next.js version at `14.1.0`.

## About

This is a simple responsive [Reddit](https://www.reddit.com/) Clone that renders the 5 latest posts of the different listing types (hot, new, rising, etc.). This app was localized in both English and Spanish and is available in light and dark themes.

The main libraries used were:

- Mantine: for UI components, hooks and theming.
- React Query: to handle data fetching and state management of fetch results.
- axios: as the underlying fetcher.
- i18next: for localization.
- tabler icons: icon library.

## Run locally

If you wish to run this project on your computer:

1. Clone this project
2. Install dependencies
3. Create an `.env.local` file based on the `.env.example` template
4. Run with `npm run dev`

## Project Structure

This app was structured based on [React's App Router paradigm](https://nextjs.org/docs/app). Naturally, most files will be located inside the `app` folder. `page`and `layout` files are the root access where content will be rendered from.

### components folder

Here are all the reusable components inside their respective folders. Each folder contains the React Functional Component as well as necessary css modules and providers.

### hooks folder

This folder is for hooks (reusable logic functions for React Components) that will be used accross different sections in the project. Like the `useFetchPosts` hook containing the fetch logic for Reddit posts.

### ts folder

This folder contains interfaces and type definitions for general use. For example, the responses from Reddit's API are described in this folder.

### utils folder

Reusable helper functions and constants.

## Issues Encountered and Observations

There were a few issues encountered when trying to use the requested libraries. These issues mainly were caused because some libraries weren't up to date with React's newer features (React Server Components and App Router).

### i18n

Traditional i18n with Next.js doesn't quite work with App router. To fix this, I disabled localeDetaction in `next.config` and added a middleware to map a url slug (/es, /en) to each language. I also setup the necessary configs, and custom client-side and server-side hooks for i18n inside `/app/i18n` following the [official tutorial](https://locize.com/blog/next-app-dir-i18n/).

### Bootstrap

React Bootstrap is not up to date with RSCs, so they can't be used normally without causing issues. I tried exporting every component from a custom module, wrapping them with the "use client" directive to try to set them as Client Components. Unfortunately, this didn't work, so I chose to use [Mantine](https://mantine.dev/) instead.

Mantine is up to date with all modern React functionalities and it's an awesome library with tons of useful features, quite frankly.

### Reddit API

Using Reddit to fetch JSON responses is easily achievable from urls such as `http://www.reddit.com/best.json`, the only limitation is the request limit of 100 requests per minute. This shouldn't be an issue for a small project like this.

### Redux

Although Redux was suggested as one of the potential libraries, I chose not to use it, since the scope of this project didn't require a library for global state management.

According to React's best practices (as well as the [official Redux docs](https://redux.js.org/introduction/getting-started#should-you-use-redux)), it's best to avoid introducing global state management complexity if it's not needed, and to use local state management and context providers if possible. Moreover, React Query also provides shared state for fetched data, making Redux redundant in this case.
