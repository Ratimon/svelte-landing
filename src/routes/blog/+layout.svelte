<script lang="ts">
  import "../../app.postcss";
  import type {Link } from '$lib/model/Link';

  import {url} from '$lib/utils/path';
  import {appName, appDescription, themeColor, appleStatusBarStyle} from 'web-config';

  import HeaderBlog from '$lib/ui/blog/HeaderBlog.svelte';

  const headLinks : Link[] = [
    {pathname: '/blog', title: 'All Posts',navType: 'tab'}
  ];

  const dropDownLinks : Link[] = [
    {pathname: '/blog/category/feature', title: 'Feature', navType: 'tab'},
	{pathname: '/blog/category/tutorial', title: 'Tutorial', navType: 'tab'},
  ];

//   const actionLinks : Link[] = [
//     {pathname: '/blog', title: 'Home',navType: 'tab'}
//   ];

</script>

<!-- to do : remove as redundant to layout -->
<!-- SEO -->
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


<HeaderBlog links={headLinks} menuTitle={'blog'} dropDownLinks={dropDownLinks} actionLink={headLinks[0]} class="bg-base-200"></HeaderBlog>

<div class="min-h-screen flex flex-col">
  <slot />
</div>