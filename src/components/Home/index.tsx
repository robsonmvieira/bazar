import { Carousel } from "../Carousel";
import { SkillsCard } from "./components/SkillsCard";
import { Container, HomerContainer, BestSellingCategories } from "./style";

export type Slide = {
  id: number;
  imageUrl: string;
  title: string;
};

export type HomeProps = {
  slides: Slide[];
};

export const MainPage = ({ slides }: HomeProps) => {
  return (
    <>
      <HomerContainer>
        <Container>
          <Carousel slides={slides} parentWidth={1400} />
        </Container>
      </HomerContainer>
      <SkillsCard />
      <BestSellingCategories>
        Best selling Categories
      </BestSellingCategories>

    </>
  );
};
