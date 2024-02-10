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