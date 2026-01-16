import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../State/Store";
import DrawerList from "./DrawerList";


const Navbar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("men");
  const [showCategorySheet, setShowCategorySheet] = useState<boolean>(false);
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const { auth } = useAppSelector((store) => store);

  const [open, setOpen] = useState<boolean>(false);

  // Keep toggleDrawer typed to accept an optional boolean.
  const toggleDrawer = (newOpen?: boolean) => {
    // If no arg provided, toggle; if boolean provided, set that value.
    if (typeof newOpen === "boolean") setOpen(newOpen);
    else setOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        className="sticky top-0 left-0 right-0 bg-white blur-bg bg-opacity-80"
        sx={{ zIndex: 2 }}
      >
        <div className="flex items-center justify-between px-5 lg:px-10 h-[70px] border-b">
          <div className="flex items-center gap-9">
            <div className="flex item-center gap-2">
              {!isLarge && (
                <IconButton onClick={() => toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              )}
              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-xl lg:text-[1.4rem] text-primary-color"
              >
                Solona Ecommerce
              </h1>
            </div>

            {isLarge ? (
              <ul className="flex items-center font-medium text-gray-800">
                {mainCategory.map((items) => (
                  <li
                    key={items.categoryId}
                    onMouseLeave={() => setShowCategorySheet(false)}
                    onMouseEnter={() => {
                      setShowCategorySheet(true);
                      setSelectedCategory(items.categoryId as string);
                    }}
                  //   className="mainCategory cursor-pointer hover:text-primary-color hover:border-b-2 border-primary-color pb-8 pt-8 h-7 px-2 py-2 text-xs sm:text-sm md:text-sm lg:text-base"
                  // >
                  className="mainCategory
    cursor-pointer
    flex items-center
    px-3
    py-6
    text-xs sm:text-sm md:text-sm lg:text-base
    font-medium
    hover:text-primary-color
    hover:border-b-2
    border-primary-color
    whitespace-nowrap"
                  >
                    
                    {items.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex gap-1 lg:gap-6 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {auth.user ? (
              <Button
                onClick={() => {
                  return navigate("/account/orders");
                }}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="/Icons/Screenshot 2025-07-09 211247.png"
                />
                <h1 className="font-semibold hidden lg:block">
                  {auth.user?.fullName}
                </h1>
              </Button>
            ) : (
              <Button onClick={() => navigate("/login")} variant="contained">
                Login
              </Button>
            )}

            <IconButton onClick={() => navigate("/wishlist")}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <IconButton>
              <AddShoppingCart className="text-gray-700" sx={{ fontSize: 29 }} />
            </IconButton>

            {isLarge && (
              <Button onClick={() => navigate("/become-seller")} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>

        {/* Pass a function to onClose (not immediate invocation) */}
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
          {/* toggleDrawer accepts optional boolean now */}
          <DrawerList toggleDrawer={toggleDrawer} />
        </Drawer>

        <div
          onMouseLeave={() => setShowCategorySheet(false)}
          onMouseEnter={() => setShowCategorySheet(true)}
          className="categorySheet absolute top-[4.41rem] left-20 right-20"
        >
          {showCategorySheet && (
            <CategorySheet
              selectedCategory={selectedCategory}
              setShowCategorySheet={setShowCategorySheet}
            />
          )}
        </div>
      </Box>
    </>
  );
};

export default Navbar;
