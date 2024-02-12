<script lang="ts">

    import FaqItem from '$lib/ui/faq/FaqItem.svelte';

    interface FAQItemProps {
        question: string;
        answer: string;
    }
  
    export const faqList = [
        {
            question: "What do I get exactly?",
            answer: "Loreum Ipseum",
        },
        {
            question: "Can I get a refund?",
            answer: "Yes! You can request a refund within 7 days of your purchase. Reach outby email",
        },
        {
            question: "I have another question",
            answer: "Cool, contact us by email",
        },
    ] as FAQItemProps[];
  
</script>

<section class="bg-base-200" id="faq">
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
