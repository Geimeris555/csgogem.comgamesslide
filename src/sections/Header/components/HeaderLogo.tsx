export const HeaderLogo = () => {
  return (
    <div className="bg-no-repeat box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] p-1">
      <a
        href="https://csgogem.com/"
        className="relative text-slate-950 font-semibold items-center box-border caret-transparent inline-grid shrink-0 [grid-template-areas:'prepend_content_append'] grid-cols-[max-content_auto_max-content] h-12 justify-center tracking-[0.2864px] leading-[normal] max-w-full outline-[3px] indent-[0.2864px] uppercase align-middle px-0 rounded-[36px] md:px-3"
      >
        <span className="absolute bg-no-repeat box-border caret-transparent block h-full outline-[3px] pointer-events-none w-full left-0 top-0"></span>
        <span className="items-center bg-no-repeat box-border caret-transparent flex col-end-[content] col-start-[content] row-end-[content] row-start-[content] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap">
          <img
            src="https://c.animaapp.com/mo7ihae6jfqXko/assets/icon-4.svg"
            alt="Icon"
            className="text-white bg-no-repeat box-border caret-transparent hidden outline-[3px] text-nowrap align-baseline md:block"
          />
          <div className="relative bg-no-repeat box-border caret-transparent flex grow shrink-0 max-h-full max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-10 z-0 overflow-hidden md:hidden md:min-h-0 md:min-w-0">
            <div className="bg-no-repeat box-border caret-transparent basis-0 grow shrink-0 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none text-nowrap pb-[100%] md:min-h-0 md:min-w-0"></div>
            <img
              src="https://c.animaapp.com/mo7ihae6jfqXko/assets/image-1.png"
              className="absolute bg-no-repeat box-border caret-transparent h-full object-contain outline-[3px] text-nowrap align-baseline w-full z-[-1] left-0 top-0"
            />
          </div>
        </span>
      </a>
    </div>
  );
};
