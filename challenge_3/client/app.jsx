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

const baseUrl = 'http://127.0.0.1:3000'
const formInputsUrl = baseUrl + '/form';


const postFormInputs = function(data) {
    return fetch(formInputsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
}

//creating React Components:
const Form = (props) => (
    <div>
        {{
            0: <div>Ready to checkout?</div>,
            1: (
                <form onSubmit={props.handleCheckoutClick}>
                    <fieldset>
                        <legend>Create Account:</legend>
                        Name:<br/>
                        <input type="text" name={fieldNames[0]} placeholder="Input Account Name" onChange={props.handleFormChange} value={props[fieldNames[0]]} required/><br/>
                        Email:<br/>
                        <input type="email" name={fieldNames[1]} placeholder="Input Email Address" onChange={props.handleFormChange} value={props[fieldNames[1]]} required/><br/>
                        Password:<br/>
                        <input type="password" name={fieldNames[2]} placeholder="Input Password" onChange={props.handleFormChange} value={props[fieldNames[2]]} required/><br/>
                        <input type="submit" value="Next" />
                        <button onClick={props.handleBackwardClick} >Back</button>
                    </fieldset>
                </form>
            ),
            2: (
                <form onSubmit={props.handleCheckoutClick}>
                    <fieldset>
                        <legend>Shipment Information:</legend>
                        Address:<br/>
                        Line 1:
                        <input type="text" name={fieldNames[3]} placeholder="Street Address" onChange={props.handleFormChange} value={props[fieldNames[3]]} required/><br/>
                        Line 2:
                        <input type="text" name={fieldNames[4]} placeholder="Street Address" onChange={props.handleFormChange} value={props[fieldNames[4]]}/><br/>
                        City:
                        <input type="text" name={fieldNames[5]} placeholder="City" onChange={props.handleFormChange} value={props[fieldNames[5]]} required/>
                        State:
                        <input type="text" name={fieldNames[6]} placeholder="State" pattern="[A-Za-z]{2}" title="Two Letter State Code" onChange={props.handleFormChange} value={props[fieldNames[6]]} required/>
                        Zip code:
                        <input type="number" name={fieldNames[7]} pattern="[0-9]{5}" placeholder="Zip Code" title="Five Digit Zip Code" onChange={props.handleFormChange} value={props[fieldNames[7]]} required/><br/>
                        Phone Number:
                        <input type="tel" name={fieldNames[8]} placeholder="Telephone Number" onChange={props.handleFormChange} value={props[fieldNames[8]]} required/><br/>
                        <input type="submit" value="Next" />
                        <button onClick={props.handleBackwardClick} >Back</button>
                    </fieldset>
                </form>
            ),
            3: (
                <form onSubmit={props.handleCheckoutClick}>
                    <fieldset>
                        <legend>Billing Information:</legend>
                        Credit Card:<br/>
                        Number:
                        <input type="number" name={fieldNames[9]} placeholder="Credit Card Number" onChange={props.handleFormChange} value={props[fieldNames[9]]} required/><br/>
                        Expiry Date:
                        <input type="month" name={fieldNames[10]} placeholder="YYYY-MM" title="Month and Year" onChange={props.handleFormChange} value={props[fieldNames[10]]} required/>
                        CVV:
                        <input type="number" name={fieldNames[11]} pattern="[0-9]{3}" placeholder="XXX" title="Three Digit CVV" onChange={props.handleFormChange} value={props[fieldNames[11]]} required/><br/>
                        Billing Zip code:
                        <input type="number" name={fieldNames[12]} pattern="[0-9]{5}" placeholder="Billing Zip Code" title="Five Digit Zip Code" onChange={props.handleFormChange} value={props[fieldNames[12]]} required/><br/>
                        <input type="submit" value="Purchase"/>
                        <button onClick={props.handleBackwardClick} >Back</button>
                    </fieldset>
                </form>
            ),
            4: (
            <div><h2>Thank You!<br/>Order is set:</h2><br/>
                <table>
                    <tbody>
                        {fieldNames.map((key) => {
                            if (props.data && props.data[key]) {
                                return (<tr key={key}><td>{key}</td><td>{props.data[key]}</td></tr>);
                            }
                        })}
                    </tbody>
                </table>
            </div>
        )}[props.checkoutStatus]}
    </div>
);


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkoutStatus: 0,
            data: null
        };
        Object.assign(this.state, emptyState);

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
    }

    handleCheckoutClick(event){
        event.preventDefault();
        if (this.state.checkoutStatus === 3) {
            let data = Object.assign({}, this.state)
            delete data.checkoutStatus;
            delete data.data;
            postFormInputs(data).then((response) => {
                this.setState({
                    data: response
                })
            });
        }
        if (this.state.checkoutStatus <= 3) {
            this.setState({
                checkoutStatus: this.state.checkoutStatus + 1
            });
        } else {
            this.setState(Object.assign({
                checkoutStatus: 0,
                data: null
            }, emptyState));
        }
        
    }

    handleBackwardClick(event){
        event.preventDefault();
        if (this.state.checkoutStatus >= 1) {
            this.setState({
                checkoutStatus: this.state.checkoutStatus - 1
            });
        }
        
    }

    handleFormChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <button className="check-out" onClick={this.handleCheckoutClick}>{this.checkout[this.state.checkoutStatus]}</button>
                <Form handleFormChange={this.handleFormChange} handleCheckoutClick={this.handleCheckoutClick} handleBackwardClick={this.handleBackwardClick} {...this.state} />
            </div>
        );
    }
}


//Render React DOM elements
ReactDOM.render(<App />, document.getElementById('app'));
