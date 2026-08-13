import { HomepageSection } from "../../types/homepage";

interface Props {
    section: HomepageSection;
}

const ProductCarouselSection = ({ section }: Props) => {

    const config = section.config;
    const products = section.products || [];

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <h2 className="text-3xl font-bold mb-6">
                    {section.title}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {products.map((product) => (

                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
                        >

                            <img
                                src={
                                    product.images?.length
                                        ? product.images[0]
                                        : "https://via.placeholder.com/300"
                                }
                                alt={product.title}
                                className="w-full h-48 object-cover rounded"
                            />

                            <h3 className="mt-3 font-semibold">
                                {product.title}
                            </h3>

                            <p className="text-gray-500 text-sm">
                                {product.categoryName ?? "Category"}
                            </p>

                            <div className="mt-2">

                                <span className="text-green-600 font-bold">
                                    ₹{product.sellingPrice}
                                </span>

                                <span className="ml-2 text-gray-400 line-through">
                                    ₹{product.mrpPrice}
                                </span>

                            </div>

                            <p className="text-sm text-green-600 mt-1">
                                {product.discountPercent}% OFF
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default ProductCarouselSection;