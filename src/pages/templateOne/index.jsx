import Button from "@components/Button";
import CountdownTime from "@components/CountdownTime";
import Lucide from "@components/Lucide";
import { eventDateTime, facilities, partners, schedules } from "@data/allData";
import { imgFile } from "@data/defaultImage";
import { isMobile } from "react-device-detect";
import MyHeader from "./Partials/MyHeader";

function PageOne() {
  return isMobile ? (
    <>
      <div className="w-full aspect-[9/12] overflow-hidden relative">
        <img
          src={imgFile.bgHero}
          alt="background hero"
          className="w-full h-full object-cover opacity-70 absolute top-0 left-0 z-[-1]"
        />
      </div>
    </>
  ) : (
    <>
      <MyHeader logoBrand={imgFile.logoBrand} />
      <span className="w-full h-full fixed top-0 left-0 transform scale-x-[-1] z-[-1] overflow-hidden bg-black">
        {/* <span className="w-full min-h-[640px] aspect-[16/6] fixed top-0 left-0 transform scale-x-[-1] z-[-1] overflow-hidden bg-black"> */}
        <img
          src={imgFile.bgHero}
          alt="background hero"
          className="w-full object-cover opacity-70"
        />
      </span>
      <section className="w-full max-w-screen-lg px-4 mx-auto flex flex-col sm:flex-row relative pt-20">
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-fit flex flex-col gap-4 p-4 sm:p-6 rounded-box bg-black/10 backdrop-blur-md text-white shadow-lg mb-10 relative">
            <p className="font-bold">#THE 5TH ISCADB 2024 PRESENT</p>
            <p className="text-center text-2xl sm:text-4xl leading-6 sm:leading-8 font-medium">
              Unlock your DNA, <br /> Race to the finish
            </p>
            <div className="flex gap-2 items-center">
              <Lucide icon="MapPinned" className="w-4 h-4 -mt-1" />
              <p>RS. Sardjito Yogyakarta</p>
            </div>
            <CountdownTime endDate={eventDateTime} />
            <div className="flex h-4 relative">
              <Button className="shadow-lg absolute -bottom-2.5 sm:-bottom-4 left-1/2 -translate-x-1/2 w-4/5">
                Buy Ticket
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <p className="absolute top-[100px] left-[200px] text-8xl font-mono font-black">
            GENE
          </p>
          <p className="absolute top-[110px] left-[220px] text-8xl font-mono font-black">
            RUN
          </p>
          <img
            src={imgFile.imgUserRun}
            alt="logo hero"
            className="opacity-95"
          />
        </div>
      </section>

      <section className="rounded-t-3xl bg-base-100 py-20">
        <div className="w-full max-w-screen-lg px-2 mx-auto flex flex-col">
          <p className="font-bold font-mono text-5xl text-center mb-20">
            Facilities
          </p>
          <div className="grid grid-cols-3 gap-4 sm:gap-10">
            {facilities.map((facil, idF) => (
              <div
                key={idF}
                className="w-full flex flex-col gap-4 items-center"
              >
                <div className="w-3/5 aspect-square rounded-full flex overflow-hidden">
                  <img
                    src={facil.img}
                    alt="products"
                    className="w-full object-cover"
                  />
                </div>
                <p className="sm:text-lg font-medium">{facil.name}</p>
                <p className="text-xs sm:text-sm opacity-70 text-justify">
                  {facil.desc}
                </p>
              </div>
            ))}
          </div>

          <hr className="my-20" />

          <p className="font-bold font-mono text-5xl text-center mb-20">
            Event Schedules
          </p>
          <div className="flex flex-col items-center">
            {schedules.map((sched, idS) => {
              const isInt = idS % 2 === 0;
              return (
                <div
                  key={idS}
                  className={`flex-1 flex ${
                    isInt ? "flex-row-reverse" : "flex-row"
                  } gap-4 relative`}
                >
                  <div className="flex-1 flex flex-col pt-2">
                    <p>{sched.title}</p>
                    <p>{sched.desc}</p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-info flex z-[1]">
                    <p className="m-auto font-bold font-mono">{idS}</p>
                  </span>
                  <div className="flex-1"></div>
                  {schedules.length - 1 > idS && (
                    <span className="w-1 h-full absolute top-4 left-1/2 -translate-x-1/2 bg-info z-0" />
                  )}
                </div>
              );
            })}
          </div>

          <hr className="my-20" />

          <p className="font-bold font-mono text-5xl text-center mb-20">
            Our Sponsors
          </p>
          <div className="w-full flex gap-2">
            {partners.map((partner, idP) => (
              <div key={idP} className="flex-1 aspect-w-16 aspect-h-9">
                <img
                  src={partner.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="flex flex-col">
        <div
          className="relative w-full bg-white mx-auto"
          style={{
            clipPath: "polygon(50% 100%, 0 0, 100% 0)",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
        >
          <p className="font-bold font-mono text-5xl text-center mb-10">
            Event Schedules
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
        {schedules.map((sched, idS) => {
          const isInt = idS % 2 === 0;
          return (
            <div
              key={idS}
              className={`flex-1 flex ${
                isInt ? "flex-row-reverse" : "flex-row"
              } gap-4 relative`}
            >
              <div className="flex-1 flex flex-col pt-2">
                <p>{sched.title}</p>
                <p>{sched.desc}</p>
              </div>
              <span className="w-10 h-10 rounded-full bg-info flex z-[1]">
                <p className="m-auto font-bold font-mono">{idS}</p>
              </span>
              <div className="flex-1"></div>
              {schedules.length - 1 > idS && (
                <span className="w-1 h-full absolute top-4 left-1/2 -translate-x-1/2 bg-info z-0" />
              )}
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default PageOne;
