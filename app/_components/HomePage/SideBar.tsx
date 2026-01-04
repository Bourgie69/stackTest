import { Button } from "@/components/ui/button";
import { HomeIcon, TagsIcon } from "lucide-react";

const SideBar = () => {
  return (
    <div>
      <aside className="sticky border-r min-w-40 w-1/5 h-screen flex flex-col items-start gap-4 py-4">
        <Button variant="ghost" className="cursor-pointer w-full">
          <HomeIcon />
          Home
        </Button>
        <Button variant="ghost" className="cursor-pointer w-full">
          <TagsIcon />
          About
        </Button>
      </aside>
    </div>
  );
};
export default SideBar;
