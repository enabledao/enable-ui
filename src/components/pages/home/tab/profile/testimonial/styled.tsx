import styled from "styled-components";

const TestimonialAvatar = styled.div`
  border: 1px solid #e7ebf2;
  display: inline-flex;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 100px;
  position: absolute;
  img {
    border-radius: 100px;
  }
`;

const TestimonialContent = styled.div`
  padding: 24px 0 8px 0;
  border-radius: 4px;
`;

export { TestimonialAvatar, TestimonialContent };
