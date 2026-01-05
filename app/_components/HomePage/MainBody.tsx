import { Button } from "@/components/ui/button";
import SideBar from "./SideBar";
import Widgets from "./Widgets";

const MainBodyHeader = () => {
  return (
    <div className="px-10 py-6 border-b flex flex-col">
      <div className="flex justify-between">
        <p className="text-2xl">Top Questions</p>
        <Button className="bg-blue-500 ">Make a Post</Button>
      </div>
      <div className="flex mt-10 justify-between">
        <div>22,211 questions</div>
        <div className="border rounded-md flex items-center gap-2">
          <Button variant="ghost">123</Button>
          <Button variant="ghost">123</Button>
          <Button variant="ghost">123</Button>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  return (
    <div className="flex flex-col">
      {/* Main Content Here */}
      <div className="border-b h-60 px-10 py-5">
        <p className="text-lg font-semibold">Article Title</p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          nobis praesentium laborum aperiam perferendis, ratione, vel debitis
          quod iusto nemo itaque sit eos amet, tenetur quis ipsa officia porro.
        </p>
      </div>
      <div className="border-b h-60 px-10 py-5">
        <p className="text-lg font-semibold">Article Title</p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          nobis praesentium laborum aperiam perferendis, ratione, vel debitis
          quod iusto nemo itaque sit eos amet, tenetur quis ipsa officia porro.
        </p>
      </div>
      <div className="border-b h-60 px-10 py-5">
        <p className="text-lg font-semibold">Article Title</p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          nobis praesentium laborum aperiam perferendis, ratione, vel debitis
          quod iusto nemo itaque sit eos amet, tenetur quis ipsa officia porro.
        </p>
      </div>
      <div className="border-b h-60 px-10 py-5">
        <p className="text-lg font-semibold">Article Title</p>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
          nobis praesentium laborum aperiam perferendis, ratione, vel debitis
          quod iusto nemo itaque sit eos amet, tenetur quis ipsa officia porro.
        </p>
      </div>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="bg-white h-screen w-full overflow-hidden flex">
      <SideBar />
      <div className="flex-1 flex overflow-y-auto">
        <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <MainBodyHeader />
          <Articles />
        </div>
        <Widgets />
      </div>
    </div>
  );
};
export default MainBody;
