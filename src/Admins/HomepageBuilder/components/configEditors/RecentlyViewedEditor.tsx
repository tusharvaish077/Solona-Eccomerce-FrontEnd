import { TextField } from "@mui/material";

interface Props {

    config: any;

    onChange: (config: any) => void;

}

const RecentlyViewedEditor = ({
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
                label="Maximum Products"
                value={config?.maxProducts || ""}
                onChange={(e) =>
                    handleChange(
                        "maxProducts",
                        Number(e.target.value)
                    )
                }
            />

        </div>

    );

};

export default RecentlyViewedEditor;