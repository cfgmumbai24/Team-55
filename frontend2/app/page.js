import Landing from "@/components/Landing/Landing";
import { isLoggedIn } from "@/lib/isLoggedIn";

export default function Home() {
  isLoggedIn();
  return (
    <div>
      <Landing />
    </div>
  );
}
