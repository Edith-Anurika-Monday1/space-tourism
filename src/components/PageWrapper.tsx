import React from "react";

interface PageWrapperProps {
  background: "home" | "destination" | "crew" | "technology";
  title?: string;
  number?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  background,
  title,
  number,
  children,
}) => {
  let bgClass = "min-h-screen flex flex-col bg-cover bg-no-repeat ";

  switch (background) {
    case "home":
      bgClass += "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
      break;
    case "destination":
      bgClass +=
        "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";
      break;
    case "crew":
      bgClass += "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
      break;
    case "technology":
      bgClass +=
        "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop";
      break;
    default:
      break;
  }

  return (
    <div className={bgClass}>
      <main className="flex-1 container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {title && number && (
          <h1 className="uppercase tracking-[4px] text-white/70 text-center md:text-left mb-12">
            <span className="font-bold text-gray-500 mr-4">{number}</span>
            {title}
          </h1>
        )}
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
