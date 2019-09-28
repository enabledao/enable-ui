import React from 'react'
import { Form, Field } from 'react-final-form'
import { Container } from '../../../../styles/bases'
import { Margin } from '../../../../styles/utils'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { AppPath } from '../../../../constant/appPath'
import {
    Breadcrumb,
    Row,
    Col,
    TextField,
    Checkbox,
    Button,
    FieldError,
} from '../../../lib'
import { CheckoutWrapper } from '../styled'
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
                <Container>
                    <Row justify="center">
                        <Col lg={6} md={12}>
                            <h4>One step closer to helping Ines!</h4>
                            <p>Hi</p>
                            <Form
                                onSubmit={this.onSubmit}
                                decorators={[focusOnErrors]}
                                render={({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Margin top={24} bottom={48}>
                                            <Breadcrumb data={bredcrumbData} />
                                        </Margin>
                                        <Margin bottom={32}>
                                            <Field
                                                name="name"
                                                validate={requiredField}
                                                render={({ input, meta }) => (
                                                    <React.Fragment>
                                                        <TextField
                                                            label="Name"
                                                            placeholder="Enter your name"
                                                            autoFocus={true}
                                                            {...input}
                                                            {...meta}
                                                        />
                                                        {meta.touched &&
                                                            meta.error && (
                                                                <FieldError>
                                                                    {meta.error}
                                                                </FieldError>
                                                            )}
                                                    </React.Fragment>
                                                )}
                                            />
                                            <Margin top={16}>
                                                <Checkbox
                                                    id="anonymous"
                                                    name="anonymous"
                                                    label="Stay anonymous"
                                                />
                                            </Margin>
                                        </Margin>
                                        <Margin bottom={32}>
                                            <Field
                                                name="email"
                                                validate={composeValidators(
                                                    requiredField,
                                                    emailFormat
                                                )}
                                                render={({ input, meta }) => (
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
                                                                    {meta.error}
                                                                </FieldError>
                                                            )}
                                                    </React.Fragment>
                                                )}
                                            />
                                        </Margin>
                                        <Margin vertical={32}>
                                            <Checkbox
                                                id="videoInterview"
                                                name="videoInterview"
                                                label="I would like to have a video interview with the borrower"
                                            />
                                        </Margin>
                                        <Row>
                                            <Col lg={6} md={12}>
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
                                            </Col>
                                            <Col lg={6} md={12}>
                                                <Margin top={8}>
                                                    <Button
                                                        type="submit"
                                                        color="green"
                                                    >
                                                        Continue
                                                    </Button>
                                                </Margin>
                                            </Col>
                                        </Row>
                                    </form>
                                )}
                            />
                        </Col>
                    </Row>
                </Container>
            </CheckoutWrapper>
        )
    }
}

export default withRouter<CheckoutProps>(withNavbarAndFooter(Checkout))
