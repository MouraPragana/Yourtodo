import tw, { styled } from "twin.macro";

interface IStyledSpanProps {
  dataFinalizacao?: string;
}

export const StyledSpan = styled.span<IStyledSpanProps>`
  ${tw`block text-gray-800 font-bold`};
`;

export const StyledParagraph = styled.span<IStyledSpanProps>`
  ${tw` text-gray-800  inline font-normal`};
  ${({ dataFinalizacao }) =>
    dataFinalizacao && tw`line-through italic  text-gray-800`};
`;
