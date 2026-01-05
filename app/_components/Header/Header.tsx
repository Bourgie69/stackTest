import SearchIcon from "@/app/_icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <div
      className="bg-white flex items-center justify-between h-15 px-5 w-full border-b"
    >
      <p className="text-black">123</p>
      <div className="flex border rounded-lg items-center py-1 h-10 px-2 w-[60%]">
        <SearchIcon />
        <Input
          type="text"
          className="border-input border-0 shadow-none focus-visible:ring-0"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-2">
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};
export default Header;
