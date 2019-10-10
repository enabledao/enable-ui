import React from 'react'
import InesForum1 from '../../../../../../images/campaign/ines-forum-1.jpg'
import InesForum2 from '../../../../../../images/campaign/ines-forum-2.jpg'
import InesForum3 from '../../../../../../images/campaign/ines-forum-3.jpg'
import { Margin } from '../../../../../../styles/utils'
import { Row, Col } from '../../../../../lib'

interface WritingProps {
    showMoreProfile: boolean
}

const Writing: any = ({ showMoreProfile }: WritingProps) => (
    <React.Fragment>
        <i>
            <h3
                style={{
                    fontWeight: 400,
                    color: '#464b61',
                    lineHeight: 1.6,
                }}
            >
                I want to inspire all the woman from third world country to
                break the glass ceiling and pursue their lifetime goal
            </h3>
        </i>
        <br />
        <p>
            My name is Ines Widya Imanesti. I studied Industrial Engineering at
            Institut Teknologi Bandung, ranked #1 out of 3,000 universities in
            Indonesia. I graduated circa 2009 and have been pursuing my career
            in Human Resources ever since. I am also the first generation in my
            family to get a bachelor’s degree.
        </p>
        <br />
        <p>
            I have over 9 years of cross-industry experience in HR. For 3 years,
            I was the Head of HR for Freudenberg Household Products, a $9
            billion German company operating in Indonesia and Malaysia. I was
            the founding members of one of the biggest P2P-lending companies in
            Indonesia called&nbsp;
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
            Getting accepted to Cornell University means the world to me. Not
            only that it will take me one step closer to achieving my longtime
            goal: to be a prominent and competent female leader figure, but also
            to close the gender gap in Indonesia.
        </p>
        {showMoreProfile && (
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
                    time. I was one of the speakers at{' '}
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
            </React.Fragment>
        )}
    </React.Fragment>
)

export default Writing
