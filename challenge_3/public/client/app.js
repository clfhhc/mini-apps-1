'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//setting global variables and Methods

var fieldNames = ['username', 'email', 'password', 'street-address-1', 'street-address-2', 'city', 'state', 'zip-code', 'tel-no', 'credit-card-no', 'expiry-date', 'cvv', 'billing-zip-code'];

var emptyState = fieldNames.reduce(function (obj, key) {
    obj[key] = '';
    return obj;
}, {});

var postFormInputsUrl = 'http://127.0.0.1:3000/form';

var postFormInputs = function postFormInputs(subState) {
    fetch(postFormInputsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subState)
    }).then(function (response) {
        console.log('something');
        console.log(response.text());
    });
};

//creating React Components:

var Form1 = function (_React$Component) {
    _inherits(Form1, _React$Component);

    function Form1(props) {
        _classCallCheck(this, Form1);

        var _this = _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));

        _this.state = {};

        // this.handleFormChange = this.props.handleFormChange.bind(this)
        return _this;
    }

    _createClass(Form1, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { action: '/form', method: 'post' },
                    React.createElement(
                        'fieldset',
                        null,
                        React.createElement(
                            'legend',
                            null,
                            'Create Account:'
                        ),
                        'Name:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'text', name: fieldNames[0], placeholder: 'Input Account Name', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Email:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'email', name: fieldNames[1], placeholder: 'Input Email Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Password:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'password', name: fieldNames[2], placeholder: 'Input Password', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        React.createElement('input', { type: 'submit', value: 'Next', onClick: this.props.handleCheckoutClick }),
                        React.createElement(
                            'button',
                            { onClick: this.props.handleBackwardClick },
                            'Back'
                        )
                    )
                )
            );
        }
    }]);

    return Form1;
}(React.Component);

