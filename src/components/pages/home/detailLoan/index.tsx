// Pages detail loan component
import React from "react";
import Linkedin from "../../../../images/socialMedia/linkedin.svg";
import Instagram from "../../../../images/socialMedia/instagram.svg";
import Twitter from "../../../../images/socialMedia/twitter.svg";
import Facebook from "../../../../images/socialMedia/facebook.svg";
import SocialCredit from "./socialCredit";
import SimuLationReturn from "./simulation";
import RepaymentTable from "./repayment";
import ContributingLenders from "./lender";
import LoanInfo from "./info";
import { Container } from "../../../../styles/bases";
import { Margin } from "../../../../styles/utils";
import { Row, Col } from "../../../lib";
import {
  DetailLoan,
  DetailLoanLeft,
  DetailLoanSocial,
  RenderDesktop,
  RenderMobile
} from "./Styled";

export interface DetailLoanState {
  readMore: boolean;
}

class HomeDetailLoan extends React.Component<{}, DetailLoanState> {
  constructor(props: any) {
    super(props);
    this.state = {
      readMore: false
    };
  }
  render() {
    const { readMore } = this.state;
    return (
      <DetailLoan>
        <Container>
          <Row>
            <Col lg={8} sm={12}>
              <DetailLoanLeft>
                <h5>Profile of Widya Imanesti</h5>
                <p>0x1293898123xxx</p>
                <DetailLoanSocial>
                  <Margin bottom={16}>
                    <label>Verified Accounts</label>
                  </Margin>
                  <a
                    href="https://id.linkedin.com/in/widya-imanesti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Linkedin} alt="Socila - Media" width={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/wimanesti/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Instagram} alt="Socila - Media" width={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/wimanesti/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Twitter} alt="Socila - Media" width={16} />
                  </a>
                  <a
                    href="https://www.facebook.com/widya.imanesti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Facebook} alt="Socila - Media" width={16} />
                  </a>
                </DetailLoanSocial>
                <Margin top={48} />
                <p>
                  Hi, my name is Widya Imanesti but my nickname is Ines. I
                  studied Industrial Engineering at Institut Teknologi Bandung,
                  ranked #1 best university in Indonesia. I graduated circa 2009
                  and have been pursuing my career in Human Resources ever
                  since. I am also the first generation in my family to get a
                  bachelor degree. Coming from a working class family, finance
                  has always been a concern to get a higher education. This was
                  also the reason why I rushed myself to immediately enter the
                  workforce as soon as I graduated even though getting higher
                  education has always been in my mind.
                </p>
                <br />
                <p>
                  I have over 9 years of cross-industry experience in HR. I
                  worked for multinational FMCG for 3 years as Head of HR for
                  Indonesia and Malaysia before I decided to switch careers to
                  tech-based company/industry when startups started to emerge in
                  Indonesia circa 2013. I was the founding members of one of the
                  biggest P2P-lending companies in Indonesia whose business is
                  spread across Indonesia with over 200 branches. Being a partof
                  startups has taught me about strong ownership and business
                  acumen; entrepreneurship beyond HR.
                </p>
                {readMore && (
                  <React.Fragment>
                    <br />
                    <p>
                      Nowadays, everything keeps changing. Technology,
                      lifestyle, priorities, behavior, politics, you mention it.
                      Pace of life are increasing rapidly. There are new roles
                      that didn’t even exist (or uncommon) 10 years ago when I
                      graduated and are in high demand right now. Also, there
                      were roles that are going to extinction and to be replaced
                      by robots and artificial intelligence. In a world where
                      changes are advancing at such a breakneck pace, it can be
                      a great advantage to get myself abreast of these rapid
                      changes. The practice of HR is progressing, it must adhere
                      to current situation. We don’t know what the future holds.
                      I personally believe getting back to school now is the
                      best way to broaden my knowledge.
                    </p>
                    <br />
                    <p>
                      Last year, I got accepted into two-year Master’s of
                      Industrial & Labor Relations (MILR) program at Cornell
                      University. I was supposed to start the program in the
                      fall semester 2018, but unfortunately, I had to defer due
                      to lack of funding. This year is my last chance to join
                      the program. Though this might not tickle everyone’s
                      fancy, but learning and gaining knowledge handed to me by
                      a professor whose expertise is my long-time passion are my
                      other life-time goal. I am willing to put my steady career
                      on hold that I have been building over the years.
                    </p>
                    <br />
                    <p>
                      My husband is currently pursuing his PhD in engineering in
                      North Carolina. He is expected to graduate in December
                      2019. We are planning to pursue our career in the US after
                      we finish our studies. We believe that getting master’s
                      and doctorate degrees from well-respected universities in
                      the US will open so many doors for us anywhere in the
                      world. Moreover, we have extensive experience in our
                      fields. I am confident to get a job in the US after
                      finishing the MILR program. According to a report issued
                      by ILR School at Cornell University, from the Master's
                      (MILR) program, 98% went into employment, at a mean
                      starting salary of $86,320. You can check the report{" "}
                      <a
                        href="https://www.ilr.cornell.edu/student-experience/career-path/postgraduate-information"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>
                      . If everything doesn’t go our way, the last resort is to
                      come back to Indonesia and resume our career, and of
                      course, with significant pay upgrades - which is not a bad
                      option after all.
                    </p>
                    <br />
                    <p>
                      The estimated cost for the two-year program based on the
                      2019-2020 academic year is approximately $128,000. I am
                      aware that the $128,000 is a large and possibly
                      unrealistic goal to fund raise. Therefore, I have made
                      other efforts to cover the cost. I have savings and
                      partial scholarship. I am also planning to get a part-time
                      job on campus, apply for paid internships during summer
                      and winter breaks. I believe by doing part-time job and
                      paid internships,not only I will get monetary benefit, but
                      also the exposure to many opportunities and networks. I
                      never worked in the US, so it will also be a good
                      experience. By the time spring semester starts, my husband
                      will have gotten a job and will contribute to cover the
                      cost and monthly payment as he has received several job
                      offers already.
                    </p>
                    <br />
                    <p>
                      Getting accepted to Cornell University is definitely one
                      of the best things ever happened to me. I thought it was a
                      long shot since MILR is the best HR management program in
                      the US and it’s quite competitive. But if I have to put my
                      career on hold, might as well get the best program there
                      is. This also means the world to me, because as a woman
                      who was born in working-class family and raised in a
                      third-world country with strong patriarchal culture and
                      has been working in men-dominated industry, I can prove
                      that if I can break the glass ceiling and pursue my
                      long-time goal with limited resources and opportunities,
                      then all women from Indonesia can do it too.
                    </p>
                  </React.Fragment>
                )}
                <br />
                <div
                  style={{ cursor: "pointer", color: "#0042eb" }}
                  onClick={() => this.setState({ readMore: !readMore })}
                >
                  {readMore ? "Close detail ..." : "Read more ..."}
                </div>
                <RenderDesktop>
                  <Margin top={48}>
                    <RepaymentTable />
                  </Margin>
                </RenderDesktop>
                <RenderDesktop>
                  <Margin top={48}>
                    <LoanInfo />
                  </Margin>
                </RenderDesktop>
              </DetailLoanLeft>
            </Col>
            <Col lg={4} sm={12}>
              <Margin bottom={48}>
                <SocialCredit />
              </Margin>
              <Margin bottom={48}>
                <SimuLationReturn />
              </Margin>
              <RenderMobile>
                <Margin bottom={48}>
                  <RepaymentTable />
                </Margin>
              </RenderMobile>
              <Margin bottom={48}>
                <ContributingLenders />
              </Margin>
              <RenderMobile>
                <LoanInfo />
              </RenderMobile>
            </Col>
          </Row>
        </Container>
      </DetailLoan>
    );
  }
}

export default HomeDetailLoan;
