import React, { JSX } from "react";
import { ArrowIcon } from "./icons/ArrowIcon";
import { LogoIcon } from "./icons/LogoIcon";
import { PlusIcon } from "./icons/PlusIcon";
import { TrashIcon } from "./icons/TrashIcon";

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name: "logoIcon" | "plusIcon" | "arrowIcon" | "trashIcon";
  className?: string;
}

export const Icon = ({ name, className }: IIconProps): React.JSX.Element => {
  const icons = {
    logoIcon: <LogoIcon className={className} />,
    plusIcon: <PlusIcon className={className} />,
    arrowIcon: <ArrowIcon className={className} />,
    trashIcon: <TrashIcon className={className} />,
  };

  return icons[name];
};
