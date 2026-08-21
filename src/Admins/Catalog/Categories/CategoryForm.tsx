import React, { useEffect } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import { useFormik } from "formik";

import {
    Category,
    CreateCategoryRequest,
    UpdateCategoryRequest
} from "../redux/categoryAsyncThunks";

interface Props {
    categories: Category[];
    editingCategory?: Category | null;
    onSubmit: (
        values: CreateCategoryRequest | UpdateCategoryRequest
    ) => void;
    onCancel: () => void;
}

const CategoryForm: React.FC<Props> = ({
    categories,
    editingCategory,
    onSubmit,
    onCancel
}) => {

    const formik = useFormik({
        initialValues: {
            name: editingCategory?.name || "",
            image: editingCategory?.image || "",
            parentId: editingCategory?.parentId ?? "",
            displayOrder: editingCategory?.displayOrder ?? 0,
            enabled: editingCategory?.enabled ?? true
        },

        enableReinitialize: true,

        onSubmit: (values) => {
            onSubmit({
                name: values.name,
                image: values.image,
                parentId:
                    values.parentId === ""
                        ? null
                        : Number(values.parentId),
                displayOrder: Number(values.displayOrder),
                enabled: values.enabled
            });
        }
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="space-y-4 p-4"
        >

            <TextField
                fullWidth
                label="Category Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
            />

            <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
            />

            <FormControl fullWidth>
                <InputLabel>Parent Category</InputLabel>

                <Select
                    name="parentId"
                    value={formik.values.parentId}
                    onChange={formik.handleChange}
                    label="Parent Category"
                >
                    <MenuItem value="">
                        <em>None (Root Category)</em>
                    </MenuItem>

                    {categories
                        .filter(category =>
                            category.id !== editingCategory?.id
                        )
                        .map(category => (
                            <MenuItem
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>

            <TextField
                fullWidth
                type="number"
                label="Display Order"
                name="displayOrder"
                value={formik.values.displayOrder}
                onChange={formik.handleChange}
            />

            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>

                <Select
                    name="enabled"
                    value={formik.values.enabled ? "true" : "false"}
                    onChange={(e) =>
                        formik.setFieldValue(
                            "enabled",
                            e.target.value === "true"
                        )
                    }
                    label="Status"
                >
                    <MenuItem value="true">Enabled</MenuItem>
                    <MenuItem value="false">Disabled</MenuItem>
                </Select>
            </FormControl>

            <div className="flex gap-3">
                <Button
                    type="submit"
                    variant="contained"
                >
                    {editingCategory
                        ? "Update Category"
                        : "Create Category"}
                </Button>

                <Button
                    type="button"
                    variant="outlined"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
            </div>

        </form>
    );
};

export default CategoryForm;