# Reddit Clone

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

As you may know, Next.js uses Server Side Rendering to make applications more lightweight on the client; as well as providing other useful features such as Node.js runtimes, Dynamic Routing and Image and Font Optimization.

I used the current latest Next.js version at `14.1.0`.

## Issues encountered

There were a few issues encountered when trying to use the requested libraries. These issues mainly were caused because some libraries weren't up to date with React's newer features (React Server Components and App Router).

### i18n

Traditional i18n with Next.js doesn't quite work with App router. To fix this, I disabled localeDetaction in `next.config` and added a middleware to map a url slug (/es, /en) to each language. I also setup the necessary configs, and custom client-side and server-side hooks for i18n inside `/app/i18n` following the [official tutorial](https://locize.com/blog/next-app-dir-i18n/).

### Bootstrap

React Bootstrap is not up to date with RSCs, so they can't be used normally without causing issues. I tried exporting every component from a custom module, wrapping them with the "use client" directive to try to set them as Client Components. Unfortunately, this didn't work, so I chose to use [Mantine](https://mantine.dev/) instead.

Mantine is up to date with all modern React functionalities and it's an awesome library with tons of useful features quite frankly.

### Reddit API

Using Reddit to fetch JSON responses is easily achievable at `http://www.reddit.com/best.json`, the only limitation is the request limit of 100 requests per minute. This shouldn't be an issue for a small project like this.
