import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import { useAppDispatch } from "../../../../State/Store";
import { createHomepageSection } from "../../redux/homepageAsyncThunks";
import SectionConfigForm from "../forms/SectionConfigForm";
import { HomepageSection } from "../../../../types/homepage";

interface AddSectionDialogProps {

    open: boolean;

    onClose: () => void;

}

const AddSectionDialog: React.FC<AddSectionDialogProps> = ({
    open,
    onClose
}) => {

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<Partial<HomepageSection>>({

        title: "",

        sectionType: undefined,

        displayOrder: 1,

        enabled: true,

        config: {}

    });

    const handleSave = async () => {

        await dispatch(createHomepageSection(formData));

        onClose();

        setFormData({

            title: "",

            sectionType: undefined,

            displayOrder: 1,

            enabled: true,

            config: {}

        });

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >

            <DialogTitle>

                Add Homepage Section

            </DialogTitle>

            <DialogContent>

                <SectionConfigForm
                    value={formData}
                    onChange={setFormData}
                />

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onClose}
                >
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

export default AddSectionDialog;