import TeamCard from "./TeamCard";
import TitleRight from "./TitleRight";

const Team = () => {
  return (
    <section className="bg-[#191919] py-[100px]">
      <div className="container">
        <TitleRight
          text={"MEET OUR PROFESSIONAL ELITE TEAM "}
          position={"right-[460px] md:right-[100px]"}
          width={"max-w-[500px]"}
        />
        <div className="flex justify-between gap-[20px]  flex-wrap my-[30px]">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
