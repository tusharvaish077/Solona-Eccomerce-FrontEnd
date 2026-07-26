import { TextField } from "@mui/material";

interface Props {

    config: any;

    onChange: (config: any) => void;

}

const FlashSaleEditor = ({
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
                label="Section Title"
                value={config?.title || ""}
                onChange={(e) =>
                    handleChange("title", e.target.value)
                }
            />

            <TextField
                fullWidth
                type="number"
                label="Duration (Hours)"
                value={config?.durationHours || ""}
                onChange={(e) =>
                    handleChange(
                        "durationHours",
                        Number(e.target.value)
                    )
                }
            />

        </div>

    );

};

export default FlashSaleEditor;