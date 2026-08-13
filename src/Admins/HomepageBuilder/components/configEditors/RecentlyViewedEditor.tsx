import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch
} from "@mui/material";

interface RecentlyViewedConfig {

    limit: number;

    showPrice: boolean;

    showRating: boolean;

}

interface Props {

    config: RecentlyViewedConfig;

    onChange: (config: RecentlyViewedConfig) => void;

}

const RecentlyViewedEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof RecentlyViewedConfig,
        value: any
    ) => {

        onChange({
            ...config,
            [field]: value
        });

    };

    return (

        <Grid container spacing={2} mt={1}>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Maximum Products"
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
                            checked={config.showPrice ?? true}
                            onChange={(e) =>
                                updateField(
                                    "showPrice",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Show Price"
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.showRating ?? true}
                            onChange={(e) =>
                                updateField(
                                    "showRating",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Show Rating"
                />
            </Grid>

        </Grid>

    );

};

export default RecentlyViewedEditor;