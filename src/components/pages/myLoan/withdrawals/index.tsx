import React from "react";
import {Container} from "../../../../styles/bases";
import {Margin} from "../../../../styles/utils";
import {Row, Col, Button} from "../../../lib";
import {WithdrawalBox, WithdrawalActionMobile} from "./styled";
interface Withdrawal {
    to: string;
    amount: string;
}
interface WithdrawalProps {
    withdrawals: Withdrawal[];
}

const Withdrawal: any = ({withdrawals}: WithdrawalProps) => (
    <Container>
        <Row justify='center'>
            <Col lg={10} md={12}>
                <h5>Withdrawals</h5>
                <p>Your withdrawal history will appear here</p>
                <Margin top={32}>
                    <WithdrawalBox>
                        <Row justify='center' text='center'>
                            <Col lg={8} sm={12}>
                                {withdrawals && withdrawals.length === 0 ? (
                                    <p>Ups, seems like you don't have withdrawal history</p>
                                ) : (
                                    ""
                                ) // To Do (Dennis): Displaying withdrawals
                                }
                            </Col>
                        </Row>
                        <Row justify='center' text='center'>
                            <Col lg={4} md={6} sm='hidden'>
                                <Button color='purple'>Withdraw</Button>
                            </Col>
                        </Row>
                    </WithdrawalBox>
                    <WithdrawalActionMobile>
                        <Button color='purple'>Withdraw</Button>
                    </WithdrawalActionMobile>
                </Margin>
            </Col>
        </Row>
    </Container>
);

export default Withdrawal;
