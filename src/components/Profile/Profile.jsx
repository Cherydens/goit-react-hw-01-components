import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsContainer,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsContainer>
        <Stats>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Stats>
        <Stats>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Stats>
        <Stats>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Stats>
      </StatsContainer>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
