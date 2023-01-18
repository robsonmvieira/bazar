import { Carousel } from "../Carousel";
import { SkillsCard } from "./components/SkillsCard";
import { Container, HomerContainer, Box } from "./style";

export type Slide = {
  id: number;
  imageUrl: string;
  title: string;
};

export type HomeProps = {
  slides: Slide[];
};
// const containerStyle = {
//   height: '70vh',
//   width: '1400px',
//   margin: '0 auto',

// }

export const MainPage = ({ slides }: HomeProps) => {
  return (
    <>
      <HomerContainer>
        <Container>
          <Carousel slides={slides} parentWidth={1400} />
        </Container>
      </HomerContainer>
      <SkillsCard />
    </>
  );
};
