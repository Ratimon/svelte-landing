<script lang="ts">

    import Accordion from '$lib/ui/features/Accordion.svelte';
    import AccordionItem from '$lib/ui/features/AccordionItem.svelte';


    export let featureSelected: Number = 0;

    const setFeatureSelected = (index : Number) => {
        featureSelected = index;
    }

    interface Feature {
        title: string;
        description: string;
        type?: "video" | "image";
        path?: string;
        format?: string;
        alt?: string;
        iconName?: string;
    }

    const features = [
    {
        title: "Emails",
        description:
        "Send transactional emails, setup your DNS to avoid spam folder (DKIM, DMARC, SPF in subdomain), and listen to webhook to receive & forward emails",
        type: "video",
        path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
        format: "video/webm",
        iconName: "ic:twotone-alternate-email",
    },
    {
        title: "Payments",
        description:
        "Create checkout sessions, handle webhooks to update user's account (subscriptions, one-time payments...) and tips to setup your account & reduce chargebacks",
        type: "image",
        path: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        alt: "A computer",
        iconName: "fxemoji:creditcard",
    },
    {
        title: "Authentication",
        description:
        "Magic links setup, login with Google walkthrough, save user in MongoDB/Supabase, private/protected pages & API calls",
        iconName: "material-symbols:person-outline",
    },
    {
        title: "Style",
        description:
        "Components, animations & sections (like this features section), 20+ themes with daisyUI, automatic dark mode",
        iconName: "mdi:art",
    },
    ] as Feature[];

</script>

<section
class="py-24 md:py-32 space-y-24 md:space-y-32 max-w-7xl mx-auto bg-base-100 "
id="features"
>
<div class="px-8">

  <h2 class="font-extrabold text-4xl lg:text-6xl tracking-tight mb-12 md:mb-24">
    All you need to ship your startup fast
    <span class="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
      and get profitable
    </span>
  </h2>
  
  <div class=" flex flex-col md:flex-row gap-12 md:gap-24">
    <div class="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">


      <ul class="w-full">

        <Accordion collapse >
            {#each features as feature, i}
                <AccordionItem open={i === 0} iconName={feature.iconName}>
                    <svelte:fragment slot="title">{feature.title}</svelte:fragment>
                    <svelte:fragment slot="description">{feature.description}</svelte:fragment>
                </AccordionItem>
            {/each}
        </Accordion>

      </ul>

    </div>
  </div>
</div>
</section>