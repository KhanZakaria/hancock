import Title from "./Title";
import VideoCard from "./VideoCard";

import contest1 from "../assets/images/contest11.png";
import contest2 from "../assets/images/contest21.png";
import contest3 from "../assets/images/contest31.png";
import contest4 from "../assets/images/contest41.png";

const LiveStram = () => {
  return (
    <section className="bg-[#121212]">
      <div className="container py-[60px] md:py-[100px]">
        <Title
          text="LIVE STREAMIN VIDEO BY HANCOK"
          position={"left-[420px] md:left-[150px]"}
        />
        <div className="md:flex justify-between items-center">
          <VideoCard
            title={"HORIZON ZERO | DAWN"}
            shortTilte={"Guerrilla Games"}
            cover={"bg-tournament-item1"}
          />
          <VideoCard
            title={"LEAGUE OF | LEGENDS"}
            shortTilte={"Riot Games"}
            cover={"bg-tournament-item2"}
          />
          <VideoCard
            title={"PALADINS"}
            shortTilte={"Hi Rez Studios"}
            cover={"bg-tournament-item3"}
          />
        </div>

        <div className="text-white max-w-[1094px] mx-auto ">
          <h2 className="font-barlow text-[25px] uppercase text-center my-[40px] md:my-[60px]">
            PREVIOUS MATCHES
          </h2>
          {/* top card  */}
          <div className="flex justify-between pb-[30px] md:pb-[60px] ">
            <div className="flex justify-between items-center bg-[#212121] min-w-[45%] md:min-w-[426px] px-[5px] py-[10px] rounded bendingcardRight">
              <img
                src={contest1}
                alt="contest1"
              />
              <h3 className="mr-[60px]">TEAM DELTA</h3>
            </div>
            <div className="flex justify-between items-center px-[5px] py-[10px]">
              9:12
            </div>
            <div className="flex justify-between items-center bg-[#212121] min-w-[45%] md:min-w-[426px] px-[5px] py-[10px] bendingcardLeft">
              <h3 className="ml-[60px]">TEAM ALPHA</h3>
              <img
                src={contest2}
                alt="contest2"
              />
            </div>
          </div>
          {/* top card end  */}
          {/* bottom card  */}
          <div className="flex justify-between">
            <div className="flex justify-between items-center bg-[#212121] min-w-[45%] md:min-w-[426px] px-[5px] py-[10px] rounded bendingcardRight">
              <img
                src={contest3}
                alt="contest3"
              />
              <h3 className="mr-[60px]">TEAM DEVILS</h3>
            </div>
            <div className="flex justify-between items-center px-[5px] py-[10px]">
              17:8
            </div>
            <div className="flex justify-between items-center bg-[#212121] min-w-[45%] md:min-w-[426px] px-[5px] py-[10px] bendingcardLeft">
              <h3 className="ml-[60px]">TEAM NINJA</h3>
              <img
                src={contest4}
                alt="contest4"
              />
            </div>
          </div>
          {/* bottom card end  */}
        </div>
      </div>
    </section>
  );
};

export default LiveStram;
