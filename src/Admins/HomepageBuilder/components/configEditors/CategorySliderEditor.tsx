import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch
} from "@mui/material";

interface CategorySliderConfig {

    limit: number;

    autoScroll: boolean;

    showCategoryName: boolean;

}

interface Props {

    config: CategorySliderConfig;

    onChange: (config: CategorySliderConfig) => void;

}

const CategorySliderEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof CategorySliderConfig,
        value: any
    ) => {

        onChange({
            ...config,
            [field]: value
        });

    };

    return (

        <Grid container spacing={2} mt={1}>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Maximum Categories"
                    value={config.limit ?? 10}
                    onChange={(e) =>
                        updateField(
                            "limit",
                            Number(e.target.value)
                        )
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.autoScroll ?? true}
                            onChange={(e) =>
                                updateField(
                                    "autoScroll",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Auto Scroll"
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.showCategoryName ?? true}
                            onChange={(e) =>
                                updateField(
                                    "showCategoryName",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Show Category Name"
                />
            </Grid>

        </Grid>

    );

};

export default CategorySliderEditor;