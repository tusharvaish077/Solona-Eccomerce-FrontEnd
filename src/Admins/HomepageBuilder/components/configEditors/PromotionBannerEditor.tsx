import { TextField } from "@mui/material";

interface Props {

    config: any;

    onChange: (config: any) => void;

}

const PromotionBannerEditor = ({
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
                label="Redirect URL"
                value={config?.redirectUrl || ""}
                onChange={(e) =>
                    handleChange("redirectUrl", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Banner Title"
                value={config?.title || ""}
                onChange={(e) =>
                    handleChange("title", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Subtitle"
                value={config?.subTitle || ""}
                onChange={(e) =>
                    handleChange("subTitle", e.target.value)
                }
            />

        </div>

    );

};

export default PromotionBannerEditor;