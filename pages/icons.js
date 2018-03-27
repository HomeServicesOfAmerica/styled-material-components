import React from 'react';
import styled from 'styled-components';
import {
  ArrowDropDownIcon,
  Button,
  FloatingActionButton,
  GridList,
  GridTile,
  Icon,
  KeyboardArrowLeftIcon,
  ThemeProvider,
} from '../src';
import {
  NetworkCellIcon,
  BusinessIcon,
  CallIcon,
  CallEndIcon,
  ChatBubbleIcon,
  CommentIcon,
  EmailIcon,
  ForumIcon,
  ImportExportIcon,
  AddCircleIcon,
  AddCircleOutlineIcon,
  AccessTimeIcon,
  NetworkWifiIcon,
  ModeCommentIcon,
  InsertDriveFileIcon,
  CloudOffIcon,
  FileDownloadIcon,
  FileUploadIcon,
  HeadsetIcon,
  KeyboardVoiceIcon,
  LaptopMacIcon,
  MemoryIcon,
  SecurityIcon,
  WatchIcon,
  AudiotrackIcon,
  Brightness3Icon,
  ColorLensIcon,
  EditIcon,
  FlashOnIcon,
  PaletteIcon,
  RemoveRedEyeIcon,
  DirectionsBikeIcon,
  DirectionsBusIcon,
  DirectionsCarIcon,
  DirectionsRailwayIcon,
  DirectionsRunIcon,
  DirectionsSubwayIcon,
  FlightIcon,
  HotelIcon,
  LayersIcon,
  MapIcon,
  MyLocationIcon,
  RestaurantIcon,
  LocalPostOfficeIcon,
  AppsIcon,
  CancelIcon,
  ArrowBackIcon,
  ArrowDownwardIcon,
  ArrowForwardIcon,
  ArrowUpwardIcon,
  RefreshIcon,
  CloseIcon,
  MenuIcon,
  MoreHorizIcon,
  MoreVertIcon,
  EventAvailableIcon,
  EventBusyIcon,
  PowerIcon,
  SmsIcon,
  MmsIcon,
  WifiIcon,
  AcUnitIcon,
  AllInclusiveIcon,
  CasinoIcon,
  FitnessCenterIcon,
  FreeBreakfastIcon,
  SpaIcon,
  CakeIcon,
  GroupIcon,
  GroupAddIcon,
  MoodIcon,
  MoodBadIcon,
  PersonIcon,
  PersonAddIcon,
  SentimentVeryDissatisfiedIcon,
  SentimentDissatisfiedIcon,
  SentimentNeutralIcon,
  SentimentSatisfiedIcon,
  SentimentVerySatisfiedIcon,
  ShareIcon,
  WhatshotIcon,
  StarIcon,
} from '../src/icons';

const availableIcons = [
  {
    category: 'Action',
    icons: ['search', 'info_outline'],
  },
  {
    category: 'Hardware',
    icons: [
      'keyboard_arrow_left',
      'keyboard_arrow_right',
      'keyboard_arrow_up',
      'keyboard_arrow_down',
    ],
  },
  {
    category: 'Maps',
    icons: ['pin_drop'],
  },
  {
    category: 'Navigation',
    icons: ['arrow_drop_down', 'close', 'menu'],
  },
  {
    category: 'Toggle',
    icons: ['star', 'star_border', 'star_half'],
  },
];

