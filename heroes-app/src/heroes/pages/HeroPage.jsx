import { useParams } from "react-router-dom";

export const HeroPage = () => {
  const { heroId } = useParams();

  return (
    <>
      <h1>HeroPage</h1>
    </>
  );
};
