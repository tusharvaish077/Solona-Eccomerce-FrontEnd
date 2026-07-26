import React from "react";
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Switch,
    Box
} from "@mui/material";

import { HomepageSection, SectionType } from "../../../../types/homepage";
import ConfigEditorFactory from "../configEditors/ConfigEditorFactory";

interface SectionConfigFormProps {

    value: Partial<HomepageSection>;

    onChange: (value: Partial<HomepageSection>) => void;

}

const SectionConfigForm: React.FC<SectionConfigFormProps> = ({
    value,
    onChange
}) => {

    const handleFieldChange = (
        field: keyof HomepageSection,
        fieldValue: any
    ) => {

        onChange({
            ...value,
            [field]: fieldValue
        });

    };

    const handleConfigChange = (config: any) => {

        onChange({
            ...value,
            config
        });

    };

    return (

        <Box display="flex" flexDirection="column" gap={3}>

            <TextField
                label="Section Title"
                fullWidth
                value={value.title || ""}
                onChange={(e) =>
                    handleFieldChange("title", e.target.value)
                }
            />

            <FormControl fullWidth>

                <InputLabel>
                    Section Type
                </InputLabel>

                <Select
                    value={value.sectionType || ""}
                    label="Section Type"
                    onChange={(e) =>
                        handleFieldChange("sectionType", e.target.value)
                    }
                >

                    {Object.values(SectionType).map(type => (

                        <MenuItem
                            key={type}
                            value={type}
                        >
                            {type}
                        </MenuItem>

                    ))}

                </Select>

            </FormControl>

            <TextField
                type="number"
                label="Display Order"
                fullWidth
                value={value.displayOrder ?? ""}
                onChange={(e) =>
                    handleFieldChange(
                        "displayOrder",
                        Number(e.target.value)
                    )
                }
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={value.enabled ?? true}
                        onChange={(e) =>
                            handleFieldChange(
                                "enabled",
                                e.target.checked
                            )
                        }
                    />
                }
                label="Enabled"
            />

            {value.sectionType && (

                <ConfigEditorFactory
                    sectionType={value.sectionType}
                    config={value.config || {}}
                    onChange={handleConfigChange}
                />

            )}

        </Box>

    );

};

export default SectionConfigForm;