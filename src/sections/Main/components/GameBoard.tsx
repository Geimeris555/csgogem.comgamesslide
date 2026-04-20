export const GameBoard = () => {
  return (
    <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] order-1 outline-[3px] w-full p-3 md:order-2">
      <div className="relative bg-[linear-gradient(rgb(16,25,36),rgb(26,37,51))] bg-repeat box-border caret-transparent max-w-[1060px] outline-[3px] mb-0 mx-auto py-2.5 rounded-lg md:bg-none md:bg-no-repeat md:-mb-6 md:py-0 md:rounded-none">
        <img
          src="https://c.animaapp.com/mo7ihae6jfqXko/assets/image-3.png"
          className="relative aspect-[1058_/_112] bg-no-repeat box-border caret-transparent hidden object-cover outline-[3px] pointer-events-none transform-none align-baseline w-[1060px] left-2/4 md:inline md:translate-x-[-50.0%]"
        />
        <div className="static bg-no-repeat box-border caret-transparent outline-[3px] transform-none w-auto left-auto top-auto md:absolute md:translate-y-[-15.0%] md:w-full md:left-0 md:top-0">
          <div className="items-center bg-no-repeat box-border caret-transparent flex grow flex-wrap justify-center outline-[3px] -m-3">
            <div className="bg-no-repeat box-border caret-transparent hidden shrink-0 max-w-full min-h-0 min-w-0 outline-[3px] text-center p-3 md:block md:min-h-[auto] md:min-w-[auto]">
              <h4 className="text-xl font-semibold bg-no-repeat box-border caret-transparent tracking-[0.25px] leading-5 outline-[3px] uppercase">
                {" "}
                Chicken{" "}
              </h4>
              <h4 className="text-2xl font-bold bg-no-repeat box-border caret-transparent tracking-[1px] outline-[3px] uppercase">
                {" "}
                Bonus{" "}
              </h4>
            </div>
            <div className="relative bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none p-3">
              <img
                src="https://csgogem.com/_nuxt/chicken-jackpot-coin.CqHL4MeN.avif"
                className="aspect-[334_/_323] bg-no-repeat box-border caret-transparent inline max-w-[100px] outline-[3px] align-baseline -ml-4 -mr-5"
              />
              <div className="absolute aspect-[243_/_219] bg-[url('https://csgogem.com/_nuxt/chicken-jackpot-sparkles.CDjXru6_.avif')] bg-no-repeat bg-size-[100%] box-border caret-transparent outline-[3px] translate-x-[-50.0%] translate-y-[-50.0%] w-[120%] left-2/4 top-2/4"></div>
            </div>
            <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-3">
              <div className="items-center bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-1">
                <div className="text-gray-400 bg-no-repeat box-border caret-transparent hidden shrink-0 max-w-full min-h-0 min-w-0 outline-[3px] mr-3 p-1 md:block md:min-h-[auto] md:min-w-[auto]">
                  <h4 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[14px] outline-[3px] uppercase mb-1">
                    Current
                  </h4>
                  <h4 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[14px] outline-[3px] uppercase">
                    Amount:
                  </h4>
                </div>
                <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-1">
                  <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent block tracking-[0.4px] leading-3 outline-[3px] uppercase mb-1 md:hidden">
                    Current amount
                  </h4>
                  <div className="relative bg-[linear-gradient(to_top,rgb(26,37,51),rgb(13,21,31))] box-border caret-transparent h-12 outline-[3px] translate-x-[-50.0%] border border-slate-800 rounded-[11px] border-solid left-2/4">
                    <div className="relative bg-[linear-gradient(rgb(10,17,25),rgb(10,17,25))] box-border caret-transparent h-full max-h-[calc(100%_-_6px)] max-w-[calc(100%_-_6px)] outline-[3px] translate-x-[-50.0%] translate-y-[-50.0%] w-full p-px rounded-[7px] left-2/4 top-2/4">
                      <div className="relative items-center bg-gray-900 box-border caret-transparent flex h-full justify-center outline-[3px] w-full px-3 rounded-md before:accent-auto before:bg-[url(data:image/avif;base64,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)] before:bg-center before:bg-no-repeat before:bg-size-[200%] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-60 before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-rubik after:accent-auto after:bg-[url(data:image/avif;base64,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)] after:bg-center after:bg-no-repeat after:bg-size-[50%_100%] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:tabular-nums after:font-normal after:h-full after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:z-[2] after:border-separate after:left-0 after:top-0 after:font-rubik">
                        <div className="relative items-center bg-no-repeat box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px]">
                          <div className="relative items-center bg-no-repeat box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px]">
                            <i className="relative text-2xl italic items-center bg-no-repeat box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-6 outline-[3px] text-center align-middle w-6 mr-2">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[22.6px] min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[22px]"
                              />
                            </i>
                            <span className="font-bold bg-no-repeat box-border caret-transparent block tracking-[0.5px] min-h-[auto] min-w-[auto] outline-[3px]">
                              359,39
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i className="absolute text-gray-500 text-lg italic items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-[18px] justify-center leading-[18px] [mask-size:100%_100%] min-w-[18px] outline-[3px] text-center translate-y-[-50.0%] align-middle w-[18px] right-3 top-5 md:right-[60px] md:top-[55%]"></i>
        </div>
      </div>
    </div>
  );
};
