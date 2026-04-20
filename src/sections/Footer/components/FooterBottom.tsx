export const FooterBottom = () => {
  return (
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
  );
};
