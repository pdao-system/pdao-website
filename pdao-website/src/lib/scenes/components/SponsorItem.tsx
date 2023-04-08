import React from "react";
import { makeStyles } from "@mui/styles";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";


interface SponsorItemProps {
  sponsor: { name: string; amount: string; message: string };
}

const SponsorItem = ({ sponsor }: SponsorItemProps) => {

  return (
    <ListItem >
      
      <ListItemText primary={sponsor.name} secondary={sponsor.message} />
    </ListItem>
  );
};

export default SponsorItem;
