import React from "react";

import { HomepageSection, SectionType } from "../../types/homepage";

import HeroBannerSection from "../renderers/HeroBannerSection";
import ProductCarouselSection from "../renderers/ProductCarouselSection";
import BrandSliderSection from "../renderers/BrandSliderSection";
import CategorySliderSection from "../renderers/CategorySliderSection";
import FlashSaleSection from "../renderers/FlashSaleSection";
import PromotionBannerSection from "../renderers/PromotionBannerSection";
import OfferStripSection from "../renderers/OfferStripSection";
import ProductGridSection from "../renderers/ProductGridSection";
import RecentlyViewedSection from "../renderers/RecentlyViewedSection";
interface Props {

    sections: HomepageSection[];

}

const HomepageRenderer: React.FC<Props> = ({
    sections
}) => {

    return (

        <>

            {sections.map(section => {

                switch (section.sectionType) {

                    case SectionType.HERO_BANNER:

                        return (
                            <HeroBannerSection
                                key={section.id}
                                section={section}
                            />
                        );

                    case SectionType.PRODUCT_CAROUSEL:

                        return (
                            <ProductCarouselSection
                                key={section.id}
                                section={section}
                            />
                        );

                    case SectionType.CATEGORY_SLIDER:

                        return (
                            <CategorySliderSection
                                key={section.id}
                                section={section}
                            />
                        );

                    case SectionType.FLASH_SALE:

                        return (
                            <FlashSaleSection
                                key={section.id}
                                section={section}
                            />
                        );

                    case SectionType.PROMOTION_BANNER:

                        return (
                            <PromotionBannerSection
                                key={section.id}
                                section={section}
                            />
                        );

                    case SectionType.BRAND_SLIDER:

                        return (
                            <BrandSliderSection
                                key={section.id}
                                section={section}
                            />
                        );
                    case SectionType.OFFER_STRIP:

                        return (
                            <OfferStripSection
                                key={section.id}
                                section={section}
                            />
                        ); 
                    case SectionType.PRODUCT_GRID:

                        return (
                            <ProductGridSection
                                key={section.id}
                                section={section}
                            />
                        ); 
                     case SectionType.RECENTLY_VIEWED:

                        return (
                            <RecentlyViewedSection
                                key={section.id}
                                section={section}
                            />
                        ); 
                    
                    default:

                        return null;

                }

            })}

        </>

    );

};

export default HomepageRenderer;