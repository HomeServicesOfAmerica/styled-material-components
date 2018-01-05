import React from 'react';
import styled from 'styled-components';
import Button from '../src/components/Button';
import {
  Card,
  Primary,
  Title,
  Subtitle,
  SupportingText,
  Media,
  Actions,
  HorizontalBlock,
  MediaItem,
} from '../src/components/Card';
import { Avatar } from '../src/components/Avatar';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const DemoCard = Card.extend`
  max-width: 21.875rem;
  margin-bottom: 48px;

  @media(min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const CardsPage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Card</h1>
      <DemoCard>
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <SupportingText>
          Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </SupportingText>
      </DemoCard>
      <br />
      <DemoCard>
        <Primary
          avatar="https://i.pinimg.com/736x/a1/79/b0/a179b0e974b49846fb7283fdf178fd55--headshot-actor-acting-headshots.jpg"
          title="Title"
          subheader="Subhead"
        />
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <SupportingText>
          Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </SupportingText>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Primary
          avatar="https://i.pinimg.com/736x/a1/79/b0/a179b0e974b49846fb7283fdf178fd55--headshot-actor-acting-headshots.jpg"
          title="Title"
          subheader="Subhead"
        />
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <Actions vertical>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <Primary
          title="Title"
          subheader="Subhead"
        />
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Primary
          title="Title"
          subheader="Subhead"
        />
        <SupportingText>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
          risus varius blandit sit amet non magna.
        </SupportingText>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg">
          <Title large>Title</Title>
        </Media>
        <Actions>
          <Button compact>Action 1</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <Primary
            title="Title"
            subheader="Subhead"
            large
          />
          <MediaItem src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <Primary
            title="Title"
            subheader="Subhead"
            large
          />
          <MediaItem scale={1.5} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <Primary
            title="Title"
            subheader="Subhead"
            large
          />
          <MediaItem scale={2} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <MediaItem scale={3} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
          <Actions vertical>
            <Button compact>A1</Button>
            <Button compact>A2</Button>
          </Actions>
        </HorizontalBlock>
      </DemoCard>
    </div>
  </MaterialThemeProvider>
);

const StyledCardsPage = styled(CardsPage)`

`;

export default StyledCardsPage;
