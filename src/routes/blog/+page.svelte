<script lang="ts">

    import '../../app.postcss';
	import {url} from '$lib/utils/path';
	import {appName, appDescription, themeColor, appleStatusBarStyle} from 'web-config';

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

<section class="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
	<h1 class="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
	  The {appName} Blog
	</h1>
	<p class="text-lg opacity-80 leading-relaxed">
		Updates, stories, and announcements from the {appName} Labs team.
	</p>
</section>