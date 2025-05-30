import {Schedule} from "@/src/types";
import {Card, CardBody, CardHeader} from "@heroui/card";
import React from "react";
import {Divider} from "@heroui/react";
// import {CheckWordLong, ShortenDesc} from "@/src/utils";

export const StarBlock: React.FC<{ schedule: Schedule}> = ({ schedule }) => {
  return (
    <Card className={"w-36 h-32"}>
      <CardHeader>
        <div className={"max-w-[400px]"}>
          <p className={"font-bold"}>{schedule.endDate.getDate()}</p>
        </div>
      </CardHeader>
      <Divider className={"mb-0"}/>
      <CardBody className={"pt-[0.2rem]"}>
        <p className={"text-lg mb-1"}>{schedule.title}</p>
        {/*<p className={"text-xs"}>{ShortenDesc(schedule.description)}</p>*/}
        {/*{*/}
        {/*  CheckWordLong(schedule.description)*/}
        {/*  ? <p className={"text-xs text-gray-400 text-end"}>자세히 보기</p>*/}
        {/*  : null*/}
        {/*}*/}
      </CardBody>
    </Card>
  )
}