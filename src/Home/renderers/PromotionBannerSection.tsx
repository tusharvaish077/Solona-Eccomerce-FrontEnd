import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const PromotionBannerSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section className="py-10">

            <div className="container mx-auto">

                <a
                    href={config.redirectUrl}
                    className="block relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >

                    <img
                        src={config.image}
                        alt={config.title}
                        className="w-full h-72 object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">

                        <h2 className="text-4xl font-bold mb-3">

                            {config.title}

                        </h2>

                        <p className="text-lg">

                            {config.subTitle}

                        </p>

                    </div>

                </a>

            </div>

        </section>

    );

};

export default PromotionBannerSection;