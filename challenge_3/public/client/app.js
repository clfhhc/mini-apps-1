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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm0xIiwicHJvcHMiLCJzdGF0ZSIsImFjY291bnQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlRm9ybUNoYW5nZSIsImJpbmQiLCJoYW5kbGVCYWNrd2FyZENsaWNrIiwiaGFuZGxlQ2hlY2tvdXRDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybTIiLCJjaXR5IiwiRm9ybTMiLCJjdnYiLCJBcHAiLCJjaGVja291dFN0YXR1cyIsImNoZWNrb3V0IiwiY2hlY2tvdXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVMsRUFEQTtBQUVUQyxtQkFBTyxFQUZFO0FBR1RDLHNCQUFVO0FBSEQsU0FBYjs7QUFNQSxjQUFLQyxnQkFBTCxHQUF3QixNQUFLTCxLQUFMLENBQVdLLGdCQUFYLENBQTRCQyxJQUE1QixPQUF4QjtBQVJlO0FBU2xCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFNLFFBQU8sT0FBYixFQUFxQixRQUFPLE1BQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUFBO0FBRVMsdURBRlQ7QUFHSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxTQUF4QixFQUFrQyxhQUFZLG9CQUE5QyxFQUFtRSxVQUFVLEtBQUtELGdCQUFsRixFQUFvRyxPQUFPLEtBQUtKLEtBQUwsQ0FBV0MsT0FBdEgsR0FISjtBQUdvSSx1REFIcEk7QUFBQTtB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cUJBQUtmLEtBQUwsQ0FBV2UsY0FBWCxLQUE4QixDQUEvQixJQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF0QyxJQUNBLEtBQUtmLEtBQUwsQ0FBV2UsY0FBWCxLQUE4QixDQUEvQixJQUFzQyxvQkFBQyxLQUFELElBQU8sa0JBQWtCLEtBQUtYLGdCQUE5QixFQUFnRCxxQkFBcUIsS0FBS0csbUJBQTFFLEVBQStGLHFCQUFxQixLQUFLRCxtQkFBekgsR0FEckMsSUFFQSxLQUFLTixLQUFMLENBQVdlLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0Msb0JBQUMsS0FBRCxJQUFPLGtCQUFrQixLQUFLWCxnQkFBOUIsRUFBZ0QscUJBQXFCLEtBQUtHLG1CQUExRSxFQUErRixxQkFBcUIsS0FBS0QsbUJBQXpILEdBRnJDLElBR0EsS0FBS04sS0FBTCxDQUFXZSxjQUFYLEtBQThCLENBQS9CLElBQXNDLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsS0FBS1gsZ0JBQTlCLEVBQWdELHFCQUFxQixLQUFLRyxtQkFBMUUsRUFBK0YscUJBQXFCLEtBQUtELG1CQUF6SCxHQUhyQyxJQUlBLEtBQUtOLEtBQUwsQ0FBV2UsY0FBWCxLQUE4QixDQUEvQixJQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFlLG1EQUFmO0FBQUE7QUFBQTtBQU4xQyxhQURKO0FBVUg7Ozs7RUF0RWFQLE1BQU1DLFM7O0FBMEV4QmUsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm0xIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY2NvdW50OiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5DcmVhdGUgQWNjb3VudDo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhY2NvdW50XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBBY2NvdW50IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5hY2NvdW50fS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBFbWFpbCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIklucHV0IFBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgJ3N0cmVldC1hZGRyZXNzLTEnOiAnJyxcbiAgICAgICAgICAgICdzdHJlZXQtYWRkcmVzcy0yJzogJycsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgICAgICd6aXAtY29kZSc6ICcnLFxuICAgICAgICAgICAgJ3RlbC1ubyc6ICcnLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNoaXBtZW50IEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldC1hZGRyZXNzLTFcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ3N0cmVldC1hZGRyZXNzLTEnXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5lIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RyZWV0LWFkZHJlc3MtMlwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnc3RyZWV0LWFkZHJlc3MtMiddfS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIENpdHk6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIHBhdHRlcm49XCJbQS1aYS16XXsyfVwiIHRpdGxlPVwiVHdvIExldHRlciBTdGF0ZSBDb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuc3RhdGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFppcCBjb2RlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcC1jb2RlXCIgcGF0dGVybj1cIlswLTldezV9XCIgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlWyd6aXAtY29kZSddfS8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInRlbC1ub1wiIHBsYWNlaG9sZGVyPVwiVGVsZXBob25lIE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlWyd0ZWwtbm8nXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGVja291dENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNsYXNzIEZvcm0zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAnY3JlZGl0LWNhcmQtbm8nOiAnJyxcbiAgICAgICAgICAgICdleHBpcnktZGF0ZSc6ICcnLFxuICAgICAgICAgICAgY3Z2OiAnJyxcbiAgICAgICAgICAgICdiaWxsaW5nLXppcC1jb2RlJzogJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5CaWxsaW5nIEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlZGl0IENhcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVkaXQtY2FyZC1ub1wiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnY3JlZGl0LWNhcmQtbm8nXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBpcnkgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnktZGF0ZVwiIHBhdHRlcm49XCJbMC05XXs2fVwiIHBsYWNlaG9sZGVyPVwiTU1ZWVlZXCIgdGl0bGU9XCJTaXggRGlnaXQgTW9udGggYW5kIFllYXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZVsnZXhwaXJ5LWRhdGUnXX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ1ZWOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN2dlwiIHBhdHRlcm49XCJbMC05XXszfVwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgdGl0bGU9XCJUaHJlZSBEaWdpdCBDVlZcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jdnZ9Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmlsbGluZyBaaXAgY29kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiaWxsaW5nLXppcC1jb2RlXCIgcGF0dGVybj1cIlswLTldezV9XCIgcGxhY2Vob2xkZXI9XCJCaWxsaW5nIFppcCBDb2RlXCIgdGl0bGU9XCJGaXZlIERpZ2l0IFppcCBDb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGVbJ2JpbGxpbmctemlwLWNvZGUnXX0vPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQdXJjaGFzZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGVja291dCA9IHtcbiAgICAgICAgICAgIDA6ICdDaGVja291dCcsXG4gICAgICAgICAgICAxOiAnTmV4dCcsXG4gICAgICAgICAgICAyOiAnTmV4dCcsXG4gICAgICAgICAgICAzOiAnUHVyY2hhc2UnLFxuICAgICAgICAgICAgNDogJ1Jlc2V0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2sgPSB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jaGVja291dEZvcm0gPSB7XG4gICAgICAgICAgICAwOiA8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PixcbiAgICAgICAgICAgIDE6IDxGb3JtMSBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICAyOiA8Rm9ybTIgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgMzogPEZvcm0zIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDQ6IDxkaXY+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0LjwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUNoZWNrb3V0Q2xpY2soZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA8PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyArIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVCYWNrd2FyZENsaWNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgLSAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUZvcm1DaGFuZ2UoZXZlbnQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjaGVjay1vdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Pnt0aGlzLmNoZWNrb3V0W3RoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXNdfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMCkgJiYgKDxkaXY+UmVhZHkgdG8gY2hlY2tvdXQ/PC9kaXY+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAxKSAmJiAoPEZvcm0xIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSBoYW5kbGVCYWNrd2FyZENsaWNrPXt0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9IC8+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAyKSAmJiAoPEZvcm0yIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSBoYW5kbGVCYWNrd2FyZENsaWNrPXt0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9IC8+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAzKSAmJiAoPEZvcm0zIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSBoYW5kbGVCYWNrd2FyZENsaWNrPXt0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9IC8+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAwKSAmJiAoPGRpdj5UaGFuayBZb3UhPGJyLz5PcmRlciBpcyBzZXQuPC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==