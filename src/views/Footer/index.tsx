import React from "react";
import { useTranslation } from "react-i18next";
import { footerRoutes } from "./models/footer";
import Link from "next/link";
import IconComponent from "@/components/Icon/Icon";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 text-white py-8  ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="space-x-4 mb-4 flex flex-wrap items-center justify-center">
          {footerRoutes.map((rotue) => (
            <Link
              key={rotue.name}
              href={rotue.path}
              className="
              flex
              items-center
              justify-center
              text-white
              hover:text-blue-500
              transition
              duration-300
              ease-in-out
              cursor-pointer
              gap-x-2
              "
            >
              <IconComponent className="cursor-pointer" icon={rotue.icon} />
              {t(rotue.name)}
            </Link>
          ))}
        </div>
        <p>&copy; Turkish Twitter</p>
      </div>
    </div>
  );
};

export default Footer;
