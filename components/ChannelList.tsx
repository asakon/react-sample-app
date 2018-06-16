import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export class ChannelList extends React.Component<{}, {}> {

  public render() {
    return (
      <Menu inverted vertical fixed={'left'}>
        <Menu.Item>
        Channels
          <Menu.Menu>
            <Menu.Item>
            general
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}