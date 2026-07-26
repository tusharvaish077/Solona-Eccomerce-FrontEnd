import { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    Button
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { HomepageSection } from "../../../types/homepage";
import { useAppDispatch } from "../../../State/Store";

import {
    enableHomepageSection,
    disableHomepageSection
} from "../redux/homepageAsyncThunks";

import EditSectionDialog from "./dialogs/EditSectionDialog";
import DeleteSectionDialog from "./dialogs/DeleteSectionDialog";

interface Props {

    section: HomepageSection;

}

const HomepageSectionCard = ({ section }: Props) => {

    const dispatch = useAppDispatch();

    const [openEdit, setOpenEdit] = useState(false);

    const [openDelete, setOpenDelete] = useState(false);

    const handleToggle = () => {

        if (section.enabled) {

            dispatch(disableHomepageSection(section.id));

        } else {

            dispatch(enableHomepageSection(section.id));

        }

    };

    return (

        <>

            <Card>

                <CardContent>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <div>

                            <Typography variant="h6">

                                {section.title}

                            </Typography>

                            <Typography color="text.secondary">

                                {section.sectionType}

                            </Typography>

                            <Typography>

                                Display Order : {section.displayOrder}

                            </Typography>

                        </div>

                        <Chip
                            label={
                                section.enabled
                                    ? "Enabled"
                                    : "Disabled"
                            }
                            color={
                                section.enabled
                                    ? "success"
                                    : "default"
                            }
                        />

                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        mt={3}
                    >

                        <Button
                            startIcon={<EditIcon />}
                            variant="outlined"
                            onClick={() => setOpenEdit(true)}
                        >
                            Edit
                        </Button>

                        <Button
                            startIcon={
                                section.enabled
                                    ? <VisibilityOffIcon />
                                    : <VisibilityIcon />
                            }
                            variant="outlined"
                            onClick={handleToggle}
                        >
                            {section.enabled
                                ? "Disable"
                                : "Enable"}
                        </Button>

                        <Button
                            startIcon={<DeleteIcon />}
                            color="error"
                            variant="contained"
                            onClick={() => setOpenDelete(true)}
                        >
                            Delete
                        </Button>

                    </Stack>

                </CardContent>

            </Card>

            <EditSectionDialog

                open={openEdit}

                section={section}

                onClose={() => setOpenEdit(false)}

            />

            <DeleteSectionDialog

                open={openDelete}

                sectionId={section.id}

                sectionTitle={section.title}

                onClose={() => setOpenDelete(false)}

            />

        </>

    );

};

export default HomepageSectionCard;