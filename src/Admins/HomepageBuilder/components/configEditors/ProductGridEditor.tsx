import React from "react";
import {
    Grid,
    TextField,
    MenuItem,
    FormControlLabel,
    Switch
} from "@mui/material";

interface ProductGridConfig {

    source: "LATEST" | "CATEGORY" | "MANUAL";

    categoryId?: number;

    productIds?: number[];

    columns: number;

    limit: number;

    showPrice: boolean;

    showRating: boolean;

}

interface Props {

    config: ProductGridConfig;

    onChange: (config: ProductGridConfig) => void;

}

const ProductGridEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof ProductGridConfig,
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
                    label="Columns"
                    value={config.columns ?? 4}
                    onChange={(e) =>
                        updateField(
                            "columns",
                            Number(e.target.value)
                        )
                    }
                />
            </Grid>

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

export default ProductGridEditor;