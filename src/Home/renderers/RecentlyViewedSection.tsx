import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface RecentlyViewedSectionProps {
  section: {
    id: number;
    title?: string;
    config?: {
      limit?: number;
      showViewAll?: boolean;
    };
  };
}

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  discountPrice?: number;
}

const RecentlyViewedSection: React.FC<RecentlyViewedSectionProps> = ({
  section,
}) => {

  const navigate = useNavigate();

  /*
    Later replace this with your Redux recentlyViewedProducts state
    Example:
    const products = useSelector(
      state => state.product.recentlyViewed
    );
  */

  const products: Product[] = [];


  const limit = section.config?.limit || 6;

  const title =
    section.title || "Recently Viewed Products";


  const displayedProducts = products.slice(0, limit);


  if (!displayedProducts.length) {
    return null;
  }


  return (
    <Box sx={{ px: 3, py: 4 }}>

      {/* Section Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >

        <Typography
          variant="h5"
          fontWeight={700}
        >
          {title}
        </Typography>


        {section.config?.showViewAll && (
          <Button
            onClick={() => navigate("/products")}
          >
            View All
          </Button>
        )}

      </Box>



      {/* Products */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(200px,1fr))",
          gap: 2,
        }}
      >

        {displayedProducts.map((product) => (

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
                boxShadow: 4,
              },
            }}
          >

            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl}
              alt={product.title}
              sx={{
                objectFit: "contain",
              }}
            />


            <CardContent>

              <Typography
                fontWeight={600}
                noWrap
              >
                {product.title}
              </Typography>


              <Typography
                fontWeight={700}
                mt={1}
              >
                ₹{product.price}
              </Typography>

            </CardContent>

          </Card>

        ))}

      </Box>

    </Box>
  );
};


export default RecentlyViewedSection;