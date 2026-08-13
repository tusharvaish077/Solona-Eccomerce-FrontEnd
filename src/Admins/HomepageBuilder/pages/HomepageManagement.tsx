import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchHomepageSections } from "../redux/homepageAsyncThunks";

import HomepageSectionCard from "../components/HomepageSectionCard";
import AddSectionDialog from "../components/dialogs/AddSectionDialog";

const HomepageManagement = () => {

    const dispatch = useAppDispatch();

    const { sections, loading, error } = useAppSelector(
        state => state.homepageAdmin
    );

    const [openAddDialog, setOpenAddDialog] = useState(false);

    useEffect(() => {

        dispatch(fetchHomepageSections());

    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex justify-center mt-20">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 p-5">
                {error}
            </div>
        );
    }

    return (

        <div className="p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Homepage Builder
                </h1>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => setOpenAddDialog(true)}
                >
                    Add Section
                </Button>

            </div>

            <div className="space-y-4">

                {sections.map(section => (

                    <HomepageSectionCard
                        key={section.id}
                        section={section}
                    />

                ))}

            </div>

            <AddSectionDialog
                open={openAddDialog}
                onClose={() => setOpenAddDialog(false)}
            />

        </div>

    );

};

export default HomepageManagement;