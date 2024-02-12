<script lang="ts">
	import { setAccordionOptions } from './context'

	// by default more than one accordion can be open
	export let collapse = false;

	// the context API avoids passing data through components as props
	setAccordionOptions({ collapse })
</script>

<div class="accordion">
	<slot />
</div>
