import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { _goToDone } from "../redux/slices/kanban-board";

export default function Done_Board() {
  const [showText, setShowText] = useState(false);
  const [currentDescIndex, setCurrentDescIndex] = useState(0);

  const storeState: any = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();

  const tasks = storeState.done_tasks ?? [];
  console.table(tasks);

  // BY REVIEW
  const handleDragOverByReview = (event: any) => {
    event.preventDefault();
  };

  const handleDroppedByReview = (event: any) => {
    if (event.dataTransfer.getData("reviewItem") !== "") {
      let index = parseInt(event.dataTransfer.getData("reviewItem"));

      dispatch(_goToDone(index));

      event.dataTransfer.setData("reviewItem", "");
    }
  };

  return (
    <>
      <div
        style={{
          height: "78vh",
          width: "22vw",
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onDragOver={(e) => handleDragOverByReview(e)}
        onDrop={(e) => handleDroppedByReview(e)}
      >
        <div
          style={{
            width: "100%",
            minHeight: "calc(78vh - 88%)",
            backgroundColor: "#5ae4f6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <p
            style={{
              fontSize: "2.2vw",
              fontWeight: "bold",
              color: "#0B2C4D",
            }}
          >
            Done
          </p>
        </div>

        {tasks.map((task: any, index: number) => (
          <List
            key={index}
            sx={{
              width: "100%",
              maxWidth: "20vw",
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: "-2px 9px 19px -14px black",
              alignSelf: "center",
              marginTop: "10px",
              border: "1px solid black",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <strong>Title: </strong>
                    {task.title ?? "---"}
                  </>
                }
                sx={{
                  "& .MuiTypography-root": {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textDecoration: "line-through",
                  },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <React.Fragment>
                    <strong>Desc: </strong>{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentDescIndex(index as number);

                        if (currentDescIndex == index) {
                          setShowText(!showText);
                        }
                      }}
                    >
                      {task.desc ?? "---"}
                    </span>
                  </React.Fragment>
                }
                sx={{
                  "& .MuiTypography-root": {
                    textOverflow: `${
                      showText == true && currentDescIndex === index
                        ? ""
                        : "ellipsis"
                    }`,
                    overflow: `${
                      showText == true && currentDescIndex === index
                        ? "visible"
                        : "hidden"
                    }`,
                    whiteSpace: `${
                      showText == true && currentDescIndex === index
                        ? "normal"
                        : "nowrap"
                    }`,
                    wordWrap: `${
                      showText == true && currentDescIndex === index
                        ? "break-word"
                        : "normal"
                    }`,
                    textDecoration: "line-through",
                  },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <strong>Created by: </strong> {task.name}
                  </>
                }
                sx={{
                  "& .MuiTypography-root": {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <strong>Created at: </strong>
                    <span style={{ fontSize: "0.9vw", color: "red" }}>
                      {" "}
                      <b>{task.timeStamp}</b>
                    </span>
                  </>
                }
                sx={{
                  "& .MuiTypography-root": {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  },
                }}
              />
            </ListItem>
            <Divider />
            <Button type="submit" variant="contained" sx={{ mt: 1.5, mb: 0.8 }}>
              <DoneAllIcon />
            </Button>
          </List>
        ))}
      </div>
    </>
  );
}
