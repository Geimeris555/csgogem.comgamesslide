export const TargetsSidebar = () => {
  return (
    <nav className="fixed bg-slate-950 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent flex flex-col h-[calc(100%_-_64px)] max-w-full outline-[3px] translate-x-[360px] w-[360px] z-[1006] border border-slate-700/10 pb-14 border-solid right-0 top-16 bottom-0">
      <div className="bg-no-repeat box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] overflow-x-hidden overflow-y-auto">
        <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-1 pt-4 px-4">
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-1">
            <div className="items-center bg-no-repeat box-border caret-transparent flex justify-between outline-[3px] mb-3">
              <h5 className="text-gray-500 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                Your targets
              </h5>
              <button
                type="button"
                className="relative text-zinc-400 text-xs font-semibold items-center bg-transparent caret-transparent grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-7 justify-center tracking-[0.2148px] leading-[normal] max-w-full min-h-[auto] outline-[3px] text-center indent-[0.2148px] uppercase align-middle w-7 p-0 rounded-[50%] md:hidden md:min-h-0"
              >
                <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:min-h-0 md:min-w-0">
                  <i
                    role="button"
                    className="relative text-gray-500 text-xl italic font-bold items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-5 justify-center tracking-[0.25px] leading-5 [mask-size:100%_100%] min-h-[auto] min-w-5 outline-[3px] indent-[0px] normal-case text-nowrap align-middle w-5 md:min-h-0"
                  ></i>
                </span>
              </button>
              <h5 className="text-gray-500 text-xs font-medium bg-no-repeat box-border caret-transparent hidden tracking-[0.4px] leading-[20.004px] min-h-0 min-w-0 outline-[3px] uppercase md:block md:min-h-[auto] md:min-w-[auto]">
                Your Total{" "}
                <span className="bg-no-repeat box-border caret-transparent outline-[3px]">
                  <i className="relative italic items-center bg-no-repeat box-border caret-transparent inline-flex h-3 justify-center tracking-[normal] leading-3 min-w-3 outline-[3px] text-center align-middle w-3 mr-1">
                    <img
                      src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                      className="aspect-square bg-no-repeat box-border caret-transparent max-w-[11.8px] min-h-0 min-w-0 outline-[3px] align-baseline w-[11px] md:min-h-[auto] md:min-w-[auto]"
                    />
                  </i>
                  <span className="text-white bg-no-repeat box-border caret-transparent outline-[3px]">
                    0,00
                  </span>
                </span>
              </h5>
            </div>
            <div className="relative bg-slate-950 box-border caret-transparent outline-[3px] break-words z-0 border border-gray-900 overflow-hidden rounded-lg border-solid">
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
              <div className="text-sm items-center bg-no-repeat box-border caret-transparent flex grayscale-[1] grow justify-center tracking-[0.249999px] leading-[19.95px] opacity-50 outline-[3px] break-words p-4">
                <i className="relative italic items-center bg-no-repeat box-border caret-transparent flex h-3.5 justify-center tracking-[normal] leading-[14px] min-h-[auto] min-w-3.5 outline-[3px] break-words text-center align-middle w-3.5 mr-2">
                  <img
                    src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                    className="aspect-square bg-no-repeat box-border caret-transparent max-w-[13.6px] min-h-[auto] min-w-[auto] outline-[3px] break-words align-baseline w-[13px]"
                  />
                </i>
                <h5 className="text-zinc-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase">
                  No targets placed
                </h5>
              </div>
              <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px] break-words"></span>
            </div>
          </div>
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-1">
            <h5 className="text-gray-500 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase mb-3">
              All
            </h5>
            <div className="relative bg-slate-950 box-border caret-transparent outline-[3px] break-words z-0 border border-gray-900 overflow-hidden rounded-lg border-solid">
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
              <div className="text-sm items-center bg-no-repeat box-border caret-transparent flex grayscale-[1] grow justify-center tracking-[0.249999px] leading-[19.95px] opacity-50 outline-[3px] break-words p-4">
                <i className="relative italic items-center bg-no-repeat box-border caret-transparent flex h-3.5 justify-center tracking-[normal] leading-[14px] min-h-[auto] min-w-3.5 outline-[3px] break-words text-center align-middle w-3.5 mr-2">
                  <img
                    src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                    className="aspect-square bg-no-repeat box-border caret-transparent max-w-[13.6px] min-h-[auto] min-w-[auto] outline-[3px] break-words align-baseline w-[13px]"
                  />
                </i>
                <h5 className="text-zinc-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] min-h-[auto] min-w-[auto] outline-[3px] break-words uppercase">
                  No targets placed
                </h5>
              </div>
              <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px] break-words"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
