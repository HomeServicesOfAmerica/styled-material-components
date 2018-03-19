import React from 'react';
import styled from 'styled-components';
import { TabBar, TabContent, Tab, Tabs, ThemeProvider, Icon } from '../src';

// TODO: (future) scrollable tabs

const Content = styled.div`
  padding: 24px;
`;

const PageContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  background-color: white;
  margin: 16px 0;
  padding: 24px;
  width: 700px;
`;

class ControlledTabs extends React.Component {
  state = {
    selectedIndex: 0,
  };

  handleTabClick = (event, selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    const { selectedIndex } = this.state;

    return (
      <React.Fragment>
        <Tabs fixed={this.props.fixed}>
          <TabBar onClick={this.handleTabClick} selectedIndex={selectedIndex}>
            <Tab Icon={this.props.showIcon ? <Icon icon="star" /> : null}>Tab One</Tab>
            <Tab Icon={this.props.showIcon ? <Icon icon="info_outline" /> : null}>Tab Two</Tab>
            <Tab Icon={this.props.showIcon ? <Icon icon="pin_drop" /> : null}>Tab Three</Tab>
          </TabBar>
          {selectedIndex === 0 && <TabContent>First tab content is great</TabContent>}
          {selectedIndex === 1 && <TabContent>Tab two has content as well</TabContent>}
          {selectedIndex === 2 && <TabContent>Totally tabular</TabContent>}
        </Tabs>
      </React.Fragment>
    );
  }
}

const TabsPage = () => (
  <ThemeProvider theme={{ primary: '#03A9F4' }}>
    <PageContainer>
      <Content>
        <h1>Tabs</h1>

        <h2>Default Tabs</h2>
        <Container>
          <ControlledTabs />
        </Container>

        <h2>Fixed Tabs</h2>
        <Container>
          <ControlledTabs fixed />
        </Container>

        <h2>Fixed Tabs with icons</h2>
        <Container>
          <ControlledTabs fixed showIcon />
        </Container>
      </Content>
    </PageContainer>
  </ThemeProvider>
);

export default TabsPage;
