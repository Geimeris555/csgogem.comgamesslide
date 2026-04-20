export const GameControls = () => {
  return (
    <div className="static bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] order-2 outline-[3px] z-auto p-3 right-auto top-auto md:absolute md:min-h-0 md:min-w-0 md:order-1 md:z-[3] md:right-0 md:top-0">
      <div className="items-center bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-1">
        <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-1">
          <button
            type="button"
            className="relative text-zinc-400 text-xs font-semibold items-center bg-transparent caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-10 justify-center tracking-[0.2148px] leading-[normal] max-w-full outline-[3px] text-center indent-[0.2148px] uppercase align-middle px-4 py-0 rounded-md"
          >
            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
              <i className="relative text-lg italic items-center bg-zinc-400 bg-no-repeat box-border caret-transparent flex h-[18px] justify-center tracking-[normal] leading-[18px] [mask-size:100%_100%] min-h-[auto] min-w-[18px] outline-[3px] indent-[0px] text-nowrap align-middle w-[18px]"></i>
            </span>
          </button>
        </div>
        <div className="self-stretch bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] py-4">
          <hr
            role="separator"
            className="text-gray-900 self-stretch bg-no-repeat box-border caret-transparent inline-flex basis-full grow h-full max-h-full max-w-0 outline-[3px] align-text-bottom w-0 border-gray-900 overflow-visible -ml-px border-l-0 border-y-0 border-solid"
          />
        </div>
        <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-1">
          <button
            type="button"
            className="relative text-zinc-400 text-xs font-semibold items-center bg-transparent caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-10 justify-center tracking-[0.2148px] leading-[normal] max-w-full outline-[3px] text-center indent-[0.2148px] uppercase align-middle px-4 py-0 rounded-md"
          >
            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
              <i className="relative text-lg italic items-center bg-zinc-400 bg-no-repeat box-border caret-transparent flex h-[18px] justify-center tracking-[normal] leading-[18px] [mask-size:100%_100%] min-h-[auto] min-w-[18px] outline-[3px] indent-[0px] text-nowrap align-middle w-[18px]"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
