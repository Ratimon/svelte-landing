<script lang="ts">

    import { slide } from 'svelte/transition';

    // export let question: string = '';
    // export let answer: string = '';

    let isOpen: boolean = false;
    const setIsOpen = (open : boolean) :void => {
        isOpen = open;
    }

</script>

<li>
    <button
      class="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
      on:click|preventDefault={(e) => {
        setIsOpen(!isOpen);
      }}
      aria-expanded={isOpen}
    >
      <span
        class={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
      >
        <!-- {question} -->
        <slot name="question" />
      </span>
      <svg
        class={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          class={`transform origin-center transition duration-200 ease-out ${
            isOpen && "rotate-180"
          }`}
        />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          class={`transform origin-center rotate-90 transition duration-200 ease-out ${
            isOpen && "rotate-180 hidden"
          }`}
        />
      </svg>
    </button>

    {#if isOpen}
        <div
            class={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
            transition:slide|local
            aria-hidden={!isOpen}
        >
        </div>

        <!-- <div class="pb-5 leading-relaxed">{answer}</div> -->
        <slot name="answer" />

    {/if}



    <!-- {#if isOpen}
        <div
            class={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
            transition:slide|local
            aria-hidden={!isOpen}
            aria-labelledby="accordion-{componentId}"
        >
            <div class="pb-5 leading-relaxed">
                <slot name="description" />
            </div>
        </div>
    {/if} -->

</li>

