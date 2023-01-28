import {
  ClockCounterClockwise,
  CreditCard,
  RocketLaunch,
  ShieldCheck,
} from "phosphor-react";
import {
  Container,
  ContainerCard,
  ContainerImage,
  ContainerText,
  Title,
  Subtitle,
} from "./style";

export type SkillsCardProps = {};

export const SkillsCard = () => {
  return (
    <Container>
      <ContainerCard>
        <ContainerImage>
          <RocketLaunch size={32} color="#2B3445" />
        </ContainerImage>
        <ContainerText>
          <Title>Fast Delivery</Title>
          <Subtitle>Start from $10</Subtitle>
        </ContainerText>
      </ContainerCard>

      <ContainerCard>
        <ContainerImage>
          <ShieldCheck size={32} color="#2B3445" />
        </ContainerImage>
        <ContainerText>
          <Title>Money Guarantee</Title>
          <Subtitle>7 Days Back</Subtitle>
        </ContainerText>
      </ContainerCard>

      <ContainerCard>
        <ContainerImage>
          <ClockCounterClockwise size={32} color="#2B3445" />
        </ContainerImage>
        <ContainerText>
          <Title>365 Days</Title>
          <Subtitle>For free return</Subtitle>
        </ContainerText>
      </ContainerCard>

      <ContainerCard>
        <ContainerImage>
          <CreditCard size={32} color="#2B3445" />
        </ContainerImage>
        <ContainerText>
          <Title>Payment</Title>
          <Subtitle>Secure system</Subtitle>
        </ContainerText>
      </ContainerCard>
    </Container>
  );
};
