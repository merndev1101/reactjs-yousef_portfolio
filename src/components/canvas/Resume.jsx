import { Link } from "react-router-dom";
import CV from "../../assets/Mohamad_Resume.pdf";

const Resume = () => {
  return (
    <div className="justify-center flex">
      <Link href={CV} download className="btn">
        Download CV
      </Link>
    </div>
  );
};

export default Resume;
