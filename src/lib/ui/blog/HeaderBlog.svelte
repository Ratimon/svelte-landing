<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Popover, PopoverButton, PopoverPanel} from "@rgossiaux/svelte-headlessui";
    
    import NavTabs from '$lib/ui/header/NavTabs.svelte';
    import ButtonGradient from '$lib/ui/buttons/ButtonGradient.svelte';
  
    import {appName} from 'web-config';
    import {url} from '$lib/utils/path';
  
    let className = 'bg-base-200';
      export {className as class};
  
    export let links : {pathname: string; title: string}[];
  
    let isOpen: boolean = false;
    const setIsOpen = (open : boolean) :void => {
        isOpen = open;
    }
  
  </script>

<header class={className}>
    <nav class="max-w-7xl flex items-center justify-between px-8 py-3 mx-auto" >
        <div class="flex lg:flex-1">
            <a
                class="flex items-center gap-2 shrink-0 "
                href="/"
                title={`${appName} homepage`}
            >
            <img
                class="w-8"
                alt={appName}
                placeholder="blur"
                src={url('/icon.svg')}
                width="32"
                height="32"
            />
                <span class="font-extrabold text-lg">{appName}</span>
            </a>
        </div>

        <div class="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center" >
            <NavTabs
              pages={links}
              class="link link-hover text-base-content/80 hover:text-base-content active:text-base-content focus:text-base-content duration-100"
              tabClass="tab tab-sm tab-lifted flex-1"
              whenSelected="tab-active font-black !bg-base-100"
            />

            <!-- todo : abstract -->
            <!-- <ButtonPopoverCategories /> -->
            <Popover class="relative z-30" >
                <PopoverButton
                    class="link no-underline flex flex-nowrap items-center gap-1 text-base-content/80 hover:text-base-content active:text-base-content focus:text-base-content duration-100"
                    title="Open Blog categories"
                    >
                    Categories
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class={`w-5 h-5 duration-200}`}
                  >
                    <path 
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    />
                  </svg>
                </PopoverButton>

                <!-- <Transition></Transition> -->
              
                <PopoverPanel class="absolute left-0 z-30 mt-3 w-screen max-w-full sm:max-w-sm transform">
                    <div class="overflow-hidden rounded-box shadow-lg ring-1 ring-base-content ring-opacity-5">
                        <div class="relative grid gap-2 bg-base-100 p-2 overflow-hidden">
                            <a class="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-box duration-200" href="/features">Features</a>
                            <a class="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-box duration-200" href="/tutorials">Tutorials</a>
                        </div>
                    </div>
              
                </PopoverPanel>
              </Popover>


        </div>

        <!-- CTA / Launch / Lead on big screens  -->
        <div class="hidden lg:flex lg:justify-end lg:flex-1">
            <ButtonGradient title="Launch App" />
        </div>

        <!-- Burger button to open menu on mobile  -->
        <div class="flex lg:hidden">
            <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            on:click|preventDefault={() => setIsOpen(true)}
            >
                <span class="sr-only">Open main menu</span>
                <Icon icon="clarity:menu-line" />
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
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        on:click|preventDefault={() => setIsOpen(false)}
                    >
                    <span class="sr-only">Close menu</span>
                        <Icon icon="clarity:menu-line" />
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
                        <!-- to do : inside -->
                        <!-- <ButtonAccordionCategories /> -->
                    </div>
                    <div class="divider"></div>
                    <!-- CTA / Launch / Lead on small screens  -->
                    <div class="flex flex-col">
                        <ButtonGradient title="Launch App" />
                    </div>
                </div>

            </div>
        </div>

    </nav>
</header>