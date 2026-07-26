import React from "react";

import HeroBannerEditor from "./HeroBannerEditor";
import CategorySliderEditor from "./CategorySliderEditor";
import ProductCarouselEditor from "./ProductCarouselEditor";
import ProductGridEditor from "./ProductGridEditor";
import PromotionBannerEditor from "./PromotionBannerEditor";
import BrandSliderEditor from "./BrandSliderEditor";
import FlashSaleEditor from "./FlashSaleEditor";
import OfferStripEditor from "./OfferStripEditor";
import SellerBannerEditor from "./SellerBannerEditor";
import RecentlyViewedEditor from "./RecentlyViewedEditor";

import { SectionType } from "../../../../types/homepage";

interface Props {

    sectionType: SectionType;

    config: any;

    onChange: (config: any) => void;

}

const ConfigEditorFactory: React.FC<Props> = ({
    sectionType,
    config,
    onChange
}) => {

    switch (sectionType) {

        case SectionType.HERO_BANNER:
            return (
                <HeroBannerEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.CATEGORY_SLIDER:
            return (
                <CategorySliderEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.PRODUCT_CAROUSEL:
            return (
                <ProductCarouselEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.PRODUCT_GRID:
            return (
                <ProductGridEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.PROMOTION_BANNER:
            return (
                <PromotionBannerEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.BRAND_SLIDER:
            return (
                <BrandSliderEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.FLASH_SALE:
            return (
                <FlashSaleEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.OFFER_STRIP:
            return (
                <OfferStripEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.SELLER_BANNER:
            return (
                <SellerBannerEditor
                    config={config}
                    onChange={onChange}
                />
            );

        case SectionType.RECENTLY_VIEWED:
            return (
                <RecentlyViewedEditor
                    config={config}
                    onChange={onChange}
                />
            );

        default:
            return null;

    }

};

export default ConfigEditorFactory;