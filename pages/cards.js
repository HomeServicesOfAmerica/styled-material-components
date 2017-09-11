import React from 'react';
import styled from 'styled-components';
import typography from '../src/mixins/typography';
import Button from '../src/components/Button';
import Card from '../src/components/Card/Card';
import Primary from '../src/components/Card/Primary';
import Title from '../src/components/Card/Title';
import Subtitle from '../src/components/Card/Subtitle';
import SupportingText from '../src/components/Card/SupportingText';
import Media from '../src/components/Card/Media';
import Actions from '../src/components/Card/Actions';
import Avatar from '../src/components/Card/Avatar';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import HorizontalBlock from '../src/components/Card/HorizontalBlock';
import MediaItem from '../src/components/Card/MediaItem';

const DemoCard = Card.extend`
  max-width: 21.875rem;
  margin-bottom: 48px;

  @media(min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const TitleWithAvatar = Title.extend`
  margin-left: 56px;
`;

const SubtitleWithAvatar = Subtitle.extend`
  margin-left: 56px;
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
      <br/>
      <DemoCard>
        <Primary>
          <Avatar></Avatar>
          <TitleWithAvatar>Title</TitleWithAvatar>
          <SubtitleWithAvatar>Subhead</SubtitleWithAvatar>
        </Primary>
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
        <Primary>
          <Avatar></Avatar>
          <TitleWithAvatar>Title</TitleWithAvatar>
          <SubtitleWithAvatar>Subhead</SubtitleWithAvatar>
        </Primary>
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <Actions vertical>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <Primary>
          <Title large>Title goes here</Title>
          <Subtitle>Subtitle here</Subtitle>
        </Primary>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Primary>
          <Title large>Title goes here</Title>
          <Subtitle>Subtitle here</Subtitle>
        </Primary>
        <SupportingText>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna.</SupportingText>
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
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg"/>
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem scale={1.5} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg"/>
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <Primary>
            <Title large>Title here</Title>
            <Subtitle>Subtitle here</Subtitle>
          </Primary>
          <MediaItem scale={2} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg"/>
        </HorizontalBlock>
        <Actions>
          <Button compact>Action 1</Button>
          <Button compact>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <HorizontalBlock>
          <MediaItem scale={3} src="https://s3.amazonaws.com/media.conciergeauctions.com/images/1-1.jpg"/>
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
