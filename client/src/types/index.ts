import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Schedule = {
  title: string;
  postDate: Date;
  endDate: Date;
  poster: string;
  description: string;
  priorityLevel : PriorityLevel
}

export type PriorityLevel =
  | 'NORMAL'
  | 'YELLOW'
  | 'RED';
