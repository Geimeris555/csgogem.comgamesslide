import { MultiplierHistory } from "@/sections/Main/components/MultiplierHistory";
import { BetInput } from "@/sections/Main/components/BetInput";

export const BettingPanel = () => {
  return (
    <div className="bg-no-repeat box-border caret-transparent max-w-[1060px] outline-[3px] w-full overflow-hidden mx-auto p-4">
      <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px] -m-3">
        <MultiplierHistory />
        <BetInput />
      </div>
      <img
        src="https://csgogem.com/_nuxt/footer-grid.Cbowj-OX.avif"
        className="bg-no-repeat box-border caret-transparent hidden [mask-image:radial-gradient(50%_80%,rgb(0,0,0),rgba(0,0,0,0))] outline-[3px] align-baseline w-full md:block"
      />
    </div>
  );
};
