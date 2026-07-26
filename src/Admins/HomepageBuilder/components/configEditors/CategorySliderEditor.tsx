import { TextField } from "@mui/material";

interface Props {

    config: any;

    onChange: (config: any) => void;

}

const CategorySliderEditor = ({
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
                label="Maximum Categories"
                value={config?.maxCategories || ""}
                onChange={(e) =>
                    handleChange(
                        "maxCategories",
                        Number(e.target.value)
                    )
                }
            />

        </div>

    );

};

export default CategorySliderEditor;