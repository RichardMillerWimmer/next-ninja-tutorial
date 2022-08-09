---
theme: white
---

# Next

---

## What is Next?

It is a framework built on React designed to build fast web application. Unlike React, Next has more features built in. Some of these include: file based routing, image optimization, api routes, built in components, SEO, and data fetching.

<!-- .element: class="fragment" -->

Today we are going to look specifically at Next's data fetching.

<!-- .element: class="fragment" -->

---

## An Introduction to Data Fetching in Next

<div class='align-left'>
getServerSideProps()

<!-- .element: class="fragment" -->

getStaticProps()

<!-- .element: class="fragment" -->

getStaticPaths()

<!-- .element: class="fragment" -->

Client Side

<!-- .element: class="fragment" -->
</div>

---

## getServerSideProps()

This does what the same sounds like. It will fetch data on the server and it does so at request time and is rendered on the server. If you export a function called getServerSideProps (Server-Side Rendering) from a page Next.js will render this page on each request using the data returned by getServerSideProps.

This only runs on the server and will never run in the browser.

---

### How to use getServerSideProps()

This can only be used at page level components. You will need to use ‘export async function getServerSideProps(context)’ and it needs to return an object. The returned object can be props, notFound, or redirect. The return is JSON and can be used to render the page.

---

# NEED IMAGE Example Here

---

## getStaticProps()

This is what we call static site generation, SSG. This will result in a pre-rendered page using the returned props at build time.

Since this is statically generated at build time you will need all data available at built time for your page to be correctly rendered. There are options to include with this so that it runs in the background.

---

### How to use getStaticProps()

This is set up much like the previous method we discussed. You will need to ‘export async function getStaticProps()’ and it needs to return an object (props, notFound, redirect, or revalidate). Adding the revalidate to the return with props will 'turn on' Incremental Static Regeneration.

---

# NEED IMAGE Example Here

---

## getStaticPaths()

This is a part of Static Site Generation, SSG (all data needs to be available at build time). We use this when you need to define a list of routes for a page. The paths generated will be base on the page component and your file structure.

---

### How to use getStaticPaths()

It must be used with getStaticProps(). Again, it needs to be written with export async function getStaticPaths(). This needs to return an object that includes paths.

---

# NEED IMAGE Example Here

---

## Client Side

This can be done much the same as you would in React. The useEffect hook is a great example.

---

## TypeScript

Next has nice built in TypeScript with clearly named types.

---

## Let's look at a sample project!
