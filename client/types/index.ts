import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Schedule = {
  title: string;
  poster: string;
  postDate: Date;
  endDate: Date;
  description: String;
  priorityLevel: PriorityLevel;
};

export type PriorityLevel =
  | 'Red'
  | 'Yellow'
  | 'Normal';
