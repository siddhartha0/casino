import companyLogo from "./assets/img/companyLogo.png";
import banner from "./assets/img/banner.jpg";
import { CasinoSection, HouseSection, SidebarData } from "./const/index";
import { GameSection, SideBar } from "./components/index";

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
          {SidebarData.map((data, id) => (
            <SideBar
              key={data.id + id}
              menuItem={data.children}
              header={data.header}
            />
          ))}
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
              {CasinoSection.map((game, id) => (
                <GameSection
                  key={game.id + id}
                  imgUrl={game.imgUrl}
                  title={game.title}
                />
              ))}
            </div>
          </section>

          <section className="text-white flex flex-col gap-2 mt-4">
            <header className="text-xl font-semibold">House Games</header>
            <article className="font-semibold">
              Enjoy one of the classics
            </article>

            <section className="grid grid-cols-3 p-3  gap-4">
              {HouseSection.map((game, id) => (
                <div className=" flex mt-4 justify-center " key={game.id + id}>
                  <GameSection
                    key={game.id + id}
                    imgUrl={game.imgUrl}
                    title={game.title}
                  />
                </div>
              ))}
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
