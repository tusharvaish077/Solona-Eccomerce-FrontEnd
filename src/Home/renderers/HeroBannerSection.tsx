import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const HeroBannerSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section className="w-full mb-8">

            <div className="relative">

                <picture>

                    <source
                        media="(max-width:768px)"
                        srcSet={config.mobileImage}
                    />

                    <img
                        src={config.desktopImage}
                        alt={config.heading}
                        className="w-full h-[500px] object-cover"
                    />

                </picture>

                <div className="absolute inset-0 bg-black/40 flex items-center">

                    <div className="ml-10 text-white max-w-xl">

                        <h1 className="text-5xl font-bold mb-4">

                            {config.heading}

                        </h1>

                        <p className="text-xl mb-6">

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

        </section>

    );

};

export default HeroBannerSection;