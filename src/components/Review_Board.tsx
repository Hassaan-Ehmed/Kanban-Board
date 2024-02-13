import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  _backToDoing,
  _goToDone,
  _removeTaskFromBacklog,
  _removeTaskFromDoing,
} from "../redux/slices/kanban-board";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function Review_Board() {
  const [showText, setShowText] = useState(false);
  const [currentDescIndex, setCurrentDescIndex] = useState(0);

  const storeState: any = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();

  const tasks = storeState.review_tasks;

  console.table(tasks);

  //  BY DOING
  const handleDragOverByDoing = (event: any) => {
    event.preventDefault();

    console.log("DRAG OVER...");
  };

  const handleDroppedByDoing = (event: any) => {
    event.preventDefault();

    if (event.dataTransfer.getData("doingItem") !== "") {
      let index = parseInt(event.dataTransfer.getData("doingItem"));

      dispatch(_removeTaskFromDoing(index));

      event.dataTransfer.setData("doingItem", "");
    }
  };

  //  ON REVIEW

  const handleDragsStartOnReview = (event: any, index: number) => {
    event.dataTransfer.setData("reviewItem", index);
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
        onDragOver={(e) => handleDragOverByDoing(e)}
        onDrop={(e) => handleDroppedByDoing(e)}
      >
        <div
          style={{
            width: "100%",
            minHeight: "calc(78vh - 88%)",
            backgroundColor: "#4FF795",
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
            Review
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
            draggable={true}
            onDragStart={(e) => handleDragsStartOnReview(e, index)}
          >
            <div
              style={{
                width: "fit-content",
                cursor: "grab",
                marginLeft: "auto",
                marginRight: "5px",
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 999,
              }}
            >
              <DragIndicatorIcon />
            </div>
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
                  },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <>
                    <strong>Created by: </strong> {task.name ?? "---"}
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
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1.5, mb: 0.8 }}
              onClick={(e) => dispatch(_backToDoing(index))}
            >
              <ArrowBackIosIcon />
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            {/* add spaces by HTML entities*/}
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1.5, mb: 0.8 }}
              onClick={(e) => dispatch(_goToDone(index))}
            >
              <ArrowForwardIosIcon />
            </Button>
          </List>
        ))}
      </div>
    </>
  );
}
