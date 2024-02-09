import type { Writable } from 'svelte/store'

import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'

type AccordionOptions = { collapse: boolean }
type ActiveId = string | null
type CollapseContext = boolean
type ActiveIdContext = Writable<ActiveId>

export function setAccordionOptions({ collapse }: AccordionOptions) {
	const activeComponentId = writable<ActiveId>(null)
	setContext<CollapseContext>('collapse', collapse)
	setContext<ActiveIdContext>('active', activeComponentId)
}

export function getAccordionOptions() {
	const collapse = getContext<CollapseContext>('collapse')
	const activeComponentId = getContext<ActiveIdContext>('active')
	return { collapse, activeComponentId }
}
