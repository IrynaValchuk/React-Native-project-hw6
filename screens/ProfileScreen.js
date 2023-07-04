import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import { gStyles } from "../styles/global.styles";
import { styles } from "../styles/ProfileScreen";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        resizeMode="cover"
        style={gStyles.bgImage}
      >
        <View style={styles.contentContainer}>
          <View style={styles.addImageBox}>
            <TouchableOpacity style={gStyles.addImageBtn}>
              <Icon name="x-circle" size={25} color={"#BDBDBD"} />
            </TouchableOpacity>
          </View>
          <View style={styles.logoutIcon}>
            <Icon
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <Text style={gStyles.title}>Natali Romanova</Text>
          <Image source={{}} style={styles.postImg} />
          <Text style={styles.textComment}>Ліс</Text>
          <View style={styles.infoWrap}>
            <View style={styles.countBox}>
              <View style={styles.descrBox}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Comments");
                  }}
                >
                  <Icon name="message-circle" size={24} color={"#BDBDBD"} />
                </TouchableOpacity>
                <Text style={styles.textCount}>0</Text>
              </View>
              <View style={styles.descrBox}>
                <TouchableOpacity>
                  <Icon name="thumbs-up" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <Text style={styles.textCount}>0</Text>
              </View>
            </View>
            <View style={styles.descrBox}>
              <TouchableOpacity>
                <Icon name="map-pin" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={styles.textLocation}>Location</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
