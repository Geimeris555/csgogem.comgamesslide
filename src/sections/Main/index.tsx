import { GameControls } from "@/sections/Main/components/GameControls";
import { GameBoard } from "@/sections/Main/components/GameBoard";
import { BettingPanel } from "@/sections/Main/components/BettingPanel";
import { TargetsSidebar } from "@/sections/Main/components/TargetsSidebar";

export const Main = () => {
  return (
    <main className="bg-no-repeat box-border caret-transparent grow shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] pt-16">
      <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
        <div className="bg-no-repeat box-border caret-transparent max-w-[1060px] outline-[3px] w-full overflow-hidden mx-auto px-4 py-10">
          <div className="items-center bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-3">
            <GameControls />
            <GameBoard />
            <div className="bg-no-repeat box-border caret-transparent block basis-0 grow max-w-full min-h-[auto] min-w-[auto] order-3 outline-[3px] text-right w-full p-3 md:hidden md:min-h-0 md:min-w-0">
              <div className="text-xs font-semibold items-center bg-gray-900 bg-no-repeat box-border caret-transparent inline-flex tracking-[0.4px] leading-[20.004px] outline-[3px] px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr">
                <i className="relative text-gray-400 text-lg italic items-center bg-gray-400 bg-no-repeat box-border caret-transparent flex h-[18px] justify-center tracking-[normal] leading-[18px] [mask-size:100%_100%] min-h-[auto] min-w-[18px] outline-[3px] text-center align-middle w-[18px] mr-2 md:min-h-0"></i>
                <span className="text-zinc-400 bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1 md:min-h-0 md:min-w-0">
                  Players
                </span>
                <span className="text-neutral-200 bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                  0
                </span>
              </div>
            </div>
            <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] order-4 outline-[3px] w-full px-3">
              <div className="bg-no-repeat box-border caret-transparent max-w-[940px] outline-[3px] mx-auto">
                <div className="text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase mb-1">
                  <span className="text-gray-500 bg-no-repeat box-border caret-transparent block tracking-[2px] min-h-[auto] min-w-[auto] outline-[3px]">
                    <span className="bg-no-repeat box-border caret-transparent outline-[3px]">
                      Rolling
                    </span>
                  </span>
                  <span className="text-gray-400 font-bold bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] normal-case ml-1">
                    9.55
                  </span>
                </div>
                <div
                  role="progressbar"
                  className="relative box-border caret-transparent h-2 outline-[3px] w-full overflow-hidden rounded-full top-0"
                >
                  <div className="absolute bg-gray-800 box-border caret-transparent outline-[3px] w-full left-0 inset-y-0"></div>
                  <div className="absolute bg-gray-800 box-border caret-transparent opacity-[0.12] outline-[3px] w-[0%] left-0 inset-y-0"></div>
                  <div className="absolute bg-violet-600 box-border caret-transparent hidden h-2 outline-[3px] w-[90%] left-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-no-repeat box-border caret-transparent outline-[3px] mb-6">
        <div className="relative bg-no-repeat box-border caret-transparent max-w-[2000px] outline-[3px] z-[1] mx-auto">
          <div className="absolute bg-no-repeat box-border caret-transparent flex grow shrink-0 left-[calc(50%_-_36px)] max-h-full max-w-full outline-[3px] w-[72px] z-[3] overflow-hidden top-2">
            <div className="bg-no-repeat box-border caret-transparent basis-0 grow shrink-0 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none pb-[54.6296%]"></div>
            <img
              src="https://csgogem.com/_nuxt/arrow.CNUAkgFM.avif"
              className="absolute bg-no-repeat box-border caret-transparent h-full object-contain outline-[3px] align-baseline w-full z-[-1] left-0 top-0"
            />
          </div>
          <div className="bg-no-repeat box-border caret-transparent h-[257.375px] [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgb(10,17,25)_5%,rgb(10,17,25)_95%,rgba(0,0,0,0))] outline-[3px] py-5">
            <div className="absolute bg-no-repeat box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3 translate-x-[-1211.33px] left-2/4">
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,62
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_aq_ak47_cartel_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Cartel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-amber-400/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(255,174,57),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x71,64
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-contraband.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_karambit_am_marble_fade_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Karambit
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Marble Fade
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,98
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_cu_ak47_point_disarray_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Point Disarray
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,05
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_nukestripe_orange_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Radiation Hazard
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,17
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ssg08_cu_ssg08_scorpion_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              SV
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              SSG 08
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Death Strike
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,00
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_decimator_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A1-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Decimator
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x14,65
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_ursus_hy_webs_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Ursus Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Crimson Web
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,17
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_cu_m4a4_neo_noir_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Neo-Noir
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,29
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_hy_hive_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Electric Hive
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,28
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_tec9_gs_tec9_decimator_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Tec-9
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Decimator
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x5,52
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_css_sp_mesh_tan_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Classic Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Safari Mesh
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,14
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_cz75a_hy_webs_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              CZ75-Auto
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Crimson Web
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-blue-400/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(94,152,217),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,44
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_elite_hy_gelpen_dark_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Dual Berettas
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Pyre
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,17
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_famas_cu_broken_path_famas_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              FAMAS
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Afterimage
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,35
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_glock_cu_glock_noir_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Glock-18
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Neo-Noir
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,30
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_mac10_cu_mac10_propaganda_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              MAC-10
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Propaganda
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x6,49
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_cu_m4_asimov_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Asiimov
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,26
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_star_bravo_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Zirka
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x23,92
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Kill Confirmed
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,14
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_mp7_hy_skulls_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              MP7
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Skulls
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x5,05
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_survival_bowie_hy_ddpat_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Bowie Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Forest DDPAT
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,26
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_star_bravo_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Zirka
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,20
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_famas_gs_famas_legacy_gold_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              FAMAS
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Commemoration
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,58
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_sg556_cu_sg553_rally_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              SG 553
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Integrale
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,27
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/studded_bloodhound_gloves_bloodhound_snakeskin_brass_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Bloodhound Gloves
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Snakebite
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x8,02
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_cord_hy_webs_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Paracord Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Crimson Web
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,11
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Printstream
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,04
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_am_zebra_dark_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Dark Water
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x5,60
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_canis_sp_dapple_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Survival Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Scorched
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,26
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_cu_awp_cobra_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Redline
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x7,05
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_gut_gs_gut_autotronic_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Gut Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Autotronic
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,11
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_silencer_am_m4a1-s_alloy_orange_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A1-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Atomic Alloy
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x12,99
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_stiletto_so_purple_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Stiletto Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Ultraviolet
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,80
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_gs_m4a4_pioneer_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            The Battlestar
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,43
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ssg08_cu_ssg08_technicality_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              SSG 08
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Big Iron
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,39
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_hy_ak47lam_blue_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Blue Laminate
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x7,53
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_css_aq_forced_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Classic Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Stained
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,81
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_push_sp_tape_urban_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Shadow Daggers
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Urban Masked
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,83
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_gs_ak47_professional_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Slate
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,05
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_scar20_cu_scar_cyrex_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              SCAR-20
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Cyrex
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-amber-400/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(255,174,57),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x58,10
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-contraband.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_karambit_aq_blued_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Karambit
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Blue Steel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,91
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_gypsy_jackknife_hy_ddpat_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Navaja Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Forest DDPAT
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,95
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_cu_awp_chroma_pink_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Chromatic Aberration
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,34
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_famas_cu_famas_owl_orange_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              FAMAS
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Eye of Athena
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,24
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_cu_awp_neonoir_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Neo-Noir
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,94
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_push_hy_ddpat_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Shadow Daggers
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Forest DDPAT
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,61
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_cu_xray_m4_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            X-Ray
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,03
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_gs_m4a4_sector_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Buzz Kill
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,04
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_p250_sp_nukestripe_green_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              P250
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Nuclear Threat
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,46
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_hy_ak47lam_bw_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Black Laminate
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,62
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_aq_ak47_cartel_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Cartel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,71
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_silencer_gs_m4a1s_operator_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A1-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Control Panel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,33
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/slick_gloves_slick_military_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Driver Gloves
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Convoy
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,35
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_hy_ddpat_pink_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              SV
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Pink DDPAT
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,05
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_nukestripe_orange_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Radiation Hazard
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,03
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_gs_m4a4_sector_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Buzz Kill
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x8,80
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_survival_bowie_cu_bowie_lore_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Bowie Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Lore
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-blue-400/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(94,152,217),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,78
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_hy_v_tiger_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Jungle Tiger
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,13
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_star_bravo_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Zirka
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x4,10
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/leather_handwraps_handwrap_fabric_houndstooth_orange_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Hand Wraps
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Desert Shamagh
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x6,59
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_outdoor_hy_ddpat_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Nomad Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Forest DDPAT
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,05
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_nukestripe_orange_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Radiation Hazard
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,37
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_glock_cu_glock_wasteland_rebel_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Glock-18
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Wasteland Rebel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,11
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Printstream
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,10
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_cu_ak47_cobra_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Redline
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat shadow-[rgba(255,174,57,0.5)_0px_0px_25px_0px] box-border caret-transparent outline-[3px] text-center w-[148px] border border-amber-400/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(255,174,57),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x110,83
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-contraband.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_gs_awp_hydra_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Desert Hydra
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x8,16
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_survival_bowie_aq_damascus_90_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Bowie Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Damascus Steel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,52
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_sg556_cu_sg553_reactor_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              SG 553
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Colony IV
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x7,63
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_tactical_aq_blued_heavy_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Huntsman Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Blue Steel
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,26
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_sp_star_bravo_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Zirka
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,46
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/studded_hydra_gloves_bloodhound_hydra_black_green_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Hydra Gloves
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Emerald
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,01
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_glock_cu_glock_noir_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Glock-18
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Neo-Noir
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,77
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_mac10_aa_fade_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              MAC-10
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Fade
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x40,84
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_butterfly_aq_steel_knife_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Butterfly Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Rust Coat
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,38
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_aq_usp_stainless_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Stainless
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,29
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_shatter_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A1-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Leaded Glass
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,39
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_hy_ak47lam_blue_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Blue Laminate
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,14
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_mp7_hy_skulls_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              MP7
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Skulls
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,12
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_deagle_aq_deserteagle_kumichodragon_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Desert Eagle
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Kumicho Dragon
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,04
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_p250_sp_nukestripe_green_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              P250
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Nuclear Threat
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,26
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_awp_hy_hive_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AWP
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Electric Hive
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x16,43
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_aug_am_bloom_blue_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AUG
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Midnight Lily
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x9,95
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_skeleton_hy_ddpat_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Skeleton Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Forest DDPAT
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,75
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_cu_panther_ak47_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Jaguar
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,45
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_spitfire_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Orion
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,90
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_kaiman_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Caiman
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-blue-400/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(94,152,217),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,40
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_mag7_am_chainmail_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              MAG-7
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Chainmail
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x5,59
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_survival_bowie_gs_bowie_black_laminate_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Bowie Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Black Laminate
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-violet-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(136,71,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x3,86
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-restricted.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_cu_green_leather_ak47_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            First Class
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-indigo-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(75,105,255),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,02
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-milspec.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_g3sg1_sp_moro_carving_lightblue_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              G3SG1
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            New Roots
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-no-repeat box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x5,39
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_knife_cord_sp_nightstripe_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Paracord Knife
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Night Stripe
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,04
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_cu_m4a4_temukau_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Temukau
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,21
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_cu_m4a4_cyberpunk_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Cyber Security
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,10
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_krokos_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Monster Mashup
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,04
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_cu_m4a4_temukau_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A4
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Temukau
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,15
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_mac10_cu_mac10_neonrider_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              MAC-10
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Neon Rider
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,29
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_shatter_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              M4A1-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Leaded Glass
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-red-500/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(235,75,75),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,73
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-covert.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_glock_cu_glock18_warmaiden_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              Glock-18
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Bullet Queen
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x2,95
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_ak47_cu_ak47_winter_sport_light_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1">
                              ST
                            </span>
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              AK-47
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Frontside Misty
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
                  <div className="relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border border-fuchsia-600/80 p-[3px] rounded-[11px] border-solid">
                    <div className="relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(to_top,rgb(211,44,230),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik">
                      <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
                        <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
                          {" "}
                          x1,10
                        </h4>
                        <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
                          <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                            <img
                              src="https://csgogem.com/img/items/pattern-consumer.avif"
                              className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                            />
                          </div>
                          <img
                            src="https://cs2-cdn.pricempire.com/panorama/images/econ/default_generated/weapon_usp_silencer_cu_usp_krokos_medium_png.png"
                            className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
                          />
                        </div>
                        <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
                          <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                            <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                              USP-S
                            </span>
                          </div>
                          <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            Monster Mashup
                          </h4>
                          <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                            <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                              <img
                                src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                                className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                              />
                            </i>
                            30,30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BettingPanel />
      <button
        type="button"
        className="fixed text-gray-500 text-xs font-semibold items-center bg-gray-800 caret-transparent flex shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2148px] leading-[normal] max-w-full outline-[3px] text-center indent-[0.2148px] uppercase align-middle w-12 z-10 p-0 rounded-lg right-4 bottom-4 after:accent-auto after:bg-no-repeat after:border-b-slate-800 after:border-t-slate-800 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-xs after:not-italic after:tabular-nums after:font-semibold after:h-full after:tracking-[0.2148px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-center after:no-underline after:indent-[0.2148px] after:uppercase after:align-middle after:visible after:w-full after:rounded-lg after:border-x-white/10 after:border-b after:border-separate after:border-t after:left-0 after:top-0 after:font-rubik"
      >
        <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
        <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
          <i className="relative text-xl italic font-bold items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-5 justify-center tracking-[0.25px] leading-5 [mask-size:100%_100%] min-h-[auto] min-w-5 outline-[3px] indent-[0px] normal-case text-nowrap align-middle w-5"></i>
        </span>
      </button>
      <TargetsSidebar />
      <button
        type="button"
        className="fixed text-gray-500 text-xs font-semibold items-center bg-gray-800 caret-transparent hidden shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2148px] leading-[normal] max-w-full outline-[3px] text-center indent-[0.2148px] uppercase align-middle w-12 z-[5] p-0 rounded-lg left-4 bottom-4 md:flex after:accent-auto after:bg-no-repeat after:border-b-slate-800 after:border-t-slate-800 after:box-border after:caret-transparent after:text-gray-500 after:block after:text-xs after:not-italic after:tabular-nums after:font-semibold after:h-full after:tracking-[0.2148px] after:leading-[normal] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-center after:no-underline after:indent-[0.2148px] after:uppercase after:align-middle after:visible after:w-full after:rounded-lg after:border-x-white/10 after:border-b after:border-separate after:border-t after:left-0 after:top-0 after:font-rubik"
      >
        <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
        <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-0 min-w-0 outline-[3px] text-nowrap md:min-h-[auto] md:min-w-[auto]">
          <i className="relative text-xl italic font-bold items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-5 justify-center tracking-[0.25px] leading-5 [mask-size:100%_100%] min-h-0 min-w-5 outline-[3px] indent-[0px] normal-case text-nowrap align-middle w-5 md:min-h-[auto]"></i>
        </span>
      </button>
      <div className="relative bg-no-repeat box-border caret-transparent hidden flex-wrap justify-center list-none outline-[3px] w-full z-10">
        <div className="fixed bg-gray-900 bg-no-repeat box-border caret-transparent basis-full grow shrink-0 max-h-[836px] max-w-full outline-[3px] rounded-md right-6 bottom-6">
          <div className="absolute bg-no-repeat shadow-[rgba(0,0,0,0.2)_0px_3px_1px_-2px,rgba(0,0,0,0.14)_0px_2px_2px_0px,rgba(0,0,0,0.12)_0px_1px_5px_0px] box-border caret-transparent h-full outline-[3px] w-full z-[-1] rounded-md left-0 top-0"></div>
          <button
            type="button"
            className="relative text-[15px] items-center bg-transparent bg-no-repeat caret-transparent flex h-full justify-between leading-[15px] min-h-12 outline-[3px] w-full p-0 rounded-md"
          >
            <div className="relative bg-gray-900 box-border caret-transparent h-full min-w-[300px] outline-[3px] break-words w-full z-0 border border-gray-900 overflow-hidden rounded-lg border-solid">
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
              <div className="text-sm items-center bg-no-repeat box-border caret-transparent flex grow justify-between tracking-[0.249999px] leading-[19.95px] outline-[3px] break-words px-4 py-3">
                <span className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent block tracking-[0.4px] leading-[20.004px] outline-[3px] break-words uppercase">
                  <i className="relative text-gray-500 text-[21px] italic items-center bg-gray-500 bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] [mask-size:100%_100%] min-w-[21px] outline-[3px] break-words text-center align-middle w-[21px] mr-2"></i>
                  Pending trades
                </span>
                <i className="relative text-zinc-400 text-[21px] italic items-center bg-zinc-400 bg-no-repeat box-border caret-transparent flex h-[21px] justify-center tracking-[normal] leading-[21px] [mask-size:100%_100%] min-w-[21px] outline-[3px] break-words text-center align-middle w-[21px]"></i>
              </div>
              <span className="absolute bg-no-repeat box-border caret-transparent block outline-[3px] break-words"></span>
            </div>
          </button>
          <div className="relative bg-no-repeat box-border caret-transparent hidden outline-[3px] overflow-x-hidden overflow-y-auto rounded-b-lg"></div>
        </div>
      </div>
      <footer className="relative items-center bg-[radial-gradient(100%_100%_at_50%_0px,rgb(13,21,31)_0px,rgba(13,21,31,0))] border-t-gray-900 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent flex grow outline-[3px] px-4 py-2 border-b-white/10 border-x-white/10 border-t border-solid">
        <div className="bg-no-repeat box-border caret-transparent max-w-[1440px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto px-4 py-12">
          <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px]">
            <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
              <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap justify-between outline-[3px] -m-3">
                <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3 md:basis-[33.3333%] md:max-w-[33.3333%]">
                  <a
                    href="https://csgogem.com/"
                    className="relative text-zinc-400 text-sm font-semibold items-center box-border caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2506px] leading-[normal] max-w-full min-w-[86px] outline-[3px] indent-[0.2506px] uppercase align-middle -ml-3 mb-3 px-3 rounded-md"
                  >
                    <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                    <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                      <img
                        src="https://c.animaapp.com/mo7ihae6jfqXko/assets/icon-8.svg"
                        alt="Icon"
                        className="text-white bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap align-baseline"
                      />
                    </span>
                  </a>
                  <p className="text-slate-600 text-sm bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] mb-3">
                    CSGOGem is owned and operated by GEMIFY LABS LTD (HE
                    C464965), having its registered address at NEPTUNE HOUSE,
                    Floor 1, Flat/Office 11, Voukourestiou 25, 3045 Zakaki,
                    Limassol, Cyprus.
                  </p>
                  <div className="items-center bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -mt-1 mb-1 -mx-1">
                    <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-1">
                      <a
                        href="https://discord.gg/csgogem"
                        className="relative text-gray-500 text-xs font-semibold items-center box-border caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2148px] leading-[normal] max-w-full outline-[3px] indent-[0.2148px] uppercase align-middle w-12 -ml-3 rounded-[50%]"
                      >
                        <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                        <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                          <i className="relative text-2xl italic font-normal items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-6 justify-center tracking-[normal] leading-6 [mask-size:100%_100%] min-h-[auto] min-w-6 outline-[3px] text-center indent-[0px] normal-case text-nowrap align-middle w-6"></i>
                        </span>
                      </a>
                      <a
                        href="https://x.com/CSGOGemcom"
                        className="relative text-gray-500 text-xs font-semibold items-center box-border caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2148px] leading-[normal] max-w-full outline-[3px] indent-[0.2148px] uppercase align-middle w-12 rounded-[50%]"
                      >
                        <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
                        <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
                          <i className="relative text-2xl italic font-normal items-center bg-gray-500 bg-no-repeat box-border caret-transparent flex h-6 justify-center tracking-[normal] leading-6 [mask-size:100%_100%] min-h-[auto] min-w-6 outline-[3px] text-center indent-[0px] normal-case text-nowrap align-middle w-6"></i>
                        </span>
                      </a>
                    </div>
                    <div className="self-stretch bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-2 py-5">
                      <hr
                        role="separator"
                        className="text-gray-800 self-stretch bg-no-repeat box-border caret-transparent inline-flex basis-full grow h-full max-h-full max-w-0 outline-[3px] align-text-bottom w-0 border-gray-800 overflow-visible -ml-px border-l-0 border-y-0 border-solid"
                      />
                    </div>
                    <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-1">
                      <div className="bg-no-repeat box-border caret-transparent grid grow [grid-template-areas:'prepend_control_append''a_messages_b'] grid-cols-[max-content_minmax(0px,1fr)_max-content] grid-rows-[1fr_auto] outline-[3px]">
                        <div className="bg-no-repeat box-border caret-transparent flex col-end-[control] col-start-[control] row-end-[control] row-start-[control] min-h-[auto] min-w-[auto] outline-[3px]">
                          <div
                            role="combobox"
                            className="relative bg-gray-900 box-border caret-transparent grid basis-[0%] grow shrink-0 col-end-[control] col-start-[control] row-end-[control] row-start-[control] [grid-template-areas:'prepend-inner_field_clear_append-inner'] grid-cols-[min-content_minmax(0px,1fr)_min-content_min-content] tracking-[0.15px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] pr-3 rounded-lg"
                          >
                            <div className="absolute bg-gray-900 bg-no-repeat box-border caret-transparent h-full outline-[3px] pointer-events-none w-full rounded-lg left-0 top-0"></div>
                            <div className="absolute bg-no-repeat box-border caret-transparent outline-[3px] top-[calc(100%_-_2px)] w-full overflow-hidden rounded-b-lg inset-x-0">
                              <div
                                role="progressbar"
                                className="relative box-border caret-transparent h-0 outline-[3px] w-full overflow-hidden top-0"
                              >
                                <div className="absolute text-black bg-gray-400 box-border caret-transparent opacity-[0.12] outline-[3px] w-full left-0 inset-y-0"></div>
                                <div className="absolute text-black bg-gray-400 box-border caret-transparent opacity-[0.12] outline-[3px] w-[0%] left-0 inset-y-0"></div>
                                <div className="bg-white box-border caret-transparent outline-[3px]">
                                  <div className="absolute text-black bg-gray-400 box-border caret-transparent outline-[3px] left-0 inset-y-0"></div>
                                  <div className="absolute text-black bg-gray-400 box-border caret-transparent outline-[3px] left-0 inset-y-0"></div>
                                </div>
                              </div>
                            </div>
                            <div className="relative items-start bg-no-repeat box-border caret-transparent flex basis-[0%] grow shrink-0 col-end-[field] col-start-[field] row-end-[field] row-start-[field] min-h-[auto] min-w-[auto] outline-[3px]">
                              <div className="relative items-center bg-no-repeat box-border caret-transparent gap-x-0.5 flex flex-wrap min-h-10 outline-[3px] gap-y-1 w-full pl-4 pr-1.5 py-2">
                                <div className="text-gray-400 items-center bg-no-repeat box-border caret-transparent flex max-w-full min-h-[auto] min-w-[auto] outline-[3px] mr-0.5">
                                  <i className="relative text-2xl italic items-center bg-[url(data:image/svg+xml;utf8,%3Csvg%20viewBox=%270%200%2032%2024%27%20width=%271.61em%27%20height=%271.2em%27%20xmlns=%27http://www.w3.org/2000/svg%27%20%3E%3Cg%20fill=%27none%27%3E%3Cpath%20fill=%27%232E42A5%27%20fill-rule=%27evenodd%27%20d=%27M0%200v24h32V0z%27%20clip-rule=%27evenodd%27/%3E%3Cmask%20id=%27flagpackGbUkm0%27%20width=%2732%27%20height=%2724%27%20x=%270%27%20y=%270%27%20maskUnits=%27userSpaceOnUse%27%20style=%27mask-type:luminance%27%3E%3Cpath%20fill=%27%23fff%27%20fill-rule=%27evenodd%27%20d=%27M0%200v24h32V0z%27%20clip-rule=%27evenodd%27/%3E%3C/mask%3E%3Cg%20mask=%27url%28%23flagpackGbUkm0)] bg-no-repeat bg-size-[100%_100%] box-border caret-transparent flex h-6 justify-center tracking-[normal] min-h-[auto] min-w-6 outline-[3px] text-center align-middle w-6 mr-3"></i>
                                  <span className="text-sm font-medium bg-no-repeat box-border caret-transparent block tracking-[0.1px] leading-[22.4px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                                    English
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="items-center bg-no-repeat box-border caret-transparent flex col-end-[append-inner] col-start-[append-inner] row-end-[append-inner] row-start-[append-inner] min-h-[auto] min-w-[auto] outline-[3px]">
                              <i className="relative text-slate-600 text-2xl italic items-center bg-slate-600 bg-no-repeat box-border caret-transparent flex h-6 justify-center tracking-[normal] [mask-size:100%_100%] min-h-[auto] min-w-6 opacity-70 outline-[3px] text-center align-middle w-6 ml-1"></i>
                            </div>
                            <div className="absolute items-stretch bg-no-repeat box-border caret-transparent flex h-full outline-[3px] pointer-events-none w-full inset-x-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs font-semibold bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase">
                    Powered by Steam, not affiliated with or endorsed by Valve
                    Corporation.
                  </p>
                </div>
                <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3 md:basis-auto md:w-auto">
                  <div className="bg-no-repeat box-border caret-transparent gap-x-24 flex grow flex-wrap outline-[3px] gap-y-0 text-nowrap -m-3">
                    <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-3">
                      <h4 className="text-slate-600 text-xs font-semibold bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase text-nowrap mb-3">
                        Games
                      </h4>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/games/battles"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Case Battles
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/games/slide"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Slide
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/games/upgrader"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Upgrade
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/games/double"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Double
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/games/cases"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Cases
                        </a>
                      </p>
                    </div>
                    <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-3">
                      <h4 className="text-slate-600 text-xs font-semibold bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase text-nowrap mb-3">
                        About us
                      </h4>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/legal/tos"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Terms of Use
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/legal/refund"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Refund Policy
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/legal/aml"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          AML Policy
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/legal/privacy"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                    <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-3">
                      <h4 className="text-slate-600 text-xs font-semibold bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase text-nowrap mb-3">
                        Useful links
                      </h4>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/help"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Help
                        </a>
                      </p>
                      <p className="bg-no-repeat box-border caret-transparent outline-[3px] text-nowrap mb-3">
                        <a
                          href="https://csgogem.com/account/profile"
                          className="text-gray-400 text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] outline-[3px] uppercase text-nowrap"
                        >
                          Account
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full py-8">
              <div className="relative items-end bg-[url('https://csgogem.com/_nuxt/footer-background.DRG8mqE7.webp')] bg-size-[1134px_200px] box-border caret-transparent flex h-[200px] justify-center outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(0deg,rgb(22,11,56),rgb(64,48,115))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:mix-blend-hard-light before:opacity-40 before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-rubik">
                <div className="relative bg-[url('https://csgogem.com/_nuxt/running-man.CQ_PUpwy.webp')] bg-no-repeat bg-size-[912px_70px] box-border caret-transparent h-[70px] min-h-[auto] min-w-[auto] outline-[3px] w-[114px] -ml-4 mb-7"></div>
              </div>
            </div>
            <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
              <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap justify-center outline-[3px] -m-3 md:justify-start">
                <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full p-3 md:basis-auto md:w-auto">
                  <p className="text-slate-700 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase">
                    © 2016 - 2026 CSGOGem. All rights reserved
                  </p>
                </div>
                <div className="bg-no-repeat box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px]"></div>
                <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-3">
                  <a
                    href="mailto://support@csgogem.com"
                    className="text-slate-700 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase"
                  >
                    support@csgogem.com
                  </a>
                </div>
                <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-3">
                  <a
                    href="https://csgogem.com/legal/tos"
                    className="text-slate-700 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase"
                  >
                    Terms of Use
                  </a>
                </div>
                <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-3">
                  <a
                    href="https://csgogem.com/legal/privacy"
                    className="text-slate-700 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-[20.004px] outline-[3px] uppercase"
                  >
                    <span className="bg-no-repeat box-border caret-transparent outline-[3px]">
                      Privacy Policy
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};
