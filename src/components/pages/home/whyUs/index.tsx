import React from "react";
import { Container } from "../../../../styles/bases";
import { Margin, Padding } from "../../../../styles/utils";
import { Accordion, Row, Col } from "../../../lib";
import WhyUsIllustration from "../../../../images/illustration/why-us.svg";
import tickPaperIcon from "../../../../images/icons/tick-paper.svg";
import { WhyUsWrapper, WhyUsContent, WhyUsListWrapper } from "./styled";

const dataAccordion = [
  {
    title:
      "I intend to secure a full time role in the USA, immediately after graduation",
    content:
      "As mentioned earlier, 98% of MILR graduate went into employment, at a mean starting salary of $86,320. That makes the debt burden ratio is less than 15% of my income alone.\n I am confident to get a job in those targeted countries, especially in the US. Moreover, we have extensive experience in our fields. I am guaranteed 18 months of OPT, that is a sufficient period to get a permanent job in the US after finishing the MILR program. As a fallback, I will also be applying to Canada, New Zealand and Australia."
  },
  {
    title: "I will have full support from my husband’s (Doctorate) salary.",
    content:
      "My husband and I share the same values on the importance of education. My husband intends to contribute to my student loans. His starting salary as a PhD in engineering is $95,000. The debt burden ratio will be approximately 5.2%  of our income altogether. He is currently finishing his PhD in Civil Engineering at North Carolina State University this December, and has already received several job offers. Considering our expertise, we are planning to pursue our careers in the North America or Oceanian countries being US is on the top of our list followed by Canada, New Zealand and Australia, respectively."
  },
  {
    title:
      "I intend to do early paybacks by working part time during the school year and during the summer.",
    content:
      "Last but not least, I want to note that my final payment fallback is simply to return to Indonesia. I’ll be able to resume my career with a significant pay raise, as I will be at an executive level after this Masters program. My husband and my current combined salary is a debt burden ratio of 25%. However, with calculated and expected pay upgrade, the debt burden ratio will decrease to only 20% maximum, which is a very healthy ratio considering our mortgage and car payments are already paid off."
  }
];

const WhyUs: React.FC = () => (
  <WhyUsWrapper>
    <Container>
      <WhyUsContent>
        <Row>
          <Col lg={5} md={4} sm="hidden" text="center">
            <img
              src={WhyUsIllustration}
              alt="HomeHero - Illustraion"
              width={340}
            />
          </Col>
          <Col lg={7} md={8} sm={12}>
            <img
              src={tickPaperIcon}
              alt="Icon - Tick Paper Icon"
              width={34}
              style={{ position: "absolute" }}
            />
            <Padding left={48}>
              <h2>Why Us & Payback Plan</h2>
            </Padding>
            <p>
              The estimated cost for the two-year program based on the&nbsp;
              <b>2019-2021</b>&nbsp;academic year is approximately&nbsp;
              <b>$128,000.</b>&nbsp;The estimated annual expense breakdown is as
              follows:
            </p>
            <WhyUsListWrapper>
              <li>
                <p>
                  Tuition: <b>$37,022</b> per academic year
                </p>
              </li>
              <li>
                <p>
                  Student Health Insurance: <b>$3,116</b> per academic year
                </p>
              </li>
              <li>
                <p>
                  Student Activity Fee: <b>$84</b> per academic year
                </p>
              </li>
              <li>
                <p>
                  Living Expenses: <b>$2,268</b> per month
                </p>
              </li>
              <li>
                <p>
                  Books & supply: <b>$1,330</b>
                </p>
              </li>
            </WhyUsListWrapper>
            <Margin vertical={24}>
              <h6>
                I intend to payback this loan through the following strategies:
              </h6>
            </Margin>
            <Accordion data={dataAccordion} />
          </Col>
        </Row>
      </WhyUsContent>
    </Container>
  </WhyUsWrapper>
);

export default WhyUs;