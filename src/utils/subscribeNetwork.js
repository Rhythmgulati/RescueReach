import NetInfo from '@react-native-community/netinfo';

export const subscribeNetwork = (callback) => {
  return NetInfo.addEventListener(state => {
    callback(state.isConnected);
  });
};

