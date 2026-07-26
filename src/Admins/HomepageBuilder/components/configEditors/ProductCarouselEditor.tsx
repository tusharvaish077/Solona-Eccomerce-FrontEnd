import React from "react";
import {
    Grid,
    TextField,
    FormControlLabel,
    Switch,
    MenuItem
} from "@mui/material";

interface ProductCarouselConfig {

    categoryId: string;

    limit: number;

    sortBy: string;

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
                    fullWidth
                    label="Category ID"
                    value={config.categoryId || ""}
                    onChange={(e)=>updateField("categoryId",e.target.value)}
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    fullWidth
                    type="number"
                    label="Products Limit"
                    value={config.limit ?? 10}
                    onChange={(e)=>updateField("limit",Number(e.target.value))}
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <TextField
                    select
                    fullWidth
                    label="Sort By"
                    value={config.sortBy || "LATEST"}
                    onChange={(e)=>updateField("sortBy",e.target.value)}
                >
                    <MenuItem value="LATEST">Latest</MenuItem>
                    <MenuItem value="BEST_SELLING">Best Selling</MenuItem>
                    <MenuItem value="PRICE_LOW_HIGH">Price Low → High</MenuItem>
                    <MenuItem value="PRICE_HIGH_LOW">Price High → Low</MenuItem>
                </TextField>
            </Grid>

            <Grid size={{ xs: 4 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.autoScroll ?? false}
                            onChange={(e)=>updateField("autoScroll",e.target.checked)}
                        />
                    }
                    label="Auto Scroll"
                />
            </Grid>

            <Grid size={{ xs: 4 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.showPrice ?? true}
                            onChange={(e)=>updateField("showPrice",e.target.checked)}
                        />
                    }
                    label="Show Price"
                />
            </Grid>

            <Grid size={{ xs: 4 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={config.showRating ?? true}
                            onChange={(e)=>updateField("showRating",e.target.checked)}
                        />
                    }
                    label="Show Rating"
                />
            </Grid>

        </Grid>

    );

};

export default ProductCarouselEditor;