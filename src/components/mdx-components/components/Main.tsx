import styled from "@emotion/styled";
import tw from "twin.macro";

export const MainContent = styled.article`
  ${tw`w-4/5 mx-auto`};

  &&& {
    .gatsby-resp-image-wrapper {
      ${tw`w-full mb-8`};
      max-width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;

      img {
        object-fit: cover;
      }
    }
  }
`;