var Form2 = function (_React$Component2) {
    _inherits(Form2, _React$Component2);

    function Form2(props) {
        _classCallCheck(this, Form2);

        var _this2 = _possibleConstructorReturn(this, (Form2.__proto__ || Object.getPrototypeOf(Form2)).call(this, props));

        _this2.state = {};

        // this.handleFormChange = this.props.handleFormChange.bind(this)
        return _this2;
    }

    _createClass(Form2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { action: '/form', method: 'post' },
                    React.createElement(
                        'fieldset',
                        null,
                        React.createElement(
                            'legend',
                            null,
                            'Shipment Information:'
                        ),
                        'Address:',
                        React.createElement('br', null),
                        'Line 1:',
                        React.createElement('input', { type: 'text', name: fieldNames[3], placeholder: 'Street Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Line 2:',
                        React.createElement('input', { type: 'text', name: fieldNames[4], placeholder: 'Street Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'City:',
                        React.createElement('input', { type: 'text', name: fieldNames[5], placeholder: 'City', onChange: this.props.handleFormChange }),
                        'State:',
                        React.createElement('input', { type: 'text', name: fieldNames[6], placeholder: 'State', pattern: '[A-Za-z]{2}', title: 'Two Letter State Code', onChange: this.props.handleFormChange }),
                        'Zip code:',
                        React.createElement('input', { type: 'text', name: fieldNames[7], pattern: '[0-9]{5}', placeholder: 'Zip Code', title: 'Five Digit Zip Code', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Phone Number:',
                        React.createElement('input', { type: 'tel', name: fieldNames[8], placeholder: 'Telephone Number', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        React.createElement('input', { type: 'submit', value: 'Next', onClick: this.props.handleCheckoutClick }),
                        React.createElement(
                            'button',
                            { onClick: this.props.handleBackwardClick },
                            'Back'
                        )
                    )
                )
            );
        }
    }]);

    return Form2;
}(React.Component);

var Form3 = function (_React$Component3) {
    _inherits(Form3, _React$Component3);

    function Form3(props) {
        _classCallCheck(this, Form3);

        var _this3 = _possibleConstructorReturn(this, (Form3.__proto__ || Object.getPrototypeOf(Form3)).call(this, props));

        _this3.state = {};

        // this.handleFormChange = this.props.handleFormChange.bind(this)
        return _this3;
    }

    _createClass(Form3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { action: '/form', method: 'post' },
                    React.createElement(
                        'fieldset',
                        null,
                        React.createElement(
                            'legend',
                            null,
                            'Billing Information:'
                        ),
                        'Credit Card:',
                        React.createElement('br', null),
                        'Number:',
                        React.createElement('input', { type: 'text', name: fieldNames[9], placeholder: 'Street Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Expiry Date:',
                        React.createElement('input', { type: 'text', name: fieldNames[10], pattern: '[0-9]{6}', placeholder: 'MMYYYY', title: 'Six Digit Month and Year', onChange: this.props.handleFormChange }),
                        'CVV:',
                        React.createElement('input', { type: 'text', name: fieldNames[11], pattern: '[0-9]{3}', placeholder: 'XXX', title: 'Three Digit CVV', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Billing Zip code:',
                        React.createElement('input', { type: 'text', name: fieldNames[12], pattern: '[0-9]{5}', placeholder: 'Billing Zip Code', title: 'Five Digit Zip Code', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        React.createElement('input', { type: 'submit', value: 'Purchase', onClick: this.props.handleCheckoutClick }),
                        React.createElement(
                            'button',
                            { onClick: this.props.handleBackwardClick },
                            'Back'
                        )
                    )
                )
            );
        }
    }]);

    return Form3;
}(React.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App(props) {
        _classCallCheck(this, App);

        var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this4.state = {
            checkoutStatus: 0
        };

        _this4.checkout = {
            0: 'Checkout',
            1: 'Next',
            2: 'Next',
            3: 'Purchase',
            4: 'Reset'
        };

        _this4.sendFormFields = {
            1: fieldNames.slice(0, 3),
            2: fieldNames.slice(3, 9),
            3: fieldNames.slice(10, 13)
        };

        _this4.checkoutForm = {
            0: React.createElement(
                'div',
                null,
                'Ready to checkout?'
            ),
            1: React.createElement(Form1, { handleFormChange: _this4.handleFormChange, handleCheckoutClick: _this4.handleCheckoutClick }),
            2: React.createElement(Form2, { handleFormChange: _this4.handleFormChange, handleCheckoutClick: _this4.handleCheckoutClick }),
            3: React.createElement(Form3, { handleFormChange: _this4.handleFormChange, handleCheckoutClick: _this4.handleCheckoutClick }),
            4: React.createElement(
                'div',
                null,
                'Thank You!',
                React.createElement('br', null),
                'Order is set.'
            )
        };

        _this4.handleCheckoutClick = _this4.handleCheckoutClick.bind(_this4);
        _this4.handleBackwardClick = _this4.handleBackwardClick.bind(_this4);
        _this4.handleFormChange = _this4.handleFormChange.bind(_this4);
        return _this4;
    }

    _createClass(App, [{
        key: 'getSubState',
        value: function getSubState(checkoutStatus) {
            var _this5 = this;

            var subState = void 0;
            var emptyKey = void 0;
            if (this.sendFormFields[checkoutStatus]) {
                subState = {};
                this.sendFormFields[checkoutStatus].forEach(function (key) {
                    subState[key] = _this5.state[key];
                    if (key !== fieldNames[4]) {
                        subState[key] || emptyKey || (emptyKey = key);
                    }
                });
            }
            return [subState, emptyKey];
        }
    }, {
        key: 'handleCheckoutClick',
        value: function handleCheckoutClick(event) {
            event.preventDefault();
            var subState = void 0,
                emptyKey = void 0;

            var _getSubState = this.getSubState(this.state.checkoutStatus);

            var _getSubState2 = _slicedToArray(_getSubState, 2);

            subState = _getSubState2[0];
            emptyKey = _getSubState2[1];

            if (emptyKey) {
                alert(emptyKey + ' is not optional');
                return;
            }
            console.log(subState);
            subState && postFormInputs(subState);
            this.setState(emptyState);
            if (this.state.checkoutStatus <= 3) {
                this.setState({
                    checkoutStatus: this.state.checkoutStatus + 1
                });
            } else {
                this.setState({
                    checkoutStatus: 0
                });
            }
        }
    }, {
        key: 'handleBackwardClick',
        value: function handleBackwardClick(event) {
            event.preventDefault();
            if (this.state.checkoutStatus >= 1) {
                this.setState({
                    checkoutStatus: this.state.checkoutStatus - 1
                });
            }
        }
    }, {
        key: 'handleFormChange',
        value: function handleFormChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { className: 'check-out', onClick: this.handleCheckoutClick },
                    this.checkout[this.state.checkoutStatus]
                ),
                this.state.checkoutStatus === 0 && React.createElement(
                    'div',
                    null,
                    'Ready to checkout?'
                ) || this.state.checkoutStatus === 1 && React.createElement(Form1, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 2 && React.createElement(Form2, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 3 && React.createElement(Form3, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 4 && React.createElement(
                    'div',
                    null,
                    'Thank You!',
                    React.createElement('br', null),
                    'Order is set.'
                )
            );
        }
    }]);

    return App;
}(React.Component);

//Render React DOM elements


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImZpZWxkTmFtZXMiLCJlbXB0eVN0YXRlIiwicmVkdWNlIiwib2JqIiwia2V5IiwicG9zdEZvcm1JbnB1dHNVcmwiLCJwb3N0Rm9ybUlucHV0cyIsInN1YlN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJGb3JtMSIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiaGFuZGxlQ2hlY2tvdXRDbGljayIsImhhbmRsZUJhY2t3YXJkQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0yIiwiRm9ybTMiLCJBcHAiLCJjaGVja291dFN0YXR1cyIsImNoZWNrb3V0Iiwic2VuZEZvcm1GaWVsZHMiLCJzbGljZSIsImNoZWNrb3V0Rm9ybSIsImJpbmQiLCJlbXB0eUtleSIsImZvckVhY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0U3ViU3RhdGUiLCJhbGVydCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsQ0FDZixVQURlLEVBRWYsT0FGZSxFQUdmLFVBSGUsRUFJZixrQkFKZSxFQUtmLGtCQUxlLEVBTWYsTUFOZSxFQU9mLE9BUGUsRUFRZixVQVJlLEVBU2YsUUFUZSxFQVVmLGdCQVZlLEVBV2YsYUFYZSxFQVlmLEtBWmUsRUFhZixrQkFiZSxDQUFuQjs7QUFnQkEsSUFBTUMsYUFBYUQsV0FBV0UsTUFBWCxDQUFrQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQ0QsUUFBSUMsR0FBSixJQUFVLEVBQVY7QUFDQSxXQUFPRCxH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MUMsYUFESjtBQVVIOzs7O0VBbkdhTCxNQUFNQyxTOztBQXVHeEI7OztBQUNBb0IsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vc2V0dGluZyBnbG9iYWwgdmFyaWFibGVzIGFuZCBNZXRob2RzXG5cbmNvbnN0IGZpZWxkTmFtZXMgPSBbXG4gICAgJ3VzZXJuYW1lJywgXG4gICAgJ2VtYWlsJywgXG4gICAgJ3Bhc3N3b3JkJywgXG4gICAgJ3N0cmVldC1hZGRyZXNzLTEnLCBcbiAgICAnc3RyZWV0LWFkZHJlc3MtMicsIFxuICAgICdjaXR5JywgXG4gICAgJ3N0YXRlJyxcbiAgICAnemlwLWNvZGUnLFxuICAgICd0ZWwtbm8nLFxuICAgICdjcmVkaXQtY2FyZC1ubycsXG4gICAgJ2V4cGlyeS1kYXRlJyxcbiAgICAnY3Z2JyxcbiAgICAnYmlsbGluZy16aXAtY29kZSdcbl0gXG5cbmNvbnN0IGVtcHR5U3RhdGUgPSBmaWVsZE5hbWVzLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICBvYmpba2V5XSA9JydcbiAgICByZXR1cm4gb2JqO1xufSwge30pXG5cbmNvbnN0IHBvc3RGb3JtSW5wdXRzVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9mb3JtJztcblxuY29uc3QgcG9zdEZvcm1JbnB1dHMgPSBmdW5jdGlvbihzdWJTdGF0ZSkge1xuICAgIGZldGNoKHBvc3RGb3JtSW5wdXRzVXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAndGV4dC9wbGFpbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN1YlN0YXRlKSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nJylcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UudGV4dCgpKTtcbiAgICB9KVxufVxuXG4vL2NyZWF0aW5nIFJlYWN0IENvbXBvbmVudHM6XG5jbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkNyZWF0ZSBBY2NvdW50OjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1swXX0gcGxhY2Vob2xkZXI9XCJJbnB1dCBBY2NvdW50IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9e2ZpZWxkTmFtZXNbMV19IHBsYWNlaG9sZGVyPVwiSW5wdXQgRW1haWwgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT17ZmllbGROYW1lc1syXX0gcGxhY2Vob2xkZXI9XCJJbnB1dCBQYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGVja291dENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRm9ybTIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5TaGlwbWVudCBJbmZvcm1hdGlvbjo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmUgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbM119IHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5lIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtmaWVsZE5hbWVzWzRdfSBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbNV19IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbNl19IHBsYWNlaG9sZGVyPVwiU3RhdGVcIiBwYXR0ZXJuPVwiW0EtWmEtel17Mn1cIiB0aXRsZT1cIlR3byBMZXR0ZXIgU3RhdGUgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBaaXAgY29kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbN119IHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiB0aXRsZT1cIkZpdmUgRGlnaXQgWmlwIENvZGVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9e2ZpZWxkTmFtZXNbOF19IHBsYWNlaG9sZGVyPVwiVGVsZXBob25lIE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGVja291dENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5CaWxsaW5nIEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlZGl0IENhcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbOV19IHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBpcnkgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbMTBdfSBwYXR0ZXJuPVwiWzAtOV17Nn1cIiBwbGFjZWhvbGRlcj1cIk1NWVlZWVwiIHRpdGxlPVwiU2l4IERpZ2l0IE1vbnRoIGFuZCBZZWFyXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENWVjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbMTFdfSBwYXR0ZXJuPVwiWzAtOV17M31cIiBwbGFjZWhvbGRlcj1cIlhYWFwiIHRpdGxlPVwiVGhyZWUgRGlnaXQgQ1ZWXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmlsbGluZyBaaXAgY29kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbMTJdfSBwYXR0ZXJuPVwiWzAtOV17NX1cIiBwbGFjZWhvbGRlcj1cIkJpbGxpbmcgWmlwIENvZGVcIiB0aXRsZT1cIkZpdmUgRGlnaXQgWmlwIENvZGVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUHVyY2hhc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGVja291dCA9IHtcbiAgICAgICAgICAgIDA6ICdDaGVja291dCcsXG4gICAgICAgICAgICAxOiAnTmV4dCcsXG4gICAgICAgICAgICAyOiAnTmV4dCcsXG4gICAgICAgICAgICAzOiAnUHVyY2hhc2UnLFxuICAgICAgICAgICAgNDogJ1Jlc2V0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2VuZEZvcm1GaWVsZHMgPXtcbiAgICAgICAgICAgIDE6IGZpZWxkTmFtZXMuc2xpY2UoMCwzKSxcbiAgICAgICAgICAgIDI6IGZpZWxkTmFtZXMuc2xpY2UoMyw5KSxcbiAgICAgICAgICAgIDM6IGZpZWxkTmFtZXMuc2xpY2UoMTAsMTMpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybSA9IHtcbiAgICAgICAgICAgIDA6IDxkaXY+UmVhZHkgdG8gY2hlY2tvdXQ/PC9kaXY+LFxuICAgICAgICAgICAgMTogPEZvcm0xIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDI6IDxGb3JtMiBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICAzOiA8Rm9ybTMgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgNDogPGRpdj5UaGFuayBZb3UhPGJyLz5PcmRlciBpcyBzZXQuPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2sgPSB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0U3ViU3RhdGUoY2hlY2tvdXRTdGF0dXMpe1xuICAgICAgICBsZXQgc3ViU3RhdGU7XG4gICAgICAgIGxldCBlbXB0eUtleTtcbiAgICAgICAgaWYgKHRoaXMuc2VuZEZvcm1GaWVsZHNbY2hlY2tvdXRTdGF0dXNdKSB7XG4gICAgICAgICAgICBzdWJTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5zZW5kRm9ybUZpZWxkc1tjaGVja291dFN0YXR1c10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc3ViU3RhdGVba2V5XSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBmaWVsZE5hbWVzWzRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YlN0YXRlW2tleV0gfHwgZW1wdHlLZXkgfHwgKGVtcHR5S2V5ID0ga2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc3ViU3RhdGUsIGVtcHR5S2V5XTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGVja291dENsaWNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHN1YlN0YXRlLCBlbXB0eUtleTtcbiAgICAgICAgW3N1YlN0YXRlLCBlbXB0eUtleV0gPSB0aGlzLmdldFN1YlN0YXRlKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMpO1xuICAgICAgICBpZiAoZW1wdHlLZXkpIHtcbiAgICAgICAgICAgIGFsZXJ0KGAke2VtcHR5S2V5fSBpcyBub3Qgb3B0aW9uYWxgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhzdWJTdGF0ZSk7XG4gICAgICAgIHN1YlN0YXRlICYmIHBvc3RGb3JtSW5wdXRzKHN1YlN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShlbXB0eVN0YXRlKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPD0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQmFja3dhcmRDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzIC0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2hlY2stb3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfT57dGhpcy5jaGVja291dFt0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzXX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDApICYmICg8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMSkgJiYgKDxGb3JtMSBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMikgJiYgKDxGb3JtMiBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMykgJiYgKDxGb3JtMyBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gNCkgJiYgKDxkaXY+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0LjwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy9SZW5kZXIgUmVhY3QgRE9NIGVsZW1lbnRzXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==