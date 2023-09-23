import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const {
    params: { label, location, coords },
  } = useRoute();

  return (
    <View style={styles.mapContainer}>
      <MapView
        region={{
          ...coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapStyle}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker title={label} coordinate={coords} description={location} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
