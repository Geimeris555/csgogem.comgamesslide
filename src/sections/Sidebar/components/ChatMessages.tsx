import { ChatMessage } from "@/sections/Sidebar/components/ChatMessage";
import { TipMessage } from "@/sections/Sidebar/components/TipMessage";

export const ChatMessages = () => {
  return (
    <div className="relative bg-no-repeat box-border caret-transparent flex flex-col grow min-w-[auto] outline-[3px]">
      <div className="relative bg-no-repeat box-border caret-transparent gap-x-3 flex flex-col min-w-[auto] outline-[3px] gap-y-3 overflow-hidden pt-16">
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="71"
          username="BigChungus123"
          messageContent="holy rape again"
        />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              baited again
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="40"
          username="Daantje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              Doe normaal?
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent="useless"
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="40"
          username="Daantje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              Mode{" "}
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="40"
          username="Daantje"
          messageContent="you keep hitting so do normal "
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              was thinking titan holo broooo
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-violet-950 bg-no-repeat border-b-neutral-200 border-l-violet-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="44"
          username="MRMOCHInib"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              1
            </span>
          }
        />
        <TipMessage />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))]"
          level="57"
          username="Primess"
          battleCard={{
            href: "https://csgogem.com/games/battles/26320450",
            layoutClass: "text-red-500",
            iconVariantClass1:
              "relative text-base italic items-center bg-red-500 bg-no-repeat box-border caret-transparent flex h-4 justify-center tracking-[0.5px] leading-4 [mask-size:100%_100%] min-h-[auto] min-w-4 outline-[3px] break-words text-center align-middle w-4",
            iconVariantClass2:
              "relative text-sm italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3.5 justify-center tracking-[0.249999px] leading-[14px] [mask-size:100%_100%] min-w-3.5 opacity-50 outline-[3px] break-words text-center align-middle w-3.5",
            slots: [
              {
                iconClass1:
                  "relative text-base italic items-center bg-red-500 bg-no-repeat box-border caret-transparent flex h-4 justify-center tracking-[0.5px] leading-4 [mask-size:100%_100%] min-h-[auto] min-w-4 outline-[3px] break-words text-center align-middle w-4",
                iconClass2:
                  "relative text-sm italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3.5 justify-center tracking-[0.249999px] leading-[14px] [mask-size:100%_100%] min-w-3.5 opacity-50 outline-[3px] break-words text-center align-middle w-3.5",
                isActive: true,
              },
              {
                iconClass1:
                  "relative text-base italic items-center bg-red-500 bg-no-repeat box-border caret-transparent flex h-4 justify-center tracking-[0.5px] leading-4 [mask-size:100%_100%] min-h-[auto] min-w-4 outline-[3px] break-words text-center align-middle w-4",
                iconClass2:
                  "relative text-sm italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3.5 justify-center tracking-[0.249999px] leading-[14px] [mask-size:100%_100%] min-w-3.5 opacity-50 outline-[3px] break-words text-center align-middle w-3.5",
                isActive: true,
              },
              {
                iconClass1:
                  "relative text-base italic items-center bg-red-500 bg-no-repeat box-border caret-transparent flex h-4 justify-center tracking-[0.5px] leading-4 [mask-size:100%_100%] min-h-[auto] min-w-4 outline-[3px] break-words text-center align-middle w-4",
                iconClass2:
                  "relative text-sm italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3.5 justify-center tracking-[0.249999px] leading-[14px] [mask-size:100%_100%] min-w-3.5 opacity-50 outline-[3px] break-words text-center align-middle w-3.5",
                isActive: true,
              },
              {
                iconClass1:
                  "relative text-base italic items-center bg-red-500 bg-no-repeat box-border caret-transparent flex h-4 justify-center tracking-[0.5px] leading-4 [mask-size:100%_100%] min-h-[auto] min-w-4 outline-[3px] break-words text-center align-middle w-4",
                iconClass2:
                  "relative text-sm italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3.5 justify-center tracking-[0.249999px] leading-[14px] [mask-size:100%_100%] min-w-3.5 opacity-50 outline-[3px] break-words text-center align-middle w-3.5",
                isActive: true,
              },
              {
                iconClass1:
                  "relative text-base italic items-center bg-red-500 bg-no-repeat box-border caret-transparent flex h-4 justify-center tracking-[0.5px] leading-4 [mask-size:100%_100%] min-h-[auto] min-w-4 outline-[3px] break-words text-center align-middle w-4",
                iconClass2:
                  "relative text-sm italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3.5 justify-center tracking-[0.249999px] leading-[14px] [mask-size:100%_100%] min-w-3.5 opacity-50 outline-[3px] break-words text-center align-middle w-3.5",
                isActive: false,
              },
            ],
            count: "4",
            cost: "53,10",
          }}
        />
        <ChatMessage
          levelContainerClass="bg-blue-950 border-l-blue-300/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(104,164,255))]"
          level="29"
          username="Codyb0y"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              W Fabi
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-pink-950 border-l-red-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))]"
          level="71"
          username="BigChungus123"
          battleCard={{
            href: "https://csgogem.com/games/battles/26320484",
            layoutClass: "",
            iconVariantClass1:
              "text-xl font-bold bg-zinc-400 h-5 tracking-[0.25px] leading-5 min-w-5 w-5",
            iconVariantClass2:
              "relative italic items-center bg-zinc-400 bg-no-repeat box-border caret-transparent inline-flex h-3 justify-center leading-3 [mask-size:100%_100%] min-w-3 opacity-50 outline-[3px] break-words text-center align-middle w-3",
            slots: [
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: true },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
            ],
            count: "10",
            cost: "393,17",
          }}
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-blue-950 bg-no-repeat border-b-neutral-200 border-l-blue-300/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(104,164,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="29"
          username="Codyb0y"
          messageContent="anyone gonan foante to i get lvl 30 xd need 120 coins xd"
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent={
            <>
              <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  @
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  Atub
                </span>
              </span>
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                {" "}
                WWWW
              </span>
            </>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent={
            <>
              <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  @
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  Atub
                </span>
              </span>
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                {" "}
                holy
              </span>
            </>
          }
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="38"
          username="BUSSTURKEN"
          battleCard={{
            href: "https://csgogem.com/games/battles/26320501",
            layoutClass: "text-red-500",
            iconVariantClass1:
              "text-base bg-red-500 h-4 justify-center tracking-[0.5px] leading-4 min-w-4 w-4",
            iconVariantClass2:
              "relative italic items-center bg-red-500 bg-no-repeat box-border caret-transparent inline-flex h-3 justify-center leading-3 [mask-size:100%_100%] min-w-3 opacity-50 outline-[3px] break-words text-center align-middle w-3",
            slots: [
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: true },
              { iconClass1: "", iconClass2: "", isActive: true },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: true },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: true },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
            ],
            count: "2",
            cost: "4,06",
          }}
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="38"
          username="BUSSTURKEN"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              join
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              auto ggs
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              atub{" "}
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-pink-950 border-l-red-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))]"
          level="71"
          username="BigChungus123"
          battleCard={{
            href: "https://csgogem.com/games/battles/26320484",
            layoutClass:
              "text-zinc-400 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words",
            iconVariantClass1:
              "text-xl font-bold bg-zinc-400 h-5 tracking-[0.25px] leading-5 min-w-5 w-5",
            iconVariantClass2:
              "relative italic items-center bg-zinc-400 bg-no-repeat box-border caret-transparent inline-flex h-3 justify-center leading-3 [mask-size:100%_100%] min-w-3 opacity-50 outline-[3px] break-words text-center align-middle w-3",
            slots: [
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: true },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
              { iconClass1: "", iconClass2: "", isActive: false },
            ],
            count: "10",
            cost: "393,17",
          }}
        />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              auto hell nahh
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-violet-950 bg-no-repeat border-b-neutral-200 border-l-violet-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="40"
          username="Daantje"
          messageContent={
            <>
              <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  @
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  BigChungus123
                </span>
              </span>
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                {" "}
                good normal mode, goodluck maatje{" "}
              </span>
            </>
          }
        />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))]"
          level="62"
          username="Kuse"
          messageContent={
            <>
              <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  @
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  BigChungus123
                </span>
              </span>
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                {" "}
                pls on god win this
              </span>
            </>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent="m begging jewcy he told me he will give u a 600c winner "
          reply={{ replyToUser: "BigChungus123" }}
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="71"
          username="BigChungus123"
          messageContent="pray"
          reply={{
            replyToUser: "Kuse",
            replyContent: (
              <>
                <span className="text-gray-400 font-semibold bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                  {" "}
                  @Kuse:{" "}
                </span>
                <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                  <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                    @
                  </span>
                  <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                    BigChungus123
                  </span>
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                  {" "}
                  pls on god win this
                </span>
              </>
            ),
          }}
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-violet-950 bg-no-repeat border-b-neutral-200 border-l-violet-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="38"
          username="BUSSTURKEN"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              go fuck yourself
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="40"
          username="Daantje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              lol ong is crazy{" "}
            </span>
          }
          reply={{
            replyToUser: "Kuse",
            replyContent: (
              <>
                <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                  <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                    @
                  </span>
                  <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                    BigChungus123
                  </span>
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                  {" "}
                  pls on god win this
                </span>
              </>
            ),
          }}
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="70"
          username="ENK3LT"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              yoooo sexy
            </span>
          }
          reply={{ replyToUser: "BigChungus123" }}
        />
        <ChatMessage
          levelContainerClass="bg-pink-950 border-l-red-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))]"
          level="71"
          username="BigChungus123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              yoooo sex
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent="boys pray for "
        />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent={
            <>
              <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  @
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  BigChungus123
                </span>
              </span>
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                {" "}
                i do
              </span>
            </>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="71"
          username="BigChungus123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              COME ON
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-pink-950 border-l-red-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))]"
          level="71"
          username="BigChungus123"
          messageContent="FUCKKKKKKKKKK"
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="40"
          username="Daantje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              Slechtste kanker{" "}
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              bullshit
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              its something lock in bro
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="bg-fuchsia-950 border-l-pink-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))]"
          level="62"
          username="Kuse"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              wth
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="71"
          username="BigChungus123"
          messageContent="COME ONNNNNNNNNNNN"
        />
        <ChatMessage
          levelContainerClass="bg-violet-950 border-l-violet-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(161,104,255))]"
          level="40"
          username="Daantje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              W
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="71"
          username="BigChungus123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              YES
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              ww
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              w
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="62"
          username="Kuse"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              w
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-blue-950 bg-no-repeat border-b-neutral-200 border-l-blue-300/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(104,164,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="26"
          username="KRY123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              DAYUM
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="71"
          username="BigChungus123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              COME ON
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-blue-950 bg-no-repeat border-b-neutral-200 border-l-blue-300/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(104,164,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="26"
          username="KRY123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              WW
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-blue-950 bg-no-repeat border-b-neutral-200 border-l-blue-300/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(104,164,255))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="24"
          username="Tuttlena"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              anpoohn
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-fuchsia-950 bg-no-repeat border-b-neutral-200 border-l-pink-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,94,249))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="55"
          username="basootje"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              WWW CALL DANANTJE
            </span>
          }
        />
        <ChatMessage
          levelContainerClass="text-xs italic items-center bg-pink-950 bg-no-repeat border-b-neutral-200 border-l-red-400/50 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px]"
          levelTextClass="font-extrabold bg-clip-text bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))] bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px]"
          level="70"
          username="ENK3LT"
          messageContent={
            <>
              <span className="text-violet-500 font-medium bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  @
                </span>
                <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                  BigChungus123
                </span>
              </span>
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
                {" "}
                why wont you answer my dms i feel like am getting ghosted
              </span>
              <img
                src="https://cdn.7tv.app/emote/01FDTNWNMG000CM9KGHJPMM7ZS/2x.webp"
                alt="sad"
                className="bg-no-repeat box-border caret-transparent inline h-[21px] outline-[3px] break-words align-text-bottom"
              />
              <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words" />
            </>
          }
        />
        <ChatMessage
          levelContainerClass="bg-pink-950 border-l-red-400/50"
          levelTextClass="bg-[linear-gradient(rgb(224,224,224),rgb(255,55,55))]"
          level="71"
          username="BigChungus123"
          messageContent={
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] break-words">
              GIVE ME IT ALL
            </span>
          }
        />
      </div>
    </div>
  );
};
