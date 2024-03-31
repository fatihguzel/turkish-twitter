// src/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/i18n/en";
import tr from "@/i18n/tr";

const resources = {
	en: {
		translation: en,
	},
	tr: {
		translation: tr,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "tr",
	fallbackLng: "tr",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
