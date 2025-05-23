import Card from "@mui/joy/Card"; // Main card container
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Display {
  title: string;
  image: string;
  link: string;
  desc: string;
}

const ProjectCard = ({ title, image, link, desc }: Display) => {
  return (
    <div className="pt-5 self-center">
      <Card
        variant="outlined"
        sx={{
          bgcolor: "transparent",
          flexGrow: 1,
          flexWrap: "wrap",
          flexShrink: 1,
          justifySelf: "center",
          textAlign: "center",
          alignItems: "center",
          gap: 0,
          "&:hover": {
            border: 5,
            borderColor: "#FD6F00",
          },
        }}
      >
        <img
          className="max-w-fit max-h-fit"
          src={image}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              overflow: "hidden",
              flexWrap: "wrap",
              color: "white",
              "&:hover": {
                color: "#FD6F00",
              },
            }}
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={link} target="_blank" className="hover:text-[#d8c5a3]">
              Github
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
