import { TextField } from "@mui/material";

interface Props {

    config: any;

    onChange: (config: any) => void;

}

const OfferStripEditor = ({
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
                label="Offer Text"
                value={config?.text || ""}
                onChange={(e) =>
                    handleChange("text", e.target.value)
                }
            />

            <TextField
                fullWidth
                label="Background Color"
                value={config?.backgroundColor || ""}
                onChange={(e) =>
                    handleChange("backgroundColor", e.target.value)
                }
                placeholder="#FF5722"
            />

            <TextField
                fullWidth
                label="Text Color"
                value={config?.textColor || ""}
                onChange={(e) =>
                    handleChange("textColor", e.target.value)
                }
                placeholder="#FFFFFF"
            />

        </div>

    );

};

export default OfferStripEditor;