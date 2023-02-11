import { useState } from "react";
import "./settings.scss";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
function Settings() {
  let [nameuser, setNameUser] = useState("Al Pacino");
  let [userInfo, setUserInfo] = useState({
    name: nameuser,
  });

  function PostData(data) {
    axios
      .post("/user", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <section className="settings">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserInfo({
            name: nameuser,
            age: 23,
          });
          PostData(userInfo);
          setNameUser("");
          console.log(userInfo);
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Required"
          className="inputname"
          onInput={(e) => {
            setNameUser(e.target.value);
            console.log(userInfo);
          }}
          value={nameuser}
        />
        <p>{nameuser}</p>
        <button type="submit">Submit</button>
      </form>
      <Box className="box">
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </section>
  );
}

export default Settings;
