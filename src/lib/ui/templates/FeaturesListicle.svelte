<script lang="ts">
    import type {FeatureListElement } from '$lib/model/Feature';

    import Icon from '@iconify/svelte';

    export let featureLists = [] as FeatureListElement[];
    export let featureSelected: string = '';

    $: featureToDisplay = featureLists.find((feature) => feature.title === featureSelected);

    let hasClicked: boolean = false;
    
    const handleClick = (name: string) :void => {
        if (!hasClicked) setHasClicked(true);
        setFeatureSelected(name);
    }

    function setHasClicked(open : boolean) :void  {
        hasClicked = open;
    }
  
    function setFeatureSelected(name: string) :void {
        featureSelected = name;
    }

</script>

<section class="py-24">
    <div class="max-w-3xl mx-auto">
      <div class="bg-base-100 max-md:px-8 max-w-3xl">
        <p class="text-accent font-medium text-sm font-mono mb-3">
          const launch_time = &quot;Today&quot;;
        </p>
        <h2 class="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
         <!-- 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it?  -->
          Supercharge your app instantly, launch faster, make $
        </h2>
        <div class="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
          <!-- 💡 COPY TIP: Explain how your product delivers what you promise in the headline. -->
          Login users, process payments and send emails at lightspeed. Spend
          your time building your startup, not integrating APIs. It
          provides you with the boilerplate code you need to launch, FAST.
        </div>
      </div>
    </div>

    <div>
        <div class="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">

            {#each featureLists as feature, i}
                <button
                    on:click={() => handleClick(feature.title)}
                    class={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
                >
                    <span
                        class={`duration-100 ${
                        featureSelected === feature.title
                            ? "text-primary"
                            : "text-base-content/30 group-hover:text-base-content/50"
                        }`}
                    >
                        {#if feature.iconName}
                            <Icon icon={feature.iconName} />
                        {/if}   

                    </span>
                    <span
                        class={`font-semibold text-sm ${
                        featureSelected === feature.title
                            ? "text-primary"
                            : "text-base-content/50"
                        }`}
                    >
                        {feature.title}
                    </span>
                </button>
            {/each}

        </div>
        <div class="bg-base-200">
            <div class="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
                <div class="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
                    <h3 class="font-semibold text-base-content text-lg">
                        {featureToDisplay?.title}
                    </h3>

                    {#if featureToDisplay}
                        <ul class="space-y-1">
                            {#each featureToDisplay.descriptions as description, i}
                                <li  class="flex items-center gap-3">
                                    {description}
                                </li>
                            {/each}
                            <li class="flex items-center gap-3 text-accent font-medium">
                                {featureToDisplay.highlight}
                            </li>
                        </ul>
                    {/if}

                </div>
            </div>
        </div>
    </div>
</section>