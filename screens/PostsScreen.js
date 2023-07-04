import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import { styles } from "../styles/PostsScreen";

export const PostsScreen = () => {
  const navigation = useNavigation();

  const location = useRoute().params?.location;

  return (
    <View style={styles.container}>
      <View style={styles.userWrap}>
        <View>
          <Image
            source={require("../assets/images/user.jpg")}
            style={styles.userImg}
          />
        </View>
        <View>
          <Text style={styles.textName}>Natali Romanova</Text>
          <Text style={styles.textEmail}>email@example.com</Text>
        </View>
      </View>
      <View>
        <Image source={{}} style={styles.postImg} />
        <View>
          <Text style={styles.textComment}>Ліс</Text>
        </View>
        <View style={styles.infoWrap}>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Map", { location: location });
              }}
            >
              <Icon name="map-pin" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <Text style={styles.textLocation}>Location</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
