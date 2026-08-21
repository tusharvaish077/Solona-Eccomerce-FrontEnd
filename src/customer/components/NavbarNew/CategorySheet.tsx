import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../State/Store";

interface CategorySheetProps {
    selectedCategory: number;
    setShowCategorySheet?: (show: boolean) => void;
}

const CategorySheet: React.FC<CategorySheetProps> = ({
    selectedCategory,
    setShowCategorySheet,
}) => {

    const navigate = useNavigate();

    const { categories } = useAppSelector(
        (state) => state.category
    );

    /*
     * Get level-1 categories.
     *
     * Example:
     *
     * Men (id: 1)
     *   ├── Topwear (parentId: 1)
     *   └── Bottomwear (parentId: 1)
     */
    const levelOneCategories = categories
        .filter(
            (category) =>
                category.parentId === selectedCategory &&
                category.enabled
        )
        .sort(
            (a, b) =>
                (a.displayOrder ?? 0) -
                (b.displayOrder ?? 0)
        );

    /*
     * Get children of a category.
     *
     * Example:
     *
     * Topwear (id: 2)
     *   ├── T-Shirts
     *   ├── Shirts
     *   └── Jackets
     */
    const getChildren = (parentId: number) => {
        return categories
            .filter(
                (category) =>
                    category.parentId === parentId &&
                    category.enabled
            )
            .sort(
                (a, b) =>
                    (a.displayOrder ?? 0) -
                    (b.displayOrder ?? 0)
            );
    };

    const handleCategoryClick = (categoryId: number) => {

        navigate(`/products/${categoryId}`);

        if (setShowCategorySheet) {
            setShowCategorySheet(false);
        }
    };

    return (
        <Box
            sx={{ zIndex: 4 }}
            className="bg-white shadow-lg lg:h-[500px] overflow-y-auto"
        >

            <div className="flex text-sm flex-wrap">

                {levelOneCategories.map(
                    (category, index) => {

                        const children =
                            getChildren(category.id);

                        return (
                            <div
                                key={category.id}
                                className={`
                                    p-5
                                    lg:w-[20%]
                                    ${
                                        index % 2 === 0
                                            ? "bg-slate-50"
                                            : "bg-white"
                                    }
                                `}
                            >

                                {/* Level 1 */}
                                <p className="text-primary-color mb-5 font-semibold">
                                    {category.name}
                                </p>

                                {/* Level 2 */}
                                <ul className="space-y-3">

                                    {children.map(
                                        (child) => (
                                            <li
                                                key={child.id}
                                                onClick={() =>
                                                    handleCategoryClick(
                                                        child.id
                                                    )
                                                }
                                                className="
                                                    hover:text-primary-color
                                                    cursor-pointer
                                                "
                                            >
                                                {child.name}
                                            </li>
                                        )
                                    )}

                                </ul>

                            </div>
                        );
                    }
                )}

            </div>

        </Box>
    );
};

export default CategorySheet;