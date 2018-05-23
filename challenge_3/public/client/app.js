'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form1 = function (_React$Component) {
    _inherits(Form1, _React$Component);

    function Form1(props) {
        _classCallCheck(this, Form1);

        var _this = _possibleConstructorReturn(this, (Form1.__proto__ || Object.getPrototypeOf(Form1)).call(this, props));

        _this.state = {
            account: '',
            email: '',
            password: ''
        };

        _this.handleFormChange = _this.props.handleFormChange.bind(_this);
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
                        React.createElement('input', { type: 'text', name: 'account', placeholder: 'Input Account Name', onChange: this.handleFormChange, value: this.state.account }),
                        React.createElement('br', null),
                        'Email:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'email', name: 'email', placeholder: 'Input Email Address', onChange: this.handleFormChange, value: this.state.email }),
                        React.createElement('br', null),
                        'Password:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'password', name: 'password', placeholder: 'Input Password', onChange: this.handleFormChange, value: this.state.password }),
                        React.createElement('br', null),
                        React.createElement(
                            'button',
                            { onClick: this.props.handleBackwardClick },
                            'Back'
                        ),
                        React.createElement('input', { type: 'submit', value: 'Next', onClick: this.props.handleCheckoutClick })
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

        _this2.state = {
            'street-address-1': '',
            'street-address-2': '',
            city: '',
            state: '',
            'zip-code': '',
            'tel-no': ''
        };

        _this2.handleFormChange = _this2.props.handleFormChange.bind(_this2);
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
                        React.createElement('input', { type: 'text', name: 'street-address-1', placeholder: 'Street Address', onChange: this.handleFormChange, value: this.state['street-address-1'] }),
                        React.createElement('br', null),
                        'Line 2:',
                        React.createElement('input', { type: 'text', name: 'street-address-2', placeholder: 'Street Address', onChange: this.handleFormChange, value: this.state['street-address-2'] }),
                        React.createElement('br', null),
                        'City:',
                        React.createElement('input', { type: 'text', name: 'city', placeholder: 'City', onChange: this.handleFormChange, value: this.state.city }),
                        'State:',
                        React.createElement('input', { type: 'text', name: 'state', placeholder: 'State', pattern: '[A-Za-z]{2}', title: 'Two Letter State Code', onChange: this.handleFormChange, value: this.state.state }),
                        'Zip code:',
                        React.createElement('input', { type: 'text', name: 'zip-code', pattern: '[0-9]{5}', placeholder: 'Zip Code', title: 'Five Digit Zip Code', onChange: this.handleFormChange, value: this.state['zip-code'] }),
                        React.createElement('br', null),
                        'Phone Number:',
                        React.createElement('input', { type: 'tel', name: 'tel-no', placeholder: 'Telephone Number', onChange: this.handleFormChange, value: this.state['tel-no'] }),
                        React.createElement('br', null),
                        React.createElement(
                            'button',
                            { onClick: this.props.handleBackwardClick },
                            'Back'
                        ),
                        React.createElement('input', { type: 'submit', value: 'Next', onClick: this.props.handleCheckoutClick })
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

        _this3.state = {
            'credit-card-no': '',
            'expiry-date': '',
            cvv: '',
            'billing-zip-code': ''
        };

        _this3.handleFormChange = _this3.props.handleFormChange.bind(_this3);
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
                        React.createElement('input', { type: 'text', name: 'credit-card-no', placeholder: 'Street Address', onChange: this.handleFormChange, value: this.state['credit-card-no'] }),
                        React.createElement('br', null),
                        'Expiry Date:',
                        React.createElement('input', { type: 'text', name: 'expiry-date', pattern: '[0-9]{6}', placeholder: 'MMYYYY', title: 'Six Digit Month and Year', onChange: this.handleFormChange, value: this.state['expiry-date'] }),
                        'CVV:',
                        React.createElement('input', { type: 'text', name: 'cvv', pattern: '[0-9]{3}', placeholder: 'XXX', title: 'Three Digit CVV', onChange: this.handleFormChange, value: this.state.cvv }),
                        React.createElement('br', null),
                        'Billing Zip code:',
                        React.createElement('input', { type: 'text', name: 'billing-zip-code', pattern: '[0-9]{5}', placeholder: 'Billing Zip Code', title: 'Five Digit Zip Code', onChange: this.handleFormChange, value: this.state['billing-zip-code'] }),
                        React.createElement('br', null),
                        React.createElement(
                            'button',
                            { onClick: this.props.handleBackwardClick },
                            'Back'
                        ),
                        React.createElement('input', { type: 'submit', value: 'Purchase', onClick: this.props.handleCheckoutClick })
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

        _this4.handleCheckoutClick = _this4.handleCheckoutClick.bind(_this4);
        _this4.handleBackwardClick = _this4.handleBackwardClick.bind(_this4);
        // this.handleFormChange = this.handleFormChange.bind(this);

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

        return _this4;
    }

    _createClass(App, [{
        key: 'handleCheckoutClick',
        value: function handleCheckoutClick(event) {
            event.preventDefault();
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
            // console.log(event.target.name, event.target.value);
            this.setState(_defineProperty({}, event.target.name, event.target.value));
            console.log(this.state);
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
                ) || this.state.checkoutStatus === 1 && React.createElement(Form1, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 2 && React.createElement(Form2, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 3 && React.createElement(Form3, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 0 && React.createElement(
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

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm0xIiwicHJvcHMiLCJzdGF0ZSIsImFjY291bnQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlRm9ybUNoYW5nZSIsImJpbmQiLCJoYW5kbGVCYWNrd2FyZENsaWNrIiwiaGFuZGxlQ2hlY2tvdXRDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybTIiLCJjaXR5IiwiRm9ybTMiLCJjdnYiLCJBcHAiLCJjaGVja291dFN0YXR1cyIsImNoZWNrb3V0IiwiY2hlY2tvdXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTLEVBREE7QUFFVEMsbUJBQU8sRUFGRTtBQUdUQyxzQkFBVTtBQUhELFNBQWI7O0FBTUEsY0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0wsS0FBTCxDQUFXSyxnQkFBWCxDQUE0QkMsSUFBNUIsT0FBeEI7QUFSZTtBQVNsQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBTSxRQUFPLE9BQWIsRUFBcUIsUUFBTyxNQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUVTLHVEQUZUO0FBR0ksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsYUFBWSxvQkFBOUMsRUFBbUUsVUFBVSxLQUFLRCxnQkFBbEYsRUFBb0csT0FBTyxLQUFLSixLQUFMLENBQVdDLE9BQXRILEdBSEo7QUFH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QUFLUyxRQUFMLENBQWMsS0FBS2hCLEtBQUwsQ0FBV2UsY0FBekI7QUFBbEUsaUJBREo7QUFFTSxxQkFBS2YsS0FBTCxDQUFXZSxjQUFYLEtBQThCLENBQS9CLElBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXRDLElBQ0EsS0FBS2YsS0FBTCxDQUFXZSxjQUFYLEtBQThCLENBQS9CLElBQXNDLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsS0FBS1gsZ0JBQTlCLEVBQWdELHFCQUFxQixLQUFLRyxtQkFBMUUsRUFBK0YscUJBQXFCLEtBQUtELG1CQUF6SCxHQURyQyxJQUVBLEtBQUtOLEtBQUwsQ0FBV2UsY0FBWCxLQUE4QixDQUEvQixJQUFzQyxvQkFBQyxLQUFELElBQU8sa0JBQWtCLEtBQUtYLGdCQUE5QixFQUFnRCxxQkFBcUIsS0FBS0csbUJBQTFFLEVBQStGLHFCQUFxQixLQUFLRCxtQkFBekgsR0FGckMsSUFHQSxLQUFLTixLQUFMLENBQVdlLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0Msb0JBQUMsS0FBRCxJQUFPLGtCQUFrQixLQUFLWCxnQkFBOUIsRUFBZ0QscUJBQXFCLEtBQUtHLG1CQUExRSxFQUErRixxQkFBcUIsS0FBS0QsbUJBQXpILEdBSHJDLElBSUEsS0FBS04sS0FBTCxDQUFXZSxjQUFYLEtBQThCLENBQS9CLElBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQWUsbURBQWY7QUFBQTtBQUFBO0FBTjFDLGFBREo7QUFVSDs7OztFQXhFYVAsTUFBTUMsUzs7QUE0RXhCaUIsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm0xIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50OiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5DcmVhdGUgQWNjb3VudDo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhY2NvdW50XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBBY2NvdW50IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5hY2NvdW50fS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBFbWFpbCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIklucHV0IFBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgJ3N0cmVldC1hZGRyZXNzLTEnOiAnJyxcbiAgICAgICAgICAgICdzdHJlZXQtYWRkcmVzcy0yJzogJycsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgICAgICd6aXAtY29kZSc6ICcnLFxuICAgICAgICAgICAgJ3RlbC1ubyc6ICcnLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNoaXBtZW50IEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldC1hZGRyZXNzLTFcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ3N0cmVldC1hZGRyZXNzLTEnXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5lIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RyZWV0LWFkZHJlc3MtMlwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnc3RyZWV0LWFkZHJlc3MtMiddfS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENpdHk6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIHBhdHRlcm49XCJbQS1aYS16XXsyfVwiIHRpdGxlPVwiVHdvIExldHRlciBTdGF0ZSBDb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFppcCBjb2RlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcC1jb2RlXCIgcGF0dGVybj1cIlswLTldezV9XCIgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlWyd6aXAtY29kZSddfS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInRlbC1ub1wiIHBsYWNlaG9sZGVyPVwiVGVsZXBob25lIE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlWyd0ZWwtbm8nXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGVja291dENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNsYXNzIEZvcm0zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAnY3JlZGl0LWNhcmQtbm8nOiAnJyxcbiAgICAgICAgICAgICdleHBpcnktZGF0ZSc6ICcnLFxuICAgICAgICAgICAgY3Z2OiAnJyxcbiAgICAgICAgICAgICdiaWxsaW5nLXppcC1jb2RlJzogJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5CaWxsaW5nIEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlZGl0IENhcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVkaXQtY2FyZC1ub1wiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnY3JlZGl0LWNhcmQtbm8nXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBpcnkgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnktZGF0ZVwiIHBhdHRlcm49XCJbMC05XXs2fVwiIHBsYWNlaG9sZGVyPVwiTU1ZWVlZXCIgdGl0bGU9XCJTaXggRGlnaXQgTW9udGggYW5kIFllYXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnZXhwaXJ5LWRhdGUnXX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ1ZWOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN2dlwiIHBhdHRlcm49XCJbMC05XXszfVwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgdGl0bGU9XCJUaHJlZSBEaWdpdCBDVlZcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jdnZ9Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmlsbGluZyBaaXAgY29kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nLXppcC1jb2RlXCIgcGF0dGVybj1cIlswLTldezV9XCIgcGxhY2Vob2xkZXI9XCJCaWxsaW5nIFppcCBDb2RlXCIgdGl0bGU9XCJGaXZlIERpZ2l0IFppcCBDb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ2JpbGxpbmctemlwLWNvZGUnXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQdXJjaGFzZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGVja291dCA9IHtcbiAgICAgICAgICAgIDA6ICdDaGVja291dCcsXG4gICAgICAgICAgICAxOiAnTmV4dCcsXG4gICAgICAgICAgICAyOiAnTmV4dCcsXG4gICAgICAgICAgICAzOiAnUHVyY2hhc2UnLFxuICAgICAgICAgICAgNDogJ1Jlc2V0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2sgPSB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jaGVja291dEZvcm0gPSB7XG4gICAgICAgICAgICAwOiA8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PixcbiAgICAgICAgICAgIDE6IDxGb3JtMSBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICAyOiA8Rm9ybTIgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgMzogPEZvcm0zIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDQ6IDxkaXY+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0LjwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUNoZWNrb3V0Q2xpY2soZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA8PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyArIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVCYWNrd2FyZENsaWNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgLSAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUZvcm1DaGFuZ2UoZXZlbnQpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoZWNrLW91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30+e3RoaXMuY2hlY2tvdXRbdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1c119PC9idXR0b24+XG4gICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAwKSAmJiAoPGRpdj5SZWFkeSB0byBjaGVja291dD88L2Rpdj4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDEpICYmICg8Rm9ybTEgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gLz4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDIpICYmICg8Rm9ybTIgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gLz4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDMpICYmICg8Rm9ybTMgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gLz4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDApICYmICg8ZGl2PlRoYW5rIFlvdSE8YnIvPk9yZGVyIGlzIHNldC48L2Rpdj4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIl19