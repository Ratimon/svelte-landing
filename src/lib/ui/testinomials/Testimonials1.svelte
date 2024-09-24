<script lang="ts">

    export let quoteHighlighted: string = `I got your boilerplate and having the payments setup with Stripe
            + user auth is a blessing. This will save me like a week of work
            for each new side project I spin up. I appreciate that is well
            documented, as well. 100% worth it!`

    export let name: string = `Amanda Lou`
    export let bio: string = `Indie Maker`

    export let companyName: string = `Reddit`
    export let companyLink: string = `https://www.reddit.com/`

    export let bioImgPath: string = `https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2488&q=80`
    export let companyImgPath: string = `https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png`

</script>

<div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.base-300),theme(colors.base-100))] opacity-20" />
<div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-base-100 shadow-lg ring-1 ring-base-content/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
<div class="mx-auto max-w-2xl lg:max-w-5xl">
<figure class="mt-10">
    <div class="flex flex-col lg:flex-row items-center gap-12">
    <div class="relative rounded-xl border border-base-content/5 bg-base-content/5 p-1.5 sm:-rotate-1">
        <img
        width={320}
        height={320}
        class="rounded-lg max-w-[320px] md:max-w-[280px] lg:max-w-[320px] object-center border-2 border-white/10 shadow-md"
        src={bioImgPath}
        alt="A testimonial from a happy customer"
        />
    </div>

    <div>
        <blockquote class="text-xl font-medium leading-8 text-base-content sm:text-2xl sm:leading-10">
            {quoteHighlighted}
        </blockquote>
        <figure>
            <figcaption class="mt-10 flex items-center justify-start gap-5">
                <div class="text-base">
                    <div class="font-semibold text-base-content mb-0.5">
                        {name}
                    </div>
                    <div class="text-base-content/60">
                        {bio} @  <a class="bg-primary underline" href={companyLink} target="_blank" rel="noreferrer">{companyName}</a>
                    </div>
                </div>
                <img
                    width={150}
                    height={50}
                    class="w-20 md:w-24"
                    src={companyImgPath}
                    alt="Company logo"
                />
            </figcaption>
        </figure>

    </div>
    </div>
</figure>
</div>