import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch
} from "@mui/material";

interface OfferStripConfig {

    text: string;

    backgroundColor: string;

    textColor: string;

    link?: string;

    enabled: boolean;

}

interface Props {

    config: OfferStripConfig;

    onChange: (config: OfferStripConfig) => void;

}

const OfferStripEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof OfferStripConfig,
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
                    label="Offer Text"
                    value={config.text ?? ""}
                    onChange={(e) =>
                        updateField("text", e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Background Color"
                    value={config.backgroundColor ?? ""}
                    placeholder="#FF5722"
                    onChange={(e) =>
                        updateField(
                            "backgroundColor",
                            e.target.value
                        )
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    label="Text Color"
                    value={config.textColor ?? ""}
                    placeholder="#FFFFFF"
                    onChange={(e) =>
                        updateField(
                            "textColor",
                            e.target.value
                        )
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    label="Redirect URL (Optional)"
                    value={config.link ?? ""}
                    onChange={(e) =>
                        updateField(
                            "link",
                            e.target.value
                        )
                    }
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.enabled ?? true}
                            onChange={(e) =>
                                updateField(
                                    "enabled",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Enable Offer Strip"
                />
            </Grid>

        </Grid>

    );

};

export default OfferStripEditor;