const StyledButton = Button.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
`;

const IconsPage = ({ className }) => (
  <ThemeProvider>
    <section className={className}>
      <h1>Icons</h1>
      <GridList>
        <GridTile>
          <NetworkCellIcon />
        </GridTile>
        <GridTile>
          <BusinessIcon />
        </GridTile>
        <GridTile>
          <CallIcon />
        </GridTile>
        <GridTile>
          <CallEndIcon />
        </GridTile>
        <GridTile>
          <ChatBubbleIcon />
        </GridTile>
        <GridTile>
          <CommentIcon />
        </GridTile>
        <GridTile>
          <EmailIcon />
        </GridTile>
        <GridTile>
          <ForumIcon />
        </GridTile>
        <GridTile>
          <ImportExportIcon />,
        </GridTile>
        <GridTile>
          <AddCircleIcon />
        </GridTile>
        <GridTile>
          <AddCircleOutlineIcon />
        </GridTile>
        <GridTile>
          <AccessTimeIcon />
        </GridTile>
        <GridTile>
          <NetworkWifiIcon />
        </GridTile>
        <GridTile>
          <ModeCommentIcon />
        </GridTile>
        <GridTile>
          <InsertDriveFileIcon />
        </GridTile>
        <GridTile>
          <CloudOffIcon />
        </GridTile>

        <GridTile>
          <HeadsetIcon />
        </GridTile>
        <GridTile>
          <KeyboardVoiceIcon />
        </GridTile>
        <GridTile>
          <LaptopMacIcon />
        </GridTile>
        <GridTile>
          <MemoryIcon />
        </GridTile>
        <GridTile>
          <SecurityIcon />
        </GridTile>
        <GridTile>
          <WatchIcon />
        </GridTile>
        <GridTile>
          <AudiotrackIcon />
        </GridTile>
        <GridTile>
          <Brightness3Icon />
        </GridTile>
        <GridTile>
          <ColorLensIcon />
        </GridTile>
        <GridTile>
          <EditIcon />
        </GridTile>
        <GridTile>
          <FlashOnIcon />
        </GridTile>
        <GridTile>
          <PaletteIcon />
        </GridTile>
        <GridTile>
          <RemoveRedEyeIcon />
        </GridTile>
        <GridTile>
          <DirectionsBikeIcon />
        </GridTile>
        <GridTile>
          <DirectionsBusIcon />
        </GridTile>
        <GridTile>
          <DirectionsCarIcon />
        </GridTile>
        <GridTile>
          <DirectionsRailwayIcon />
        </GridTile>
        <GridTile>
          <DirectionsRunIcon />
        </GridTile>
        <GridTile>
          <DirectionsSubwayIcon />
        </GridTile>
        <GridTile>
          <FlightIcon />
        </GridTile>
        <GridTile>
          <HotelIcon />
        </GridTile>
        <GridTile>
          <LayersIcon />
        </GridTile>
        <GridTile>
          <MapIcon />
        </GridTile>
        <GridTile>
          <MyLocationIcon />
        </GridTile>
        <GridTile>
          <RestaurantIcon />
        </GridTile>
        <GridTile>
          <LocalPostOfficeIcon />
        </GridTile>
        <GridTile>
          <AppsIcon />
        </GridTile>
        <GridTile>
          <CancelIcon />
        </GridTile>
        <GridTile>
          <ArrowBackIcon />
        </GridTile>
        <GridTile>
          <ArrowDownwardIcon />
        </GridTile>
        <GridTile>
          <ArrowForwardIcon />
        </GridTile>
        <GridTile>
          <ArrowUpwardIcon />
        </GridTile>
        <GridTile>
          <RefreshIcon />
        </GridTile>
        <GridTile>
          <CloseIcon />
        </GridTile>
        <GridTile>
          <MenuIcon />
        </GridTile>
        <GridTile>
          <MoreHorizIcon />
        </GridTile>
        <GridTile>
          <MoreVertIcon />
        </GridTile>
        <GridTile>
          <EventAvailableIcon />
        </GridTile>
        <GridTile>
          <EventBusyIcon />
        </GridTile>
        <GridTile>
          <PowerIcon />
        </GridTile>
        <GridTile>
          <SmsIcon />
        </GridTile>
        <GridTile>
          <MmsIcon />
        </GridTile>
        <GridTile>
          <WifiIcon />
        </GridTile>
        <GridTile>
          <AcUnitIcon />
        </GridTile>
        <GridTile>
          <AllInclusiveIcon size={40} />
        </GridTile>
        <GridTile>
          <CasinoIcon size={40} />
        </GridTile>
        <GridTile>
          <FitnessCenterIcon size={40} />
        </GridTile>
        <GridTile>
          <FreeBreakfastIcon size={40} />
        </GridTile>
        <GridTile>
          <SpaIcon size={40} />
        </GridTile>
        <GridTile>
          <CakeIcon size={40} />
        </GridTile>
        <GridTile>
          <GroupIcon size={40} />
        </GridTile>
        <GridTile>
          <GroupAddIcon size={40} />
        </GridTile>
        <GridTile>
          <MoodIcon size={40} />
        </GridTile>
        <GridTile>
          <MoodBadIcon size={40} />
        </GridTile>
        <GridTile>
          <PersonIcon size={40} />
        </GridTile>
        <GridTile>
          <PersonAddIcon size={60} />
        </GridTile>
        <GridTile>
          <SentimentVeryDissatisfiedIcon size={60} />
        </GridTile>
        <GridTile>
          <SentimentDissatisfiedIcon size={60} />
        </GridTile>
        <GridTile>
          <SentimentNeutralIcon size={60} />
        </GridTile>
        <GridTile>
          <SentimentSatisfiedIcon size={60} />
        </GridTile>
        <GridTile>
          <SentimentVerySatisfiedIcon size={60} fill="green" />
        </GridTile>
        <GridTile>
          <ShareIcon size={60} fill="skyblue" />
        </GridTile>
        <GridTile>
          <WhatshotIcon size={60} fill="orange" />
        </GridTile>
        <GridTile>
          <StarIcon size={60} fill="red" />
        </GridTile>
        <GridTile>
          <NetworkCellIcon fill="indigo" size={60} />
        </GridTile>
      </GridList>
      Icons can be rendered in one of two ways:
      <h1>Icon Buttons</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledButton raised primary>
          <FileDownloadIcon fill="white" />
        </StyledButton>
        <StyledButton raised accent>
          <FileUploadIcon fill="white" />
        </StyledButton>
        <FloatingActionButton primary>
          <StarIcon fill="#fff" />
        </FloatingActionButton>
      </div>
      <ul>
        <li>
          Directly imported
          <ul>
            <li>
              <ArrowDropDownIcon fill="purple" size={40} /> {`<ArrowDropDown />`}
            </li>
            <li>
              <KeyboardArrowLeftIcon /> {`<KeyboardArrowLeftIcon />`}
            </li>
          </ul>
        </li>
        <li>
          Specified as an "icon" prop to an Icon component
          <ul>
            <li>
              <Icon icon="arrow_drop_down" /> {`<Icon icon="arrow_drop_down />`}
            </li>
            <li>
              <Icon icon="keyboard_arrow_left" /> {`<Icon icon="keyboard_arrow_left />`}
            </li>
          </ul>
        </li>
      </ul>
      Available icons are:
      <section>
        {availableIcons.map(icontype => (
          <div key={icontype.category}>
            <h4>{icontype.category}</h4>
            <section className="icon-type-examples">
              {icontype.icons.map(icon => (
                <div key={icon} className="icon-example">
                  <Icon icon={icon} />
                  {icon}
                </div>
              ))}
            </section>
          </div>
        ))}
      </section>
    </section>
  </ThemeProvider>
);

const Icons = styled(IconsPage)`
  & .icon-type-examples {
    display: flex;
  }

  & .icon-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export default Icons;
