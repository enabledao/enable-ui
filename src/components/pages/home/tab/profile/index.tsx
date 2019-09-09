import React from "react";
import InesForum1 from "../../../../../images/campaign/ines-forum-1.jpg";
import InesForum2 from "../../../../../images/campaign/ines-forum-2.jpg";
import InesForum3 from "../../../../../images/campaign/ines-forum-3.jpg";
import { Margin, Padding } from "../../../../../styles/utils";
import { Row, Col } from "../../../../lib";
import TestimonialLinkedin from "./testimonial";
import SimuLationReturn from "../../simulation";
import { simulateTotalInterest } from "../../../../../utils/jsCalculator";
import { prepBigNumber } from "../../../../../utils/web3Utils";
import { getDeployedFromConfig } from "../../../../../utils/getDeployed";
import { getTokenDetailsFromAddress } from "../../../../../utils/paymentToken";
import {
  getInterestRate,
  getLoanStartTimestamp,
  getNumScheduledPayments,
  getPrincipalToken,
  getRequestedScheduledPayment,
  getScheduledPayment
} from "../../../../../utils/termsContract";

import contractAddresses from "../../../../../config/ines.fund";
import { INTEREST_DECIMALS } from "../../../../../config/constants";
import {
  TimelineWrapper,
  TimelineYear,
  TimelineBlack,
  TimelineBlackWrapper
} from "./styled";

const ONETHOUSAND = 1000;

const calcCummulativePayments = repayment => {
  return repayment.map((payment, index) =>
    Object.assign({}, payment, {
      payment: repayment
        .slice(0, index + 1)
        .reduce((a, b) => a + Number(b.total), 0)
    })
  );
};

interface TabProfileProps {
  contributors?: any;
}

export interface ProfileState {
  repayments: any,
  loanParams: object;
  showMoreProfile: boolean;
}
class Profile extends React.Component<TabProfileProps, ProfileState> {
  state = {
    repayments: [],
    loanParams: {
      interestRate: 0,
      numScheduledPayments: 0
    },
    showMoreProfile: false
  };

  simulateInterest = contribution => {
    const { interestRate, numScheduledPayments } = this.state.loanParams;
    return simulateTotalInterest(
      contribution,
      interestRate,
      numScheduledPayments
    );
  };

