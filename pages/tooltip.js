import styled from 'styled-components';
import { ThemeProvider, Tooltip, TooltipLink, TooltipLabel } from '../src';

const SpacerToCheckScrollBehavior = styled.div`
  height: 400px;
`
const TooltipPageComponent = ({ className }) => (
  <ThemeProvider>
    <div className={className}>
      <h2>Tooltips</h2>
      <h6>See spec at https://material.io/guidelines/components/tooltips.html#</h6>
      <p>
        Pass in whatever content you would like as a child of the tooltip component.
        *Teeechnically* material design wants you to only pass in a string, but you
        can pass in a react component as well. Images are not supported yet because
        on initial render they aren't calculated into the portal height.
      </p>
      Takes the following props:
      <ul>
        <li>
          mobile?: boolean. Indicates whether or not the tooltip uses the mobile
          designs.
        </li>
        <li>
          width?: number. Optional but recommended. If you do not pass this in
          and you pass in a string as the tooltip content, it will try to guess
          the width, but it's not very good at it. If you pass in a react component,
          it will default to 30px, which is unlikley to be what you want.
        </li>
        <li>
          link?: React.Node | string. This will default to the info icon, but you
          can also pass in a string (to use a different icon) or a custom component
        </li>
      </ul>
      <SpacerToCheckScrollBehavior />
      <h3>Desktop Tooltip with string link prop</h3>
      <Tooltip link="file_download">
        I am a desktop tooltip
      </Tooltip>
      <h3>Desktop Tooltip with React component as child</h3>
      <Tooltip
        contentWidth={200}
        >
          <div>
            You can also pass in a react component!
            <p>
              But be sure to pass in a width prop to the tooltip or it will probably look terrible
            </p>
          </div>
      </Tooltip>
      <h3>Desktop tooltip with custom link</h3>
      <Tooltip link={() => <span>custom link</span>}>
        Hello world!
      </Tooltip>
      <h3>Mobile Tooltip</h3>
      <Tooltip mobile>
        Mobile tooltips are a thing too.
      </Tooltip>
      <h3>Mobile tooltip with link string prop</h3>
      <Tooltip mobile link="close">
        <div>
          You can also pass in a react component!
          But be sure to pass in a width prop to the tooltip or it will probably look terrible
          Also images are not supported yet.
        </div>
      </Tooltip>
      <h3>Mobile tooltip with custom link component</h3>
      <Tooltip mobile link={() => <span>custom link</span>}>
        Hi world
      </Tooltip>
      <SpacerToCheckScrollBehavior />
    </div>
  </ThemeProvider>
)

export default styled(TooltipPageComponent)`
  margin-left: 20%;
`;
