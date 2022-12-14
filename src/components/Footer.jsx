import React from "react";

const Footer = ({ footerAPI }) => {
  const { titles, links } = footerAPI;
  const date = new Date();

  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3  w-full m-auto md:max-w-none md:gap=4">
          {titles.map((val, i) => (
            <div key={i} className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold cursor-pointer">
                {val.title}
              </h1>
            </div>
          ))}

          {links.map((list, i) => (
            <ul key={i} className="grid items-center gap-2 mt-2">
              {list.map((val, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-xs cursor-pointer hover:pl-2 
                border-transparent hover:border-l-red-500 hover:border-l-[5px] transition-all duration-300 hover:text-[.95rem]"
                >
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm md:text-center">
            Copyright &copy; All Reserved Rights {date.getFullYear()} ||
            Developed by <span className="font-semibold"> LWHA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
