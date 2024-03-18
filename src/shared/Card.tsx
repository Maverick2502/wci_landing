import { useTranslation } from "react-i18next";

function Card() {
  const { t } = useTranslation("translation");

  return (
    <div>
      <pre>{t("menu")}</pre>
    </div>
  );
}

export default Card;
