export interface Brand {
    id: number;
    name: string;
    slug: string;
    logo?: string;
    banner?: string;
    description?: string;
    website?: string;
    enabled: boolean;
    displayOrder: number;
    createdAt: string;
    updatedAt: string;
}