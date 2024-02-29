import { MainItems2 } from "@/components/MainItems2";
export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-white flex items-center justify-center">
        <MainItems2 />
      </div>
      <div className="flex-1 bg-[#0166FF]"></div>
    </div>
  );
}
