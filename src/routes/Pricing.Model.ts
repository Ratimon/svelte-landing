export type FeaturePlaned = {
    name : string;
};

export interface Plan {
    priceId: string;
    name: string
    isFeatured?: boolean;
    description: string;
    price: number;
    priceAnchor: number;
    format: string;
    features: FeaturePlaned[];
}