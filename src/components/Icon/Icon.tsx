import React from "react";
import { Icon, IconProps } from "@iconify/react";

interface Props extends IconProps {
  icon: string;
}

const IconComponent: React.FC<Props> = ({ icon, ...props }) => {
  return <Icon icon={icon} {...props} />;
};

export default IconComponent;
