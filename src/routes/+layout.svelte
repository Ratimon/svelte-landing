<script lang="ts">
	import '../app.postcss';
  import NavTabs from '$lib/ui/header/NavTabs.svelte';
  import Header from '$lib/ui/header/Header.svelte';

  import {name, description, themeColor, appleStatusBarStyle} from 'web-config';
  import {url} from '$lib/utils/path';

  const links = [
      {pathname: '/', title: 'Home'},
      {pathname: '/about', title: 'About'},
      {pathname: '/pricing', title: 'Pricing'},
      {pathname: '/testimonials', title: 'Reviews'},
      {pathname: '/faq', title: 'FAQ'},
  ];

  let isOpen: boolean = false;

  const setIsOpen = (open : boolean) => {
    isOpen = open;
  }

</script>

<svelte:head>
	<title>{name}</title>
	<meta name="title" content={name} />
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={name} />
	<meta property="og:description" content={description} />
	<meta property="twitter:title" content={name} />
	<meta property="twitter:description" content={description} />

	<!-- minimal -->
	<!-- TODO automatise -->
	<link rel="icon" href={url('/pwa/favicon.svg')} type="image/svg+xml" />
	<link rel="icon" href={url('/pwa/favicon.ico')} sizes="any" /><!-- 32×32 -->
	<link rel="apple-touch-icon" href={url('/pwa/apple-touch-icon.png')} /><!-- 180×180 -->
  <link rel="manifest" href={url('/pwa/manifest.webmanifest')} />

	<!-- extra info -->
	<meta name="theme-color" content={themeColor} />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="application-name" content={name} />

	<!-- apple -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content={appleStatusBarStyle} />
	<meta name="apple-mobile-web-app-title" content={name} />
</svelte:head>

<Header class="bg-base-200 "></Header>

<slot />