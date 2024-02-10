import type { Writable } from 'svelte/store'

import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'

type AccordionOptions = { collapse: boolean }
type ActiveId = string | null
// type FeatureId = number
type CollapseContext = boolean
type ActiveIdContext = Writable<ActiveId>
// type FeatureIdContext = Writable<FeatureId>


export function setAccordionOptions({ collapse }: AccordionOptions) {
	const activeComponentId = writable<ActiveId>(null)
    // const featureId = writable<FeatureId>(0)
	setContext<CollapseContext>('collapse', collapse)
	setContext<ActiveIdContext>('active', activeComponentId)
    // setContext<FeatureIdContext>('featureId', featureId)
}

export function getAccordionOptions() {
	const collapse = getContext<CollapseContext>('collapse')
	const activeComponentId = getContext<ActiveIdContext>('active')
    // const selectedFeatureId = getContext<FeatureIdContext>('featureId')
    return { collapse, activeComponentId }
	// return { collapse, activeComponentId, selectedFeatureId }
}
