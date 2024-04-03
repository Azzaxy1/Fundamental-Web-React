import { useContext } from "react";
import Posts from "../components/Posts";
import LocaleContext from "../contexts/LocaleContext";

function Tutorial() {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      <h1>Tutorial</h1>
      <Posts locale={locale} />
    </>
  );
}

export default Tutorial;
