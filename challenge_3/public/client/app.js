'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var baseUrl = 'http://127.0.0.1:3000';
var formInputsUrl = baseUrl + '/form';

var postFormInputs = function postFormInputs(data) {
    return fetch(formInputsUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    });
};

//creating React Components:
var Form = function Form(props) {
    return React.createElement(
        'div',
        null,
        {
            0: React.createElement(
                'div',
                null,
                'Ready to checkout?'
            ),
            1: React.createElement(
                'form',
                { onSubmit: props.handleCheckoutClick },
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
                    React.createElement('input', { type: 'text', name: fieldNames[0], placeholder: 'Input Account Name', onChange: props.handleFormChange, value: props[fieldNames[0]], required: true }),
                    React.createElement('br', null),
                    'Email:',
                    React.createElement('br', null),
                    React.createElement('input', { type: 'email', name: fieldNames[1], placeholder: 'Input Email Address', onChange: props.handleFormChange, value: props[fieldNames[1]], required: true }),
                    React.createElement('br', null),
                    'Password:',
                    React.createElement('br', null),
                    React.createElement('input', { type: 'password', name: fieldNames[2], placeholder: 'Input Password', onChange: props.handleFormChange, value: props[fieldNames[2]], required: true }),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'submit', value: 'Next' }),
                    React.createElement(
                        'button',
                        { onClick: props.handleBackwardClick },
                        'Back'
                    )
                )
            ),
            2: React.createElement(
                'form',
                { onSubmit: props.handleCheckoutClick },
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
                    React.createElement('input', { type: 'text', name: fieldNames[3], placeholder: 'Street Address', onChange: props.handleFormChange, value: props[fieldNames[3]], required: true }),
                    React.createElement('br', null),
                    'Line 2:',
                    React.createElement('input', { type: 'text', name: fieldNames[4], placeholder: 'Street Address', onChange: props.handleFormChange, value: props[fieldNames[4]] }),
                    React.createElement('br', null),
                    'City:',
                    React.createElement('input', { type: 'text', name: fieldNames[5], placeholder: 'City', onChange: props.handleFormChange, value: props[fieldNames[5]], required: true }),
                    'State:',
                    React.createElement('input', { type: 'text', name: fieldNames[6], placeholder: 'State', pattern: '[A-Za-z]{2}', title: 'Two Letter State Code', onChange: props.handleFormChange, value: props[fieldNames[6]], required: true }),
                    'Zip code:',
                    React.createElement('input', { type: 'number', name: fieldNames[7], pattern: '[0-9]{5}', placeholder: 'Zip Code', title: 'Five Digit Zip Code', onChange: props.handleFormChange, value: props[fieldNames[7]], required: true }),
                    React.createElement('br', null),
                    'Phone Number:',
                    React.createElement('input', { type: 'tel', name: fieldNames[8], placeholder: 'Telephone Number', onChange: props.handleFormChange, value: props[fieldNames[8]], required: true }),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'submit', value: 'Next' }),
                    React.createElement(
                        'button',
                        { onClick: props.handleBackwardClick },
                        'Back'
                    )
                )
            ),
            3: React.createElement(
                'form',
                { onSubmit: props.handleCheckoutClick },
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
                    React.createElement('input', { type: 'number', name: fieldNames[9], placeholder: 'Credit Card Number', onChange: props.handleFormChange, value: props[fieldNames[9]], required: true }),
                    React.createElement('br', null),
                    'Expiry Date:',
                    React.createElement('input', { type: 'month', name: fieldNames[10], placeholder: 'YYYY-MM', title: 'Month and Year', onChange: props.handleFormChange, value: props[fieldNames[10]], required: true }),
                    'CVV:',
                    React.createElement('input', { type: 'number', name: fieldNames[11], pattern: '[0-9]{3}', placeholder: 'XXX', title: 'Three Digit CVV', onChange: props.handleFormChange, value: props[fieldNames[11]], required: true }),
                    React.createElement('br', null),
                    'Billing Zip code:',
                    React.createElement('input', { type: 'number', name: fieldNames[12], pattern: '[0-9]{5}', placeholder: 'Billing Zip Code', title: 'Five Digit Zip Code', onChange: props.handleFormChange, value: props[fieldNames[12]], required: true }),
                    React.createElement('br', null),
                    React.createElement('input', { type: 'submit', value: 'Purchase' }),
                    React.createElement(
                        'button',
                        { onClick: props.handleBackwardClick },
                        'Back'
                    )
                )
            ),
            4: React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'Thank You!',
                    React.createElement('br', null),
                    'Order is set:'
                ),
                React.createElement('br', null),
                React.createElement(
                    'table',
                    null,
                    React.createElement(
                        'tbody',
                        null,
                        fieldNames.map(function (key) {
                            if (props.data && props.data[key]) {
                                return React.createElement(
                                    'tr',
                                    { key: key },
                                    React.createElement(
                                        'td',
                                        null,
                                        key
                                    ),
                                    React.createElement(
                                        'td',
                                        null,
                                        props.data[key]
                                    )
                                );
                            }
                        })
                    )
                )
            ) }[props.checkoutStatus]
    );
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            checkoutStatus: 0,
            data: null
        };
        Object.assign(_this.state, emptyState);

        _this.checkout = {
            0: 'Checkout',
            1: 'Next',
            2: 'Next',
            3: 'Purchase',
            4: 'Reset'
        };

        _this.handleCheckoutClick = _this.handleCheckoutClick.bind(_this);
        _this.handleBackwardClick = _this.handleBackwardClick.bind(_this);
        _this.handleFormChange = _this.handleFormChange.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'handleCheckoutClick',
        value: function handleCheckoutClick(event) {
            var _this2 = this;

            event.preventDefault();
            if (this.state.checkoutStatus === 3) {
                var data = Object.assign({}, this.state);
                delete data.checkoutStatus;
                delete data.data;
                postFormInputs(data).then(function (response) {
                    _this2.setState({
                        data: response
                    });
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
            event.preventDefault();
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
                React.createElement(Form, _extends({ handleFormChange: this.handleFormChange, handleCheckoutClick: this.handleCheckoutClick, handleBackwardClick: this.handleBackwardClick }, this.state))
            );
        }
    }]);

    return App;
}(React.Component);

