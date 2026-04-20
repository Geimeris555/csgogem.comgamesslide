export const HeaderNav = () => {
  return (
    <div className="bg-no-repeat box-border caret-transparent hidden shrink-0 max-w-full min-h-0 min-w-0 outline-[3px] p-1 md:block md:min-h-[auto] md:min-w-[auto]">
      <div className="items-center bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-1">
        <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-0 min-w-0 outline-[3px] p-1 md:min-h-[auto] md:min-w-[auto]">
          <button
            type="button"
            className="relative text-violet-400 text-sm font-semibold items-center bg-transparent caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-10 justify-center tracking-[0.2506px] leading-[normal] max-w-full min-w-[72px] outline-[3px] text-center indent-[0.2506px] uppercase align-middle px-[18px] py-0 rounded-[36px]"
          >
            <span className="absolute bg-violet-400 bg-no-repeat box-border caret-transparent hidden h-full opacity-[0.12] outline-[3px] pointer-events-none w-full rounded-[36px] left-0 top-0"></span>
            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[prepend] col-start-[prepend] row-end-[prepend] row-start-[prepend] ml-[-4.44444px] min-h-0 min-w-0 outline-[3px] mr-[8.88889px] md:min-h-[auto] md:min-w-[auto]">
              <i className="relative text-[21px] italic items-center bg-violet-400 bg-no-repeat box-border caret-transparent flex h-[21px] justify-center tracking-[normal] leading-[21px] [mask-size:100%_100%] min-h-0 min-w-[21px] outline-[3px] indent-[0px] align-middle w-[21px] md:min-h-[auto]"></i>
            </span>
            <span className="text-white items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-0 min-w-0 outline-[3px] text-nowrap md:min-h-[auto] md:min-w-[auto]">
              Games{" "}
            </span>
            <span className="text-slate-600 items-center bg-no-repeat box-border caret-transparent flex col-end-[append] col-start-[append] row-end-[append] row-start-[append] mr-[-4.44444px] min-h-0 min-w-0 outline-[3px] ml-[8.88889px] md:min-h-[auto] md:min-w-[auto]">
              <i className="relative text-[21px] italic items-center bg-slate-600 bg-no-repeat box-border caret-transparent flex h-[21px] justify-center tracking-[normal] leading-[21px] [mask-size:100%_100%] min-h-0 min-w-[21px] outline-[3px] indent-[0px] align-middle w-[21px] md:min-h-[auto]"></i>
            </span>
          </button>
        </div>
        <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-0 min-w-0 outline-[3px] p-1 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://csgogem.com/rewards"
            className="relative text-gray-500 text-sm font-semibold items-center box-border caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-10 justify-center tracking-[0.2506px] leading-[normal] max-w-full min-w-[72px] outline-[3px] indent-[0.2506px] uppercase align-middle px-[18px] rounded-[36px]"
          >
            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[prepend] col-start-[prepend] row-end-[prepend] row-start-[prepend] ml-[-4.44444px] min-h-0 min-w-0 outline-[3px] mr-[8.88889px] md:min-h-[auto] md:min-w-[auto]">
              <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent flex h-[21px] justify-center tracking-[normal] leading-[21px] min-h-0 min-w-[21px] outline-[3px] text-center indent-[0px] align-middle w-[21px] md:min-h-[auto]">
                <img
                  src="https://c.animaapp.com/mo7ihae6jfqXko/assets/icon-5.svg"
                  alt="Icon"
                  className="bg-no-repeat box-border caret-transparent h-full outline-[3px] align-baseline w-full"
                />
              </i>
            </span>
            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-0 min-w-0 outline-[3px] text-nowrap md:min-h-[auto] md:min-w-[auto]">
              Rewards
            </span>
          </a>
        </div>
        <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-0 min-w-0 outline-[3px] p-1 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://csgogem.com/leaderboard"
            className="relative text-gray-500 text-sm font-semibold items-center box-border caret-transparent flex shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-10 justify-center tracking-[0.2506px] leading-[normal] max-w-full min-w-[72px] outline-[3px] indent-[0.2506px] uppercase align-middle overflow-hidden pr-[18px] rounded-[36px]"
          >
            <span className="absolute bg-transparent bg-no-repeat box-border caret-transparent block h-full opacity-[0.16] outline-[3px] pointer-events-none w-full rounded-[36px] left-0 top-0"></span>
            <span className="absolute bg-amber-400/10 bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
            <span className="text-white items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-0 min-w-0 outline-[3px] text-nowrap md:min-h-[auto] md:min-w-[auto]">
              <div className="relative bg-no-repeat box-border caret-transparent h-12 min-h-0 min-w-0 outline-[3px] text-nowrap w-[60px] -mr-0.5 md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mo7ihae6jfqXko/assets/image-2.png"
                  className="absolute aspect-[auto_67_/_102] bg-no-repeat box-border caret-transparent h-[190%] max-w-full outline-[3px] text-nowrap align-baseline w-[67px] -left-0.5 -top-3.5"
                />
              </div>
              30K Race
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
