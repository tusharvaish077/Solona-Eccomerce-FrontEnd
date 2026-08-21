import React, { useEffect, useState } from "react";
import {
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useAppDispatch, useAppSelector } from "../../../State/Store";

import {
    Category,
    createCategory,
    deleteCategory,
    disableCategory,
    enableCategory,
    fetchCategories,
    UpdateCategoryRequest,
    CreateCategoryRequest,
    updateCategory
} from "../redux/categoryAsyncThunks";

import CategoryForm from "./CategoryForm";

const CategoryManagement = () => {

    const dispatch = useAppDispatch();

    const { categories, loading } = useAppSelector(
        state => state.category
    );

    const [showForm, setShowForm] = useState(false);

    const [editingCategory, setEditingCategory] =
        useState<Category | null>(null);

    const jwt = localStorage.getItem("jwt");

    useEffect(() => {
        dispatch(fetchCategories(jwt));
    }, [dispatch, jwt]);

    const handleSubmit = (
        values: CreateCategoryRequest | UpdateCategoryRequest
    ) => {

        if (editingCategory) {

            dispatch(
                updateCategory({
                    id: editingCategory.id,
                    request: values as UpdateCategoryRequest,
                    jwt
                })
            );

        } else {

            dispatch(
                createCategory({
                    request: values as CreateCategoryRequest,
                    jwt
                })
            );
        }

        setShowForm(false);
        setEditingCategory(null);
    };

    const handleEdit = (category: Category) => {
        setEditingCategory(category);
        setShowForm(true);
    };

    const handleDelete = (id: number) => {

        if (window.confirm("Delete this category?")) {
            dispatch(deleteCategory({ id, jwt }));
        }
    };

    const handleToggle = (category: Category) => {

        if (category.enabled) {
            dispatch(disableCategory({
                id: category.id,
                jwt
            }));
        } else {
            dispatch(enableCategory({
                id: category.id,
                jwt
            }));
        }
    };

    return (
        <div className="p-6">

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-2xl font-semibold">
                    Category Management
                </h1>

                <Button
                    variant="contained"
                    onClick={() => {
                        setEditingCategory(null);
                        setShowForm(true);
                    }}
                >
                    + Add Category
                </Button>

            </div>

            {showForm && (
                <Paper className="mb-6">

                    <CategoryForm
                        categories={categories}
                        editingCategory={editingCategory}
                        onSubmit={handleSubmit}
                        onCancel={() => {
                            setShowForm(false);
                            setEditingCategory(null);
                        }}
                    />

                </Paper>
            )}

            <Paper>

                {loading ? (
                    <div className="flex justify-center p-10">
                        <CircularProgress />
                    </div>
                ) : (

                    <Table>

                        <TableHead>
                            <TableRow>

                                <TableCell>Name</TableCell>
                                <TableCell>Parent</TableCell>
                                <TableCell>Order</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">
                                    Actions
                                </TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {categories.map(category => (

                                <TableRow key={category.id}>

                                    <TableCell>
                                        {category.name}
                                    </TableCell>

                                    <TableCell>
                                        {category.parentName || "—"}
                                    </TableCell>

                                    <TableCell>
                                        {category.displayOrder}
                                    </TableCell>

                                    <TableCell>
                                        {category.enabled
                                            ? "Enabled"
                                            : "Disabled"}
                                    </TableCell>

                                    <TableCell align="right">

                                        <IconButton
                                            onClick={() =>
                                                handleEdit(category)
                                            }
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <Button
                                            size="small"
                                            onClick={() =>
                                                handleToggle(category)
                                            }
                                        >
                                            {category.enabled
                                                ? "Disable"
                                                : "Enable"}
                                        </Button>

                                        <IconButton
                                            color="error"
                                            onClick={() =>
                                                handleDelete(category.id)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>

                                    </TableCell>

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>

                )}

            </Paper>

        </div>
    );
};

export default CategoryManagement;