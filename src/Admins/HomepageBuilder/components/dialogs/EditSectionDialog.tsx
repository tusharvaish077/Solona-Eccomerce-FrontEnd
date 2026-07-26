import { useEffect, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import { HomepageSection } from "../../../../types/homepage";
import SectionConfigForm from "../forms/SectionConfigForm";
import { useAppDispatch } from "../../../../State/Store";
import { updateHomepageSection } from "../../redux/homepageAsyncThunks";

interface Props {

    open: boolean;

    section: HomepageSection | null;

    onClose: () => void;

}

const EditSectionDialog = ({
    open,
    section,
    onClose
}: Props) => {

    const dispatch = useAppDispatch();

    const [formData, setFormData] =
        useState<Partial<HomepageSection>>({});

    useEffect(() => {

        if (section) {

            setFormData(section);

        }

    }, [section]);

    const handleSave = async () => {

        if (!section) return;

        await dispatch(updateHomepageSection({

            id: section.id,

            request: formData

        }));

        onClose();

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >

            <DialogTitle>

                Edit Section

            </DialogTitle>

            <DialogContent>

                <SectionConfigForm
                    value={formData}
                    onChange={setFormData}
                />

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSave}
                >
                    Save
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default EditSectionDialog;