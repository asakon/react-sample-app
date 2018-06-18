import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export class ChannelList extends React.Component<{}, {}> {

  public render() {
    // 簡略化のため、チャンネル一覧をここで定義
    const channels = ['general', 'ramdom'];

    return (
      <Menu inverted vertical fixed={'left'}>
        <Menu.Item>
        Channels
          <Menu.Menu>
            {channels.map(channel =>
              <Menu.Item
                key={channel}
                as={NavLink}
                to={{ pathname: `/channels/${channel}` }}>
              {channel}
              </Menu.Item>
            )}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}