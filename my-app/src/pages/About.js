import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="stylesheet"
        as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?display=swap&family=Manrope%3Awght%40400%3B500%3B700%3B800&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900"
      />
      <title>About Us</title>
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      <div
        className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-0 py-0 w-full sticky top-0 bg-white/80 backdrop-blur-sm z-50">
            <div className="flex items-center gap-2 text-[#0d151c] pl-0">
              <div className="size-16">
                <svg
                  width={60}
                  height={60}
                  viewBox="0 0 118 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <rect
                    y="-2.5"
                    width="117.157"
                    height={129}
                    fill="url(#pattern0_141_18)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_141_18"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0_141_18"
                        transform="scale(0.00361011 0.00327869)"
                      />
                    </pattern>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#0d151c] text-base font-bold leading-tight tracking-[-0.015em] m-0 p-0">
                Sindhu Youth Circle
              </h2>
            </div>
            <div className="flex items-center gap-12 pr-[38px]">
              <Link to="/" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Home
              </Link>
              <Link to="/about" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                About
              </Link>
              <Link to="/activities" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Activities
              </Link>
              <Link to="/gymkhana" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Gymkhana
              </Link>
              <Link to="/events" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Events
              </Link>
              <Link to="/library" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Library
              </Link>
              <Link to="/contact" className="text-[#0d151c] text-lg font-normal leading-normal hover:text-[#2094f3] transition-all duration-300 hover:scale-105 m-0 p-0">
                Contact
              </Link>
            </div>
          </header>
          <div className="flex flex-1 py-5">
            <div className="layout-content-container flex flex-col w-full">
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-col gap-3">
                  <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight">
                    About Us
                  </p>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Sindhu Youth Circle, a nonprofit organization, was established
                    in 1962 by a group of young Sindhi men with the aim of promoting
                    Sindhi culture and providing welfare services to the community.
                    Over the years, the organization has made significant
                    contributions to the preservation and promotion of Sindhi
                    heritage and has undertaken various social welfare projects. The
                    organization's primary focus is on the cultural preservation and
                    community welfare.
                  </p>
                </div>
              </div>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                History
              </h2>
              <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/d6faa768-6783-42f3-97df-72e326c77afc.png")'
                    }}
                  />
                  <div className="w-[1.5px] bg-[#cedde8] h-2 grow" />
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#0d151c] text-base font-medium leading-normal">
                    Sindhu Youth Circle was established in 1962
                  </p>
                  <p className="text-[#49779c] text-base font-normal leading-normal">
                    Established in 1962
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[1.5px] bg-[#cedde8] h-2" />
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/26b4cfce-217c-4c57-b8d0-868ed8e4b7b2.png")'
                    }}
                  />
                  <div className="w-[1.5px] bg-[#cedde8] h-2 grow" />
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#0d151c] text-base font-medium leading-normal">
                    Publication of 'Sindhu' magazine in 1972
                  </p>
                  <p className="text-[#49779c] text-base font-normal leading-normal">
                    Published in 1972
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 pb-3">
                  <div className="w-[1.5px] bg-[#cedde8] h-2" />
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/06492a23-80a4-4c35-abcc-9f5d50bdc7cb.png")'
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col py-3">
                  <p className="text-[#0d151c] text-base font-medium leading-normal">
                    Conferred with 'Shri Mohandas Ranjhan Valecha Award' in 1987
                  </p>
                  <p className="text-[#49779c] text-base font-normal leading-normal">
                    Awarded in 1987
                  </p>
                </div>
              </div>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Mission
              </h2>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                The mission of Sindhu Youth Circle is to promote Sindhi heritage and
                culture, foster harmony and goodwill among communities, and provide
                welfare services to the needy without any distinction of caste,
                creed, or religion.
              </p>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Key Achievements
              </h2>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                The organization has made significant contributions to the
                preservation and promotion of Sindhi heritage and has undertaken
                various social welfare projects. It has published 'Sindhu' magazine,
                which is widely recognized for its literary and cultural content. In
                addition, it has conferred the 'Shri Mohandas Ranjhan Valecha Award'
                in recognition of outstanding contributions to Sindhi culture and
                literature.
              </p>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Leadership
              </h2>
              <div className="flex p-4 @container">
                <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                  <div className="flex gap-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                      style={{ backgroundImage: "url(./founder.svg)" }}
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                        Mr. Sunder Dangwani
                      </p>
                      <p className="text-[#49779c] text-base font-normal leading-normal">
                        Chief Trustee, Sindhu Youth Circle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-4 bg-white shadow-md">
        <p>
          © 2025 <span className="font-semibold">Sindhu Youth Circle</span>. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}

export default About;
