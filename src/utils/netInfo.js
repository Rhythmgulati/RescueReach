import NetInfo from '@react-native-community/netinfo';

const getNetworkInfo = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};

export default getNetworkInfo;
