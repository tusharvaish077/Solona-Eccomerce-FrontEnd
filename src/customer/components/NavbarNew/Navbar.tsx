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

import {
    AddShoppingCart,
    FavoriteBorder,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import CategorySheet from "./CategorySheet";
import DrawerList from "./DrawerList";

import { useAppSelector } from "../../../State/Store";

const Navbar: React.FC = () => {

    const theme = useTheme();

    const navigate = useNavigate();

    const isLarge = useMediaQuery(
        theme.breakpoints.up("lg")
    );

    /*
     * Redux
     */
    const { auth, category } = useAppSelector(
        (store) => store
    );

    /*
     * Selected root category
     *
     * Example:
     *
     * Men -> id 1
     */
    const [selectedCategory, setSelectedCategory] =
        useState<number | null>(null);

    /*
     * Desktop category sheet visibility
     */
    const [showCategorySheet, setShowCategorySheet] =
        useState<boolean>(false);

    /*
     * Mobile drawer
     */
    const [open, setOpen] =
        useState<boolean>(false);

    /*
     * Root categories from backend
     */
    const rootCategories = category.categories
        .filter(
            (item) =>
                item.parentId === null &&
                item.enabled
        )
        .sort(
            (a, b) =>
                (a.displayOrder ?? 0) -
                (b.displayOrder ?? 0)
        );

    /*
     * Drawer toggle
     */
    const toggleDrawer = (newOpen?: boolean) => {

        if (typeof newOpen === "boolean") {
            setOpen(newOpen);
        } else {
            setOpen((prev) => !prev);
        }

    };

    /*
     * When mouse enters a root category
     */
    const handleCategoryMouseEnter = (
        categoryId: number
    ) => {

        setSelectedCategory(categoryId);

        setShowCategorySheet(true);

    };

    return (
        <>

            {/* ================= NAVBAR ================= */}

            <Box
                className="
                    sticky
                    top-0
                    left-0
                    right-0
                    bg-white
                    blur-bg
                    bg-opacity-80
                "
                sx={{
                    zIndex: 2,
                }}
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        px-5
                        lg:px-10
                        h-[70px]
                        border-b
                    "
                >

                    {/* ================= LEFT ================= */}

                    <div
                        className="
                            flex
                            items-center
                            gap-9
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            {/* Mobile menu */}
                            {!isLarge && (

                                <IconButton
                                    onClick={() =>
                                        toggleDrawer(true)
                                    }
                                >

                                    <MenuIcon />

                                </IconButton>

                            )}

                            {/* Logo */}
                            <h1
                                onClick={() =>
                                    navigate("/")
                                }
                                className="
                                    logo
                                    cursor-pointer
                                    text-lg
                                    md:text-xl
                                    lg:text-[1.4rem]
                                    text-primary-color
                                "
                            >
                                Solona Ecommerce
                            </h1>

                        </div>


                        {/* ================= DESKTOP CATEGORIES ================= */}

                        {isLarge && (

                            <ul
                                className="
                                    flex
                                    items-center
                                    font-medium
                                    text-gray-800
                                "
                            >

                                {rootCategories.map(
                                    (item) => (

                                        <li
                                            key={item.id}

                                            onMouseEnter={() =>
                                                handleCategoryMouseEnter(
                                                    item.id
                                                )
                                            }

                                            className="
                                                mainCategory
                                                cursor-pointer
                                                flex
                                                items-center
                                                px-3
                                                py-6
                                                text-xs
                                                sm:text-sm
                                                md:text-sm
                                                lg:text-base
                                                font-medium
                                                hover:text-primary-color
                                                hover:border-b-2
                                                border-primary-color
                                                whitespace-nowrap
                                            "
                                        >

                                            {item.name}

                                        </li>

                                    )
                                )}

                            </ul>

                        )}

                    </div>


                    {/* ================= RIGHT ================= */}

                    <div
                        className="
                            flex
                            gap-1
                            lg:gap-6
                            items-center
                        "
                    >

                        {/* Search */}
                        <IconButton
                            onClick={() =>
                                navigate("/search")
                            }
                        >

                            <SearchIcon />

                        </IconButton>


                        {/* Authentication */}

                        {auth.user ? (

                            <Button
                                onClick={() =>
                                    navigate(
                                        "/account/orders"
                                    )
                                }
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <Avatar
                                    sx={{
                                        width: 29,
                                        height: 29,
                                    }}
                                    src="/Icons/Screenshot 2025-07-09 211247.png"
                                />

                                <h1
                                    className="
                                        font-semibold
                                        hidden
                                        lg:block
                                    "
                                >
                                    {auth.user?.fullName}
                                </h1>

                            </Button>

                        ) : (

                            <Button
                                onClick={() =>
                                    navigate("/login")
                                }
                                variant="contained"
                            >
                                Login
                            </Button>

                        )}


                        {/* Wishlist */}

                        <IconButton
                            onClick={() =>
                                navigate("/wishlist")
                            }
                        >

                            <FavoriteBorder
                                sx={{
                                    fontSize: 29,
                                }}
                            />

                        </IconButton>


                        {/* Cart */}

                        <IconButton
                            onClick={() =>
                                navigate("/cart")
                            }
                        >

                            <AddShoppingCart
                                className="text-gray-700"
                                sx={{
                                    fontSize: 29,
                                }}
                            />

                        </IconButton>


                        {/* Become Seller */}

                        {isLarge && (

                            <Button
                                onClick={() =>
                                    navigate(
                                        "/become-seller"
                                    )
                                }
                                variant="outlined"
                            >
                                Become Seller
                            </Button>

                        )}

                    </div>

                </div>


                {/* ================= MOBILE DRAWER ================= */}

                <Drawer
                    open={open}
                    onClose={() =>
                        toggleDrawer(false)
                    }
                >

                    <DrawerList
                        toggleDrawer={
                            toggleDrawer
                        }
                    />

                </Drawer>


                {/* ================= DESKTOP CATEGORY SHEET ================= */}

                {isLarge &&
                    showCategorySheet &&
                    selectedCategory !== null && (

                        <div
                            onMouseEnter={() =>
                                setShowCategorySheet(
                                    true
                                )
                            }

                            onMouseLeave={() =>
                                setShowCategorySheet(
                                    false
                                )
                            }

                            className="
                                categorySheet
                                absolute
                                top-[4.41rem]
                                left-20
                                right-20
                            "
                        >

                            <CategorySheet
                                selectedCategory={
                                    selectedCategory
                                }
                                setShowCategorySheet={
                                    setShowCategorySheet
                                }
                            />

                        </div>

                    )}

            </Box>

        </>
    );
};

export default Navbar;