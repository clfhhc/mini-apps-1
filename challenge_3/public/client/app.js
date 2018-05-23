'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                        React.createElement('input', { type: 'text', name: 'account', placeholder: 'Input Account Name', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Email:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'email', name: 'email', placeholder: 'Input Email Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Password:',
                        React.createElement('br', null),
                        React.createElement('input', { type: 'password', name: 'password', placeholder: 'Input Password', onChange: this.props.handleFormChange }),
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
                        React.createElement('input', { type: 'text', name: 'street-address-1', placeholder: 'Street Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Line 2:',
                        React.createElement('input', { type: 'text', name: 'street-address-2', placeholder: 'Street Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'City:',
                        React.createElement('input', { type: 'text', name: 'city', placeholder: 'City', onChange: this.props.handleFormChange }),
                        'State:',
                        React.createElement('input', { type: 'text', name: 'state', placeholder: 'State', pattern: '[A-Za-z]{2}', title: 'Two Letter State Code', onChange: this.props.handleFormChange }),
                        'Zip code:',
                        React.createElement('input', { type: 'text', name: 'zip-code', pattern: '[0-9]{5}', placeholder: 'Zip Code', title: 'Five Digit Zip Code', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Phone Number:',
                        React.createElement('input', { type: 'tel', name: 'tel-no', placeholder: 'Telephone Number', onChange: this.props.handleFormChange }),
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
                        React.createElement('input', { type: 'text', name: 'credit-card-no', placeholder: 'Street Address', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Expiry Date:',
                        React.createElement('input', { type: 'text', name: 'expiry-date', pattern: '[0-9]{6}', placeholder: 'MMYYYY', title: 'Six Digit Month and Year', onChange: this.props.handleFormChange }),
                        'CVV:',
                        React.createElement('input', { type: 'text', name: 'cvv', pattern: '[0-9]{3}', placeholder: 'XXX', title: 'Three Digit CVV', onChange: this.props.handleFormChange }),
                        React.createElement('br', null),
                        'Billing Zip code:',
                        React.createElement('input', { type: 'text', name: 'billing-zip-code', pattern: '[0-9]{5}', placeholder: 'Billing Zip Code', title: 'Five Digit Zip Code', onChange: this.props.handleFormChange }),
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
        _this4.handleFormChange = _this4.handleFormChange.bind(_this4);

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
            this.setState({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm0xIiwicHJvcHMiLCJzdGF0ZSIsImFjY291bnQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlRm9ybUNoYW5nZSIsImhhbmRsZUJhY2t3YXJkQ2xpY2siLCJoYW5kbGVDaGVja291dENsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtMiIsImNpdHkiLCJGb3JtMyIsImN2diIsIkFwcCIsImNoZWNrb3V0U3RhdHVzIiwiY2hlY2tvdXQiLCJiaW5kIiwiY2hlY2tvdXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTLEVBREE7QUFFVEMsbUJBQU8sRUFGRTtBQUdUQyxzQkFBVTtBQUhELFNBQWI7QUFGZTtBQU9sQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBTSxRQUFPLE9BQWIsRUFBcUIsUUFBTyxNQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUVTLHVEQUZUO0FBR0ksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsYUFBWSxvQkFBOUMsRUFBbUUsVUFBVSxLQUFLSixLQUFMLENBQVdLLGdCQUF4RixHQUhKO0FBR2dILHVEQUhoSDtBQUFBO0FBSVUsdURBSlY7QUFLSSx1REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxhQUFZLHFCQUE3QyxFQUFtRSxVQUFVLEtBQUtMLEtBQUwsQ0FBV0ssZ0JBQXhGLEdBTEo7QUFLZ0gsdURB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QWY7QUFBQTtBQUFBO0FBTjFDLGFBREo7QUFVSDs7OztFQXZFYVAsTUFBTUMsUzs7QUEyRXhCYSxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybTEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjY291bnQ6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5DcmVhdGUgQWNjb3VudDo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhY2NvdW50XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBBY2NvdW50IE5hbWVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiSW5wdXQgRW1haWwgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBQYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRm9ybTIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICdzdHJlZXQtYWRkcmVzcy0xJzogJycsXG4gICAgICAgICAgICAnc3RyZWV0LWFkZHJlc3MtMic6ICcnLFxuICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgICAnemlwLWNvZGUnOiAnJyxcbiAgICAgICAgICAgICd0ZWwtbm8nOiAnJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2Zvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+U2hpcG1lbnQgSW5mb3JtYXRpb246PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5lIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RyZWV0LWFkZHJlc3MtMVwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5lIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RyZWV0LWFkZHJlc3MtMlwiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiBwbGFjZWhvbGRlcj1cIlN0YXRlXCIgcGF0dGVybj1cIltBLVphLXpdezJ9XCIgdGl0bGU9XCJUd28gTGV0dGVyIFN0YXRlIENvZGVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgWmlwIGNvZGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwLWNvZGVcIiBwYXR0ZXJuPVwiWzAtOV17NX1cIiBwbGFjZWhvbGRlcj1cIlppcCBDb2RlXCIgdGl0bGU9XCJGaXZlIERpZ2l0IFppcCBDb2RlXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwidGVsLW5vXCIgcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmUgTnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgJ2NyZWRpdC1jYXJkLW5vJzogJycsXG4gICAgICAgICAgICAnZXhwaXJ5LWRhdGUnOiAnJyxcbiAgICAgICAgICAgIGN2djogJycsXG4gICAgICAgICAgICAnYmlsbGluZy16aXAtY29kZSc6ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkJpbGxpbmcgSW5mb3JtYXRpb246PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVkaXQgQ2FyZDo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNyZWRpdC1jYXJkLW5vXCIgcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGlyeSBEYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGlyeS1kYXRlXCIgcGF0dGVybj1cIlswLTldezZ9XCIgcGxhY2Vob2xkZXI9XCJNTVlZWVlcIiB0aXRsZT1cIlNpeCBEaWdpdCBNb250aCBhbmQgWWVhclwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBDVlY6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgcGF0dGVybj1cIlswLTldezN9XCIgcGxhY2Vob2xkZXI9XCJYWFhcIiB0aXRsZT1cIlRocmVlIERpZ2l0IENWVlwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJpbGxpbmcgWmlwIGNvZGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYmlsbGluZy16aXAtY29kZVwiIHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiQmlsbGluZyBaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlB1cmNoYXNlXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGVja291dENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja291dFN0YXR1czogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNoZWNrb3V0ID0ge1xuICAgICAgICAgICAgMDogJ0NoZWNrb3V0JyxcbiAgICAgICAgICAgIDE6ICdOZXh0JyxcbiAgICAgICAgICAgIDI6ICdOZXh0JyxcbiAgICAgICAgICAgIDM6ICdQdXJjaGFzZScsXG4gICAgICAgICAgICA0OiAnUmVzZXQnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGVja291dENsaWNrID0gdGhpcy5oYW5kbGVDaGVja291dENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQmFja3dhcmRDbGljayA9IHRoaXMuaGFuZGxlQmFja3dhcmRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmNoZWNrb3V0Rm9ybSA9IHtcbiAgICAgICAgICAgIDA6IDxkaXY+UmVhZHkgdG8gY2hlY2tvdXQ/PC9kaXY+LFxuICAgICAgICAgICAgMTogPEZvcm0xIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDI6IDxGb3JtMiBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICAzOiA8Rm9ybTMgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgNDogPGRpdj5UaGFuayBZb3UhPGJyLz5PcmRlciBpcyBzZXQuPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hlY2tvdXRDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzIDw9IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzICsgMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUJhY2t3YXJkQ2xpY2soZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyAtIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybUNoYW5nZShldmVudCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lLCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjaGVjay1vdXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Pnt0aGlzLmNoZWNrb3V0W3RoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXNdfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMCkgJiYgKDxkaXY+UmVhZHkgdG8gY2hlY2tvdXQ/PC9kaXY+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAxKSAmJiAoPEZvcm0xIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSBoYW5kbGVCYWNrd2FyZENsaWNrPXt0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9IC8+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAyKSAmJiAoPEZvcm0yIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSBoYW5kbGVCYWNrd2FyZENsaWNrPXt0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9IC8+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAzKSAmJiAoPEZvcm0zIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSBoYW5kbGVCYWNrd2FyZENsaWNrPXt0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9IC8+KSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAwKSAmJiAoPGRpdj5UaGFuayBZb3UhPGJyLz5PcmRlciBpcyBzZXQuPC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==