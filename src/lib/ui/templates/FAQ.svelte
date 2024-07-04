<script lang="ts">
	import Background from '$lib/ui/background/Background.svelte';

  import type {FAQItemProps} from '$lib/ui/faq/types.ts';
  import FaqItem from '$lib/ui/faq/FaqItem.svelte';

  export let keyToNav: string = '';
  export let faqList = [] as FAQItemProps[];
  
</script>

<Background color="bg-base-200">
  <section id={keyToNav}>
    <div class="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      <div class="flex flex-col text-left basis-1/2">
        <p class="inline-block font-semibold text-primary mb-4">FAQ</p>
        <p class="sm:text-4xl text-3xl font-extrabold text-base-content">
          Frequently Asked Questions
        </p>
      </div>

      <ul class="basis-1/2">

        {#each faqList as item, i}
            <FaqItem>
                <svelte:fragment slot="question">
                    <p>{item.question}</p>
                </svelte:fragment>
                <svelte:fragment slot="answer">
                    
                    <div class="space-y-2 leading-relaxed">{item.answer}</div>
                </svelte:fragment>
            </FaqItem>
	      {/each}
      </ul>
    </div>
  </section>
</Background>