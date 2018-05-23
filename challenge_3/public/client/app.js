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

            var subState = {};
            var emptyKey = void 0;
            if (this.sendFormFields[checkoutStatus]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImZpZWxkTmFtZXMiLCJlbXB0eVN0YXRlIiwicmVkdWNlIiwib2JqIiwia2V5IiwiRm9ybTEiLCJwcm9wcyIsInN0YXRlIiwiaGFuZGxlRm9ybUNoYW5nZSIsImhhbmRsZUJhY2t3YXJkQ2xpY2siLCJoYW5kbGVDaGVja291dENsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtMiIsIkZvcm0zIiwiQXBwIiwiY2hlY2tvdXRTdGF0dXMiLCJjaGVja291dCIsInNlbmRGb3JtRmllbGRzIiwic2xpY2UiLCJjaGVja291dEZvcm0iLCJiaW5kIiwic3ViU3RhdGUiLCJlbXB0eUtleSIsImZvckVhY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0U3ViU3RhdGUiLCJhbGVydCIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQUlBLGFBQWEsQ0FDYixVQURhLEVBRWIsT0FGYSxFQUdiLFVBSGEsRUFJYixrQkFKYSxFQUtiLGtCQUxhLEVBTWIsTUFOYSxFQU9iLE9BUGEsRUFRYixVQVJhLEVBU2IsUUFUYSxFQVViLGdCQVZhLEVBV2IsYUFYYSxFQVliLEtBWmEsRUFhYixrQkFiYSxDQUFqQjs7QUFnQkEsSUFBSUMsYUFBYUQsV0FBV0UsTUFBWCxDQUFrQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3Q0QsUUFBSUMsR0FBSixJQUFVLEVBQVY7QUFDQSxXQUFPRCxHQUFQO0FBQ0gsQ0FIZ0IsRUFHZCxFQUhjLENBQWpCOztBQU1BOztJQUNNRSxLOzs7QUFDRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUdBO0FBTGU7QUFNbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQU0sUUFBTyxPQUFiLEVBQXFCLFFBQU8sTUFBNUI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFFUyx1REFGVDtBQUdJLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFNUCxXQUFXLENBQVgsQ0FBekIsRUFBd0MsYUFBWSxvQkFBcEQsRUFBeUUsVUFBVSxLQUFLTSxLQUFMLENBQVdFLGdCQUE5RixHQUhKO0FBR3NILHVEQUh0SDtBQUFBO0FBSVUsdURBSlY7QUFLSSx1REFBTyxNQUFLLE9BQVosRUFBb0IsTUFBTVIsV0FBVyxDQUFYLENBQTFCLEVBQXlDLGFBQVkscUJBQXJELEVBQTJFLFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBaEcsR0FMSjtBQUt3SCx1REFMeEg7QUFBQTtBQU1hLHVEQU5iO0FBT0ksdURBQU8sTUFBSyxVQUFaLEVBQXVCLE1BQU1SLFdBQVcsQ0FBWCxDQUE3QixFQUE0QyxhQUFZLGdCQUF4RCxFQUF5RSxVQUFVLEtBQUtNLEtBQUwsQ0FBV0UsZ0JBQTlGLEdBUEo7QUFPc0gsdURBUHRIO0FBUUk7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0YsS0FBTCxDQUFXRyxtQkFBNUI7QUFBQTtBQUFBLHlCQVJKO0FBU0ksdURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsU0FBUyxLQUFLSCxLQUFMLENBQVdJLG1CQUF0RDtBQVRKO0FBREo7QUFESixhQURKO0FBaUJIOzs7O0VBM0JlQyxNQUFNQyxTOztJQStCcEJDLEs7OztBQUNGLG1CQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1RBLEtBRFM7O0FBRWYsZUFBS0MsS0FBTCxHQUFhLEVBQWI7O0FBR0E7QUFMZTtBQU1sQjs7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBTSxRQUFPLE9BQWIsRUFBcUIsUUFBTyxNQUE1QjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUVZLHVEQUZaO0FBQUE7QUFJSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBTVAsV0FBVyxDQUFYLENBQXpCLEVBQXdDLGFBQVksZ0JBQXBELEVBQXFFLFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBMUYsR0FKSjtBQUlrSCx1REFKbEg7QUFBQTtBQU1JLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFNUixXQUFXLENBQVgsQ0FBekIsRUFBd0MsYUFBWSxnQkFBcEQsRUFBcUUsVUFBVSxLQUFLTSxLQUFMLENBQVdFLGdCQUExRixHQU5KO0FBTWtILHVEQU5sSDtBQUFBO0FBUUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU1SLFdBQVcsQ0FBWCxDQUF6QixFQUF3QyxhQUFZLE1BQXBELEVBQTJELFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBaEYsR0FSSjtBQUFBO0FBVUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU1SLFdBQVcsQ0FBWCxDQUF6QixFQUF3QyxhQUFZLE9BQXBELEVBQTRELFNBQVEsYUFBcEUsRUFBa0YsT0FBTSx1QkFBeEYsRUFBZ0gsVUFBVSxLQUFLTSxLQUFMLENBQVdFLGdCQUFySSxHQVZKO0FBQUE7QUFZSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBTVIsV0FBVyxDQUFYLENBQXpCLEVBQXdDLFNBQVEsVUFBaEQsRUFBMkQsYUFBWSxVQUF2RSxFQUFrRixPQUFNLHFCQUF4RixFQUE4RyxVQUFVLEtBQUtNLEtBQUwsQ0FBV0UsZ0JBQW5JLEdBWko7QUFZMkosdURBWjNKO0FBQUE7QUFjSSx1REFBTyxNQUFLLEtBQVosRUFBa0IsTUFBTVIsV0FBVyxDQUFYLENBQXhCLEVBQXVDLGFBQVksa0JBQW5ELEVBQXNFLFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBM0YsR0FkSjtBQWNtSCx1REFkbkg7QUFlSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLRixLQUFMLENBQVdHLG1CQUE1QjtBQUFBO0FBQUEseUJBZko7QUFnQkksdURBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sTUFBM0IsRUFBa0MsU0FBUyxLQUFLSCxLQUFMLENBQVdJLG1CQUF0RDtBQWhCSjtBQURKO0FBREosYUFESjtBQXdCSDs7OztFQWxDZUMsTUFBTUMsUzs7SUFzQ3BCRSxLOzs7QUFDRixtQkFBWVIsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNUQSxLQURTOztBQUVmLGVBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUdBO0FBTGU7QUFNbEI7Ozs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQU0sUUFBTyxPQUFiLEVBQXFCLFFBQU8sTUFBNUI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFFZ0IsdURBRmhCO0FBQUE7QUFJSSx1REFBTyxNQUFLLE1BQVosRUFBbUIsTUFBTVAsV0FBVyxDQUFYLENBQXpCLEVBQXdDLGFBQVksZ0JBQXBELEVBQXFFLFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBMUYsR0FKSjtBQUlrSCx1REFKbEg7QUFBQTtBQU1JLHVEQUFPLE1BQUssTUFBWixFQUFtQixNQUFNUixXQUFXLEVBQVgsQ0FBekIsRUFBeUMsU0FBUSxVQUFqRCxFQUE0RCxhQUFZLFFBQXhFLEVBQWlGLE9BQU0sMEJBQXZGLEVBQWtILFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBdkksR0FOSjtBQUFBO0FBUUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU1SLFdBQVcsRUFBWCxDQUF6QixFQUF5QyxTQUFRLFVBQWpELEVBQTRELGFBQVksS0FBeEUsRUFBOEUsT0FBTSxpQkFBcEYsRUFBc0csVUFBVSxLQUFLTSxLQUFMLENBQVdFLGdCQUEzSCxHQVJKO0FBUW1KLHVEQVJuSjtBQUFBO0FBVUksdURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQU1SLFdBQVcsRUFBWCxDQUF6QixFQUF5QyxTQUFRLFVBQWpELEVBQTRELGFBQVksa0JBQXhFLEVBQTJGLE9BQU0scUJBQWpHLEVBQXVILFVBQVUsS0FBS00sS0FBTCxDQUFXRSxnQkFBNUksR0FWSjtBQVVvSyx1REFWcEs7QUFXSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLRixLQUFMLENBQVdHLG1CQUE1QjtBQUFBO0FBQUEseUJBWEo7QUFZSSx1REFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxVQUEzQixFQUFzQyxTQUFTLEtBQUtILEtBQUwsQ0FBV0ksbUJBQTFEO0FBWko7QUFESjtBQURKLGFBREo7QUFvQkg7Ozs7RUE5QmVDLE1BQU1DLFM7O0lBa0NwQkcsRzs7O0FBQ0YsaUJBQVlULEtBQVosRUFBa0I7QUFBQTs7QUFBQSwrR0FDUkEsS0FEUTs7QUFFZCxlQUFLQyxLQUFMLEdBQWE7QUFDVFMsNEJBQWdCO0FBRFAsU0FBYjs7QUFJQSxlQUFLQyxRQUFMLEdBQWdCO0FBQ1osZUFBRyxVQURTO0FBRVosZUFBRyxNQUZTO0FBR1osZUFBRyxNQUhTO0FBSVosZUFBRyxVQUpTO0FBS1osZUFBRztBQUxTLFNBQWhCOztBQVFBLGVBQUtDLGNBQUwsR0FBcUI7QUFDakIsZUFBR2xCLFdBQVdtQixLQUFYLENBQWlCLENBQWpCLEVBQW1CLENBQW5CLENBRGM7QUFFakIsZUFBR25CLFdBQVdtQixLQUFYLENBQWlCLENBQWpCLEVBQW1CLENBQW5CLENBRmM7QUFHakIsZUFBR25CLFdBQVdtQixLQUFYLENBQWlCLEVBQWpCLEVBQW9CLEVBQXBCO0FBSGMsU0FBckI7O0FBTUEsZUFBS0MsWUFBTCxHQUFvQjtBQUNoQixlQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYTtBQUVoQixlQUFHLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsT0FBS1osZ0JBQTlCLEVBQWdELHFCQUFxQixPQUFLRSxtQkFBMUUsR0FGYTtBQUdoQixlQUFHLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsT0FBS0YsZ0JBQTlCLEVBQWdELHFCQUFxQixPQUFLRSxtQkFBMUUsR0FIYTtBQUloQixlQUFHLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsT0FBS0YsZ0JBQTlCLEVBQWdELHFCQUFxQixPQUFLRSxtQkFBMUUsR0FKYTtBQUtoQixlQUFHO0FBQUE7QUFBQTtBQUFBO0FBQWUsK0NBQWY7QUFBQTtBQUFBO0FBTGEsU0FBcEI7O0FBUUEsZUFBS0EsbUJBQUwsR0FBMkIsT0FBS0EsbUJBQUwsQ0FBeUJXLElBQXpCLFFBQTNCO0FBQ0EsZUFBS1osbUJBQUwsR0FBMkIsT0FBS0EsbUJBQUwsQ0FBeUJZLElBQXpCLFFBQTNCO0FBQ0EsZUFBS2IsZ0JBQUwsR0FBd0IsT0FBS0EsZ0JBQUwsQ0FBc0JhLElBQXRCLFFBQXhCO0FBOUJjO0FBK0JqQjs7OztvQ0FFV0wsYyxFQUFlO0FBQUE7O0FBQ3ZCLGdCQUFJTSxXQUFXLEVBQWY7QUFDQSxnQkFBSUMsaUJBQUo7QUFDQSxnQkFBSSxLQUFLTCxjQUFMLENBQW9CRixjQUFwQixDQUFKLEVBQXlDO0FBQ3JDLHFCQUFLRSxjQUFMLENBQW9CRixjQUFwQixFQUFvQ1EsT0FBcEMsQ0FBNEMsVUFBQ3BCLEdBQUQsRUFBUztBQUNqRGtCLDZCQUFTbEIsR0FBVCxJQUFnQixPQUFLRyxLQUFMLENBQVdILEdBQVgsQ0FBaEI7QUFDQSx3QkFBSUEsUUFBUUosV0FBVyxDQUFYLENBQVosRUFBMkI7QUFDdkJzQixpQ0FBU2xCLEdBQVQsS0FBaUJtQixRQUFqQixLQUE4QkEsV0FBV25CLEdBQXpDO0FBQ0g7QUFDSixpQkFMRDtBQU1IO0FBQ0QsbUJBQU8sQ0FBQ2tCLFFBQUQsRUFBV0MsUUFBWCxDQUFQO0FBQ0g7Ozs0Q0FFbUJFLEssRUFBTTtBQUN0QkEsa0JBQU1DLGNBQU47QUFDQSxnQkFBSUosaUJBQUo7QUFBQSxnQkFBY0MsaUJBQWQ7O0FBRnNCLCtCQUdDLEtBQUtJLFdBQUwsQ0FBaUIsS0FBS3BCLEtBQUwsQ0FBV1MsY0FBNUIsQ0FIRDs7QUFBQTs7QUFHckJNLG9CQUhxQjtBQUdYQyxvQkFIVzs7QUFJdEIsZ0JBQUlBLFFBQUosRUFBYztBQUNWSyxzQkFBU0wsUUFBVDtBQUNBO0FBQ0g7O0FBRUQsaUJBQUtNLFFBQUwsQ0FBYzVCLFVBQWQ7QUFDQSxnQkFBSSxLQUFLTSxLQUFMLENBQVdTLGNBQVgsSUFBNkIsQ0FBakMsRUFBb0M7QUFDaEMscUJBQUthLFFBQUwsQ0FBYztBQUNWYixvQ0FBZ0IsS0FBS1QsS0FBTCxDQUFXUyxjQUFYLEdBQTRCO0FBRGxDLGlCQUFkO0FBR0gsYUFKRCxNQUlPO0FBQ0gscUJBQUthLFFBQUwsQ0FBYztBQUNWYixvQ0FBZ0I7QUFETixpQkFBZDtBQUdIO0FBRUo7Ozs0Q0FFbUJTLEssRUFBTTtBQUN0QkEsa0JBQU1DLGNBQU47QUFDQSxnQkFBSSxLQUFLbkIsS0FBTCxDQUFXUyxjQUFYLElBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLHFCQUFLYSxRQUFMLENBQWM7QUFDVmIsb0NBQWdCLEtBQUtULEtBQUwsQ0FBV1MsY0FBWCxHQUE0QjtBQURsQyxpQkFBZDtBQUdIO0FBRUo7Ozt5Q0FFZ0JTLEssRUFBTTtBQUNuQixpQkFBS0ksUUFBTCxxQkFDS0osTUFBTUssTUFBTixDQUFhQyxJQURsQixFQUN5Qk4sTUFBTUssTUFBTixDQUFhRSxLQUR0QztBQUdIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTLEtBQUt0QixtQkFBNUM7QUFBa0UseUJBQUtPLFFBQUwsQ0FBYyxLQUFLVixLQUFMLENBQVdTLGNBQXpCO0FBQWxFLGlCQURKO0FBRU0scUJBQUtULEtBQUwsQ0FBV1MsY0FBWCxLQUE4QixDQUEvQixJQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF0QyxJQUNBLEtBQUtULEtBQUwsQ0FBV1MsY0FBWCxLQUE4QixDQUEvQixJQUFzQyxvQkFBQyxLQUFELElBQU8sa0JBQWtCLEtBQUtSLGdCQUE5QixFQUFnRCxxQkFBcUIsS0FBS0UsbUJBQTFFLEVBQStGLHFCQUFxQixLQUFLRCxtQkFBekgsR0FEckMsSUFFQSxLQUFLRixLQUFMLENBQVdTLGNBQVgsS0FBOEIsQ0FBL0IsSUFBc0Msb0JBQUMsS0FBRCxJQUFPLGtCQUFrQixLQUFLUixnQkFBOUIsRUFBZ0QscUJBQXFCLEtBQUtFLG1CQUExRSxFQUErRixxQkFBcUIsS0FBS0QsbUJBQXpILEdBRnJDLElBR0EsS0FBS0YsS0FBTCxDQUFXUyxjQUFYLEtBQThCLENBQS9CLElBQXNDLG9CQUFDLEtBQUQsSUFBTyxrQkFBa0IsS0FBS1IsZ0JBQTlCLEVBQWdELHFCQUFxQixLQUFLRSxtQkFBMUUsRUFBK0YscUJBQXFCLEtBQUtELG1CQUF6SCxHQUhyQyxJQUlBLEtBQUtGLEtBQUwsQ0FBV1MsY0FBWCxLQUE4QixDQUEvQixJQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFlLG1EQUFmO0FBQUE7QUFBQTtBQU4xQyxhQURKO0FBVUg7Ozs7RUFqR2FMLE1BQU1DLFM7O0FBcUd4Qjs7O0FBQ0FxQixTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9zZXR0aW5nIGdsb2JhbCB2YXJpYWJsZXMgYW5kIE1ldGhvZHNcblxubGV0IGZpZWxkTmFtZXMgPSBbXG4gICAgJ3VzZXJuYW1lJywgXG4gICAgJ2VtYWlsJywgXG4gICAgJ3Bhc3N3b3JkJywgXG4gICAgJ3N0cmVldC1hZGRyZXNzLTEnLCBcbiAgICAnc3RyZWV0LWFkZHJlc3MtMicsIFxuICAgICdjaXR5JywgXG4gICAgJ3N0YXRlJyxcbiAgICAnemlwLWNvZGUnLFxuICAgICd0ZWwtbm8nLFxuICAgICdjcmVkaXQtY2FyZC1ubycsXG4gICAgJ2V4cGlyeS1kYXRlJyxcbiAgICAnY3Z2JyxcbiAgICAnYmlsbGluZy16aXAtY29kZSdcbl0gXG5cbmxldCBlbXB0eVN0YXRlID0gZmllbGROYW1lcy5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgb2JqW2tleV0gPScnXG4gICAgcmV0dXJuIG9iajtcbn0sIHt9KVxuXG5cbi8vY3JlYXRpbmcgUmVhY3QgQ29tcG9uZW50czpcbmNsYXNzIEZvcm0xIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2Zvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q3JlYXRlIEFjY291bnQ6PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtmaWVsZE5hbWVzWzBdfSBwbGFjZWhvbGRlcj1cIklucHV0IEFjY291bnQgTmFtZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT17ZmllbGROYW1lc1sxXX0gcGxhY2Vob2xkZXI9XCJJbnB1dCBFbWFpbCBBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPXtmaWVsZE5hbWVzWzJdfSBwbGFjZWhvbGRlcj1cIklucHV0IFBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNoaXBtZW50IEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1szXX0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmUgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbNF19IHBsYWNlaG9sZGVyPVwiU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBDaXR5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1s1XX0gcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1s2XX0gcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIHBhdHRlcm49XCJbQS1aYS16XXsyfVwiIHRpdGxlPVwiVHdvIExldHRlciBTdGF0ZSBDb2RlXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFppcCBjb2RlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1s3XX0gcGF0dGVybj1cIlswLTldezV9XCIgcGxhY2Vob2xkZXI9XCJaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT17ZmllbGROYW1lc1s4XX0gcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmUgTnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5jbGFzcyBGb3JtMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPkJpbGxpbmcgSW5mb3JtYXRpb246PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVkaXQgQ2FyZDo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1s5XX0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGlyeSBEYXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1sxMF19IHBhdHRlcm49XCJbMC05XXs2fVwiIHBsYWNlaG9sZGVyPVwiTU1ZWVlZXCIgdGl0bGU9XCJTaXggRGlnaXQgTW9udGggYW5kIFllYXJcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ1ZWOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1sxMV19IHBhdHRlcm49XCJbMC05XXszfVwiIHBsYWNlaG9sZGVyPVwiWFhYXCIgdGl0bGU9XCJUaHJlZSBEaWdpdCBDVlZcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSAvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBCaWxsaW5nIFppcCBjb2RlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1sxMl19IHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiQmlsbGluZyBaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlB1cmNoYXNlXCIgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGVja291dENsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjaGVja291dFN0YXR1czogMCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNoZWNrb3V0ID0ge1xuICAgICAgICAgICAgMDogJ0NoZWNrb3V0JyxcbiAgICAgICAgICAgIDE6ICdOZXh0JyxcbiAgICAgICAgICAgIDI6ICdOZXh0JyxcbiAgICAgICAgICAgIDM6ICdQdXJjaGFzZScsXG4gICAgICAgICAgICA0OiAnUmVzZXQnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZW5kRm9ybUZpZWxkcyA9e1xuICAgICAgICAgICAgMTogZmllbGROYW1lcy5zbGljZSgwLDMpLFxuICAgICAgICAgICAgMjogZmllbGROYW1lcy5zbGljZSgzLDkpLFxuICAgICAgICAgICAgMzogZmllbGROYW1lcy5zbGljZSgxMCwxMylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hlY2tvdXRGb3JtID0ge1xuICAgICAgICAgICAgMDogPGRpdj5SZWFkeSB0byBjaGVja291dD88L2Rpdj4sXG4gICAgICAgICAgICAxOiA8Rm9ybTEgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IC8+LFxuICAgICAgICAgICAgMjogPEZvcm0yIGhhbmRsZUZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX0gaGFuZGxlQ2hlY2tvdXRDbGljaz17dGhpcy5oYW5kbGVDaGVja291dENsaWNrfSAvPixcbiAgICAgICAgICAgIDM6IDxGb3JtMyBoYW5kbGVGb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9IGhhbmRsZUNoZWNrb3V0Q2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30gLz4sXG4gICAgICAgICAgICA0OiA8ZGl2PlRoYW5rIFlvdSE8YnIvPk9yZGVyIGlzIHNldC48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5oYW5kbGVDaGVja291dENsaWNrID0gdGhpcy5oYW5kbGVDaGVja291dENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQmFja3dhcmRDbGljayA9IHRoaXMuaGFuZGxlQmFja3dhcmRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRTdWJTdGF0ZShjaGVja291dFN0YXR1cyl7XG4gICAgICAgIGxldCBzdWJTdGF0ZSA9IHt9O1xuICAgICAgICBsZXQgZW1wdHlLZXk7XG4gICAgICAgIGlmICh0aGlzLnNlbmRGb3JtRmllbGRzW2NoZWNrb3V0U3RhdHVzXSkge1xuICAgICAgICAgICAgdGhpcy5zZW5kRm9ybUZpZWxkc1tjaGVja291dFN0YXR1c10uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc3ViU3RhdGVba2V5XSA9IHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBmaWVsZE5hbWVzWzRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YlN0YXRlW2tleV0gfHwgZW1wdHlLZXkgfHwgKGVtcHR5S2V5ID0ga2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbc3ViU3RhdGUsIGVtcHR5S2V5XTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGVja291dENsaWNrKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHN1YlN0YXRlLCBlbXB0eUtleTtcbiAgICAgICAgW3N1YlN0YXRlLCBlbXB0eUtleV0gPSB0aGlzLmdldFN1YlN0YXRlKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMpO1xuICAgICAgICBpZiAoZW1wdHlLZXkpIHtcbiAgICAgICAgICAgIGFsZXJ0KGAke2VtcHR5S2V5fSBpcyBub3Qgb3B0aW9uYWxgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZW1wdHlTdGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzIDw9IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzICsgMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhhbmRsZUJhY2t3YXJkQ2xpY2soZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyAtIDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybUNoYW5nZShldmVudCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoZWNrLW91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30+e3RoaXMuY2hlY2tvdXRbdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1c119PC9idXR0b24+XG4gICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAwKSAmJiAoPGRpdj5SZWFkeSB0byBjaGVja291dD88L2Rpdj4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDEpICYmICg8Rm9ybTEgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gLz4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDIpICYmICg8Rm9ybTIgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gLz4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDMpICYmICg8Rm9ybTMgaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gLz4pIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuY2hlY2tvdXRTdGF0dXMgPT09IDQpICYmICg8ZGl2PlRoYW5rIFlvdSE8YnIvPk9yZGVyIGlzIHNldC48L2Rpdj4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vUmVuZGVyIFJlYWN0IERPTSBlbGVtZW50c1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=