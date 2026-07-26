import React from "react";
import { Grid, TextField, FormControlLabel, Switch } from "@mui/material";

interface HeroBannerConfig {

    heading: string;

    subHeading: string;

    buttonText: string;

    buttonUrl: string;

    desktopImage: string;

    mobileImage: string;

    overlay: boolean;

    alignment: string;

}

interface Props {

    config: HeroBannerConfig;

    onChange: (config: HeroBannerConfig) => void;

}

const HeroBannerEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof HeroBannerConfig,
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
                    label="Heading"
                    value={config.heading || ""}
                    onChange={(e) =>
                        updateField("heading", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Sub Heading"
                    value={config.subHeading || ""}
                    onChange={(e) =>
                        updateField("subHeading", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Button Text"
                    value={config.buttonText || ""}
                    onChange={(e) =>
                        updateField("buttonText", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Button URL"
                    value={config.buttonUrl || ""}
                    onChange={(e) =>
                        updateField("buttonUrl", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Desktop Image URL"
                    value={config.desktopImage || ""}
                    onChange={(e) =>
                        updateField("desktopImage", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Mobile Image URL"
                    value={config.mobileImage || ""}
                    onChange={(e) =>
                        updateField("mobileImage", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Text Alignment"
                    value={config.alignment || "LEFT"}
                    onChange={(e) =>
                        updateField("alignment", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
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

export default HeroBannerEditor;