import { Card, CardImage, CardTitle } from "./styles";
export type CardProps = {
  title: string;
  imageUrl: string;
};
export const CategoryCard = ({ title, imageUrl }: CardProps) => {
  return (
    <Card>
      <CardImage>
        <img src={imageUrl} alt={title} />
      </CardImage>
      <CardTitle>
        <button>{title}</button>
      </CardTitle>
    </Card>
  );
};
CategoryCard.displayName = "CategoryCard";
Card.displayName = "Card";
CardImage.displayName = "CardImage";
CardTitle.displayName = "CartTitle";
