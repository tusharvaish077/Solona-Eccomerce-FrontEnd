import { HomepageSection } from "../../types/homepage";

interface Props {
    section: HomepageSection;
}

const FlashSaleSection = ({
    section
}: Props) => {

    const config = section.config;
    const products = section.products || [];

    return (

        <section className="py-10 bg-red-50">

            <div className="container mx-auto">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-3xl font-bold text-red-600">

                        {section.title}

                    </h2>

                    {config.showCountdown && (

                        <span className="bg-red-600 text-white px-4 py-2 rounded-full">

                            Ends in {config.durationHours ?? 24} Hours

                        </span>

                    )}

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {products.slice(0, config.limit ?? 8).map((product: any) => (

                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
                        >

                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded"
                            />

                            <h3 className="font-semibold mt-3">

                                {product.title}

                            </h3>

                            <div className="flex items-center gap-2 mt-2">

                                <span className="text-red-600 font-bold">

                                    ₹{product.sellingPrice}

                                </span>

                                {config.showDiscountBadge && product.discountPercent > 0 && (

                                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">

                                        {product.discountPercent}% OFF

                                    </span>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default FlashSaleSection;