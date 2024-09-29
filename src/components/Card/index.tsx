import { Wrapper } from './styles.ts';
import type { CardProps } from './types.ts';

export const Card = ({ image, title }: CardProps) => {
    return (
        <Wrapper>
            <img src={image} alt="avatar" />
            <div>{title}</div>
        </Wrapper>
    );
};
