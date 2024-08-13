// import "./App.css";
import companyLogo from "./assets/img/companyLogo.png";
import banner from "./assets/img/banner.jpg";
import slot from "./assets/img/slots.jpg";
import gotti from "./assets/img/goti.jpg";
import pokker from "./assets/img/poker.jpg";
import roullete from "./assets/img/roullete.jpg";
import fortune from "./assets/img/fortune.jpg";

function App() {
  return (
    <main className="flex bg-white w-full relative min-h-[100vh]">
      <section
        id="side-bar"
        className="flex flex-col gap-4 bg-[#1B1D21] fixed top-0 max-h-[100vh] min-w-56 p-4 overflow-x-scroll"
      >
        <header className="h-34 w-36 flex place-self-center">
          <img src={companyLogo} alt="img" />
        </header>

        <div id="menu-list" className="flex flex-col gap-8">
          <section className="group/casino flex flex-col gap-4 hover:animate-float ">
            <div className="flex place-items-center gap-2 cursor-pointer ">
              <header className="text-xl text-white font-semibold capitalize">
                Casino
              </header>
              <article className="text-2xl font-bold text-fav">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(-90 12 12)">
                    <path
                      stroke="currentColor"
                      stroke-dasharray="8"
                      stroke-dashoffset="8"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M9 12L14 7M9 12L14 17"
                      fill="currentColor"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.3s"
                        values="8;0"
                      />
                    </path>
                  </g>
                </svg>
              </article>
            </div>

            <a
              className="flex hover:animate-jiggle  place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2 "
              href=""
            >
              <header>🎰</header>
              <article>Slots</article>
            </a>

            <a
              href=""
              className="flex hover:animate-jiggle  place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2"
            >
              <header>🎲</header>
              <article>Craps</article>
            </a>
          </section>

          <section className="group/house flex flex-col gap-4 hover:animate-float">
            <div className="flex place-items-center gap-2 cursor-pointer ">
              <header className="text-xl text-white font-semibold capitalize">
                House Games
              </header>
              <article className="text-2xl font-bold text-fav">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(-90 12 12)">
                    <path
                      stroke="currentColor"
                      stroke-dasharray="8"
                      stroke-dashoffset="8"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M9 12L14 7M9 12L14 17"
                      fill="currentColor"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.3s"
                        values="8;0"
                      />
                    </path>
                  </g>
                </svg>
              </article>
            </div>

            <a
              href=""
              className=" flex  hover:animate-jiggle place-items-center gap-4 text-sm font-normal  bg-[#24262B] rounded-lg text-white p-2"
              onClick={() => console.log("clicked")}
            >
              <header>💫</header>
              <article>Wheel Of Fortune</article>
            </a>

            <a
              href=""
              className=" flex hover:animate-jiggle place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2"
              onClick={() => console.log("clicked")}
            >
              <header>🎥</header>
              <article>Video Poker</article>
            </a>

            <a
              href=""
              className=" flex hover:animate-jiggle place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2"
              onClick={() => console.log("clicked")}
            >
              <header>🎴</header>
              <article>Baccarat</article>
            </a>

            <a
              href=""
              className=" flex hover:animate-jiggle place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2"
              onClick={() => console.log("clicked")}
            >
              <header>♠️</header>
              <article>Poker</article>
            </a>

            <a
              href=""
              className=" flex hover:animate-jiggle place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2"
              onClick={() => console.log("clicked")}
            >
              <header>🎡</header>
              <article>Roulette</article>
            </a>

            <a
              href=""
              className=" flex hover:animate-jiggle place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2"
              onClick={() => console.log("clicked")}
            >
              <header>🃏</header>
              <article>BlackJack</article>
            </a>
          </section>
        </div>
      </section>

      <section
        className="flex flex-col   bg-[#17181A] w-full p-2"
        id="game-section"
      >
        <div className="ml-60 flex flex-col mt-6 gap-6">
          <header className="text-3xl text-white font-semibold uppercase">
            Welcome to the Casino
          </header>
          <section
            className="w-[95%] h-[250px] flex place-self-center rounded-2xl text-white relative"
            style={{
              background: `url(${banner}) no-repeat`,
              backgroundSize: "100% 100%",
            }}
          >
            <article className="text-3xl font-extrabold text-hold z-10 absolute top-4 right-12">
              Complete Package Game
            </article>

            <article className="text-xl font-semibold text-hold z-10 absolute  top-20 -right-0 w-[38%]">
              Play your favorite game to earn coins, rewards & up level your
              skills
            </article>
          </section>

          <section className="text-white flex flex-col gap-2">
            <header className="text-xl font-semibold">Casino</header>
            <article className="font-semibold">
              Enjoy your favourite casino games
            </article>

            <div className="flex mt-4 justify-center">
              <a
                className="w-[50%] h-[180px] rounded-xl hover:animate-pulsing cursor-pointer relative"
                style={{
                  background: `url(${slot}) no-repeat`,
                }}
              >
                <article className="text-xl font-extrabold text-hold z-10 absolute bottom-14 left-2">
                  Slots
                </article>

                <button className="text-md bg-white p-1 font-normal text-hold z-10 absolute bottom-5 left-2">
                  Play game
                </button>
              </a>

              <a
                className="w-[50%] h-[180px] rounded-2xl hover:animate-pulsing cursor-pointer relative"
                style={{
                  background: `url(${gotti}) no-repeat`,
                }}
              >
                <article className="text-xl font-extrabold text-black-900 z-10 absolute bottom-14 left-2">
                  Craps
                </article>

                <button className="text-md font-normal bg-brand p-1 text-hold z-10 absolute bottom-5 left-2">
                  Play game
                </button>
              </a>
            </div>
          </section>

          <section className="text-white flex flex-col gap-2 mt-4">
            <header className="text-xl font-semibold">House Games</header>
            <article className="font-semibold">
              Enjoy one of the classics
            </article>

            <section className="grid grid-cols-3 p-3  gap-4">
              <div className=" flex mt-4 justify-center ">
                <a
                  className="w-[100%] h-[180px] rounded-xl hover:animate-pulsing cursor-pointer relative"
                  style={{
                    background: `url(${pokker}) no-repeat`,
                  }}
                >
                  <article className="text-xl font-extrabold text-hold z-10 absolute bottom-14 left-2">
                    Poker
                  </article>

                  <button className="text-md bg-white p-1 font-normal text-hold z-10 absolute bottom-5 left-2">
                    Play game
                  </button>
                </a>
              </div>

              <div className=" flex mt-4 justify-center">
                <a
                  className="w-[100%] h-[180px] rounded-2xl hover:animate-pulsing cursor-pointer relative"
                  style={{
                    background: `url(${roullete}) no-repeat`,
                  }}
                >
                  <article className="text-xl font-extrabold text-hold z-10 absolute bottom-14 left-2">
                    Roullete
                  </article>

                  <button className="text-md font-normal bg-brand p-1 text-hold z-10 absolute bottom-5 left-2">
                    Play game
                  </button>
                </a>
              </div>

              <div className=" flex mt-4 justify-center">
                <a
                  className="w-[100%] h-[180px] rounded-2xl hover:animate-pulsing cursor-pointer relative"
                  style={{
                    background: `url(${fortune}) no-repeat`,
                  }}
                >
                  <article className="text-xl font-extrabold text-hold z-10 absolute bottom-14 left-2">
                    Wheel of fortune
                  </article>

                  <button className="text-md font-normal bg-brand p-1 text-hold z-10 absolute bottom-5 left-2">
                    Play game
                  </button>
                </a>
              </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
