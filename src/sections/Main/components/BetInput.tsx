export const BetInput = () => {
  return (
    <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3">
      <div className="bg-[linear-gradient(rgb(16,25,36),rgb(13,21,31))] box-border caret-transparent outline-[3px] p-6 rounded-lg">
        <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-3">
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3 md:basis-[66.6667%] md:max-w-[66.6667%]">
            <h5 className="text-gray-500 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase mb-2">
              amount
            </h5>
            <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap justify-center max-w-[750px] outline-[3px] -m-1">
              <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-1">
                <div className="bg-no-repeat box-border caret-transparent grid grow [grid-template-areas:'prepend_control_append''a_messages_b'] grid-cols-[max-content_minmax(0px,1fr)_max-content] grid-rows-[1fr_auto] outline-[3px]">
                  <div className="bg-no-repeat box-border caret-transparent flex col-end-[control] col-start-[control] row-end-[control] row-start-[control] min-h-[auto] min-w-[auto] outline-[3px]">
                    <div className="relative bg-slate-950 bg-no-repeat box-border caret-transparent grid basis-[0%] grow shrink-0 col-end-[control] col-start-[control] row-end-[control] row-start-[control] [grid-template-areas:'prepend-inner_field_clear_append-inner'] grid-cols-[min-content_minmax(0px,1fr)_min-content_min-content] tracking-[0.15px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-3 rounded-lg">
                      <div className="absolute bg-no-repeat box-border caret-transparent h-full outline-[3px] pointer-events-none w-full rounded-lg left-0 top-0"></div>
                      <div className="absolute bg-no-repeat box-border caret-transparent outline-[3px] top-[calc(100%_-_3px)] w-[calc(100%_-_2px)] overflow-hidden rounded-b-lg left-px right-0">
                        <div
                          role="progressbar"
                          className="relative box-border caret-transparent h-0 outline-[3px] w-full overflow-hidden top-0"
                        >
                          <div className="absolute bg-violet-600 box-border caret-transparent opacity-[0.12] outline-[3px] w-full left-0 inset-y-0"></div>
                          <div className="absolute bg-violet-600 box-border caret-transparent opacity-[0.12] outline-[3px] w-[0%] left-0 inset-y-0"></div>
                          <div className="bg-white box-border caret-transparent outline-[3px]">
                            <div className="absolute bg-violet-600 box-border caret-transparent outline-[3px] left-0 inset-y-0"></div>
                            <div className="absolute bg-violet-600 box-border caret-transparent outline-[3px] left-0 inset-y-0"></div>
                          </div>
                        </div>
                      </div>
                      <div className="items-center bg-no-repeat box-border caret-transparent flex col-end-[prepend-inner] col-start-[prepend-inner] row-end-[prepend-inner] row-start-[prepend-inner] min-h-[auto] min-w-[auto] outline-[3px]">
                        <i className="relative text-gray-500 text-2xl italic items-center bg-no-repeat box-border caret-transparent flex h-6 justify-center tracking-[normal] min-h-[auto] min-w-6 outline-[3px] text-center align-middle w-6">
                          <img
                            src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                            className="aspect-square bg-no-repeat box-border caret-transparent max-w-[22.6px] min-h-[auto] min-w-[auto] outline-[3px] align-baseline w-[22px]"
                          />
                        </i>
                      </div>
                      <div className="relative items-start bg-no-repeat box-border caret-transparent flex basis-[0%] grow shrink-0 col-end-[field] col-start-[field] row-end-[field] row-start-[field] min-h-[auto] min-w-[auto] outline-[3px]">
                        <input
                          placeholder="Enter amount..."
                          type="text"
                          value="0,01"
                          className="relative font-medium items-center bg-transparent bg-no-repeat box-border caret-transparent gap-x-0.5 flex basis-[0%] grow flex-wrap min-h-12 min-w-[100px] outline-[3px] gap-y-1.5 origin-[0%_50%] w-full px-1.5 py-3 scale-[0.875]"
                        />
                      </div>
                      <div className="items-center bg-no-repeat box-border caret-transparent flex col-end-[append-inner] col-start-[append-inner] row-end-[append-inner] row-start-[append-inner] min-h-[auto] min-w-[auto] outline-[3px]">
                        <div className="bg-no-repeat box-border caret-transparent gap-x-1.5 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 -mr-1">
                          <button
                            type="button"
                            className="relative text-zinc-400 text-xs font-semibold items-center bg-transparent caret-transparent hidden shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-9 justify-center tracking-[0.2148px] leading-[normal] max-w-full min-h-0 min-w-14 outline-[3px] text-center indent-[0.2148px] uppercase align-middle mx-1 px-3.5 py-0 rounded-md md:block md:min-h-[auto]"
                          >
                            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center outline-[3px] text-nowrap">
                              Clear
                            </span>
                          </button>
                          <button
                            type="button"
                            className="relative text-gray-400 text-xs font-semibold items-center bg-gray-800 caret-transparent grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-9 justify-center tracking-[0.2148px] leading-[normal] max-w-full min-h-[auto] min-w-14 outline-[3px] text-center indent-[0.2148px] uppercase align-middle px-3.5 py-0 rounded-lg after:accent-auto after:bg-no-repeat after:border-b-slate-800 after:border-t-slate-800 after:box-border after:caret-transparent after:text-gray-400 after:block after:text-xs after:not-italic after:tabular-nums after:font-semibold after:h-full after:tracking-[0.2148px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-center after:no-underline after:indent-[0.2148px] after:uppercase after:align-middle after:visible after:w-full after:rounded-lg after:border-x-white/10 after:border-b after:border-separate after:border-t after:left-0 after:top-0 after:font-rubik"
                          >
                            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                              <span className="bg-no-repeat box-border caret-transparent hidden outline-[3px] text-nowrap">
                                +
                              </span>
                              <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                                1/2
                              </span>
                            </span>
                          </button>
                          <button
                            type="button"
                            className="relative text-gray-400 text-xs font-semibold items-center bg-gray-800 caret-transparent grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-9 justify-center tracking-[0.2148px] leading-[normal] max-w-full min-h-[auto] min-w-14 outline-[3px] text-center indent-[0.2148px] uppercase align-middle px-3.5 py-0 rounded-lg after:accent-auto after:bg-no-repeat after:border-b-slate-800 after:border-t-slate-800 after:box-border after:caret-transparent after:text-gray-400 after:block after:text-xs after:not-italic after:tabular-nums after:font-semibold after:h-full after:tracking-[0.2148px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-center after:no-underline after:indent-[0.2148px] after:uppercase after:align-middle after:visible after:w-full after:rounded-lg after:border-x-white/10 after:border-b after:border-separate after:border-t after:left-0 after:top-0 after:font-rubik"
                          >
                            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                              <span className="bg-no-repeat box-border caret-transparent hidden outline-[3px] text-nowrap">
                                +
                              </span>
                              <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                                2x
                              </span>
                            </span>
                          </button>
                          <button
                            type="button"
                            className="relative text-gray-400 text-xs font-semibold items-center bg-gray-800 caret-transparent grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-9 justify-center tracking-[0.2148px] leading-[normal] max-w-full min-h-[auto] min-w-14 outline-[3px] text-center indent-[0.2148px] uppercase align-middle px-3.5 py-0 rounded-lg after:accent-auto after:bg-no-repeat after:border-b-slate-800 after:border-t-slate-800 after:box-border after:caret-transparent after:text-gray-400 after:block after:text-xs after:not-italic after:tabular-nums after:font-semibold after:h-full after:tracking-[0.2148px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-center after:no-underline after:indent-[0.2148px] after:uppercase after:align-middle after:visible after:w-full after:rounded-lg after:border-x-white/10 after:border-b after:border-separate after:border-t after:left-0 after:top-0 after:font-rubik"
                          >
                            <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                            <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                              Max
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="absolute text-gray-800 items-stretch bg-no-repeat box-border caret-transparent flex h-full outline-[3px] pointer-events-none w-full rounded-lg inset-x-0">
                        <div className="bg-no-repeat box-border caret-transparent basis-[26px] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] border-gray-800 rounded-l-lg border-b border-l border-t border-solid"></div>
                        <div className="bg-no-repeat box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] border-gray-800 rounded-r-lg border-b border-r border-t border-solid"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3 md:basis-[33.3333%] md:max-w-[33.3333%]">
            <h5 className="text-gray-500 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase mb-2">
              multiplier
            </h5>
            <div className="items-center bg-no-repeat box-border caret-transparent flex outline-[3px]">
              <div className="bg-no-repeat box-border caret-transparent grid grow [grid-template-areas:'prepend_control_append''a_messages_b'] grid-cols-[max-content_minmax(0px,1fr)_max-content] grid-rows-[1fr_auto] min-h-[auto] min-w-[auto] outline-[3px] mr-6">
                <div className="bg-no-repeat box-border caret-transparent flex col-end-[control] col-start-[control] row-end-[control] row-start-[control] min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative bg-slate-950 bg-no-repeat box-border caret-transparent grid basis-[0%] grow shrink-0 col-end-[control] col-start-[control] row-end-[control] row-start-[control] [grid-template-areas:'prepend-inner_field_clear_append-inner'] grid-cols-[min-content_minmax(0px,1fr)_min-content_min-content] tracking-[0.15px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] pr-3 rounded-lg">
                    <div className="absolute bg-no-repeat box-border caret-transparent h-full outline-[3px] pointer-events-none w-full rounded-lg left-0 top-0"></div>
                    <div className="absolute bg-no-repeat box-border caret-transparent outline-[3px] top-[calc(100%_-_3px)] w-[calc(100%_-_2px)] overflow-hidden rounded-b-lg left-px right-0">
                      <div
                        role="progressbar"
                        className="relative box-border caret-transparent h-0 outline-[3px] w-full overflow-hidden top-0"
                      >
                        <div className="absolute bg-violet-600 box-border caret-transparent opacity-[0.12] outline-[3px] w-full left-0 inset-y-0"></div>
                        <div className="absolute bg-violet-600 box-border caret-transparent opacity-[0.12] outline-[3px] w-[0%] left-0 inset-y-0"></div>
                        <div className="bg-white box-border caret-transparent outline-[3px]">
                          <div className="absolute bg-violet-600 box-border caret-transparent outline-[3px] left-0 inset-y-0"></div>
                          <div className="absolute bg-violet-600 box-border caret-transparent outline-[3px] left-0 inset-y-0"></div>
                        </div>
                      </div>
                    </div>
                    <div className="relative items-start bg-no-repeat box-border caret-transparent flex basis-[0%] grow shrink-0 col-end-[field] col-start-[field] row-end-[field] row-start-[field] min-h-[auto] min-w-[auto] outline-[3px]">
                      <input
                        type="text"
                        value="2,00"
                        className="relative font-medium items-center bg-transparent bg-no-repeat box-border caret-transparent gap-x-0.5 flex basis-[0%] grow flex-wrap min-h-12 outline-[3px] gap-y-1.5 origin-[0%_50%] w-full pl-4 pr-1.5 py-3 scale-[0.875]"
                      />
                    </div>
                    <div className="items-center bg-no-repeat box-border caret-transparent flex col-end-[append-inner] col-start-[append-inner] row-end-[append-inner] row-start-[append-inner] min-h-[auto] min-w-[auto] outline-[3px]">
                      <i className="relative text-gray-500 text-xl italic items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-5 justify-center tracking-[normal] leading-5 [mask-size:100%_100%] min-h-[auto] min-w-5 opacity-70 outline-[3px] text-center align-middle w-5"></i>
                    </div>
                    <div className="absolute text-gray-800 items-stretch bg-no-repeat box-border caret-transparent flex h-full outline-[3px] pointer-events-none w-full rounded-lg inset-x-0">
                      <div className="bg-no-repeat box-border caret-transparent basis-[26px] shrink-0 min-h-[auto] min-w-[auto] outline-[3px] border-gray-800 rounded-l-lg border-b border-l border-t border-solid"></div>
                      <div className="bg-no-repeat box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px] border-gray-800 rounded-r-lg border-b border-r border-t border-solid"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="relative text-sm font-semibold items-center bg-violet-700 caret-transparent grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2506px] leading-[normal] max-w-full min-h-[auto] min-w-[86px] outline-[3px] text-center indent-[0.2506px] uppercase align-middle w-[180px] px-[22px] py-0 rounded-lg after:accent-auto after:bg-no-repeat after:border-b-violet-600 after:border-t-violet-500 after:box-border after:caret-transparent after:text-white after:block after:text-sm after:not-italic after:tabular-nums after:font-semibold after:h-full after:tracking-[0.2506px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-center after:no-underline after:indent-[0.2506px] after:uppercase after:align-middle after:visible after:w-full after:rounded-lg after:border-x-white/10 after:border-b after:border-separate after:border-t after:left-0 after:top-0 after:font-rubik"
              >
                <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                  <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                    Place
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3">
            <h5 className="text-gray-500 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase mb-2">
              quick targets
            </h5>
            <div className="items-center bg-no-repeat box-border caret-transparent gap-x-2 flex flex-wrap outline-[3px] gap-y-2">
              <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-gray-900 px-3 py-2 rounded-lg border-dashed">
                <span className="text-gray-600 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase">
                  No recent targets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
