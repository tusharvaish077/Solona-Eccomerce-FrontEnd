import { HomepageSection } from "../../types/homepage";

interface Props {
    section: HomepageSection;
}

const ProductGridSection = ({
    section
}: Props) => {

    const config = section.config;

    const products = section.products ?? [];

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-6">

                    {section.title}

                </h2>

                <div
                    className="grid gap-6"
                    style={{
                        gridTemplateColumns: `repeat(${config.columns ?? 4}, minmax(0, 1fr))`
                    }}
                >

                    {products.length > 0 ? (

                        products.map((product) => (

                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
                            >

                                <img
                                    src={
                                        product.images?.[0] ||
                                        "https://via.placeholder.com/300x300"
                                    }
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded"
                                />

                                <h3 className="mt-3 font-semibold">

                                    {product.title}

                                </h3>

                                <p className="text-gray-500 text-sm">

                                    {product.categoryName}

                                </p>

                                <p className="text-green-600 font-bold mt-2">

                                    ₹{product.sellingPrice}

                                </p>

                            </div>

                        ))

                    ) : (

                        <div className="col-span-full text-center text-gray-500">

                            No products available.

                        </div>

                    )}

                </div>

            </div>

        </section>

    );

};

export default ProductGridSection;