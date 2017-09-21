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
      <h1>Cards</h1>
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
          <p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </SupportingText>
        <Actions>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Actions>
      </DemoCard>
      <DemoCard>
        <Primary>
          <Avatar></Avatar>
          <TitleWithAvatar>Title</TitleWithAvatar>
          <SubtitleWithAvatar>Subtitle</SubtitleWithAvatar>
        </Primary>
        <Media wide src="https://s3.amazonaws.com/media.conciergeauctions.com/images/16-9.jpg" />
        <Actions>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Actions>
      </DemoCard>
    </div>
  </MaterialThemeProvider>
);

const StyledCardsPage = styled(CardsPage)`

`;

export default StyledCardsPage;
