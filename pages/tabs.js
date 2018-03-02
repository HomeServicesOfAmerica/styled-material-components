import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, TabsContainer, TabNavigationContainer } from '../src/index';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import Button from '../src/components/Button';

// TODO: animations (inkbar && ripple)
// TODO: accept icon as option with or instead of text label
// TODO: (future) scrollable tabs

class ControlledTabs extends React.Component {
  state = {
    selectedIndex: 0,
  };

  handleTabClick = ({ selectedIndex }) => {
    this.setState({ selectedIndex });
  }

  handleButtonClick = () => {
    this.setState(({ selectedIndex }) => {
      if (selectedIndex > 1) return { selectedIndex: 0 };
      return { selectedIndex: selectedIndex + 1 };
    })
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleButtonClick}>
          Click me to change the tab!
        </Button>
        <Tabs selectedIndex={this.state.selectedIndex} onChange={this.handleTabClick}>
          <Tab label='Tab One'>
            First tab content is great
          </Tab>
          <Tab label='Tab Two'>
            Tab two has content as well
          </Tab>
          <Tab label='Tab Three'>
            Totally tabular
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

// This won't work with Tabs.extend, so need to create a new styled-component
const WithStyledTabContainer = styled.div`
  ${TabsContainer} {
    background-color: yellow;
  }

  ${TabNavigationContainer} {
    background-color: orange;
  }
`

const TabsPage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Tabs</h1>
      <h2>Fixed Tabs Default</h2>
      <p>
        By default the fixed tabs will take an equal width percent of their parent container and
        use the theme styles.
      </p>
      <Tabs>
        <Tab label='Tab One'>
          First tab content is great
        </Tab>
        <Tab label='Tab Two'>
          Tab two has content as well
        </Tab>
        <Tab label='Tab Three'>
          Totally tabular
        </Tab>
      </Tabs>
      <br />
      <br />
      <h2>Fixed Tabs Custom Styles</h2>
      <p>
        Tabs can accept props for:
      </p>
      <ul>
        <li>activeBackgroundColor - hexa or rgb string</li>
        <li>passiveBackgroundColor - hexa or rgb string</li>
        <li>activeFontColor - hexa or rgb string</li>
        <li>passiveFontColor - hexa or rgb string</li>
        <li>showInkbar - default is true, boolean</li>
        <li>inkbarColor - default is accent theme color, or prop passed as a hexa or rgb string</li>
        <li>
          {`onChange - optional callback to be called when a new tab is selected
          It will return an object of the form { selectedIndex, label }`}
        </li>
      </ul>
      <Tabs
        width='130'
        activeBackgroundColor='#b5211e'
        passiveBackgroundColor='#df4340'
        activeFontColor='#fff'
        passiveFontColor='#c2c2c2'
        showInkbar={false}>
        <Tab label='Tab One'>
          First tab content is great
        </Tab>
        <Tab label='Tab Two'>
          Tab two has content as well
        </Tab>
        <Tab label='Tab Three'>
          Totally tabular
        </Tab>
      </Tabs>
      <h2>With subcomponents styled</h2>
      <WithStyledTabContainer>
        <Tabs
          width='130'
          activeBackgroundColor='#b5211e'
          passiveBackgroundColor='#df4340'
          activeFontColor='#fff'
          passiveFontColor='#c2c2c2'
          showInkbar={false}>
          <Tab label='Tab One'>
            First tab content is great
          </Tab>
          <Tab label='Tab Two'>
            Tab two has content as well
          </Tab>
          <Tab label='Tab Three'>
            Totally tabular
          </Tab>
        </Tabs>
      </WithStyledTabContainer>
      <h2>Controlled Tabs</h2>
      <ControlledTabs />
    </div>
  </MaterialThemeProvider>
);

export default TabsPage;
