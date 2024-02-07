<script lang="ts">
	let className = 'bg-base-200';
	export {className as class};

    import NavTabs from '$lib/ui/header/NavTabs.svelte';
    import {appName} from 'web-config';
    import {url} from '$lib/utils/path';

    const links : {pathname: string; title: string}[] = [
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

<div class={className}>

    <div class="container flex items-center justify-between px-8 py-4 mx-2"
      aria-label="Global" >
  
      <div class="flex lg:flex-1">
        <!-- add link -->
        <div class="flex items-center gap-2 shrink-0">
          <img
            class="w-8"
            alt={appName}
            placeholder="blur"
            src={url('/icon.svg')}
            width="32"
            height="32"
          />
          <span class="font-extrabold text-lg">{appName}</span>
        </div>
      </div>
  
      <div class="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center" >
        <NavTabs
          pages={links}
          class="link link-hover"
  
          tabClass="tab tab-sm tab-lifted flex-1"
          whenSelected="tab-active font-black !bg-base-100"
        />
      </div>
  
      <!-- CTA  -->
      <div class="hidden lg:flex lg:justify-end lg:flex-1">Connect</div>
  
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
  
        <!-- Mobile menu, show/hide based on menu state. -->
      <div class={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          class={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          <!-- logo/name on small screens -->
          <div class="flex items-center justify-between">
            <!-- add link -->
            <img
              class="w-8"
              alt={appName}
              placeholder="blur"
              src={url('/icon.svg')}
              width="32"
              height="32"
            />
            <span class="font-extrabold text-lg">{appName}</span>
  
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5"
              on:click={() => setIsOpen(false)}
            >
              <span class="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
  
          <!-- links on small screens -->
          <div class="flow-root mt-6">
            <div class="py-4">
              <NavTabs
                pages={links}
                class="flex flex-col gap-y-4 items-start"
        
                tabClass="tab tab-sm tab-lifted flex-1"
                whenSelected="tab-active font-black !bg-base-100"
            />
            </div>
            <div class="divider"></div>
            <!-- todo CTA on small screens -->
          </div>
  
        </div>
      </div>
    </div>
</div>