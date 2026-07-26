import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const FlashSaleSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section className="py-10 bg-red-50">

            <div className="container mx-auto">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-3xl font-bold text-red-600">

                        {config.title}

                    </h2>

                    <span className="bg-red-600 text-white px-4 py-2 rounded-full">

                        Ends in {config.durationHours} Hours

                    </span>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {[1, 2, 3, 4].map((item) => (

                        <div
                            key={item}
                            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
                        >

                            <img
                                src={`https://picsum.photos/300/300?random=${item}`}
                                alt="Flash Sale Product"
                                className="w-full h-48 object-cover rounded"
                            />

                            <h3 className="font-semibold mt-3">

                                Flash Sale Product {item}

                            </h3>

                            <p className="text-red-600 font-bold">

                                $99.99

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default FlashSaleSection;