import { FooterInfo } from "@/sections/Footer/components/FooterInfo";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative items-center bg-[radial-gradient(100%_100%_at_50%_0px,rgb(13,21,31)_0px,rgba(13,21,31,0))] border-t-gray-900 shadow-[rgba(0,0,0,0.2)_0px_0px_0px_0px,rgba(0,0,0,0.14)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_0px_0px_0px] box-border caret-transparent flex grow outline-[3px] px-4 py-2 border-b-white/10 border-x-white/10 border-t border-solid">
      <div className="bg-no-repeat box-border caret-transparent max-w-[1440px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto px-4 py-12">
        <div className="bg-no-repeat box-border caret-transparent flex grow flex-wrap outline-[3px]">
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <FooterInfo />
          </div>
          <div className="bg-no-repeat box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full py-8">
            <div className="relative items-end bg-[url('https://csgogem.com/_nuxt/footer-background.DRG8mqE7.webp')] bg-size-[1134px_200px] box-border caret-transparent flex h-[200px] justify-center outline-[3px] rounded-lg before:accent-auto before:bg-[linear-gradient(0deg,rgb(22,11,56),rgb(64,48,115))] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:mix-blend-hard-light before:opacity-40 before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-rubik">
              <div className="relative bg-[url('https://csgogem.com/_nuxt/running-man.CQ_PUpwy.webp')] bg-no-repeat bg-size-[912px_70px] box-border caret-transparent h-[70px] min-h-[auto] min-w-[auto] outline-[3px] w-[114px] -ml-4 mb-7"></div>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};
