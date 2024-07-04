<script  lang="ts">

    import Background from '$lib/ui/background/Background.svelte';
    import ButtonCheckout from '$lib/ui/buttons/ButtonCheckout.svelte';

    import type {FeaturePlaned, Plan } from '../../../routes/Pricing.Model';

    export let keyToNav: string = '';
    export let plans = [] as Plan[];
   
</script>

<Background color="bg-base-200">
    <section class="overflow-hidden" id={keyToNav}>
        <div class="py-24 px-8 max-w-5xl mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <p class="font-medium text-primary mb-8">Pricing</p>
            <h2 class="font-bold text-3xl lg:text-5xl tracking-tight">
              Save hours of repetitive code and ship faster!
            </h2>
            </div>
    
            <div class="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
    
                {#each plans as plan}
                    <div class="relative w-full max-w-lg">
                        {#if plan.isFeatured}
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <Background color="bg-primary">
                                    <span class={`badge text-xs text-primary-content font-semibold border-0`}>
                                        POPULAR
                                    </span>
                                </Background>
                            </div>
                            <Background color="bg-primary">
                                <div class={`absolute -inset-[1px] rounded-[9px] z-10`}></div>
                            </Background>

                        {/if}

                        <Background color="bg-base-100">
                            <div class="relative flex flex-col h-full gap-5 lg:gap-8 z-10  p-8 rounded-lg">
                                <div class="flex justify-between items-center gap-4">
                                    <div>
                                        <p class="text-lg lg:text-xl font-bold">{plan.name}</p>
        
                                        {#if plan.description} 
                                            <p class="text-base-content/80 mt-2">
                                                {plan.description}
                                            </p>
                                        {/if}
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    {#if plan.priceAnchor}
                                        <div class="flex flex-col justify-end mb-[4px] text-lg ">
                                            <p class="relative">
                                                <Background color="bg-base-content">
                                                    <span class="absolute  h-[1.5px] inset-x-0 top-[53%]"></span>
                                                </Background>
                                                <span class="text-base-content/80">
                                                    ${plan.priceAnchor}
                                                </span>
                                            </p>
                                        </div>
                                    {/if}
                                    <p class={`text-5xl tracking-tight font-extrabold`}>
                                        ${plan.price}
                                    </p>
                                    <div class="flex flex-col justify-end mb-[4px]">
                                        <p class="text-xs text-base-content/60 uppercase font-semibold">
                                            USD
                                        </p>
                                    </div>
                                </div>
                                {#if plan.features}
                                    <ul class="space-y-2.5 leading-relaxed text-base flex-1">
                                    
                                        {#each plan.features as feature, i}
                                            <li class="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    class="w-[18px] h-[18px] opacity-80 shrink-0"
                                                >
                                                    <path
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    />
                                                </svg>
                                                <span>{feature.name} </span>
                                            </li>
                                        {/each}
        
                                    </ul>
                                {/if}
                                <div class="space-y-2">
                                    <ButtonCheckout priceId={plan.priceId} />
                    
                                    <p class="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                                      One-time payment. No subscription
                                    </p>
                                </div>
                            </div>
                        </Background>
    
                    </div>    
    
                {/each}
            </div>
    
        </div>
    </section>
</Background>