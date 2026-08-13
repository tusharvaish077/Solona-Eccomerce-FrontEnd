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

                <div
                    className={`absolute inset-0 flex items-center ${
                        config.overlay ? "bg-black/40" : ""
                    }`}
                >

                    <div
                        className={`text-white max-w-xl ${
                            config.alignment === "CENTER"
                                ? "mx-auto text-center"
                                : config.alignment === "RIGHT"
                                ? "ml-auto mr-10 text-right"
                                : "ml-10 text-left"
                        }`}
                    >

                        <h1 className="text-5xl font-bold mb-4">

                            {config.heading}

                        </h1>

                        <p className="text-xl mb-6">

                            {config.subHeading}

                        </p>

                        {config.buttonText && (

                            <a
                                href={config.buttonUrl}
                                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                            >

                                {config.buttonText}

                            </a>

                        )}

                    </div>

                </div>

            </div>

        </section>

    );

};

export default HeroBannerSection;