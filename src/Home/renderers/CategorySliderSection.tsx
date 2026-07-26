import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const CategorySliderSection = ({
    section
}: Props) => {

    const config = section.config;

    const categories = [
        "Electronics",
        "Fashion",
        "Home",
        "Beauty",
        "Sports",
        "Books",
        "Toys",
        "Grocery"
    ];

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-6">

                    {config.title}

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

                    {categories
                        .slice(0, config.maxCategories || categories.length)
                        .map(category => (

                            <div
                                key={category}
                                className="border rounded-lg bg-white shadow p-6 text-center hover:shadow-lg transition cursor-pointer"
                            >

                                <div className="text-4xl mb-3">
                                    📦
                                </div>

                                <h3 className="font-semibold">

                                    {category}

                                </h3>

                            </div>

                        ))}

                </div>

            </div>

        </section>

    );

};

export default CategorySliderSection;