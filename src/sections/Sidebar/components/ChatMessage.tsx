export type BattleSlot = {
  iconClass1: string;
  iconClass2: string;
  isActive: boolean;
};

export type BattleCard = {
  href: string;
  layoutClass: string;
  iconVariantClass1: string;
  iconVariantClass2: string;
  slots: BattleSlot[];
  count: string;
  cost: string;
};

export type ReplyMessage = {
  replyToUser: string;
  replyContent?: React.ReactNode;
};

export type ChatMessageProps = {
  levelContainerClass: string;
  levelTextClass: string;
  level: string;
  username: string;
  messageContent?: React.ReactNode;
  battleCard?: BattleCard;
  reply?: ReplyMessage;
};

export const ChatMessage = (props: ChatMessageProps) => {
  return (
    <div className="relative bg-no-repeat box-border caret-transparent flex grow flex-wrap min-h-[auto] min-w-[auto] outline-[3px] px-4">
      {props.reply && (
        <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] basis-full w-full">
          <div className="bg-no-repeat box-border caret-transparent outline-[3px] items-center flex justify-start">
            <div className="box-border caret-transparent shrink-0 outline-[3px] overflow-hidden self-stretch bg-no-repeat min-h-[auto] min-w-[auto] ml-1.5 mr-1 mb-1">
              <div className="bg-no-repeat box-border caret-transparent h-full outline-[3px] translate-x-[5px] translate-y-2 w-6 border border-slate-700 rounded-md border-solid"></div>
            </div>
            <div className="items-center bg-no-repeat box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden pr-2 pb-1">
              <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mr-1 rounded-[50%]">
                <div className="relative items-center bg-gray-600 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent inline-flex shrink-0 h-3 justify-center leading-[normal] outline-[3px] text-center align-middle w-3 overflow-hidden rounded-[50%]">
                  <div
                    aria-label=""
                    className="relative bg-no-repeat box-border caret-transparent flex grow shrink-0 h-full max-h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full z-0 overflow-hidden"
                  >
                    <div className="bg-no-repeat box-border caret-transparent basis-0 grow shrink-0 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none"></div>
                  </div>
                  <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px]"></span>
                </div>
              </div>
              <h6 className="text-zinc-400 text-[11px] bg-no-repeat box-border caret-transparent leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                <span className="text-gray-400 font-semibold bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
                  {" "}
                  @{props.reply.replyToUser}:{" "}
                </span>
                {props.reply.replyContent}
              </h6>
            </div>
          </div>
        </div>
      )}
      <div className="bg-no-repeat box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] shrink-0">
        <div className="bg-no-repeat box-border caret-transparent outline-[3px] relative inline-block mr-2 rounded-[50%]">
          <div className="relative items-center bg-gray-600 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent inline-flex shrink-0 h-6 justify-center leading-[normal] outline-[3px] text-center align-middle w-6 overflow-hidden rounded-[50%]">
            <div
              aria-label=""
              className="relative bg-no-repeat box-border caret-transparent flex grow shrink-0 h-full max-h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full z-0 overflow-hidden"
            >
              <div className="bg-no-repeat box-border caret-transparent basis-0 grow shrink-0 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none"></div>
            </div>
            <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px]"></span>
          </div>
        </div>
      </div>
      <div className="bg-no-repeat box-border caret-transparent basis-0 grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden">
        <span className="text-neutral-200 text-sm font-semibold items-center bg-no-repeat box-border caret-transparent gap-x-1.5 flex tracking-[0.249999px] leading-[19.95px] outline-[3px] gap-y-1.5 overflow-hidden mb-1">
          <div
            className={`text-xs italic items-center bg-no-repeat border-b-neutral-200 border-r-neutral-200 border-t-neutral-200 box-border caret-transparent flex shrink-0 justify-center leading-[20.4px] min-h-[auto] min-w-9 outline-[3px] text-center text-nowrap w-max pr-1 rounded-bl rounded-br rounded-tl rounded-tr border-l-[3px] ${props.levelContainerClass}`}
          >
            <span
              className={`font-extrabold bg-clip-text bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-[5px] ${props.levelTextClass}`}
            >
              {props.level}
            </span>
          </div>
          <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
              {props.username}
            </span>
          </span>
        </span>
        <div className="text-gray-400 text-sm bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] break-words">
          {props.messageContent && <>{props.messageContent}</>}
          {props.battleCard && (
            <a
              href={props.battleCard.href}
              className="relative bg-gray-900 box-border caret-transparent block outline-[3px] break-words z-0 border border-gray-900 overflow-hidden my-2 rounded-lg border-solid after:accent-auto after:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0px,rgb(34,46,61)_100%)] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:tabular-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[-1] after:border-separate after:inset-0 after:font-rubik"
            >
              <div className="absolute bg-no-repeat box-border caret-transparent outline-[3px] break-words w-full z-[1] top-0 inset-x-0">
                <div
                  role="progressbar"
                  className="relative box-border caret-transparent h-0 outline-[3px] break-words w-full overflow-hidden top-0"
                >
                  <div className="absolute bg-white box-border caret-transparent opacity-[0.12] outline-[3px] break-words w-full left-0 inset-y-0"></div>
                  <div className="absolute bg-white box-border caret-transparent opacity-[0.12] outline-[3px] break-words w-[0%] left-0 inset-y-0"></div>
                  <div className="bg-white box-border caret-transparent outline-[3px] break-words">
                    <div className="absolute bg-white box-border caret-transparent outline-[3px] break-words left-0 inset-y-0"></div>
                    <div className="absolute bg-white box-border caret-transparent outline-[3px] break-words left-0 inset-y-0"></div>
                  </div>
                </div>
              </div>
              <div className="absolute text-zinc-400 bg-no-repeat box-border caret-transparent h-full [mask-image:radial-gradient(rgb(255,255,255)_0px,rgba(0,0,0,0)_60%)] outline-[3px] break-words w-full overflow-hidden left-0 top-0"></div>
              <div className="relative text-sm bg-no-repeat box-border caret-transparent grow tracking-[0.249999px] leading-[19.95px] outline-[3px] break-words px-3 py-2">
                <div className="relative items-center bg-no-repeat box-border caret-transparent flex justify-between outline-[3px] break-words mb-2">
                  <div
                    className={`text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words ${props.battleCard.layoutClass}`}
                  >
                    {props.battleCard.slots.map((slot, index) => (
                      <>
                        <i
                          key={`icon-${index}`}
                          className={`relative italic items-center bg-no-repeat box-border caret-transparent flex justify-center [mask-size:100%_100%] min-h-[auto] outline-[3px] break-words text-center align-middle ${props.battleCard!.iconVariantClass1}`}
                        ></i>
                        <div
                          key={`slot-${index}`}
                          className={
                            slot.isActive
                              ? "bg-no-repeat box-border caret-transparent outline-[3px] break-words min-h-[auto] min-w-[auto]"
                              : "bg-no-repeat box-border caret-transparent hidden outline-[3px] break-words"
                          }
                        >
                          <i
                            className={`${props.battleCard!.iconVariantClass2}`}
                          ></i>
                        </div>
                      </>
                    ))}
                  </div>
                  <span className="relative text-neutral-200 text-xs font-semibold items-center bg-black box-border caret-transparent flex h-7 tracking-[0.4px] leading-[20.004px] max-w-full min-h-[auto] outline-[3px] break-words text-nowrap align-middle overflow-hidden px-2 rounded-full">
                    <span className="absolute bg-neutral-200 box-border caret-transparent block opacity-[0.12] outline-[3px] break-words pointer-events-none text-nowrap rounded-full inset-0"></span>
                    <div className="items-center bg-no-repeat box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] break-words text-nowrap">
                      <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] break-words text-nowrap mr-1">
                        {props.battleCard.count}
                      </span>
                      <i className="relative text-lg italic items-center bg-no-repeat box-border caret-transparent flex h-[18px] justify-center tracking-[normal] leading-[18px] min-h-[auto] min-w-[18px] outline-[3px] break-words text-center text-nowrap align-middle w-[18px] -mb-0.5">
                        <img
                          src="https://c.animaapp.com/mo7ihae6jfqXko/assets/icon-3.svg"
                          alt="Icon"
                          className="bg-no-repeat box-border caret-transparent h-full outline-[3px] text-nowrap align-baseline w-full"
                        />
                      </i>
                    </div>
                  </span>
                </div>
                <div className="items-center bg-no-repeat box-border caret-transparent flex justify-between outline-[3px] break-words">
                  <div className="text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words">
                    <h4 className="text-gray-500 font-bold bg-no-repeat box-border caret-transparent outline-[3px] break-words min-h-[auto] min-w-[auto] uppercase mr-2">
                      Cost
                    </h4>
                    <i className="relative text-[15px] italic items-center bg-no-repeat box-border caret-transparent flex h-[15px] justify-center tracking-[normal] leading-[15px] min-h-[auto] min-w-[15px] outline-[3px] break-words text-center align-middle w-[15px] mr-1">
                      <img
                        src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                        className="aspect-square bg-no-repeat box-border caret-transparent max-w-[14.5px] min-h-[auto] min-w-[auto] outline-[3px] break-words align-baseline w-3.5"
                      />
                    </i>
                    <h4 className="text-neutral-200 font-bold bg-no-repeat box-border caret-transparent outline-[3px] break-words min-h-[auto] min-w-[auto] mr-2">
                      {props.battleCard.cost}
                    </h4>
                  </div>
                  <div className="text-neutral-200 items-center bg-no-repeat box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] break-words">
                    <h5 className="text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase mr-1">
                      View
                    </h5>
                    <i className="relative text-xs italic font-medium items-center bg-neutral-200 bg-no-repeat box-border caret-transparent flex h-3 justify-center tracking-[0.4px] leading-3 [mask-size:100%_100%] min-h-[auto] min-w-3 outline-[3px] break-words text-center align-middle w-3"></i>
                  </div>
                </div>
              </div>
              <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px] break-words"></span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
