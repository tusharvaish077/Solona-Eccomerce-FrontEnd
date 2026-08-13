import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const OfferStripSection = ({
    section
}: Props) => {

    const config = section.config;

    if (config.enabled === false) {
        return null;
    }

    const content = (

        <div className="container mx-auto text-center">

            <h3 className="text-lg font-semibold">

                {config.text}

            </h3>

        </div>

    );

    return (

        <section
            className="py-3"
            style={{
                backgroundColor: config.backgroundColor || "#1976d2",
                color: config.textColor || "#ffffff"
            }}
        >

            {config.link ? (

                <a
                    href={config.link}
                    className="block"
                >
                    {content}
                </a>

            ) : (

                content

            )}

        </section>

    );

};

export default OfferStripSection;