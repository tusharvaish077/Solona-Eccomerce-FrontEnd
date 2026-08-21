import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

import React, { useState } from "react";

import CategorySheet from "./CategorySheet";

import { useAppSelector } from "../../../State/Store";

type DrawerListProps = {
    toggleDrawer: (open?: boolean) => void;
};

const DrawerList: React.FC<DrawerListProps> = ({
    toggleDrawer,
}) => {

    const [selectedCategory, setSelectedCategory] =
        useState<number | null>(null);

    const { categories } = useAppSelector(
        (state) => state.category
    );

    /*
     * Root categories
     *
     * parentId === null
     *
     * Example:
     *
     * Men
     * Women
     * Electronics
     * Furniture
     */
    const rootCategories = categories
        .filter(
            (category) =>
                category.parentId === null &&
                category.enabled
        )
        .sort(
            (a, b) =>
                (a.displayOrder ?? 0) -
                (b.displayOrder ?? 0)
        );

    return (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
        >

            <List>

                {/* Logo */}
                <ListItem>

                    <ListItemButton>

                        <ListItemText
                            primary={
                                <h1 className="logo text-2xl text-[#00927c]">
                                    Solona Ecommerce
                                </h1>
                            }
                        />

                    </ListItemButton>

                </ListItem>

                <Divider />

                {/* Root Categories */}
                {rootCategories.map(
                    (category) => (

                        <ListItem
                            key={category.id}
                            disablePadding
                        >

                            <ListItemButton
                                onClick={() =>
                                    setSelectedCategory(
                                        category.id
                                    )
                                }
                            >

                                <ListItemText
                                    primary={
                                        category.name
                                    }
                                />

                            </ListItemButton>

                        </ListItem>

                    )
                )}

            </List>

            {/* Category Sheet */}
            {selectedCategory !== null && (

                <div className="categorySheet">

                    <CategorySheet
                        selectedCategory={
                            selectedCategory
                        }
                        setShowCategorySheet={() =>
                            setSelectedCategory(null)
                        }
                    />

                </div>

            )}

        </Box>
    );
};

export default DrawerList;