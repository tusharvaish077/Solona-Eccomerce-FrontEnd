import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch
} from "@mui/material";

interface SellerBannerConfig {

    image: string;

    heading: string;

    subHeading: string;

    buttonText: string;

    buttonLink: string;

    overlay: boolean;

}

interface Props {

    config: SellerBannerConfig;

    onChange: (config: SellerBannerConfig) => void;

}

const SellerBannerEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof SellerBannerConfig,
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
                    label="Banner Image URL"
                    value={config.image ?? ""}
                    onChange={(e) =>
                        updateField("image", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Heading"
                    value={config.heading ?? ""}
                    onChange={(e) =>
                        updateField("heading", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Sub Heading"
                    value={config.subHeading ?? ""}
                    onChange={(e) =>
                        updateField("subHeading", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Button Text"
                    value={config.buttonText ?? ""}
                    onChange={(e) =>
                        updateField("buttonText", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Button Link"
                    value={config.buttonLink ?? ""}
                    onChange={(e) =>
                        updateField("buttonLink", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.overlay ?? false}
                            onChange={(e) =>
                                updateField(
                                    "overlay",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Dark Overlay"
                />
            </Grid>

        </Grid>

    );

};

export default SellerBannerEditor;