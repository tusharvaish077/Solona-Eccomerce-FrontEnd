export enum SectionType {
    HERO_BANNER = "HERO_BANNER",
    PRODUCT_CAROUSEL = "PRODUCT_CAROUSEL",
    CATEGORY_GRID = "CATEGORY_GRID",
    BRAND_SLIDER = "BRAND_SLIDER",
    AD_BANNER = "AD_BANNER",
    DEALS = "DEALS",
    CUSTOM_HTML = "CUSTOM_HTML"
}

export interface HomepageSection {

    id: number;

    sectionType: SectionType;

    title: string;

    displayOrder: number;

    enabled: boolean;

    config: any;

}