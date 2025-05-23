import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, type ChangeEvent } from "react";
import Grid from "@mui/Joy/Grid";
import Stack from "@mui/Joy/Stack";
import Card from "./card";
const project = () => {
  const [show, setShow] = useState(1);
  function handleShow(e: ChangeEvent<any>, newShow: number) {
    console.log(e);
    if (newShow !== null) {
      setShow(newShow);
    }
  }
  const options = [
    { button: "ALL", value: 1, link: "/" },
    { button: "JavaScript", value: 2, link: "/" },
    { button: "Python", value: 3, link: "/" },
    { button: "C", value: 4, link: "/" },
    { button: "React", value: 5, link: "/" },
  ];
  const projects = [
    {
      text: "WeatherAPI",
      desc: "JavaScript, HTML, CSS",
      img: "./src/assets/react.svg",
      value: 2,
      link: "/",
    },
    {
      text: "3D Weather",
      desc: "JavaScript, blender",
      img: "",
      value: 2,
      link: "/",
    },
    { text: "Flappy Birds", desc: "Processing", img: "", value: 2, link: "/" },
    {
      text: "Pen Plotter Server",
      desc: "Flask, Python, JavaScript, Gcode, Html, Css",
      img: "",
      value: 3,
      link: "/",
    },
    {
      text: "Rock Paper Scissor",
      desc: "Python",
      img: "",
      value: 3,
      link: "/",
    },
    {
      text: "Algo Visualizer",
      desc: "Python, PyGame",
      img: "",
      value: 3,
      link: "/",
    },
    {
      text: "Py Phone",
      desc: "Python, CV2, Thinker, PIL, PyGame",
      img: "",
      value: 3,
      link: "/",
    },
    { text: "Comp Science", desc: "C", img: "", value: 4, link: "/" },
    {
      text: "BlogPost",
      desc: "Vite, JavaScript, Html, Css",
      img: "",
      value: 5,
      link: "/",
    },
    {
      text: "Todo List",
      desc: "Vite, JavaScript, Html, Css",
      img: "src/assets/projects/todo_list.png",
      value: 5,
      link: "",
    },
  ];
  return (
    <div className="" id="Project">
      <div className="flex text-center justify-center col-span-2 pt-20 text-white">
        <p className="font-poppins text-4xl pb-5 font-bold">Projects</p>
      </div>
      <Grid
        container
        spacing={2}
        columns={1}
        sx={{
          flexGrow: 1,
          maxWidth: "fit-content",
          justifySelf: "center",
          alignContent: "center",
          borderRadius: 3,
        }}
      >
        <ToggleButtonGroup
          sx={{ gap: 2, color: "white", border: 2, margin: 1 }}
          value={show}
          exclusive={true}
          onChange={handleShow}
          className="  ml-1"
        >
          {options.map((items) => {
            return (
              <ToggleButton
                sx={{
                  color: "white",
                  "&.Mui-selected": {
                    color: "#FD6F00",
                    backgroundColor: "wheat",
                  },
                  "&:hover": {
                    color: "orange",
                  },
                }}
                value={items.value}
              >
                {items.button}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Grid>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          minWidth: 100,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((items) => {
          return show === items.value ? (
            <Card
              title={items.text}
              image={items.img}
              link={items.link}
              desc={items.desc}
            />
          ) : show === 1 ? (
            <Card
              title={items.text}
              image={items.img}
              link={items.link}
              desc={items.desc}
            />
          ) : null;
        })}
      </Stack>
      {/* </ul> */}
    </div>
  );
};

export default project;
