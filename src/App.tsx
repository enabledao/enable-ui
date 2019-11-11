import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NormalizeStyle } from './styles/bases'
import Home from './components/pages/home'
import ErrorNotFound from './components/pages/error'
import { Checkout, LoanOfferThankYou } from './components/pages/loanOffer'
import Faucet from './components/pages/faucet'
import MyLoan from './components/pages/myLoan'
import { AppPath } from './constant/appPath'
import { Provider } from 'react-redux'
import { store } from './store'
import { setToastProvider } from './store/toastProvider'
import { ToastMessage } from 'rimble-ui'

const dispatchToastProvider = node => {
    store.dispatch(setToastProvider(node))
}

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NormalizeStyle />
            <Router>
                <Switch>
                    <Route exact={true} path={AppPath.home} component={Home} />
                    <Route
                        exact={true}
                        path={AppPath.faucet}
                        component={Faucet}
                    />
                    <Route
                        exact={true}
                        path={AppPath.checkout}
                        component={Checkout}
                    />
                    <Route
                        exact={true}
                        path={AppPath.LoanOfferThankYou}
                        component={LoanOfferThankYou}
                    />
                    <Route
                        exact={true}
                        path={AppPath.myLoan}
                        component={MyLoan}
                    />
                    <Route component={ErrorNotFound} />
                </Switch>
            </Router>
            <ToastMessage.Provider ref={node => dispatchToastProvider(node)} />
        </Provider>
    )
}

export default App
