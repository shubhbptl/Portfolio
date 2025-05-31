import Card from "@mui/joy/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Display {
  title: string;
  image: string;
  link: string;
  lang: string;
  desc: string;
}

const ProjectCard = ({ title, image, link, lang, desc }: Display) => {
  return (
    <div className="pt-5 flex justify-center">
      <Card
        variant="outlined"
        sx={{
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          maxWidth: 400,
          transition: "border-color 0.3s",
          "&:hover": { border: "2px solid #FD6F00" },
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-[100%] h-[100%] object-cover"
          loading="lazy"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              color: "#FD6F00",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontSize: 26,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              mt: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              fontSize: 20,
            }}
          >
            {lang}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              mt: 1,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "horizontal",
              fontSize: 20,
            }}
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{
              color: "#d8c5a3",
              "&:hover": { color: "#F5DEB3" },
              fontSize: 20,
            }}
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
