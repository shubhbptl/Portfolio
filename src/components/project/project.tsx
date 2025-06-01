import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Card from "./card";
import { projectsData } from "./data";

const Project = () => {
  const [show, setShow] = useState(1);

  function handleShow(
    _event: React.MouseEvent<HTMLElement>,
    newShow: number | null
  ) {
    if (newShow !== null) {
      setShow(newShow);
    }
  }

  const options = [
    { button: "ALL", value: 1 },
    { button: "JavaScript", value: 2 },
    { button: "Python", value: 3 },
    { button: "C", value: 4 },
    { button: "React", value: 5 },
  ];

  return (
    <div className="" id="Project">
      <div className="flex text-center justify-center col-span-2 pt-20 text-white">
        <p className="font-poppins text-4xl pb-5 font-bold">Projects</p>
      </div>
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 1,
          justifyContent: "center", // ✅ Centers children horizontally
          borderRadius: 3,
          mb: 4,
        }}
      >
        <ToggleButtonGroup
          sx={{
            gap: 1,
            color: "white",
            border: 2,
            flexWrap: "wrap", // ✅ Allows wrapping on small screens
            justifyContent: "center", // ✅ Centers content within the group
          }}
          value={show}
          exclusive
          onChange={handleShow}
        >
          {options.map((item) => (
            <ToggleButton
              key={item.value}
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "#FD6F00",
                  backgroundColor: "wheat",
                },
                "&:hover": {
                  color: "orange",
                },
                fontSize: { xs: 12, sm: 14, md: 16 },
                justifyContent: "center",
                alignItems: "center",
                px: 2, // ✅ Adds some horizontal padding
              }}
              value={item.value}
            >
              {item.button}
            </ToggleButton>
          ))}
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
        {projectsData.map((project) =>
          show === 1 || show === project.value ? (
            <Card
              title={project.text}
              image={project.img}
              link={project.link}
              lang={project.lang}
              desc={project.desc}
            />
          ) : null
        )}
      </Stack>
    </div>
  );
};

export default Project;
