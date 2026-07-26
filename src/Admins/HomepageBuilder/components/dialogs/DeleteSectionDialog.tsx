import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@mui/material";

import { useAppDispatch } from "../../../../State/Store";
import { deleteHomepageSection } from "../../redux/homepageAsyncThunks";

interface Props {

    open: boolean;

    sectionId: number | null;

    sectionTitle: string;

    onClose: () => void;

}

const DeleteSectionDialog = ({
    open,
    sectionId,
    sectionTitle,
    onClose
}: Props) => {

    const dispatch = useAppDispatch();

    const handleDelete = async () => {

        if (sectionId == null) return;

        await dispatch(deleteHomepageSection(sectionId));

        onClose();

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
        >

            <DialogTitle>

                Delete Section

            </DialogTitle>

            <DialogContent>

                <DialogContentText>

                    Are you sure you want to delete
                    <strong> {sectionTitle} </strong>
                    ?

                </DialogContentText>

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>

                    Cancel

                </Button>

                <Button
                    color="error"
                    variant="contained"
                    onClick={handleDelete}
                >

                    Delete

                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default DeleteSectionDialog;