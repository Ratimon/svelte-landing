import { writable } from 'svelte/store';
import type { Feature, ActiveFeature } from './Feature.Model';


function featureSelectedService() {
	const {subscribe, set, update} = writable<ActiveFeature>(null);
	return {
		subscribe,
		set,
		update,

        select: (feature: Feature) => {
			set(feature);
		},

		clear: () => set(null),
	};
}

function featuresService() {
	const {subscribe, set, update} = writable<Feature[]>([]);
	return {
		subscribe,
		set,
		update,

        trigger: (features: Feature[]) => {
			set(features);
		},

		clear: () => set([]),
	};
}

export const featuresStore = featuresService();
export const featureSelectedStore = featureSelectedService();


// export class FeatureRepository {}