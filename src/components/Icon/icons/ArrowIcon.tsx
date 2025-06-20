import React from "react";

interface IArrowIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ArrowIcon = ({ className, ...props }: IArrowIconProps) => {
  return (
    <svg
      {...props}
      className={className}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.43059 0.342093L4.09865 4.67403L1.61618 2.19156L0.780273 3.02747L4.09865 6.34584L9.26649 1.178L8.43059 0.342093Z"
        fill="#F2F2F2"
      />
    </svg>
  );
};
