export const TipMessage = () => {
  return (
    <div className="items-center bg-gray-900 bg-[linear-gradient(to_left,rgba(220,104,3,0.3),rgba(0,0,0,0)_70%),linear-gradient(rgb(26,37,51)_40%,rgba(0,0,0,0))] bg-size-[auto,auto] box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] bg-[position:0%,0%_0%,0%] mx-3 px-3 py-2 rounded-lg">
      <div className="relative items-center bg-no-repeat box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mr-2 rounded-[50%]">
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
        <span className="relative text-sm font-medium items-center bg-no-repeat box-border caret-transparent gap-x-1.5 flex tracking-[0.249999px] leading-[19.95px] max-w-[100px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-ellipsis capitalize text-nowrap overflow-hidden mr-2">
          <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
            <span className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap">
              Fabi1234
            </span>
          </span>
        </span>
        <h5 className="text-gray-400 text-[13.28px] bg-no-repeat box-border caret-transparent leading-[19.92px] min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
          tipped rain
        </h5>
      </div>
      <div className="items-center bg-no-repeat box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
        <i className="relative text-xl italic items-center bg-no-repeat box-border caret-transparent flex h-5 justify-center leading-5 min-h-[auto] min-w-5 outline-[3px] text-center align-middle w-5 mr-1">
          <img
            src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
            className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19px] min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[18px]"
          />
        </i>
        <h5 className="text-sm font-semibold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
          1,00
        </h5>
      </div>
    </div>
  );
};
