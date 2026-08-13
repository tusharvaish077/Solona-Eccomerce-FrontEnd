import React from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HomepageSection } from "../../types/homepage";

interface Props {
    section: HomepageSection;
}

const RecentlyViewedSection: React.FC<Props> = ({
    section
}) => {

    const navigate = useNavigate();

    const config = section.config;

    const products = section.products ?? [];

    if (products.length === 0) {
        return null;
    }

    return (

        <Box sx={{ px: 3, py: 4 }}>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3
                }}
            >

                <Typography
                    variant="h5"
                    fontWeight={700}
                >
                    {section.title}
                </Typography>

                {config.showViewAll && (

                    <Button
                        onClick={() => navigate("/products")}
                    >
                        View All
                    </Button>

                )}

            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fill,minmax(200px,1fr))",
                    gap: 2
                }}
            >

                {products.map((product) => (

                    <Card
                        key={product.id}
                        onClick={() =>
                            navigate(`/product/${product.id}`)
                        }
                        sx={{
                            cursor: "pointer",
                            transition: "0.3s",

                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: 4
                            }
                        }}
                    >

                        <CardMedia
                            component="img"
                            height="200"
                            image={
                                product.images?.[0] ??
                                "https://via.placeholder.com/300x300"
                            }
                            alt={product.title}
                            sx={{
                                objectFit: "contain"
                            }}
                        />

                        <CardContent>

                            <Typography
                                fontWeight={600}
                                noWrap
                            >
                                {product.title}
                            </Typography>

                            {product.categoryName && (

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {product.categoryName}
                                </Typography>

                            )}

                            <Typography
                                fontWeight={700}
                                mt={1}
                            >
                                ₹{product.sellingPrice}
                            </Typography>

                        </CardContent>

                    </Card>

                ))}

            </Box>

        </Box>

    );

};

export default RecentlyViewedSection;