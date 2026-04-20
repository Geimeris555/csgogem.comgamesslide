export type SpinnerItemProps = {
  outerWrapperClass?: string;
  items: {
    multiplier: string;
    patternImageSrc: string;
    weaponImageSrc: string;
    badgeClass?: string;
    badgeText?: string;
    weaponName: string;
    skinName: string;
    price: string;
    outerVariantClass: string;
    innerVariantClass: string;
  }[];
};

export const SpinnerItem = (props: SpinnerItemProps) => {
  const { outerWrapperClass, items } = props;

  const renderItem = (
    item: SpinnerItemProps["items"][number],
    index: number,
  ) => (
    <div
      className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]"
      key={index}
    >
      <div
        className={`relative aspect-[128_/_188] bg-no-repeat box-border caret-transparent outline-[3px] text-center w-[148px] border p-[3px] rounded-[11px] border-solid ${item.outerVariantClass}`}
      >
        <div
          className={`relative bg-[linear-gradient(rgb(13,21,31),rgb(16,25,36))] box-border caret-transparent h-full outline-[3px] rounded-lg before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:tabular-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:opacity-20 before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-0 before:rounded-lg before:border-separate before:left-0 before:top-0 before:font-rubik ${item.innerVariantClass}`}
        >
          <div className="relative bg-no-repeat box-border caret-transparent flex flex-col h-full outline-[3px] overflow-hidden py-3">
            <h4 className="text-sm font-bold bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] outline-[3px]">
              {" "}
              {item.multiplier}
            </h4>
            <div className="relative bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -mt-5 -mb-8">
              <div className="relative bg-no-repeat box-border caret-transparent outline-[3px]">
                <img
                  src={item.patternImageSrc}
                  className="aspect-square bg-no-repeat box-border caret-transparent inline outline-[3px] align-baseline w-full p-4"
                />
              </div>
              <img
                src={item.weaponImageSrc}
                className="absolute aspect-square bg-no-repeat box-border caret-transparent h-full max-w-[130px] object-contain outline-[3px] translate-x-[-50.0%] align-baseline w-full p-2 left-2/4 top-0"
              />
            </div>
            <div className="bg-no-repeat box-border caret-transparent flex flex-col grow justify-end min-h-[auto] min-w-[auto] outline-[3px] px-2">
              <div className="text-neutral-200 text-xs font-medium items-center bg-no-repeat box-border caret-transparent flex justify-center tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] mb-1">
                {item.badgeText && (
                  <span
                    className={`bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] uppercase mr-1`}
                  >
                    {item.badgeText}
                  </span>
                )}
                <span className="bg-no-repeat box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                  {item.weaponName}
                </span>
              </div>
              <h4 className="text-gray-400 text-xs font-medium bg-no-repeat box-border caret-transparent tracking-[0.4px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                {item.skinName}
              </h4>
              <h5 className="text-sm font-medium bg-no-repeat box-border caret-transparent tracking-[0.249999px] leading-[19.95px] min-h-[auto] min-w-[auto] opacity-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-3">
                <i className="relative text-[21px] italic items-center bg-no-repeat box-border caret-transparent inline-flex h-[21px] justify-center tracking-[normal] leading-[21px] min-w-[21px] outline-[3px] text-nowrap align-middle w-[21px] mr-1">
                  <img
                    src="https://csgogem.com/_nuxt/coin.DLJkCemJ.avif"
                    className="aspect-square bg-no-repeat box-border caret-transparent max-w-[19.9px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap align-baseline w-[19px]"
                  />
                </i>
                {item.price}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (outerWrapperClass) {
    return (
      <div
        className={`bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] ${outerWrapperClass}`}
      >
        {items.map((item, index) => renderItem(item, index))}
      </div>
    );
  }

  return (
    <div className="bg-no-repeat box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
};
