import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch,
    MenuItem
} from "@mui/material";

interface ProductCarouselConfig {

    source:
        | "LATEST"
        | "CATEGORY"
        | "SELLER"
        | "MANUAL"
        | "FEATURED"
        | "BEST_SELLING"
        | "TRENDING"
        | "FLASH_SALE"
        | "BRAND";

    categoryId?: number;

    sellerId?: number;

    brandId?: number;

    productIds?: number[];

    limit: number;

    autoScroll: boolean;

    showPrice: boolean;

    showRating: boolean;

}

interface Props {

    config: ProductCarouselConfig;

    onChange: (config: ProductCarouselConfig) => void;

}

const ProductCarouselEditor: React.FC<Props> = ({
    config,
    onChange
}) => {

    const updateField = (
        field: keyof ProductCarouselConfig,
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

                    <MenuItem value="SELLER">
                        Seller
                    </MenuItem>

                    <MenuItem value="MANUAL">
                        Manual Selection
                    </MenuItem>

                    <MenuItem
                        value="FEATURED"
                        disabled
                    >
                        Featured (Coming Soon)
                    </MenuItem>

                    <MenuItem
                        value="BEST_SELLING"
                        disabled
                    >
                        Best Selling (Coming Soon)
                    </MenuItem>

                    <MenuItem
                        value="TRENDING"
                        disabled
                    >
                        Trending (Coming Soon)
                    </MenuItem>

                    <MenuItem
                        value="FLASH_SALE"
                        disabled
                    >
                        Flash Sale (Coming Soon)
                    </MenuItem>

                    <MenuItem
                        value="BRAND"
                    >
                        Brand (Coming Soon)
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

            {config.source === "SELLER" && (

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Seller ID"
                        value={config.sellerId ?? ""}
                        onChange={(e) =>
                            updateField(
                                "sellerId",
                                Number(e.target.value)
                            )
                        }
                    />
                </Grid>

            )}

            {config.source === "BRAND" && (

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Brand ID"
                        value={config.brandId ?? ""}
                        onChange={(e) =>
                            updateField(
                                "brandId",
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
                            checked={config.autoScroll ?? false}
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

export default ProductCarouselEditor;