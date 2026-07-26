import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const BrandSliderSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-6">

                    {config.title}

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

                    {[
                        "Apple",
                        "Samsung",
                        "Sony",
                        "Nike",
                        "Adidas",
                        "Puma"
                    ].map((brand) => (

                        <div
                            key={brand}
                            className="border rounded-lg p-6 bg-white shadow text-center hover:shadow-lg transition"
                        >

                            <h3 className="font-semibold text-lg">

                                {brand}

                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default BrandSliderSection;