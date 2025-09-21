export interface HeroSlideType {
  id: number;
  image: string;
  overlay: string;
  title: string;
  description: string;
  color?: string;

  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

export interface HeroIndicatorsProps {
  total: number;
  activeIndex: number;
}

export interface HeroSlideProps {
    slide: HeroSlideType;
    indicators?: React.ReactNode;
}
