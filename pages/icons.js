import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  ThemeProvider,
  Icon,
  ArrowDropDownIcon,
  KeyboardArrowLeftIcon,
} from '../src';

const availableIcons = [
  {
    category: 'Action',
    icons: [
      'search',
      'info_outline',
    ]
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
    icons: [
      'pin_drop',
    ],
  },
  {
    category: 'Navigation',
    icons: [
      'arrow_drop_down',
    ],
  },
  {
    category: 'Toggle',
    icons: [
      'star',
      'star_border',
      'star_half',
    ]
  }
];

const IconsPage = ({ className }) => (
  <ThemeProvider>
    <section className={className}>
      <h1>Icons</h1>
        Icons can be rendered in one of two ways:
        <ul>
          <li>
            Directly imported
            <ul>
              <li>
                <ArrowDropDownIcon /> {`<ArrowDropDown />`}
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
