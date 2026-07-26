import { HomepageSection } from "../../types/homepage";

interface Props {

    section: HomepageSection;

}

const OfferStripSection = ({
    section
}: Props) => {

    const config = section.config;

    return (

        <section
            className="py-3"
            style={{
                backgroundColor: config.backgroundColor || "#1976d2",
                color: config.textColor || "#ffffff"
            }}
        >

            <div className="container mx-auto text-center">

                <h3 className="text-lg font-semibold">

                    {config.text}

                </h3>

            </div>

        </section>

    );

};

export default OfferStripSection;