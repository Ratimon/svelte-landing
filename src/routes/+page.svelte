<script  lang="ts">
  import type {Feature} from './Feature.Model';
  import type {Plan } from './Pricing.Model';
  import type {FAQItemProps} from '$lib/model/FAQ.ts';
  import type {Link } from '$lib/model/Link';
  import type {FeatureListElement } from '$lib/model/Feature';

  import Header from '../lib/ui/templates/Header.svelte';
  import Hero from '$lib/ui/templates/Hero.svelte';
  import Problem from '$lib/ui/templates/Problem.svelte';
  // import FeaturesAccordion from '$lib/ui/templates/FeaturesAccordion.svelte';
  import FeaturesListicle from '$lib/ui/templates/FeaturesListicle.svelte';
  import Pricing from '../lib/ui/templates/Pricing.svelte';
  import FAQ from '$lib/ui/templates/FAQ.svelte';
  import CTA from '../lib/ui/templates/CTA.svelte';
  import Footer from '../lib/ui/templates/Footer.svelte';

  const headLinks : Link[] = [
      {pathname: '#pricing', title: 'Pricing', navType: 'scroll'},
      {pathname: '#faq', title: 'FAQ', navType : 'scroll'},
  	];

  const footLinks : Link[] = [
      {pathname: '#pricing', title: 'Pricing', navType: 'scroll'},
      {pathname: '/blog', title: 'Blog', navType: 'tab'},
  	];

  // // in case you want to use the multiple pages app 
  // const links = [
	// 	    {pathname: '/', title: 'Home'},
  //     	{pathname: '/testimonials', title: 'Reviews'},
  //     	{pathname: '/faq', title: 'FAQ'},
  // 	];

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

    const featureLists :FeatureListElement[] = [
    {
        title: "Emails",
        descriptions:
        [
            "Send transactional emails",
            "DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)",
            "Webhook to receive & forward emails",
          ],
        highlight : "Time saved: 3 hours",
        iconName: "ic:twotone-alternate-email",
    },
    {
        title: "Payments",
        descriptions:
        [
            "Create checkout sessions",
            "Handle webhooks to update user's account",
            "Tips to setup your account & reduce chargebacks",
          ],
        highlight : "Time saved: 3 hours",
        iconName: "fxemoji:creditcard",
    },
    {
        title: "Database",
        descriptions: ["Mongoose schema", "Mongoose plugins to make your life easier"],
        highlight : "Time saved: 3 hours",
        iconName: "material-symbols:person-outline",
    },
    ] as FeatureListElement[];

    const plans = [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "1-Year Pass",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for small projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 149,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Lifetime Deal",
        description: "You need more power",
        price: 149,
        priceAnchor: 299,
        features: [
          {
            name: "NextJS boilerplate",
          },
          { name: "User oauth" },
          { name: "Database" },
          { name: "Emails" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      },
    ] as Plan[];

    const faqList = [
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
  
<Header links={headLinks}  menuTitle={'Features'} dropDownLinks={headLinks} actionLink={headLinks[0]} class="bg-base-200 "></Header>

<Hero></Hero>
<Problem></Problem>
<FeaturesListicle {featureLists} featureSelected={featureLists[0].title}></FeaturesListicle>
<!-- <FeaturesAccordion {features} ></FeaturesAccordion> -->
<Pricing {plans} keyToNav={headLinks[0].pathname}></Pricing>
<FAQ {faqList} keyToNav={headLinks[1].pathname}></FAQ>
<CTA></CTA>
<Footer links={footLinks}></Footer>