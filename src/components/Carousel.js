import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

export default function Images(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      path: "../assets/image 409.png",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      path: "../assets/image 410.png",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      path: "../assets/image 410 (1).png",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      path: "../assets/image 409 (1).png",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      path: "../assets/image 410 (2).png",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      {
        <Box
          component="img"
          sx={{
            height: "675px",
            flexShrink: 0,
          }}
          alt={props.item.name}
          src={props.item.path}
        />
      }
    </Paper>
  );
}
