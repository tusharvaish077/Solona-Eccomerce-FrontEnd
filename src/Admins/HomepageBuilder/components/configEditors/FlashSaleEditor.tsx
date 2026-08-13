import React from "react";
import {
    Grid,
    TextField,
    MenuItem,
    FormControlLabel,
    Switch
} from "@mui/material";

interface FlashSaleConfig {

    source: "LATEST" | "CATEGORY" | "MANUAL";

    categoryId?: number;

    productIds?: number[];

    limit: number;

    durationHours: number;

    showCountdown: boolean;

    showDiscountBadge: boolean;

}

interface Props {

    config: FlashSaleConfig;

    onChange: (config: FlashSaleConfig) => void;

}

const FlashSaleEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof FlashSaleConfig,
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
                    select
                    fullWidth
                    label="Product Source"
                    value={config.source ?? "LATEST"}
                    onChange={(e) =>
                        updateField("source", e.target.value)
                    }
                >
                    <MenuItem value="LATEST">
                        Latest Products
                    </MenuItem>

                    <MenuItem value="CATEGORY">
                        Category
                    </MenuItem>

                    <MenuItem value="MANUAL">
                        Manual Selection
                    </MenuItem>

                </TextField>
            </Grid>

            {config.source === "CATEGORY" && (

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Category ID"
                        value={config.categoryId ?? ""}
                        onChange={(e) =>
                            updateField(
                                "categoryId",
                                Number(e.target.value)
                            )
                        }
                    />
                </Grid>

            )}

            {config.source === "MANUAL" && (

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        disabled
                        label="Product Selection"
                        helperText="Manual product picker coming soon"
                    />
                </Grid>

            )}

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Products Limit"
                    value={config.limit ?? 8}
                    onChange={(e) =>
                        updateField(
                            "limit",
                            Number(e.target.value)
                        )
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Flash Sale Duration (Hours)"
                    value={config.durationHours ?? 24}
                    onChange={(e) =>
                        updateField(
                            "durationHours",
                            Number(e.target.value)
                        )
                    }
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.showCountdown ?? true}
                            onChange={(e) =>
                                updateField(
                                    "showCountdown",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Show Countdown"
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.showDiscountBadge ?? true}
                            onChange={(e) =>
                                updateField(
                                    "showDiscountBadge",
                                    e.target.checked
                                )
                            }
                        />
                    }
                    label="Show Discount Badge"
                />
            </Grid>

        </Grid>

    );

};

export default FlashSaleEditor;