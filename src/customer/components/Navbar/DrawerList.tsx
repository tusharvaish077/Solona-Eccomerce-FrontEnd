import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { mainCategory } from "../../../data/category/mainCategory";
import CategorySheet from "./CategorySheet";

type DrawerListProps = {
  // Accept optional boolean so callers that pass () => void or (b:boolean) => void both work.
  toggleDrawer: (open?: boolean) => void;
};

const DrawerList: React.FC<DrawerListProps> = ({ toggleDrawer }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // call toggleDrawer with false to close, but the signature allows empty call too
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText
              primary={<h1 className="logo text-2xl text-[#00927c]">Zosh Bazzar</h1>}
            />
          </ListItemButton>
        </ListItem>
        <Divider />

        {mainCategory.map((item) => (
          <ListItem key={item.categoryId ?? item.name} disablePadding>
            <ListItemButton
              onClick={() => {
                setSelectedCategory(item.categoryId);
                // If you want the drawer to close on selection, uncomment:
                // toggleDrawer(false);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {selectedCategory && (
        <div className="categorySheet absolute top-[4.41rem] left-0 right-0 h-[400px]">
          <CategorySheet
            selectedCategory={selectedCategory}
            // pass toggleDrawer down if CategorySheet needs to close drawer
            toggleDrawer={toggleDrawer}
          />
        </div>
      )}
    </Box>
  );
};

export default DrawerList;
