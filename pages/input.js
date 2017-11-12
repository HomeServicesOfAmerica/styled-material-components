import React from 'react';
import styled from 'styled-components';
import Input from '../src/components/Input';
import withRipple from '../src/decorators/withRipple';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const isIntegerRgx = /^(\d+)$/;

const integerValidate = (value) => {
    return isIntegerRgx.test(value);
}

export default class InputsPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    onInputChange = (value) => {
        this.setState({ value });
    }


    render() {
        return (
            <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
                <div>
                    <div style={{ width: '200px' }}>
                        <Input
                            label="Number Input"
                            validate={integerValidate}
                            errMessage="Only numbers"
                            value={this.state.value}
                            onChange={this.onInputChange} />
                    </div>
                </div>
            </MaterialThemeProvider>
        )
    }
}
