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
            username: '',
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
                        React.createElement('input', { type: 'text', name: 'username', placeholder: 'Input Account Name', onChange: this.handleFormChange, value: this.state.username }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm0xIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUZvcm1DaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQmFja3dhcmRDbGljayIsImhhbmRsZUNoZWNrb3V0Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0yIiwiY2l0eSIsIkZvcm0zIiwiY3Z2IiwiQXBwIiwiY2hlY2tvdXRTdGF0dXMiLCJjaGVja291dCIsImNoZWNrb3V0Rm9ybSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFVLEVBREQ7QUFFVEMsbUJBQU8sRUFGRTtBQUdUQyxzQkFBVTtBQUhELFNBQWI7O0FBTUEsY0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0wsS0FBTCxDQUFXSyxnQkFBWCxDQUE0QkMsSUFBNUIsT0FBeEI7QUFSZTtBQVNsQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBTSxRQUFPLE9BQWIsRUFBcUIsUUFBTyxNQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUVTLHVEQUZUO0FBR0ksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsYUFBWSxvQkFBL0MsRUFBb0UsVUFBVSxLQUFLRCxnQkFBbkYsRUFBcUcsT0FBTyxLQUFLSixLQUFMLENBQVdDLFFBQXZILEdBSEo7QUFHc0ksdURBSHRJO0FBQUE7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LHFCQUFLZixLQUFMLENBQVdlLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdEMsSUFDQSxLQUFLZixLQUFMLENBQVdlLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0Msb0JBQUMsS0FBRCxJQUFPLGtCQUFrQixLQUFLWCxnQkFBOUIsRUFBZ0QscUJBQXFCLEtBQUtHLG1CQUExRSxFQUErRixxQkFBcUIsS0FBS0QsbUJBQXpILEdBRHJDLElBRUEsS0FBS04sS0FBTCxDQUFXZSxjQUFYLEtBQThCLENBQS9CLElBQXNDLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsS0FBS1gsZ0JBQTlCLEVBQWdELHFCQUFxQixLQUFLRyxtQkFBMUUsRUFBK0YscUJBQXFCLEtBQUtELG1CQUF6SCxHQUZyQyxJQUdBLEtBQUtOLEtBQUwsQ0FBV2UsY0FBWCxLQUE4QixDQUEvQixJQUFzQyxvQkFBQyxLQUFELElBQU8sa0JBQWtCLEtBQUtYLGdCQUE5QixFQUFnRCxxQkFBcUIsS0FBS0csbUJBQTFFLEVBQStGLHFCQUFxQixLQUFLRCxtQkFBekgsR0FIckMsSUFJQSxLQUFLTixLQUFMLENBQVdlLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBZSxtREFBZjtBQUFBO0FBQUE7QUFOMUMsYUFESjtBQVVIOzs7O0VBdEVhUCxNQUFNQyxTOztBQTBFeEJlLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkNyZWF0ZSBBY2NvdW50OjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBBY2NvdW50IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgRW1haWwgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBQYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRm9ybTIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICdzdHJlZXQtYWRkcmVzcy0xJzogJycsXG4gICAgICAgICAgICAnc3RyZWV0LWFkZHJlc3MtMic6ICcnLFxuICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgICAnemlwLWNvZGUnOiAnJyxcbiAgICAgICAgICAgICd0ZWwtbm8nOiAnJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5TaGlwbWVudCBJbmZvcm1hdGlvbjo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmUgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdHJlZXQtYWRkcmVzcy0xXCIgcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlWydzdHJlZXQtYWRkcmVzcy0xJ119Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldC1hZGRyZXNzLTJcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ3N0cmVldC1hZGRyZXNzLTInXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIHBsYWNlaG9sZGVyPVwiU3RhdGVcIiBwYXR0ZXJuPVwiW0EtWmEtel17Mn1cIiB0aXRsZT1cIlR3byBMZXR0ZXIgU3RhdGUgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXRlfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICBaaXAgY29kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXAtY29kZVwiIHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiB0aXRsZT1cIkZpdmUgRGlnaXQgWmlwIENvZGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnemlwLWNvZGUnXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJ0ZWwtbm9cIiBwbGFjZWhvbGRlcj1cIlRlbGVwaG9uZSBOdW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsndGVsLW5vJ119Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgJ2NyZWRpdC1jYXJkLW5vJzogJycsXG4gICAgICAgICAgICAnZXhwaXJ5LWRhdGUnOiAnJyxcbiAgICAgICAgICAgIGN2djogJycsXG4gICAgICAgICAgICAnYmlsbGluZy16aXAtY29kZSc6ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2Zvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+QmlsbGluZyBJbmZvcm1hdGlvbjo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWRpdCBDYXJkOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3JlZGl0LWNhcmQtbm9cIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ2NyZWRpdC1jYXJkLW5vJ119Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwaXJ5IERhdGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwaXJ5LWRhdGVcIiBwYXR0ZXJuPVwiWzAtOV17Nn1cIiBwbGFjZWhvbGRlcj1cIk1NWVlZWVwiIHRpdGxlPVwiU2l4IERpZ2l0IE1vbnRoIGFuZCBZZWFyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ2V4cGlyeS1kYXRlJ119Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENWVjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdnZcIiBwYXR0ZXJuPVwiWzAtOV17M31cIiBwbGFjZWhvbGRlcj1cIlhYWFwiIHRpdGxlPVwiVGhyZWUgRGlnaXQgQ1ZWXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY3Z2fS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJpbGxpbmcgWmlwIGNvZGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmlsbGluZy16aXAtY29kZVwiIHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiQmlsbGluZyBaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlWydiaWxsaW5nLXppcC1jb2RlJ119Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUHVyY2hhc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2hlY2tvdXQgPSB7XG4gICAgICAgICAgICAwOiAnQ2hlY2tvdXQnLFxuICAgICAgICAgICAgMTogJ05leHQnLFxuICAgICAgICAgICAgMjogJ05leHQnLFxuICAgICAgICAgICAgMzogJ1B1cmNoYXNlJyxcbiAgICAgICAgICAgIDQ6ICdSZXNldCdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2sgPSB0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrID0gdGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtID0ge1xuICAgICAgICAgICAgMDogPGRpdj5SZWFkeSB0byBjaGVja291dD88L2Rpdj4sXG4gICAgICAgICAgICAxOiA8Rm9ybTEgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgMjogPEZvcm0yIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDM6IDxGb3JtMyBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICA0OiA8ZGl2PlRoYW5rIFlvdSE8YnIvPk9yZGVyIGlzIHNldC48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVDaGVja291dENsaWNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPD0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQmFja3dhcmRDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzIC0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2hlY2stb3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfT57dGhpcy5jaGVja291dFt0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzXX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDApICYmICg8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMSkgJiYgKDxGb3JtMSBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMikgJiYgKDxGb3JtMiBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMykgJiYgKDxGb3JtMyBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMCkgJiYgKDxkaXY+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0LjwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=