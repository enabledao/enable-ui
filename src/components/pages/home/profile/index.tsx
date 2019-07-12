import React from "react";
import ProfileIllustration from "../../../../images/illustration/profile.svg";
import Linkedin from "../../../../images/socialMedia/linkedin.svg";
import Instagram from "../../../../images/socialMedia/instagram.svg";
import Twitter from "../../../../images/socialMedia/twitter.svg";
import Facebook from "../../../../images/socialMedia/facebook.svg";
import ModalFullStory from "./modalFullStory";
import announcementIcon from "../../../../images/icons/announcement.svg";
import { Container } from "../../../../styles/bases";
import { Margin, MobileTextCenter, Padding } from "../../../../styles/utils";
import { Row, Col, Button, ShowModal } from "../../../lib";
import { ProfileWrapper, ProfileSocialLink } from "./styled";

export interface LoanDetailState {
  showModal: boolean;
}

class LoanDetail extends React.Component<{}, LoanDetailState> {
  constructor(props: {}) {
    super(props);
    this.state = { showModal: false };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    const { showModal } = this.state;
    this.setState(
      {
        showModal: !showModal
      },
      () => ShowModal(<ModalFullStory />)
    );
  }

  render() {
    return (
      <React.Fragment>
        <ProfileWrapper>
          <Container>
            <Row>
              <Col lg={6} md={8} sm={12}>
                <img
                  src={announcementIcon}
                  alt="Icon - Announcement"
                  width={34}
                  style={{ position: "absolute" }}
                />
                <Padding left={48}>
                  <h2>Story of Borrower</h2>
                </Padding>
                <Margin top={16}>
                  <p>
                    My name is Ines (Widya) Imanesti. I got into Cornell
                    University’s two-year Master’s program in Industrial & Labor
                    Relations (MILR). According to a&nbsp;
                    <a
                      href="https://www.ilr.cornell.edu/student-experience/career-path/postgraduate-information"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      report issued by ILR School
                    </a>
                    &nbsp;at Cornell University, the Master's (MILR) program has
                    98% employment rate upon graduation, at a mean starting
                    salary of $86,320. This program is ranked as #1 in the US,
                    and I hope to start thisFall 2019 with the help of the
                    blockchain community on Enable. .
                  </p>
                </Margin>
                <Row align="center">
                  <Col lg={5} md={12}>
                    <Margin top={16}>
                      <Button onClick={this.handleModal}>Read more</Button>
                    </Margin>
                  </Col>
                </Row>
                <Margin top={48}>
                  <MobileTextCenter>
                    <Margin bottom={24}>
                      <h6>You can know more about me on my social media</h6>
                    </Margin>
                    <ProfileSocialLink
                      href="https://id.linkedin.com/in/widya-imanesti"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Linkedin} alt="Socila - Media" width={24} />
                    </ProfileSocialLink>
                    <ProfileSocialLink
                      href="https://www.instagram.com/wimanesti/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Instagram} alt="Socila - Media" width={24} />
                    </ProfileSocialLink>
                    <ProfileSocialLink
                      href="https://twitter.com/itsenamiw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Twitter} alt="Socila - Media" width={24} />
                    </ProfileSocialLink>
                    <ProfileSocialLink
                      href="https://www.facebook.com/widya.imanesti"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Facebook} alt="Socila - Media" width={24} />
                    </ProfileSocialLink>
                  </MobileTextCenter>
                </Margin>
              </Col>
              <Col lg={6} md={4} sm="hidden" text="center">
                <img
                  src={ProfileIllustration}
                  alt="HomeHero - Illustraion"
                  width={380}
                />
              </Col>
            </Row>
          </Container>
        </ProfileWrapper>
      </React.Fragment>
    );
  }
}

export default LoanDetail;
