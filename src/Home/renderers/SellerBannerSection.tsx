import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const SellerBannerSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <div className="relative rounded-xl overflow-hidden shadow-lg">

                    <img
                        src={config.image}
                        alt={config.heading}
                        className="w-full h-80 object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50 flex items-center">

                        <div className="ml-10 text-white max-w-lg">

                            <h2 className="text-4xl font-bold mb-4">

                                {config.heading}

                            </h2>

                            <p className="text-lg mb-6">

                                {config.subHeading}

                            </p>

                            <a
                                href={config.buttonLink}
                                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                            >

                                {config.buttonText}

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default SellerBannerSection;