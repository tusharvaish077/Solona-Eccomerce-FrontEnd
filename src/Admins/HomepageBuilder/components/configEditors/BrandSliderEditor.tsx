import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch
} from "@mui/material";

interface BrandSliderConfig {

    brandIds: string;

    autoScroll: boolean;

    scrollSpeed: number;

    showBrandName: boolean;

}

interface Props {

    config: BrandSliderConfig;

    onChange: (config: BrandSliderConfig) => void;

}

const BrandSliderEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof BrandSliderConfig,
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
                    multiline
                    rows={3}
                    label="Brand IDs (comma separated)"
                    value={config.brandIds || ""}
                    onChange={(e) =>
                        updateField("brandIds", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    type="number"
                    fullWidth
                    label="Scroll Speed (ms)"
                    value={config.scrollSpeed ?? 3000}
                    onChange={(e) =>
                        updateField("scrollSpeed", Number(e.target.value))
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.autoScroll ?? true}
                            onChange={(e) =>
                                updateField("autoScroll", e.target.checked)
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
                            checked={config.showBrandName ?? true}
                            onChange={(e) =>
                                updateField("showBrandName", e.target.checked)
                            }
                        />
                    }
                    label="Show Brand Name"
                />
            </Grid>

        </Grid>

    );

};

export default BrandSliderEditor;