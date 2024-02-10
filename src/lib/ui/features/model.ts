
import type { Writable } from 'svelte/store'


export interface Feature {
    title: string;
    description: string;
    type?: "video" | "image";
    path?: string;
    format?: string;
    alt?: string;
    iconName?: string;
}

export type ActiveFeature = Feature | null
export type ActiveFeatureStore = Writable<ActiveFeature>


// export type PositionOpening = {
//     balanceInWei: BigNumber,
//     isPositionActive: boolean
// }

