import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/Auth';

const Profile: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View />
  );
};

export default Profile;
