<script lang="ts">

    import Background from '$lib/ui/background/Background.svelte';

    export let quoteHighlighted: string = `I dont want to pay Stripe $2 for every invoice.`
    export let quoteDetail1: string = `I dont want to spend 10 minutes manually crafting every
          invoice either.`
    export let quoteDetail2: string = `.... solved this problem once and for all. The app is simple,
          but it nails the job perfectly.`
    export let name: string = `Someone Nice`
    export let bio: string = `S23.1K followers on 𝕏`

    export let companyName: string = `Company`
    export let companyLink: string = `https://google.com/`

    export let socialPlatform: string = `𝕏`
    export let socialAccount: string = `@w`
    export let socialLink: string = `https://twitter.com/`

    export let bioImgPath: string = `/testimonials/2_bio.png`
    export let companyImgPath: string = `/testimonials/2_company.png`

</script>

<Background color="bg-base-100">
    <div class="space-y-6 md:space-y-8 max-w-lg mx-auto px-8 py-16 md:py-32 ">
      <div class="rating !flex justify-center">

        {#each [...Array(5)] as _, i}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-warning"
            >
                <path
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                />
            </svg>
        {/each}

      </div>
      <div class="text-base leading-relaxed space-y-2 max-w-md mx-auto text-center">
        <p>
          <span class="bg-warning/25 px-1.5">
            {quoteHighlighted}
          </span>{" "}
            {quoteDetail1}
        </p>
        <p>
            {quoteDetail2}
        </p>
      </div>
      <div class="flex justify-center items-center gap-3 md:gap-4">
        <img
          class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          src={bioImgPath}
          alt={`Profile`}
          width={48}
          height={48}
        />
        <div>
          <p class="font-semibold">
            {name}
          </p>
          
          <p class="text-base-content/80 text-sm">
            {bio} @ <a class="bg-primary underline" href={companyLink} target="_blank" rel="noreferrer">{companyName}</a>
          </p>

          <p class="text-base-content/60">
            {socialPlatform} @ <a class="bg-secondary underline" href={socialLink} target="_blank" rel="noreferrer">{socialAccount}</a>
          </p>

        </div>
        <img
          width={150}
          height={50}
          class="w-20 md:w-24"
          src={companyImgPath}
          alt="Company logo"
        />
      </div>
    </div>
</Background>