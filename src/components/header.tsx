import { CodeXmlIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = (props: { openCode: () => void }) => {
  return (
    <div className="bg-gray-800 inline-flex justify-between items-center px-4 h-20 mb-[10px] text-white col-span-full ">
      <h1 className="text-xs sm:text-lg font-bold ml-[10px] sm:ml-[10px] mr-2 sm:mr-0">Copilot Kit</h1>
      <div className="flex gap-x-2">
        <Button
          className="px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm sm:text-base"
          variant={"default"}
          onClick={props.openCode}
        >
          <span>Code</span> <CodeXmlIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
