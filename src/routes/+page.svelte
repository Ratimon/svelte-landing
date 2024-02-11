<script  lang="ts">
  import type {Feature} from './Feature.Model';

  import Hero from '$lib/ui/hero/Hero.svelte';
  import Problem from '$lib/ui/problem/Problem.svelte';
  import FeaturesAccordion from './FeaturesAccordion.svelte';

  import ButtonCheckout from '$lib/ui/buttons/ButtonCheckout.svelte';

  const features = [
    {
        title: "Emails",
        description:
        "Send transactional emails, setup your DNS to avoid spam folder (DKIM, DMARC, SPF in subdomain), and listen to webhook to receive & forward emails",
        type: "video",
        path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
        format: "video/webm",
        alt: "email",
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
  
<Hero></Hero>
<Problem></Problem>
<FeaturesAccordion {features} ></FeaturesAccordion>

<ButtonCheckout></ButtonCheckout>