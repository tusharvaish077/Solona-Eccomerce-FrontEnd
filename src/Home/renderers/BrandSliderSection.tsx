import { HomepageSection } from "../../types/homepage";

interface Props {
    section: HomepageSection;
}

const BrandSliderSection = ({
    section
}: Props) => {

    const config = section.config;

    const brands: string[] = config.brandIds
        ? config.brandIds.split(",").map((b: string) => b.trim())
        : [];

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-6">

                    {section.title}

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

                    {brands.length > 0 ? (

                        brands.map((brand) => (

                            <div
                                key={brand}
                                className="border rounded-lg p-6 bg-white shadow text-center hover:shadow-lg transition"
                            >

                                {config.showBrandName && (

                                    <h3 className="font-semibold text-lg">

                                        {brand}

                                    </h3>

                                )}

                            </div>

                        ))

                    ) : (

                        <div className="col-span-full text-center text-gray-500">

                            No brands configured.

                        </div>

                    )}

                </div>

            </div>

        </section>

    );

};

export default BrandSliderSection;