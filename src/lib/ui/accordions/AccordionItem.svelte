<script lang="ts">
	import { createEventDispatcher } from 'svelte'
  	const dispatch = createEventDispatcher()

	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { getAccordionOptions } from './context';

	export let featureId: number = 0;
	export let iconName: string = "";

	// by default the accordion item is closed
	export let open = true
	
	// assign a unique identifier for the component
	const componentId = crypto.randomUUID()

	// get the accordion options using the context api
	const { collapse, activeComponentId  } = getAccordionOptions()

	function setActive(): void {
		// update the store collapsed value in the context
		$activeComponentId = componentId;

		dispatch("select-feature", {
			featureId: featureId
		});
	}

	function toggleOpen(): void {
		open = !open
	}

	function handleClick() {
		// if `collapse` is passed only one item can be active
		collapse ? setActive() : toggleOpen()
	}

	// the accordion item to be open by default
	$: open && collapse && setActive()
	// compare if the active id matches the component id
	$: isActive = $activeComponentId === componentId
	// if `collapse`, set one item as active, otherwise use `open`
	$: isOpen = collapse ? isActive : open
</script>

<li>
	<button
		on:click|preventDefault={handleClick}
		class="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
		aria-expanded={isOpen}
		aria-controls="accordion-{componentId}"
	>
			
		<span class={`flex flex-row duration-100 ${isOpen ? "text-primary" : ""}`}>
			<Icon icon={iconName} />
			<h3 class="inline"><slot name="title" /></h3>
		</span>
	</button>

	{#if isOpen}
		<!-- local transitions only play when the block they belong to is created or destroyed -->
		<div
			class={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
			in:slide|local = {{  delay: 200, duration: 100 }}
			aria-hidden={!isOpen}
			aria-labelledby="accordion-{componentId}"
		>
			<div class="pb-5 leading-relaxed">
				<slot name="description" />
			</div>
		</div>
	{/if}

</li>