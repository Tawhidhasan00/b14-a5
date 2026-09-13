
export default interface Itechnology {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: BadgeType;
}


export type BadgeType =
    | "Popular"
    | "Versatile"
    | "Fast"
    | "Standard"
    | "Top SQL"
    | "Cache"
    | "Ubiquitous"
    | "Essential"
    | "Robust"
    | "Modern"
    | "Containers";