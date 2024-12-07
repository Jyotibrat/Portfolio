// links
import Link from "next/link";

// icons
import {
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine,
  RiCodeBoxLine,
} from "react-icons/ri";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/bindupautra-jyotibrat-a65693289/"} // Replace with your LinkedIn URL
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine size={30} />
      </Link>
      <Link
        href={"https://github.com/Jyotibrat"} // Replace with your GitHub URL
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine size={30} />
      </Link>
      <Link
        href={"https://x.com/B_Jyotibrat"} // Replace with your Twitter URL
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine size={30} />
      </Link>
      <Link
        href={"https://leetcode.com/u/bjyotibrat/"} // Replace with your LeetCode URL
        className="hover:text-accent transition-all duration-300"
      >
        <SiLeetcode size={30} />
      </Link>
      <Link
        href={"https://www.codechef.com/users/bjyotibrat"} // Replace with your CodeChef URL
        className="hover:text-accent transition-all duration-300"
      >
        <SiCodechef size={30} />
      </Link>
      <Link
        href={"https://www.hackerrank.com/profile/bjyotibrat"} // Replace with your HackerRank URL
        className="hover:text-accent transition-all duration-300"
      >
        <SiHackerrank size={30} />
      </Link>
    </div>
  );
};

export default Socials;