import { TextField } from "@mui/material";

interface Props {

    config: any;

    onChange: (config: any) => void;

}

const SellerBannerEditor = ({
    config,
    onChange
}: Props) => {

    const handleChange = (
        field: string,
        value: any
    ) => {

        onChange({
            ...config,
            [field]: value
        });

    };

    return (

        <div className="space-y-4 mt-4">

            <TextField
                fullWidth
                label="Banner Image URL"
                value={config?.image || ""}
                onChange={(e) =>
                    handleChange("image", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Heading"
                value={config?.heading || ""}
                onChange={(e) =>
                    handleChange("heading", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Sub Heading"
                value={config?.subHeading || ""}
                onChange={(e) =>
                    handleChange("subHeading", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Button Text"
                value={config?.buttonText || ""}
                onChange={(e) =>
                    handleChange("buttonText", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Button Link"
                value={config?.buttonLink || ""}
                onChange={(e) =>
                    handleChange("buttonLink", e.target.value)
                }
            />

        </div>

    );

};

export default SellerBannerEditor;