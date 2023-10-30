import PsychologyIcon from "@mui/icons-material/Psychology";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CodeIcon from "@mui/icons-material/Code";

export const serviceData = [
  {
    id: 1,
    icon: (
      <PsychologyIcon
        sx={{
          fontSize: "60px",
          color: "#1877f2",
        }}
      />
    ),
    title: "Brand Strategy & Art Direction",
    description:
      "Crafting compelling brand identities through strategic vision and captivating art direction.",
  },
  {
    id: 2,
    icon: (
      <DesignServicesOutlinedIcon
        sx={{
          fontSize: "60px",
          color: "#1877f2",
        }}
      />
    ),
    title: "UX/UI Design",
    description:
      "Offering intuitive and visually captivating UX/UI design services for a seamless digital journey.",
  },
  {
    id: 3,
    icon: (
      <CodeIcon
        sx={{
          fontSize: "60px",
          color: "#1877f2",
        }}
      />
    ),
    title: "Web Development",
    description:
      "Transforming ideas into stunning, functional websites with my expert web development services.",
  },
];
