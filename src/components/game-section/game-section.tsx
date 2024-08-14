interface gamesectionpropTypes {
  imgUrl: string;
  title: string;
}

export const GameSection = ({ imgUrl, title }: gamesectionpropTypes) => {
  return (
    <a
      className="w-[50%] h-[180px] rounded-xl hover:animate-pulsing cursor-pointer relative"
      style={{
        background: `url(${imgUrl}) no-repeat`,
      }}
    >
      <article className="text-xl font-extrabold text-hold z-10 absolute bottom-14 left-2">
        {title}
      </article>

      <button className="text-md bg-white p-1 font-normal text-hold z-10 absolute bottom-5 left-2">
        Play game
      </button>
    </a>
  );
};
