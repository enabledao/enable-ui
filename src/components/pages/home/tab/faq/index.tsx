import React from "react";
import { Accordion, Row, Col } from "../../../../lib";
import { Margin, Padding } from "../../../../../styles/utils";
import QuestionIcon from "../../../../../images/icons/question.svg";
import FaqIllustration from "../../../../../images/illustration/faq.svg";

const dataAccordionAboutEnable = [
  {
    title: "What is Enable?",
    content:
      "Enable is a P2P lending and funding platform. Enable provides open-access, decentralized stablecoin lending based on trustless attestations. We use the Dai stablecoin and smart contracts to expand opportunity to emerging market borrowers through borderless credit"
  },
  {
    title: "How did Enable get its name?",
    content:
      "The name Enable comes from its mission to provide open-access decentralized lending platform for the underserved, improving the quality and cost of financial services, and addressing the underlying barriers to financial access around the world."
  },
  {
    title: "Who created Enable?",
    content:
      "Enable is an open-source project built by a  remote team of 4 engineers spread out across San Francisco, Lagos, Berlin and Jakarta. We met during the Ethereal + Gitcoin hackathon in May 2019."
  }
];

const dataAccordionApplyingLending = [
  {
    title: "Who can be lenders?",
    content: "Anyone with cryptocurrency wallet can be lenders."
  },
  {
    title: "How do I apply to be a lender?",
    content:
      "It is very easy. You need to download and login to yourYou just have to click “Lend” and fill out 2-step from."
  },
  {
    title: "I don’t live in the United States, can I be a lender?",
    content:
      "Sure! That is the purpose of Enable. We provide borderless credit access to anyone in the world, both borrowers and lenders."
  },
  {
    title: "What is the minimum amount I can lend?",
    content: "You can lend 25 Dai"
  },
  {
    title: "What is the maximum amount I can lend?",
    content: "You can lend up to 30,000 Dai"
  },
  {
    title: "I don’t have Dai, what should I do to be able to lend?",
    content: "You can convert your digital asset to Dai in your crypto wallet."
  }
];

const dataAccordionLoan = [
  {
    title: "Do I need to fund the entire loan?",
    content:
      "No, Enable crowdfunds loans so there are many individual lender who come together to contribute to the loan. You can lend $25 or more to Ines to help her reach her goal. However, you are encouraged to lend as much as you can to help. You can see the other lenders who supported Ines on the top of the page"
  },
  {
    title: "Will I get repaid?",
    content:
      "Looking at Ines’ track record, current career state, support from his husband’s income, trajectory of her potential, and her credit score back in Indonesia, Ines has good ability to pay. \n\n However, Enable does not guarantee repayment for any loans crowdfunded on the Enable website. \n\n Past repayment performance does not guarantee future results, and Enable lenders should be aware of the different layers of risk that could lead to losing some or all of the lender’s principal"
  },
  {
    title: "What happens if a loan doesn’t fully fund on Enable?",
    content:
      "If the loan doesn’t fully fund, Ines will still have access to the loan and she can decide whether she would take it or not. If she decides to take the loan, you will get your return as simulated on the page on a monthly basis. Otherwise, you will get your loan fully refunded to your Dai account."
  }
];

const dataAccordionInterestPayment = [
  {
    title: "Do Enable lenders receive interest on Enable loan?",
    content:
      "Yes. You will get 6% from the loan you give to Ines. You can check your loan return simulation on the right side of the page"
  },
  {
    title: "What happens if Ines can’t repay the loan?",
    content:
      "If Ines is behind on paying back the loan, she will notify all lenders before the due date and will repay the full amount on the following month. \n\n Ines will also notify all lenders to refinance the loan if she simply can’t repay for certain period of time. She will resume when she has the ability to repay. \n\n Ines has pledged to repay the loan and do everything within her power to pay it off."
  }
];

const FaqTab: React.FC = () => {
  return (
    <React.Fragment>
      <img
        src={QuestionIcon}
        alt="Icon - Tick Paper Icon"
        width={34}
        style={{ position: "absolute" }}
      />
      <Padding left={48}>
        <h5>FAQ</h5>
        <p>
          There are some questions that often appear to you, and we categorize
          the following
        </p>
      </Padding>
      <Margin top={48}>
        <Margin bottom={24}>
          <h5>About Enable</h5>
        </Margin>
        <Row>
          <Col lg={8} sm={12}>
            <Accordion
              data={dataAccordionAboutEnable}
              defaultExpandedAll={true}
              allowMultipleExpanded={true}
            />
          </Col>
          <Col lg={4} sm="hidden" text="center">
            <img src={FaqIllustration} alt="Faq - Iluustration" />
          </Col>
        </Row>
        <Margin vertical={24}>
          <h5>Applying & Lending</h5>
        </Margin>
        <Row>
          <Col lg={8} sm={12}>
            <Accordion
              data={dataAccordionApplyingLending}
              defaultExpandedAll={true}
              allowMultipleExpanded={true}
            />
          </Col>
        </Row>
        <Margin vertical={24}>
          <h5>Loans</h5>
        </Margin>
        <Row>
          <Col lg={8} sm={12}>
            <Accordion
              data={dataAccordionLoan}
              defaultExpandedAll={true}
              allowMultipleExpanded={true}
            />
          </Col>
        </Row>
        <Margin vertical={24}>
          <h5>Interest & Payment</h5>
        </Margin>
        <Row>
          <Col lg={8} sm={12}>
            <Accordion
              data={dataAccordionInterestPayment}
              defaultExpandedAll={true}
              allowMultipleExpanded={true}
            />
          </Col>
        </Row>
      </Margin>
    </React.Fragment>
  );
};

export default FaqTab;
