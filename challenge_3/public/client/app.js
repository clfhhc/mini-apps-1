"use strict";

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

        _this.state = {};

        // this.handleFormChange = this.props.handleFormChange.bind(this)
        return _this;
    }

    _createClass(Form1, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "/form", method: "post" },
                    React.createElement(
                        "fieldset",
                        null,
                        React.createElement(
                            "legend",
                            null,
                            "Create Account:"
                        ),
                        "Name:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "text", name: "username", placeholder: "Input Account Name", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "Email:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "email", name: "email", placeholder: "Input Email Address", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "Password:",
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", name: "password", placeholder: "Input Password", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        React.createElement(
                            "button",
                            { onClick: this.props.handleBackwardClick },
                            "Back"
                        ),
                        React.createElement("input", { type: "submit", value: "Next", onClick: this.props.handleCheckoutClick })
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "/form", method: "post" },
                    React.createElement(
                        "fieldset",
                        null,
                        React.createElement(
                            "legend",
                            null,
                            "Shipment Information:"
                        ),
                        "Address:",
                        React.createElement("br", null),
                        "Line 1:",
                        React.createElement("input", { type: "text", name: "street-address-1", placeholder: "Street Address", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "Line 2:",
                        React.createElement("input", { type: "text", name: "street-address-2", placeholder: "Street Address", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "City:",
                        React.createElement("input", { type: "text", name: "city", placeholder: "City", onChange: this.props.handleFormChange }),
                        "State:",
                        React.createElement("input", { type: "text", name: "state", placeholder: "State", pattern: "[A-Za-z]{2}", title: "Two Letter State Code", onChange: this.props.handleFormChange }),
                        "Zip code:",
                        React.createElement("input", { type: "text", name: "zip-code", pattern: "[0-9]{5}", placeholder: "Zip Code", title: "Five Digit Zip Code", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "Phone Number:",
                        React.createElement("input", { type: "tel", name: "tel-no", placeholder: "Telephone Number", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        React.createElement(
                            "button",
                            { onClick: this.props.handleBackwardClick },
                            "Back"
                        ),
                        React.createElement("input", { type: "submit", value: "Next", onClick: this.props.handleCheckoutClick })
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "/form", method: "post" },
                    React.createElement(
                        "fieldset",
                        null,
                        React.createElement(
                            "legend",
                            null,
                            "Billing Information:"
                        ),
                        "Credit Card:",
                        React.createElement("br", null),
                        "Number:",
                        React.createElement("input", { type: "text", name: "credit-card-no", placeholder: "Street Address", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "Expiry Date:",
                        React.createElement("input", { type: "text", name: "expiry-date", pattern: "[0-9]{6}", placeholder: "MMYYYY", title: "Six Digit Month and Year", onChange: this.props.handleFormChange }),
                        "CVV:",
                        React.createElement("input", { type: "text", name: "cvv", pattern: "[0-9]{3}", placeholder: "XXX", title: "Three Digit CVV", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        "Billing Zip code:",
                        React.createElement("input", { type: "text", name: "billing-zip-code", pattern: "[0-9]{5}", placeholder: "Billing Zip Code", title: "Five Digit Zip Code", onChange: this.props.handleFormChange }),
                        React.createElement("br", null),
                        React.createElement(
                            "button",
                            { onClick: this.props.handleBackwardClick },
                            "Back"
                        ),
                        React.createElement("input", { type: "submit", value: "Purchase", onClick: this.props.handleCheckoutClick })
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
                "div",
                null,
                "Ready to checkout?"
            ),
            1: React.createElement(Form1, { handleFormChange: _this4.handleFormChange, handleCheckoutClick: _this4.handleCheckoutClick }),
            2: React.createElement(Form2, { handleFormChange: _this4.handleFormChange, handleCheckoutClick: _this4.handleCheckoutClick }),
            3: React.createElement(Form3, { handleFormChange: _this4.handleFormChange, handleCheckoutClick: _this4.handleCheckoutClick }),
            4: React.createElement(
                "div",
                null,
                "Thank You!",
                React.createElement("br", null),
                "Order is set."
            )
        };

        return _this4;
    }

    _createClass(App, [{
        key: "handleCheckoutClick",
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
        key: "handleBackwardClick",
        value: function handleBackwardClick(event) {
            event.preventDefault();
            if (this.state.checkoutStatus >= 1) {
                this.setState({
                    checkoutStatus: this.state.checkoutStatus - 1
                });
            }
        }
    }, {
        key: "handleFormChange",
        value: function handleFormChange(event) {
            this.setState(_defineProperty({}, event.target.name, event.target.value));
            console.log(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { className: "check-out", onClick: this.handleCheckoutClick },
                    this.checkout[this.state.checkoutStatus]
                ),
                this.state.checkoutStatus === 0 && React.createElement(
                    "div",
                    null,
                    "Ready to checkout?"
                ) || this.state.checkoutStatus === 1 && React.createElement(Form1, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 2 && React.createElement(Form2, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 3 && React.createElement(Form3, { handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }) || this.state.checkoutStatus === 4 && React.createElement(
                    "div",
                    null,
                    "Thank You!",
                    React.createElement("br", null),
                    "Order is set."
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm0xIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZUZvcm1DaGFuZ2UiLCJoYW5kbGVCYWNrd2FyZENsaWNrIiwiaGFuZGxlQ2hlY2tvdXRDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybTIiLCJGb3JtMyIsIkFwcCIsImNoZWNrb3V0U3RhdHVzIiwiY2hlY2tvdXQiLCJiaW5kIiwiY2hlY2tvdXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhLEVBQWI7O0FBR0E7QUFMZTtBQU1sQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBTSxRQUFPLE9BQWIsRUFBcUIsUUFBTyxNQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUVTLHVEQUZUO0FBR0ksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssVUFBeEIsRUFBbUMsYUFBWSxvQkFBL0MsRUFBb0UsVUFBVSxLQUFLRCxLQUFMLENBQVdFLGdCQUF6RixHQUhKO0FBR2lILHVEQUhqSDtBQUFBO0FBSVUsdURBSlY7QUFLSSx1REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxhQUFZLHFCQUE3QyxFQUFtRSxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQXhGLEdBTEo7QUFLZ0gsdURBTGhIO0FBQUE7QUFNYSx1REFOYjtBQU9JLHVEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLGFBQVksZ0JBQW5ELEVBQW9FLFVBQVUsS0FBS0YsS0FBTCxDQUFXRSxnQkFBekYsR0FQSjtBQU9pSCx1REFQakg7QUFRSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLRixLQUFMLENBQVdHLG1CQUE1QjtBQUFBO0FBQUEseUJBUko7QUFTSSx1REFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxNQUEzQixFQUFrQyxTQUFTLEtBQUtILEtBQUwsQ0FBV0ksbUJBQXREO0FBVEo7QUFESjtBQURKLGFBREo7QUFpQkg7Ozs7RUEzQmVDLE1BQU1DLFM7O0lBK0JwQkMsSzs7O0FBQ0YsbUJBQVlQLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDVEEsS0FEUzs7QUFFZixlQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFHQTtBQUxlO0FBTWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFNLFFBQU8sT0FBYixFQUFxQixRQUFPLE1BQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUFBO0FBRVksdURBRlo7QUFBQTtBQUlJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGtCQUF4QixFQUEyQyxhQUFZLGdCQUF2RCxFQUF3RSxVQUFVLEtBQUtELEtBQUwsQ0FBV0UsZ0JBQTdGLEdBSko7QUFJcUgsdURBSnJIO0FBQUE7QUFNSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxrQkFBeEIsRUFBMkMsYUFBWSxnQkFBdkQsRUFBd0UsVUFBVSxLQUFLRixLQUFMLENBQVdFLGdCQUE3RixHQU5KO0FBTXFILHVEQU5ySDtBQUFBO0FBUUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxNQUEzQyxFQUFrRCxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQXZFLEdBUko7QUFBQTtBQVVJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLGFBQVksT0FBNUMsRUFBb0QsU0FBUSxhQUE1RCxFQUEwRSxPQUFNLHVCQUFoRixFQUF3RyxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQTdILEdBVko7QUFBQTtBQVlJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFVBQXhCLEVBQW1DLFNBQVEsVUFBM0MsRUFBc0QsYUFBWSxVQUFsRSxFQUE2RSxPQUFNLHFCQUFuRixFQUF5RyxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQTlILEdBWko7QUFZc0osdURBWnRKO0FBQUE7QUFjSSx1REFBTyxNQUFLLEtBQVosRUFBa0IsTUFBSyxRQUF2QixFQUFnQyxhQUFZLGtCQUE1QyxFQUErRCxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQXBGLEdBZEo7QUFjNEcsdURBZDVHO0FBZUk7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0YsS0FBTCxDQUFXRyxtQkFBNUI7QUFBQTtBQUFBLHlCQWZKO0FBZ0JJLHVEQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLE1BQTNCLEVBQWtDLFNBQVMsS0FBS0gsS0FBTCxDQUFXSSxtQkFBdEQ7QUFoQko7QUFESjtBQURKLGFBREo7QUF3Qkg7Ozs7RUFsQ2VDLE1BQU1DLFM7O0lBc0NwQkUsSzs7O0FBQ0YsbUJBQVlSLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDVEEsS0FEUzs7QUFFZixlQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFHQTtBQUxlO0FBTWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLHNCQUFNLFFBQU8sT0FBYixFQUFxQixRQUFPLE1BQTVCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUFBO0FBRWdCLHVEQUZoQjtBQUFBO0FBSUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssZ0JBQXhCLEVBQXlDLGFBQVksZ0JBQXJELEVBQXNFLFVBQVUsS0FBS0QsS0FBTCxDQUFXRSxnQkFBM0YsR0FKSjtBQUltSCx1REFKbkg7QUFBQTtBQU1JLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLGFBQXhCLEVBQXNDLFNBQVEsVUFBOUMsRUFBeUQsYUFBWSxRQUFyRSxFQUE4RSxPQUFNLDBCQUFwRixFQUErRyxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQXBJLEdBTko7QUFBQTtBQVFJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLFNBQVEsVUFBdEMsRUFBaUQsYUFBWSxLQUE3RCxFQUFtRSxPQUFNLGlCQUF6RSxFQUEyRixVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQWhILEdBUko7QUFRd0ksdURBUnhJO0FBQUE7QUFVSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxrQkFBeEIsRUFBMkMsU0FBUSxVQUFuRCxFQUE4RCxhQUFZLGtCQUExRSxFQUE2RixPQUFNLHFCQUFuRyxFQUF5SCxVQUFVLEtBQUtGLEtBQUwsQ0FBV0UsZ0JBQTlJLEdBVko7QUFVc0ssdURBVnRLO0FBV0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0YsS0FBTCxDQUFXRyxtQkFBNUI7QUFBQTtBQUFBLHlCQVhKO0FBWUksdURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sVUFBM0IsRUFBc0MsU0FBUyxLQUFLSCxLQUFMLENBQVdJLG1CQUExRDtBQVpKO0FBREo7QUFESixhQURKO0FBb0JIOzs7O0VBOUJlQyxNQUFNQyxTOztJQWtDcEJHLEc7OztBQUNGLGlCQUFZVCxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsK0dBQ1JBLEtBRFE7O0FBRWQsZUFBS0MsS0FBTCxHQUFhO0FBQ1RTLDRCQUFnQjtBQURQLFNBQWI7O0FBSUEsZUFBS0MsUUFBTCxHQUFnQjtBQUNaLGVBQUcsVUFEUztBQUVaLGVBQUcsTUFGUztBQUdaLGVBQUcsTUFIUztBQUlaLGVBQUcsVUFKUztBQUtaLGVBQUc7QUFMUyxTQUFoQjs7QUFRQSxlQUFLUCxtQkFBTCxHQUEyQixPQUFLQSxtQkFBTCxDQUF5QlEsSUFBekIsUUFBM0I7QUFDQSxlQUFLVCxtQkFBTCxHQUEyQixPQUFLQSxtQkFBTCxDQUF5QlMsSUFBekIsUUFBM0I7QUFDQSxlQUFLVixnQkFBTCxHQUF3QixPQUFLQSxnQkFBTCxDQUFzQlUsSUFBdEIsUUFBeEI7O0FBRUEsZUFBS0MsWUFBTCxHQUFvQjtBQUNoQixlQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYTtBQUVoQixlQUFHLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsT0FBS1gsZ0JBQTlCLEVBQWdELHFCQUFxQixPQUFLRSxtQkFBMUUsR0FGYTtBQUdoQixlQUFHLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsT0FBS0YsZ0JBQTlCLEVBQWdELHFCQUFxQixPQUFLRSxtQkFBMUUsR0FIYTtBQUloQixlQUFHLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsT0FBS0YsZ0JBQTlCLEVBQWdELHFCQUFxQixPQUFLRSxtQkFBMUUsR0FKYTtBQUtoQixlQUFHO0FBQUE7QUFBQTtBQUFBO0FBQWUsK0NBQWY7QUFBQTtBQUFBO0FBTGEsU0FBcEI7O0FBbEJjO0FBMEJqQjs7Ozs0Q0FFbUJVLEssRUFBTTs7QUFFdEJBLGtCQUFNQyxjQUFOO0FBQ0EsZ0JBQUksS0FBS2QsS0FBTCxDQUFXUyxjQUFYLElBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLHFCQUFLTSxRQUFMLENBQWM7QUFDVk4sb0NBQWdCLEtBQUtULEtBQUwsQ0FBV1MsY0FBWCxHQUE0QjtBQURsQyxpQkFBZDtBQUdILGFBSkQsTUFJTztBQUNILHFCQUFLTSxRQUFMLENBQWM7QUFDVk4sb0NBQWdCO0FBRE4saUJBQWQ7QUFHSDtBQUVKOzs7NENBRW1CSSxLLEVBQU07QUFDdEJBLGtCQUFNQyxjQUFOO0FBQ0EsZ0JBQUksS0FBS2QsS0FBTCxDQUFXUyxjQUFYLElBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLHFCQUFLTSxRQUFMLENBQWM7QUFDVk4sb0NBQWdCLEtBQUtULEtBQUwsQ0FBV1MsY0FBWCxHQUE0QjtBQURsQyxpQkFBZDtBQUdIO0FBRUo7Ozt5Q0FFZ0JJLEssRUFBTTtBQUNuQixpQkFBS0UsUUFBTCxxQkFDS0YsTUFBTUcsTUFBTixDQUFhQyxJQURsQixFQUN5QkosTUFBTUcsTUFBTixDQUFhRSxLQUR0QztBQUdBQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtwQixLQUFqQjtBQUNIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTLEtBQUtHLG1CQUE1QztBQUFrRSx5QkFBS08sUUFBTCxDQUFjLEtBQUtWLEtBQUwsQ0FBV1MsY0FBekI7QUFBbEUsaUJBREo7QUFFTSxxQkFBS1QsS0FBTCxDQUFXUyxjQUFYLEtBQThCLENBQS9CLElBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXRDLElBQ0EsS0FBS1QsS0FBTCxDQUFXUyxjQUFYLEtBQThCLENBQS9CLElBQXNDLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsS0FBS1IsZ0JBQTlCLEVBQWdELHFCQUFxQixLQUFLRSxtQkFBMUUsRUFBK0YscUJBQXFCLEtBQUtELG1CQUF6SCxHQURyQyxJQUVBLEtBQUtGLEtBQUwsQ0FBV1MsY0FBWCxLQUE4QixDQUEvQixJQUFzQyxvQkFBQyxLQUFELElBQU8sa0JBQWtCLEtBQUtSLGdCQUE5QixFQUFnRCxxQkFBcUIsS0FBS0UsbUJBQTFFLEVBQStGLHFCQUFxQixLQUFLRCxtQkFBekgsR0FGckMsSUFHQSxLQUFLRixLQUFMLENBQVdTLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0Msb0JBQUMsS0FBRCxJQUFPLGtCQUFrQixLQUFLUixnQkFBOUIsRUFBZ0QscUJBQXFCLEtBQUtFLG1CQUExRSxFQUErRixxQkFBcUIsS0FBS0QsbUJBQXpILEdBSHJDLElBSUEsS0FBS0YsS0FBTCxDQUFXUyxjQUFYLEtBQThCLENBQS9CLElBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQWUsbURBQWY7QUFBQTtBQUFBO0FBTjFDLGFBREo7QUFVSDs7OztFQXhFYUwsTUFBTUMsUzs7QUE0RXhCZ0IsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm0xIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2Zvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q3JlYXRlIEFjY291bnQ6PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIklucHV0IEFjY291bnQgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBFbWFpbCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIklucHV0IFBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNoaXBtZW50IEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldC1hZGRyZXNzLTFcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0cmVldC1hZGRyZXNzLTJcIiBwbGFjZWhvbGRlcj1cIlN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIHBhdHRlcm49XCJbQS1aYS16XXsyfVwiIHRpdGxlPVwiVHdvIExldHRlciBTdGF0ZSBDb2RlXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFppcCBjb2RlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcC1jb2RlXCIgcGF0dGVybj1cIlswLTldezV9XCIgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInRlbC1ub1wiIHBsYWNlaG9sZGVyPVwiVGVsZXBob25lIE51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSA9IHRoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5CaWxsaW5nIEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlZGl0IENhcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjcmVkaXQtY2FyZC1ub1wiIHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBpcnkgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBpcnktZGF0ZVwiIHBhdHRlcm49XCJbMC05XXs2fVwiIHBsYWNlaG9sZGVyPVwiTU1ZWVlZXCIgdGl0bGU9XCJTaXggRGlnaXQgTW9udGggYW5kIFllYXJcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ1ZWOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN2dlwiIHBhdHRlcm49XCJbMC05XXszfVwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgdGl0bGU9XCJUaHJlZSBEaWdpdCBDVlZcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBCaWxsaW5nIFppcCBjb2RlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGxpbmctemlwLWNvZGVcIiBwYXR0ZXJuPVwiWzAtOV17NX1cIiBwbGFjZWhvbGRlcj1cIkJpbGxpbmcgWmlwIENvZGVcIiB0aXRsZT1cIkZpdmUgRGlnaXQgWmlwIENvZGVcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQdXJjaGFzZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGVja291dCA9IHtcbiAgICAgICAgICAgIDA6ICdDaGVja291dCcsXG4gICAgICAgICAgICAxOiAnTmV4dCcsXG4gICAgICAgICAgICAyOiAnTmV4dCcsXG4gICAgICAgICAgICAzOiAnUHVyY2hhc2UnLFxuICAgICAgICAgICAgNDogJ1Jlc2V0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2sgPSB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jaGVja291dEZvcm0gPSB7XG4gICAgICAgICAgICAwOiA8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PixcbiAgICAgICAgICAgIDE6IDxGb3JtMSBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICAyOiA8Rm9ybTIgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgMzogPEZvcm0zIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDQ6IDxkaXY+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0LjwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUNoZWNrb3V0Q2xpY2soZXZlbnQpe1xuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPD0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgKyAxXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQmFja3dhcmRDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzIC0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2hlY2stb3V0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfT57dGhpcy5jaGVja291dFt0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzXX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDApICYmICg8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMSkgJiYgKDxGb3JtMSBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMikgJiYgKDxGb3JtMiBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gMykgJiYgKDxGb3JtMyBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gaGFuZGxlQmFja3dhcmRDbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrfSAvPikgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA9PT0gNCkgJiYgKDxkaXY+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0LjwvZGl2Pil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=