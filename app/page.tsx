"use client";
import {
  CopilotTask,

  useCopilotContext,
  useMakeCopilotReadable,
} from "@copilotkit/react-core";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import Header from "@/src/components/header";
import Sidebar from "@/src/components/sidebar";
import PreviewScreen from "@/src/components/preview-screen";
import { Input } from "@/src/components/ui/input";

export default function Home() {
  const [code, setCode] = useState<string[]>([
    `<h1 class="text-red-500">Hello World</h1>`,
  ]);
  const [codeToDisplay, setCodeToDisplay] = useState<string>(code[0] || "");
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [codeCommand, setCodeCommand] = useState<string>("");

  const readableCode = useMakeCopilotReadable(codeToDisplay);

 const generateCode = new CopilotTask({
    instructions: codeCommand,
    actions: [
      {
        name: "generateCode",
        description: "Create Code Snippet with React.js, tailwindcss.",
        parameters: [
          {
            name: "code",
            type: "string",
            description: "Code to be generated",
            required: true,
          },
        ],
        handler: async ({ code }) => {
          setCode((prev) => [...prev, code]);
          setCodeToDisplay(code);
        },
      },
    ],
  });

  const context = useCopilotContext();

  return (
    <>
<main className="flex min-h-screen bg-gray-900">
  <Sidebar>
    <div className="space-y-2">
      {code.map((c, i) => (
        <div
          key={i}
          className="w-full h-20 p-1 rounded-md bg-white border border-blue-600"
          onClick={() => setCodeToDisplay(c)}
        >
          v{i}
        </div>
      ))}
    </div>
  </Sidebar>
  <div className="flex-1 flex flex-col">
    <Header openCode={() => setShowDialog(true)} />
    <PreviewScreen html_code={readableCode || ""} />
  </div>
</main>

<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-8/12 lg:w-4/12 rounded-full bg-primary inline-flex z-10">
  <Input
    type="text"
    placeholder="Enter your code command"
    className="w-full h-13 py-4 rounded-full bg-white text-black pr-20 outline-none text-xs sm:text-lg"
    value={codeCommand}
    onChange={(e) => setCodeCommand(e.target.value)}
  />
  <button
    className="absolute text-white h-[48px] right-1 top-1/2 transform -translate-y-1/2 bg-teal-700 text-primary rounded-full px-2 sm:px-4 hover:bg-teal-800 text-sm sm:text-base"
    onClick={() => generateCode.run(context)}
  >
    Generate
  </button>
</div>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>View Code.</DialogTitle>
            <DialogDescription>
              You can use the following code to start integrating into your
              application.
            </DialogDescription>
            <div className="p-4 rounded bg-primary text-white my-2">
              {readableCode}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}