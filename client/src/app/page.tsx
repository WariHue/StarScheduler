import {StarBlock} from "@/src/components/StarBlock";
import {Schedule} from "@/src/types";

export default function Home() {
  let a: Schedule = {
    title: "남극 동물 운동의 날",
    description: "AAAAAAAAAAAA",
    postDate: new Date(1748622047),
    endDate: new Date(1748622047),
    poster: "JohnDoe",
    priorityLevel: "NORMAL"
  }
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <StarBlock schedule={a}/>
    </section>
  );
}
