import React from 'react'
import { Form, Field } from 'react-final-form'
import { Container, MainContainer } from '../../../../styles/bases'
import { Margin } from '../../../../styles/utils'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppPath } from '../../../../constant/appPath'
import PatternImage from '../../../../images/pattern.png'
import {
    Breadcrumb,
    Row,
    Col,
    TextField,
    Checkbox,
    Button,
    FieldError,
} from '../../../lib'
import {
    CheckoutWrapper,
    HeroCell,
    HeroWrapper,
    CheckoutContainer,
} from '../styled'
import {
    requiredField,
    emailFormat,
    composeValidators,
} from '../../../../constant/validation'
import createDecorator from 'final-form-focus'
import { withNavbarAndFooter } from '../../../hoc'

interface CheckoutProps extends RouteComponentProps<any> {}

const focusOnErrors = createDecorator()
const bredcrumbData = [
    { title: ' Personal information', active: true },
    { title: 'Detail amount', active: false },
]

class Checkout extends React.Component<CheckoutProps, {}> {
    constructor(props: CheckoutProps) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (data: any) => {
        const { history } = this.props
        history.push(AppPath.LoanOfferAmount)
    }

    render() {
        const { history } = this.props
        return (
            <CheckoutWrapper>
                <HeroWrapper>
                    <img
                        style={{
                            position: 'absolute',
                            top: 0,
                            height: '50vh',
                            left: 0,
                            transform: 'scaleX(-1)',
                        }}
                        src={PatternImage}
                        alt="pattern"
                    />
                    <img
                        style={{
                            position: 'absolute',
                            top: 0,
                            height: '50vh',
                            right: 0,
                        }}
                        src={PatternImage}
                        alt="pattern"
                    />
                </HeroWrapper>
                <CheckoutContainer>
                    {/* <MainContainer> */}
                    <HeroCell>
                        <Row>
                            <Col lg={6} md={12}>
                                <Form
                                    onSubmit={this.onSubmit}
                                    decorators={[focusOnErrors]}
                                    render={({ handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <h5>Complete Your Investment</h5>
                                            <Margin top={32} bottom={32}>
                                                <Field
                                                    name="amount"
                                                    validate={requiredField}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                label="Investment Amount"
                                                                placeholder="100 Dai"
                                                                autoFocus={true}
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {/* {meta.touched &&
                                                                meta.error && (
                                                                    <FieldError>
                                                                        {
                                                                            meta.error
                                                                        }
                                                                    </FieldError>
                                                                )} */}
                                                        </React.Fragment>
                                                    )}
                                                />
                                                <Margin top={5}>
                                                    <small>
                                                        Minimum 50 Dai
                                                    </small>
                                                </Margin>
                                            </Margin>
                                            <Margin top={32} bottom={32}>
                                                <Field
                                                    name="name"
                                                    validate={requiredField}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                label="Name"
                                                                placeholder="Enter your name"
                                                                autoFocus={true}
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {/* {meta.touched &&
                                                                meta.error && (
                                                                    <FieldError>
                                                                        {
                                                                            meta.error
                                                                        }
                                                                    </FieldError>
                                                                )} */}
                                                        </React.Fragment>
                                                    )}
                                                />
                                                <Margin top={10}>
                                                    <small>
                                                        <Checkbox
                                                            id="anonymous"
                                                            name="anonymous"
                                                            label="Stay anonymous"
                                                        />
                                                    </small>
                                                </Margin>
                                            </Margin>
                                            <Margin bottom={32}>
                                                <Field
                                                    name="email"
                                                    validate={composeValidators(
                                                        requiredField,
                                                        emailFormat
                                                    )}
                                                    render={({
                                                        input,
                                                        meta,
                                                    }) => (
                                                        <React.Fragment>
                                                            <TextField
                                                                type="email"
                                                                label="Email"
                                                                placeholder="Enter your email"
                                                                {...input}
                                                                {...meta}
                                                            />
                                                            {meta.touched &&
                                                                meta.error && (
                                                                    <FieldError>
                                                                        {
                                                                            meta.error
                                                                        }
                                                                    </FieldError>
                                                                )}
                                                        </React.Fragment>
                                                    )}
                                                />
                                            </Margin>
                                            {/* <Margin vertical={32}>
                                                <Checkbox
                                                    id="videoInterview"
                                                    name="videoInterview"
                                                    label="I would like to have a video interview with the borrower"
                                                />
                                            </Margin> */}
                                            <Row>
                                                {/* <Col lg={6} md={12}>
                                                    <Margin top={8}>
                                                        <Button
                                                            onClick={() =>
                                                                history.push(
                                                                    AppPath.home
                                                                )
                                                            }
                                                        >
                                                            Back
                                                        </Button>
                                                    </Margin>
                                                </Col> */}
                                                <Col lg={12} md={12}>
                                                    <Margin top={8}>
                                                        <Button
                                                            type="submit"
                                                            color="green"
                                                        >
                                                            Place my Investment
                                                        </Button>
                                                    </Margin>
                                                </Col>
                                            </Row>
                                        </form>
                                    )}
                                />
                            </Col>
                            <Col lg={6} md={12}>
                                {' '}
                                asdf
                            </Col>
                        </Row>
                    </HeroCell>
                    {/* </MainContainer> */}
                </CheckoutContainer>
            </CheckoutWrapper>
        )
    }
}

export default withRouter<CheckoutProps>(withNavbarAndFooter(Checkout))
