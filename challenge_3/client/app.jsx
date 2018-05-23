class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <div>
                <form action="/form" method="post">
                    <fieldset>
                        <legend>Create Account:</legend>
                        Name:<br/>
                        <input type="text" name="account" placeholder="Input Account Name" onChange={this.props.handleFormChange} /><br/>
                        Email:<br/>
                        <input type="email" name="email" placeholder="Input Email Address" onChange={this.props.handleFormChange} /><br/>
                        Password:<br/>
                        <input type="password" name="password" placeholder="Input Password" onChange={this.props.handleFormChange} /><br/>
                        <button onClick={this.props.handleBackwardClick} >Back</button>
                        <input type="submit" value="Next" onClick={this.props.handleCheckoutClick}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}


class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'street-address-1': '',
            'street-address-2': '',
            city: '',
            state: '',
            'zip-code': '',
            'tel-no': '',
        }
    }

    render() {
        return (
            <div>
                <form action="/form" method="post">
                    <fieldset>
                        <legend>Shipment Information:</legend>
                        Address:<br/>
                        Line 1:
                        <input type="text" name="street-address-1" placeholder="Street Address" onChange={this.props.handleFormChange} /><br/>
                        Line 2:
                        <input type="text" name="street-address-2" placeholder="Street Address" onChange={this.props.handleFormChange} /><br/>
                        City:
                        <input type="text" name="city" placeholder="City" onChange={this.props.handleFormChange} />
                        State:
                        <input type="text" name="state" placeholder="State" pattern="[A-Za-z]{2}" title="Two Letter State Code" onChange={this.props.handleFormChange} />
                        Zip code:
                        <input type="text" name="zip-code" pattern="[0-9]{5}" placeholder="Zip Code" title="Five Digit Zip Code" onChange={this.props.handleFormChange} /><br/>
                        Phone Number:
                        <input type="tel" name="tel-no" placeholder="Telephone Number" onChange={this.props.handleFormChange} /><br/>
                        <button onClick={this.props.handleBackwardClick} >Back</button>
                        <input type="submit" value="Next" onClick={this.props.handleCheckoutClick}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}


class Form3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'credit-card-no': '',
            'expiry-date': '',
            cvv: '',
            'billing-zip-code': ''
        }
    }

    render() {
        return (
            <div>
                <form action="/form" method="post">
                    <fieldset>
                        <legend>Billing Information:</legend>
                        Credit Card:<br/>
                        Number:
                        <input type="text" name="credit-card-no" placeholder="Street Address" onChange={this.props.handleFormChange} /><br/>
                        Expiry Date:
                        <input type="text" name="expiry-date" pattern="[0-9]{6}" placeholder="MMYYYY" title="Six Digit Month and Year" onChange={this.props.handleFormChange} />
                        CVV:
                        <input type="text" name="cvv" pattern="[0-9]{3}" placeholder="XXX" title="Three Digit CVV" onChange={this.props.handleFormChange} /><br/>
                        Billing Zip code:
                        <input type="text" name="billing-zip-code" pattern="[0-9]{5}" placeholder="Billing Zip Code" title="Five Digit Zip Code" onChange={this.props.handleFormChange} /><br/>
                        <button onClick={this.props.handleBackwardClick} >Back</button>
                        <input type="submit" value="Purchase" onClick={this.props.handleCheckoutClick}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkoutStatus: 0,
        };

        this.checkout = {
            0: 'Checkout',
            1: 'Next',
            2: 'Next',
            3: 'Purchase',
            4: 'Reset'
        };

        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
        this.handleBackwardClick = this.handleBackwardClick.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

        this.checkoutForm = {
            0: <div>Ready to checkout?</div>,
            1: <Form1 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} />,
            2: <Form2 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} />,
            3: <Form3 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} />,
            4: <div>Thank You!<br/>Order is set.</div>
        }
        
    }

    handleCheckoutClick(event){
        event.preventDefault();
        if (this.state.checkoutStatus <= 3) {
            this.setState({
                checkoutStatus: this.state.checkoutStatus + 1
            })
        } else {
            this.setState({
                checkoutStatus: 0
            })
        }
        
    }

    handleBackwardClick(event){
        event.preventDefault();
        if (this.state.checkoutStatus >= 1) {
            this.setState({
                checkoutStatus: this.state.checkoutStatus - 1
            })
        }
        
    }

    handleFormChange(event){
        // console.log(event.target.name, event.target.value);
        this.setState({

        })
    }

    render() {
        return (
            <div>
                <button className="check-out" onClick={this.handleCheckoutClick}>{this.checkout[this.state.checkoutStatus]}</button>
                {(this.state.checkoutStatus === 0) && (<div>Ready to checkout?</div>) ||
                (this.state.checkoutStatus === 1) && (<Form1 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} handleBackwardClick={this.handleBackwardClick} />) ||
                (this.state.checkoutStatus === 2) && (<Form2 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} handleBackwardClick={this.handleBackwardClick} />) ||
                (this.state.checkoutStatus === 3) && (<Form3 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} handleBackwardClick={this.handleBackwardClick} />) ||
                (this.state.checkoutStatus === 0) && (<div>Thank You!<br/>Order is set.</div>)}
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
