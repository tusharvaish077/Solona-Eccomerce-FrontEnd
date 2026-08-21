import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    TextField,
    Switch,
    FormControlLabel,
    Typography,
    Paper,
    Divider,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../State/Store";
import {
    fetchBrands,
    createBrand,
    updateBrand,
    deleteBrand
} from "./redux/brandAsyncThunk";

interface BrandForm {
    name: string;
    slug: string;
    logo: string;
    banner: string;
    description: string;
    website: string;
    enabled: boolean;
    displayOrder: number;
}

const initialForm: BrandForm = {
    name: "",
    slug: "",
    logo: "",
    banner: "",
    description: "",
    website: "",
    enabled: true,
    displayOrder: 1,
};

const BrandManagement: React.FC = () => {

    const dispatch = useAppDispatch();

    const { brands, loading, error } = useAppSelector(
        (state) => state.brand
    );

    const [form, setForm] = useState<BrandForm>(initialForm);

    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch]);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                name === "displayOrder"
                    ? Number(value)
                    : value,
        }));
    };

    const handleEnabledChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            enabled: event.target.checked,
        }));
    };

const handleSubmit = async (
    event: React.FormEvent
) => {

    event.preventDefault();

    const payload = {
        name: form.name,
        slug: form.slug,
        logo: form.logo,
        banner: form.banner,
        description: form.description,
        website: form.website,
        enabled: form.enabled,
        displayOrder: form.displayOrder
    };

    try {

        if (editingId) {

            await dispatch(
                updateBrand({
                    id: editingId,
                    request: payload
                })
            ).unwrap();

        } else {

            await dispatch(
                createBrand(payload)
            ).unwrap();

        }

        setForm(initialForm);
        setEditingId(null);

    } catch (error) {

        console.error(error);

    }

};
    const handleEdit = (brand: any) => {
        setEditingId(brand.id);

        setForm({
            name: brand.name ?? "",
            slug: brand.slug ?? "",
            logo: brand.logo ?? "",
            banner: brand.banner ?? "",
            description: brand.description ?? "",
            website: brand.website ?? "",
            enabled: brand.enabled ?? true,
            displayOrder: brand.displayOrder ?? 1,
        });
    };
const handleDelete = async (id: number) => {

    try {

        await dispatch(
            deleteBrand(id)
        ).unwrap();

    } catch (error) {

        console.error(error);

    }

};

    const handleCancelEdit = () => {
        setEditingId(null);
        setForm(initialForm);
    };

    return (
        <Box className="p-5">

            <Typography
                variant="h4"
                className="font-semibold mb-6"
            >
                Brand Management
            </Typography>

            {/* ================= FORM ================= */}

            <Paper className="p-6 mb-8">

                <Typography
                    variant="h6"
                    className="mb-4"
                >
                    {editingId
                        ? "Update Brand"
                        : "Create Brand"}
                </Typography>

                <Divider className="mb-5" />

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <TextField
                            label="Brand Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Slug"
                            name="slug"
                            value={form.slug}
                            onChange={handleChange}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Logo URL"
                            name="logo"
                            value={form.logo}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Banner URL"
                            name="banner"
                            value={form.banner}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Website"
                            name="website"
                            value={form.website}
                            onChange={handleChange}
                            fullWidth
                        />

                        <TextField
                            label="Display Order"
                            name="displayOrder"
                            type="number"
                            value={form.displayOrder}
                            onChange={handleChange}
                            fullWidth
                        />

                    </div>

                    <TextField
                        label="Description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        className="mt-5"
                    />

                    <FormControlLabel
                        className="mt-3"
                        control={
                            <Switch
                                checked={form.enabled}
                                onChange={handleEnabledChange}
                            />
                        }
                        label="Enabled"
                    />

                    <div className="flex gap-3 mt-5">

                        <Button
                            type="submit"
                            variant="contained"
                        >
                            {editingId
                                ? "Update Brand"
                                : "Create Brand"}
                        </Button>

                        {editingId && (
                            <Button
                                variant="outlined"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </Button>
                        )}

                    </div>

                </form>

            </Paper>

            {/* ================= BRAND LIST ================= */}

            <Paper className="p-6">

                <Typography
                    variant="h6"
                    className="mb-4"
                >
                    Existing Brands
                </Typography>

                <Divider className="mb-5" />

                {loading && (
                    <Typography>
                        Loading brands...
                    </Typography>
                )}

                {error && (
                    <Typography color="error">
                        {error}
                    </Typography>
                )}

                {!loading && brands.length === 0 && (
                    <Typography color="text.secondary">
                        No brands found.
                    </Typography>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {brands.map((brand) => (

                        <Paper
                            key={brand.id}
                            variant="outlined"
                            className="p-4"
                        >

                            {brand.logo && (
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="w-full h-32 object-contain mb-4"
                                />
                            )}

                            <Typography
                                variant="h6"
                                className="font-semibold"
                            >
                                {brand.name}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {brand.slug}
                            </Typography>

                            {brand.description && (
                                <Typography
                                    variant="body2"
                                    className="mt-2"
                                >
                                    {brand.description}
                                </Typography>
                            )}

                            <Typography
                                variant="body2"
                                className="mt-2"
                            >
                                Status:{" "}
                                {brand.enabled
                                    ? "Enabled"
                                    : "Disabled"}
                            </Typography>

                            <Typography
                                variant="body2"
                            >
                                Display Order:{" "}
                                {brand.displayOrder}
                            </Typography>

                            <div className="flex gap-2 mt-4">

                                <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={() =>
                                        handleEdit(brand)
                                    }
                                >
                                    Edit
                                </Button>

                                <Button
                                    color="error"
                                    onClick={() => handleDelete(brand.id)}
                                >
                                    Delete
                                </Button>

                            </div>

                        </Paper>

                    ))}

                </div>

            </Paper>

        </Box>
    );
};

export default BrandManagement;