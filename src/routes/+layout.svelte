<script lang="ts">
	import '../app.postcss';
	// import { setContext, getContext } from 'svelte';
	// import {derived, writable } from 'svelte/store';

// 	const linksStore = writable([
//       {pathname: writable('/'), title: writable('Home')},
//       {pathname: writable('/about'), title: writable('About')},
//       {pathname: writable('/pricing'), title: writable('Pricing')},
//       {pathname: writable('/testimonials'), title: writable('Reviews')},
//       {pathname: writable('/faq'), title: writable('FAQ')},
//   ])

	import Header from '$lib/ui/header/Header.svelte';
	import {appName, appDescription, themeColor, appleStatusBarStyle} from 'web-config';
	import {url} from '$lib/utils/path';

	const links = [
      {pathname: '/', title: 'Home'},
	  {pathname: '/features', title: 'Features'},
      {pathname: '/about', title: 'About'},
      {pathname: '/pricing', title: 'Pricing'},
      {pathname: '/testimonials', title: 'Reviews'},
      {pathname: '/faq', title: 'FAQ'},
  ];

</script>

<svelte:head>
	<title>{appName}</title>
	<meta name="title" content={appName} />
	<meta name="description" content={appDescription} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={appName} />
	<meta property="og:description" content={appDescription} />
	<meta property="twitter:title" content={appName} />
	<meta property="twitter:description" content={appDescription} />

	<!-- minimal -->
	<!-- TODO automatise -->
	<link rel="icon" href={url('/pwa/favicon.svg')} type="image/svg+xml" />
	<link rel="icon" href={url('/pwa/favicon.ico')} sizes="any" /><!-- 32×32 -->
	<link rel="apple-touch-icon" href={url('/pwa/apple-touch-icon.png')} /><!-- 180×180 -->
  <link rel="manifest" href={url('/pwa/manifest.webmanifest')} />

	<!-- extra info -->
	<meta name="theme-color" content={themeColor} />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="application-name" content={appName} />

	<!-- apple -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content={appleStatusBarStyle} />
	<meta name="apple-mobile-web-app-title" content={appName} />
</svelte:head>

<Header links={links} class="bg-base-200 "></Header>

<slot />