//Render React DOM elements


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbImZpZWxkTmFtZXMiLCJlbXB0eVN0YXRlIiwicmVkdWNlIiwib2JqIiwia2V5IiwiYmFzZVVybCIsImZvcm1JbnB1dHNVcmwiLCJwb3N0Rm9ybUlucHV0cyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiRm9ybSIsInByb3BzIiwiaGFuZGxlQ2hlY2tvdXRDbGljayIsImhhbmRsZUZvcm1DaGFuZ2UiLCJoYW5kbGVCYWNrd2FyZENsaWNrIiwibWFwIiwiY2hlY2tvdXRTdGF0dXMiLCJBcHAiLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImNoZWNrb3V0IiwiYmluZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsQ0FDZixVQURlLEVBRWYsT0FGZSxFQUdmLFVBSGUsRUFJZixrQkFKZSxFQUtmLGtCQUxlLEVBTWYsTUFOZSxFQU9mLE9BUGUsRUFRZixVQVJlLEVBU2YsUUFUZSxFQVVmLGdCQVZlLEVBV2YsYUFYZSxFQVlmLEtBWmUsRUFhZixrQkFiZSxDQUFuQjs7QUFpQkEsSUFBTUMsYUFBYUQsV0FBV0UsTUFBWCxDQUFrQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQ0QsUUFBSUMsR0FBSixJQUFVLEVBQVY7QUFDQSxXQUFPRCxHQUFQO0FBQ0gsQ0FIa0IsRUFHaEIsRUFIZ0IsQ0FBbkI7O0FBS0EsSUFBTUUsVUFBVSx1QkFBaEI7QUFDQSxJQUFNQyxnQkFBZ0JELFVBQVUsT0FBaEM7O0FB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Ozs7QUFDQUMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vc2V0dGluZyBnbG9iYWwgdmFyaWFibGVzIGFuZCBNZXRob2RzXG5cbmNvbnN0IGZpZWxkTmFtZXMgPSBbXG4gICAgJ3VzZXJuYW1lJywgXG4gICAgJ2VtYWlsJywgXG4gICAgJ3Bhc3N3b3JkJywgXG4gICAgJ3N0cmVldC1hZGRyZXNzLTEnLCBcbiAgICAnc3RyZWV0LWFkZHJlc3MtMicsIFxuICAgICdjaXR5JywgXG4gICAgJ3N0YXRlJyxcbiAgICAnemlwLWNvZGUnLFxuICAgICd0ZWwtbm8nLFxuICAgICdjcmVkaXQtY2FyZC1ubycsXG4gICAgJ2V4cGlyeS1kYXRlJyxcbiAgICAnY3Z2JyxcbiAgICAnYmlsbGluZy16aXAtY29kZSdcbl0gXG5cblxuY29uc3QgZW1wdHlTdGF0ZSA9IGZpZWxkTmFtZXMucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgIG9ialtrZXldID0nJ1xuICAgIHJldHVybiBvYmo7XG59LCB7fSlcblxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnXG5jb25zdCBmb3JtSW5wdXRzVXJsID0gYmFzZVVybCArICcvZm9ybSc7XG5cblxuY29uc3QgcG9zdEZvcm1JbnB1dHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIGZldGNoKGZvcm1JbnB1dHNVcmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuLy9jcmVhdGluZyBSZWFjdCBDb21wb25lbnRzOlxuY29uc3QgRm9ybSA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIHt7XG4gICAgICAgICAgICAwOiA8ZGl2PlJlYWR5IHRvIGNoZWNrb3V0PzwvZGl2PixcbiAgICAgICAgICAgIDE6IChcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+Q3JlYXRlIEFjY291bnQ6PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtmaWVsZE5hbWVzWzBdfSBwbGFjZWhvbGRlcj1cIklucHV0IEFjY291bnQgTmFtZVwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1swXV19IHJlcXVpcmVkLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPXtmaWVsZE5hbWVzWzFdfSBwbGFjZWhvbGRlcj1cIklucHV0IEVtYWlsIEFkZHJlc3NcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3Byb3BzW2ZpZWxkTmFtZXNbMV1dfSByZXF1aXJlZC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT17ZmllbGROYW1lc1syXX0gcGxhY2Vob2xkZXI9XCJJbnB1dCBQYXNzd29yZFwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1syXV19IHJlcXVpcmVkLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVCYWNrd2FyZENsaWNrfSA+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAyOiAoXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3Byb3BzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPlNoaXBtZW50IEluZm9ybWF0aW9uOjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczo8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1szXX0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1szXV19IHJlcXVpcmVkLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGluZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1s0XX0gcGxhY2Vob2xkZXI9XCJTdHJlZXQgQWRkcmVzc1wiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1s0XV19Lz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2l0eTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e2ZpZWxkTmFtZXNbNV19IHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1s1XV19IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lc1s2XX0gcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIHBhdHRlcm49XCJbQS1aYS16XXsyfVwiIHRpdGxlPVwiVHdvIExldHRlciBTdGF0ZSBDb2RlXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXtwcm9wc1tmaWVsZE5hbWVzWzZdXX0gcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgWmlwIGNvZGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9e2ZpZWxkTmFtZXNbN119IHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiWmlwIENvZGVcIiB0aXRsZT1cIkZpdmUgRGlnaXQgWmlwIENvZGVcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlRm9ybUNoYW5nZX0gdmFsdWU9e3Byb3BzW2ZpZWxkTmFtZXNbN11dfSByZXF1aXJlZC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT17ZmllbGROYW1lc1s4XX0gcGxhY2Vob2xkZXI9XCJUZWxlcGhvbmUgTnVtYmVyXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXtwcm9wc1tmaWVsZE5hbWVzWzhdXX0gcmVxdWlyZWQvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUJhY2t3YXJkQ2xpY2t9ID5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDM6IChcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlQ2hlY2tvdXRDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+QmlsbGluZyBJbmZvcm1hdGlvbjo8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWRpdCBDYXJkOjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9e2ZpZWxkTmFtZXNbOV19IHBsYWNlaG9sZGVyPVwiQ3JlZGl0IENhcmQgTnVtYmVyXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXtwcm9wc1tmaWVsZE5hbWVzWzldXX0gcmVxdWlyZWQvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBpcnkgRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibW9udGhcIiBuYW1lPXtmaWVsZE5hbWVzWzEwXX0gcGxhY2Vob2xkZXI9XCJZWVlZLU1NXCIgdGl0bGU9XCJNb250aCBhbmQgWWVhclwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1sxMF1dfSByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBDVlY6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9e2ZpZWxkTmFtZXNbMTFdfSBwYXR0ZXJuPVwiWzAtOV17M31cIiBwbGFjZWhvbGRlcj1cIlhYWFwiIHRpdGxlPVwiVGhyZWUgRGlnaXQgQ1ZWXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUZvcm1DaGFuZ2V9IHZhbHVlPXtwcm9wc1tmaWVsZE5hbWVzWzExXV19IHJlcXVpcmVkLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmlsbGluZyBaaXAgY29kZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT17ZmllbGROYW1lc1sxMl19IHBhdHRlcm49XCJbMC05XXs1fVwiIHBsYWNlaG9sZGVyPVwiQmlsbGluZyBaaXAgQ29kZVwiIHRpdGxlPVwiRml2ZSBEaWdpdCBaaXAgQ29kZVwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVGb3JtQ2hhbmdlfSB2YWx1ZT17cHJvcHNbZmllbGROYW1lc1sxMl1dfSByZXF1aXJlZC8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQdXJjaGFzZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlQmFja3dhcmRDbGlja30gPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgNDogKFxuICAgICAgICAgICAgPGRpdj48aDI+VGhhbmsgWW91ITxici8+T3JkZXIgaXMgc2V0OjwvaDI+PGJyLz5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZE5hbWVzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLmRhdGEgJiYgcHJvcHMuZGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPHRyIGtleT17a2V5fT48dGQ+e2tleX08L3RkPjx0ZD57cHJvcHMuZGF0YVtrZXldfTwvdGQ+PC90cj4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1bcHJvcHMuY2hlY2tvdXRTdGF0dXNdfVxuICAgIDwvZGl2PlxuKTtcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tvdXRTdGF0dXM6IDAsXG4gICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgZW1wdHlTdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5jaGVja291dCA9IHtcbiAgICAgICAgICAgIDA6ICdDaGVja291dCcsXG4gICAgICAgICAgICAxOiAnTmV4dCcsXG4gICAgICAgICAgICAyOiAnTmV4dCcsXG4gICAgICAgICAgICAzOiAnUHVyY2hhc2UnLFxuICAgICAgICAgICAgNDogJ1Jlc2V0J1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tvdXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2sgPSB0aGlzLmhhbmRsZUJhY2t3YXJkQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hlY2tvdXRDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID09PSAzKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpXG4gICAgICAgICAgICBkZWxldGUgZGF0YS5jaGVja291dFN0YXR1cztcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmRhdGE7XG4gICAgICAgICAgICBwb3N0Rm9ybUlucHV0cyhkYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyA8PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1cyArIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBjaGVja291dFN0YXR1czogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsXG4gICAgICAgICAgICB9LCBlbXB0eVN0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlQmFja3dhcmRDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNoZWNrb3V0U3RhdHVzOiB0aGlzLnN0YXRlLmNoZWNrb3V0U3RhdHVzIC0gMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybUNoYW5nZShldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoZWNrLW91dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tvdXRDbGlja30+e3RoaXMuY2hlY2tvdXRbdGhpcy5zdGF0ZS5jaGVja291dFN0YXR1c119PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPEZvcm0gaGFuZGxlRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfSBoYW5kbGVDaGVja291dENsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0Q2xpY2t9IGhhbmRsZUJhY2t3YXJkQ2xpY2s9e3RoaXMuaGFuZGxlQmFja3dhcmRDbGlja30gey4uLnRoaXMuc3RhdGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy9SZW5kZXIgUmVhY3QgRE9NIGVsZW1lbnRzXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==