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
  border: 1px solid #e7ebf2;
  padding: 32px 24px;
  border-radius: 4px;
  h6 {
    color: #6713c4;
  }
`;

export { TestimonialAvatar, TestimonialContent };
