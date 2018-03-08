import React from 'react';
import styled from 'styled-components';
import Button from '../src/components/Button';
import {
  ThemeProvider,
  Card,
  CardPrimary,
  CardTitle,
  CardSupportingText,
  CardMedia,
  CardActions,
  CardHorizontalBlock,
  CardMediaItem,
} from '../src';

const DemoCard = Card.extend`
  max-width: 21.875rem;
  margin-bottom: 48px;

  @media(min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const CardsPage = ({ className }) => (
  <ThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Card</h1>
      <h5>This card will elevate more on hover</h5>
      <DemoCard hover>
        <CardMedia wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <CardSupportingText>
          Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CardSupportingText>
      </DemoCard>
      <br />
      <DemoCard>
        <CardPrimary
          avatar="https://i.pinimg.com/736x/a1/79/b0/a179b0e974b49846fb7283fdf178fd55--headshot-actor-acting-headshots.jpg"
          title="Title"
          subheader="Subhead"
        />
        <CardMedia wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <CardSupportingText>
          Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CardSupportingText>
        <CardActions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardPrimary
          avatar="https://i.pinimg.com/736x/a1/79/b0/a179b0e974b49846fb7283fdf178fd55--headshot-actor-acting-headshots.jpg"
          title="Title"
          subheader="Subhead"
        />
        <CardMedia wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <CardActions vertical>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardMedia wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <CardPrimary
          title="Title"
          subheader="Subhead"
        />
        <CardActions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardPrimary
          title="Title"
          subheader="Subhead"
        />
        <CardSupportingText>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
          risus varius blandit sit amet non magna.
        </CardSupportingText>
        <CardActions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardMedia wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg">
          <CardTitle large>Title</CardTitle>
        </CardMedia>
        <CardActions>
          <Button compact>Action 1</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardHorizontalBlock>
          <CardPrimary
            title="Title"
            subheader="Subhead"
            large
          />
          <CardMediaItem src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
        </CardHorizontalBlock>
        <CardActions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardHorizontalBlock>
          <CardPrimary
            title="Title"
            subheader="Subhead"
            large
          />
          <CardMediaItem scale={1.5} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
        </CardHorizontalBlock>
        <CardActions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardHorizontalBlock>
          <CardPrimary
            title="Title"
            subheader="Subhead"
            large
          />
          <CardMediaItem scale={2} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
        </CardHorizontalBlock>
        <CardActions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </CardActions>
      </DemoCard>
      <DemoCard>
        <CardHorizontalBlock>
          <CardMediaItem scale={3} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg" />
          <CardActions vertical>
            <Button compact>A1</Button>
            <Button compact>A2</Button>
          </CardActions>
        </CardHorizontalBlock>
      </DemoCard>
    </div>
  </ThemeProvider>
);

const StyledCardsPage = styled(CardsPage)`

`;

export default StyledCardsPage;