  componentDidMount = async () => {
    const termsContractInstance = await getDeployedFromConfig(
      "TermsContract",
      contractAddresses
    );

    try {
      const numScheduledPayments = parseInt(
        await getNumScheduledPayments(termsContractInstance)
      );
      const loanStartTimestamp = await getLoanStartTimestamp(
        termsContractInstance
      );
      const paymentToken = await getTokenDetailsFromAddress(
        await getPrincipalToken(termsContractInstance)
      );
      const interestRate = await getInterestRate(termsContractInstance);
      const prepDueTimestamp = (dueTimestamp, startTimestamp) =>
        dueTimestamp * ONETHOUSAND +
        (startTimestamp === 0 ? new Date().getTime() : 0);

      let repayments = await Promise.all(
        Array(numScheduledPayments)
          .fill({})
          .map(async (element, index) => {
            const requestedScheduledPayment = await getRequestedScheduledPayment(
              termsContractInstance,
              index + 1
            );
            const scheduledPayment = await getScheduledPayment(
              termsContractInstance,
              index + 1
            );
            const combined = {
              dueTimestamp:
                requestedScheduledPayment.dueTimestamp ||
                scheduledPayment.dueTimestamp,
              interestPayment:
                requestedScheduledPayment.interestPayment ||
                scheduledPayment.interestPayment,
              principalPayment:
                requestedScheduledPayment.principalPayment ||
                scheduledPayment.principalPayment,
              totalPayment:
                requestedScheduledPayment.totalPayment ||
                scheduledPayment.totalPayment
            };

            return {
              due: prepDueTimestamp(combined.dueTimestamp, loanStartTimestamp),
              interest: prepBigNumber(
                combined.interestPayment,
                paymentToken.decimals,
                true
              ),
              principal: prepBigNumber(
                combined.principalPayment,
                paymentToken.decimals,
                true
              ),
              total: prepBigNumber(
                combined.totalPayment,
                paymentToken.decimals,
                true
              )
            };
          })
      );
      repayments = calcCummulativePayments(repayments);

      this.setState({
        repayments,
        loanParams: {
          interestRate: prepBigNumber(interestRate, INTEREST_DECIMALS, true),
          numScheduledPayments
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={7} md={12}>
            <Margin top={16}>
              <i>
                <h3
                  style={{
                    fontWeight: 400,
                    color: "#464b61",
                    lineHeight: 1.6
                  }}
                >
                  I want to inspire all the woman from third world country to
                  break the glass ceiling and pursue their lifetime goal
                </h3>
              </i>
              <br />
              <p>
                My name is Ines Widya Imanesti. I studied Industrial Engineering
                at Institut Teknologi Bandung, ranked #1 out of 3,000
                universities in Indonesia. I graduated circa 2009 and have been
                pursuing my career in Human Resources ever since. I am also the
                first generation in my family to get a bachelor’s degree.
              </p>
              <br />
              <p>
                I have over 9 years of cross-industry experience in HR. For 3
                years, I was the Head of HR for Freudenberg Household Products,
                a $9 billion German company operating in Indonesia and Malaysia.
                I was the founding members of one of the biggest P2P-lending
                companies in Indonesia called&nbsp;
                <a
                  href="https://amartha.com/id_ID/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amartha
                </a>
                . I oversaw this business spread across Indonesia with over 200+
                branches and more than 1000 employees. I also have experience
                leading smaller organizations of around 150 employees in the
                technology industry, where I intend to deepen my work.
              </p>
              <Margin vertical={16}>
                <Row>
                  <Col lg={12}>
                    <img src={InesForum2} alt="Ines - Danacita" />
                  </Col>
                </Row>
              </Margin>
              <p>
                Getting accepted to Cornell University means the world to me.
                Not only that it will take me one step closer to achieving my
                longtime goal: to be a prominent and competent female leader
                figure, but also to close the gender gap in Indonesia.
              </p>
              {this.state.showMoreProfile && (
                <React.Fragment>
                  <br />
                  <p>
                    As a woman born into working-class family, raised in a
                    third-world country with strong patriarchal culture, and
                    working in male-dominated industries, I can prove that if I
                    can break the glass ceiling and pursue my long-time goal
                    with limited resources and opportunities, then all women
                    from Indonesia can do it too.
                  </p>
                  <br />
                  <p>
                    Over the last 4 years of my career, women empowerment and
                    youth development have been my focus. I have been giving
                    career and skill development counseling to young women in
                    Indonesia to strive their professional life in my spare
                    time. I was one of the speakers at{" "}
                    <a
                      href="https://blog.danacita.co.id/news/mengungkap-misteri-terbesar-setelah-lulus-kuliah-bekerja-atau-mengejar-beasiswa-s2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dana Cita Inspiring Forum
                    </a>
                    , an educational workshop in 5 big cities in Indonesia.
                  </p>
                  <br />
                  <Margin vertical={16}>
                    <Row>
                      <Col lg={12}>
                        <img src={InesForum1} alt="Ines - Danacita" />
                      </Col>
                      <Col lg={12}>
                        <img src={InesForum3} alt="Ines - Danacita" />
                      </Col>
                    </Row>
                  </Margin>
                  <p>
                    I shared my take on professional life after graduation and
                    industrial revolution 4.0 preparation with college
                    graduates. I coach interns to apply for jobs from resume
                    writing, self branding to interview practice. I also help
                    and mentor young women in casual setting regularly. I am
                    persistent and do not intend to stop doing this, regardless
                    of whether I can afford Cornell. Of course, if I do go to
                    Cornell, I will be in a better position to unlock the
                    potential of Indonesia’s women by sharing knowledge, being a
                    mentor, and opening doors for them on an international
                    stage.
                  </p>
                  {/* <Margin top={60}>
                    <Repayment repayments={this.state.repayments} />
                  </Margin> */}
                </React.Fragment>
              )}
              <Margin top={32} bottom={60}>
                <h5
                  style={{ color: "#21b549", cursor: "pointer" }}
                  onClick={() =>
                    this.setState({
                      showMoreProfile: !this.state.showMoreProfile
                    })
                  }
                >
                  {!this.state.showMoreProfile ? "Read More" : "Read Less"}
                </h5>
              </Margin>
            </Margin>
            <Margin bottom={60}>
              <h4>Timeline and Repayments Plan</h4>
              <TimelineWrapper>
                <Margin top={24}>
                  <TimelineYear>2019</TimelineYear>
                  <span>Start attending Cornell University</span>
                </Margin>
                <Margin top={48}>
                  <TimelineYear>2021</TimelineYear>
                  <span>Graduated from Cornell University</span>
                  <Padding left={90}>
                    <TimelineBlackWrapper>
                      <Margin top={48}>
                        <TimelineBlack />
                        <span>Start of Repayment</span>
                        <Margin top={48} left={36}>
                          <span>
                            <b>Planning to work in the USA</b>
                          </span>
                        </Margin>
                        <Margin top={16} left={36}>
                          <span>Expected starting salary : $86,320/year</span>
                        </Margin>
                        <Margin top={48} left={36}>
                          <span>
                            <b>
                              Full support from my husband’s (Doctorate) salary
                            </b>
                          </span>
                        </Margin>
                        <Margin top={16} left={36}>
                          <span>Expected starting salary : $95,000/year</span>
                        </Margin>
                        <Margin top={60}>
                          <TimelineBlack />
                          <span>Final Repayment</span>
                        </Margin>
                      </Margin>
                    </TimelineBlackWrapper>
                  </Padding>
                </Margin>
                <Margin top={-31}>
                  <TimelineYear>2021</TimelineYear>
                </Margin>
              </TimelineWrapper>
            </Margin>
            <TestimonialLinkedin />
          </Col>
          <Col lg={5} md="hidden">
            <SimuLationReturn contributors={this.props.contributors} simulateInterest={this.simulateInterest} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Profile;
