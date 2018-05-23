//setting global variables and Methods

const fieldNames = [
    'username', 
    'email', 
    'password', 
    'street-address-1', 
    'street-address-2', 
    'city', 
    'state',
    'zip-code',
    'tel-no',
    'credit-card-no',
    'expiry-date',
    'cvv',
    'billing-zip-code'
] 

const emptyState = fieldNames.reduce((obj, key) => {
    obj[key] =''
    return obj;
}, {})

const postFormInputsUrl = 'http://127.0.0.1:3000/form';

const postFormInputs = function(subState) {
    fetch(postFormInputsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subState),
    }).then((response) => {
        console.log('something')
        console.log(response.text());
    })
}

//creating React Components:
class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        // this.handleFormChange = this.props.handleFormChange.bind(this)
    }

    render() {
        return (
            <div>
                <form action="/form" method="post">
                    <fieldset>
                        <legend>Create Account:</legend>
                        Name:<br/>
                        <input type="text" name={fieldNames[0]} placeholder="Input Account Name" onChange={this.props.handleFormChange} /><br/>
                        Email:<br/>
                        <input type="email" name={fieldNames[1]} placeholder="Input Email Address" onChange={this.props.handleFormChange} /><br/>
                        Password:<br/>
                        <input type="password" name={fieldNames[2]} placeholder="Input Password" onChange={this.props.handleFormChange} /><br/>
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
        }

        // this.handleFormChange = this.props.handleFormChange.bind(this)
    }

    render() {
        return (
            <div>
                <form action="/form" method="post">
                    <fieldset>
                        <legend>Shipment Information:</legend>
                        Address:<br/>
                        Line 1:
                        <input type="text" name={fieldNames[3]} placeholder="Street Address" onChange={this.props.handleFormChange} /><br/>
                        Line 2:
                        <input type="text" name={fieldNames[4]} placeholder="Street Address" onChange={this.props.handleFormChange} /><br/>
                        City:
                        <input type="text" name={fieldNames[5]} placeholder="City" onChange={this.props.handleFormChange} />
                        State:
                        <input type="text" name={fieldNames[6]} placeholder="State" pattern="[A-Za-z]{2}" title="Two Letter State Code" onChange={this.props.handleFormChange} />
                        Zip code:
                        <input type="text" name={fieldNames[7]} pattern="[0-9]{5}" placeholder="Zip Code" title="Five Digit Zip Code" onChange={this.props.handleFormChange} /><br/>
                        Phone Number:
                        <input type="tel" name={fieldNames[8]} placeholder="Telephone Number" onChange={this.props.handleFormChange} /><br/>
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
        }

        // this.handleFormChange = this.props.handleFormChange.bind(this)
    }

    render() {
        return (
            <div>
                <form action="/form" method="post">
                    <fieldset>
                        <legend>Billing Information:</legend>
                        Credit Card:<br/>
                        Number:
                        <input type="text" name={fieldNames[9]} placeholder="Street Address" onChange={this.props.handleFormChange} /><br/>
                        Expiry Date:
                        <input type="text" name={fieldNames[10]} pattern="[0-9]{6}" placeholder="MMYYYY" title="Six Digit Month and Year" onChange={this.props.handleFormChange} />
                        CVV:
                        <input type="text" name={fieldNames[11]} pattern="[0-9]{3}" placeholder="XXX" title="Three Digit CVV" onChange={this.props.handleFormChange} /><br/>
                        Billing Zip code:
                        <input type="text" name={fieldNames[12]} pattern="[0-9]{5}" placeholder="Billing Zip Code" title="Five Digit Zip Code" onChange={this.props.handleFormChange} /><br/>
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

        this.sendFormFields ={
            1: fieldNames.slice(0,3),
            2: fieldNames.slice(3,9),
            3: fieldNames.slice(10,13)
        }

        this.checkoutForm = {
            0: <div>Ready to checkout?</div>,
            1: <Form1 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} />,
            2: <Form2 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} />,
            3: <Form3 handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} />,
            4: <div>Thank You!<br/>Order is set.</div>
        }
        
        this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
        this.handleBackwardClick = this.handleBackwardClick.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    getSubState(checkoutStatus){
        let subState;
        let emptyKey;
        if (this.sendFormFields[checkoutStatus]) {
            subState = {};
            this.sendFormFields[checkoutStatus].forEach((key) => {
                subState[key] = this.state[key];
                if (key !== fieldNames[4]) {
                    subState[key] || emptyKey || (emptyKey = key);
                }
            })
        }
        return [subState, emptyKey];
    }

    handleCheckoutClick(event){
        event.preventDefault();
        let subState, emptyKey;
        [subState, emptyKey] = this.getSubState(this.state.checkoutStatus);
        if (emptyKey) {
            alert(`${emptyKey} is not optional`);
            return;
        }
        console.log(subState);
        subState && postFormInputs(subState);
        this.setState(emptyState);
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
        this.setState({
            [event.target.name]: event.target.value
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
                (this.state.checkoutStatus === 4) && (<div>Thank You!<br/>Order is set.</div>)}
            </div>
        );
    }
}


//Render React DOM elements
ReactDOM.render(<App />, document.getElementById('app'));
