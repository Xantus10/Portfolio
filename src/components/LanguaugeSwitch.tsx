import { useTranslation } from "react-i18next";

import './LanguageSwitch.module.css'

export const SUPPORTED_LANGUAGES = ['cs', 'en'];

function LanguageSwitch() {
  const { i18n } = useTranslation();

  return (
    <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.currentTarget.value)}>
      {
        SUPPORTED_LANGUAGES.map((val) => {
          return (
            <option key={val} value={val}>{val}</option>
          );
        })
      }
    </select>
  );
}

export default LanguageSwitch;