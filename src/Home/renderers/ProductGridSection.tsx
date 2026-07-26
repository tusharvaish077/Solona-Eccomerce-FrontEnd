import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const ProductGridSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-6">

                    {config.title}

                </h2>

                <div
                    className="grid gap-6"
                    style={{
                        gridTemplateColumns: `repeat(${config.columns || 4}, minmax(0, 1fr))`
                    }}
                >

                    {Array.from({
                        length: config.maxProducts || 8
                    }).map((_, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
                        >

                            <img
                                src={`https://picsum.photos/300/300?random=${index + 50}`}
                                alt={`Product ${index + 1}`}
                                className="w-full h-48 object-cover rounded"
                            />

                            <h3 className="mt-3 font-semibold">

                                Product {index + 1}

                            </h3>

                            <p className="text-gray-500 text-sm">

                                {config.category}

                            </p>

                            <p className="text-green-600 font-bold mt-2">

                                $99.99

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default ProductGridSection;