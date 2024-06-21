import { ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-teal-500 text-white p-4 flex flex-col bg-opacity-50 min-h-full " >
      <h1 className="text-lg mb-6">GPT Assistant v1.1</h1>
      <nav className="mb-8">
        <h2 className="text-sm mb-2">History</h2>
        <ul>
          <li className="mb-2 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>Table in Markdown</span>
          </li>
          <li className="mb-2 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>Hello World</span>
          </li>
          <li className="mb-2 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>Meaning of Life</span>
          </li>
        </ul>
      </nav>
      <nav>
        <h2 className="text-sm mb-2">AI Roles</h2>
        <ul>
          <li className="mb-2 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>`position` Interviewer</span>
          </li>
          <li className="mb-2 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>Socrat</span>
          </li>
          <li className="mb-2 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>Fullstack Software Developer</span>
          </li>
          <li className="mt-4 cursor-pointer hover:bg-teal-900 hover:border-l-4 hover:border-teal-500 p-2 rounded">
            <span>Add New Role</span>
          </li>
        </ul>
      </nav>
      <div className="mt-[30px]">{children}</div>
    </div>
  );
};

export default Sidebar;
