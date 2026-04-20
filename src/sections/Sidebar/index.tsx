import { SidebarHeader } from "@/sections/Sidebar/components/SidebarHeader";
import { ChatMessages } from "@/sections/Sidebar/components/ChatMessages";
import { ChatInput } from "@/sections/Sidebar/components/ChatInput";

export const Sidebar = () => {
  return (
    <nav className="fixed bg-gray-900 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent flex flex-col h-[calc(100%_-_64px)] max-w-full outline-[3px] translate-x-[-300px] w-[300px] z-[1004] border-gray-900 border-r border-solid left-0 top-16 bottom-0">
      <div className="bg-no-repeat box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-x-hidden overflow-y-auto">
        <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px]">
          <SidebarHeader />
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
    </nav>
  );
};
