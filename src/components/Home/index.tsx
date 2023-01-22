import { Star } from "phosphor-react";
import { Carousel } from "../Carousel";
import { CardProps, CategoryCard } from "./components/CategoryCard";
import { SkillsCard } from "./components/SkillsCard";
import {
  Container,
  HomerContainer,
  BestSellingCategories,
  ContainerCard,
  Divider,
  CardByType,
  ContainerTextCardByType,
  ContainerCardByType,
} from "./style";

export type Slide = {
  id: number;
  imageUrl: string;
  title: string;
};

export type HomeProps = {
  slides: Slide[];
  bestSellingCategories: CardProps[];
};

export const MainPage = ({ slides, bestSellingCategories }: HomeProps) => {
  return (
    <>
      <HomerContainer>
        <Container>
          <Carousel slides={slides} parentWidth={1400} />
        </Container>
      </HomerContainer>
      <SkillsCard />
      <BestSellingCategories>Best selling Categories</BestSellingCategories>
      <ContainerCard>
        {bestSellingCategories.map((card) => (
          <CategoryCard key={card.imageUrl} {...card} />
        ))}
      </ContainerCard>
      <BestSellingCategories css={{ marginTop: "4rem" }}>
        Best Selling Product
      </BestSellingCategories>
      <ContainerCard>
        {bestSellingCategories.map((card) => (
          <CategoryCard key={card.imageUrl} {...card} />
        ))}
      </ContainerCard>
      {/* <Star size={18} color="#fde047" weight="duotone" /> */}

      <ContainerCard css={{marginTop: '4rem'}}>
        <CardByType>
          <ContainerCardByType>
            <img src="images/category-by-types/man-category.jpg"/>
            <ContainerTextCardByType>
              <h2>For Men&apos;s</h2>
              <p>25% Off</p>
              <Divider />
              <a href="#">shop now</a>
            </ContainerTextCardByType>
          </ContainerCardByType>
        </CardByType>

        <CardByType>
          <ContainerCardByType>
            <img src="images/category-by-types/bf-image-category.jpg"/>
            <ContainerTextCardByType>
              <h2>For Men&apos;s</h2>
              <p>25% Off</p>
              <Divider />
              <a href="#">shop now</a>
            </ContainerTextCardByType>
          </ContainerCardByType>
        </CardByType>


        <CardByType>
          <ContainerCardByType>
            <img src="images/category-by-types/woman-category.jpg"/>
            <ContainerTextCardByType>
              <h2>For Men&apos;s</h2>
              <p>25% Off</p>
              <Divider />
              <a href="#">shop now</a>
            </ContainerTextCardByType>
          </ContainerCardByType>
        </CardByType>


      </ContainerCard>
      <BestSellingCategories css={{ marginTop: "2rem" }}>
        Featured Products
      </BestSellingCategories>
      <ContainerCard>
        {bestSellingCategories.map((card) => (
          <CategoryCard key={card.imageUrl} {...card} />
        ))}
      </ContainerCard>
    </>
  );
};

CardByType.displayName = "CardByType";
ContainerCardByType.displayName = "ContainerCardByType";
ContainerTextCardByType.displayName = "ContainerTextCardByType";
CategoryCard.displayName = "CategoryCard";