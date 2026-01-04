import Header from "./_components/Header/Header";
import MainBody from "./_components/HomePage/MainBody";
import SideBar from "./_components/HomePage/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <MainBody />
    </div>
  );
}
