<script lang="ts">
  import {onMount, onDestroy} from 'svelte';

  import { Accordion, AccordionItem, AccordionMedia } from '$lib/ui/accordions'
  import Background from '$lib/ui/background/Background.svelte';

  import type {Feature} from '../../../routes/Feature.Model';
  import { featuresStore, featureSelectedStore } from '../../../routes/Feature.Store'

  export let features = [] as Feature[];

  $: selectedType = $featureSelectedStore?.type;
  $: selectedPath = $featureSelectedStore?.path;
  $: selectedFormat = $featureSelectedStore?.format;
  $: selectedAlt = $featureSelectedStore?.alt;

  function handlesSelect(event:CustomEvent) {
    const featureId: number = event.detail.featureId;
    featureSelectedStore.select(features[featureId]);
  }
 
  onMount(() => {
    featuresStore.trigger(features);
    featureSelectedStore.select(features[0]);
  })

  onDestroy(() => {
		featuresStore.clear();
    featureSelectedStore.clear();
	});

</script>

<Background color="bg-base-100">
  <section class="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto"
    id="features"
  >
    <div class="px-8">

      <h2 class="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
        All you need to ship your startup fast
        <Background color="bg-neutral">
          <span class="text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            and get profitable
          </span>
        </Background>
      </h2>
      
      <div class=" flex flex-col md:flex-row gap-12 md:gap-24">
        <div class="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">

          <ul class="w-full">
            <Accordion collapse >
                {#each features as feature, i}
                    <AccordionItem
                        featureId={i}
                        open={i === 0}
                        iconName={feature.iconName}
                        on:select-feature={handlesSelect}
                    >
                        <svelte:fragment slot="title">{feature.title}</svelte:fragment>
                        <svelte:fragment slot="description">{feature.description}</svelte:fragment>
                    </AccordionItem>
                {/each}
            </Accordion>
          </ul>

          <AccordionMedia
            type={selectedType}
            path={selectedPath}
            format={selectedFormat}
            alt={selectedAlt}
            style = "rounded-2xl aspect-square w-full sm:w-[26rem]"
          />

        </div>
      </div>
    </div>
  </section>
</Background>


