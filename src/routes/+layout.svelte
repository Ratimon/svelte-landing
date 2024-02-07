<script lang="ts">
	import '../app.postcss';
    import NavTabs from '$lib/components/daisyui/NavTabs.svelte';
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

<div class="bg-base-200 ">

  <div class="flex lg:flex-1">

    <div class="container flex items-center justify-between px-8 py-4 mx-auto"
    aria-label="Global" >
      <div class="flex items-center gap-2 shrink-0">
        <img
          class="w-8"
          alt={name}
          placeholder="blur"
          src={url('/icon.svg')}
          width="32"
          height="32"
        />
        <span class="font-extrabold text-lg">{name}</span>
      </div>

      <NavTabs
        pages={links}
        class="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center"

        tabClass="tab tab-sm tab-lifted flex-1"
        whenSelected="tab-active font-black !bg-base-100"
      />

      <!-- Burger button to open menu on mobile  -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          on:click={() => setIsOpen(true)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 text-base-content"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>


      <!-- CTA  -->

      <!-- Mobile menu, show/hide based on menu state. -->

      

    </div>

  </div>
  

  
</div>
  
<slot />