import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { SubmitButton } from "../components/SubmitButton";

import { styles } from "../styles/CreatePostsScreen";

export const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const [locationText, setLocationText] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleLocationChange = (text) => {
    setLocationText(text);
  };

  const handleTakePhoto = async () => {
    const { uri } = await cameraRef.takePictureAsync();
    setPhoto(uri);
  };

  const isButtonDisabled = !(title && locationText && photo);

  const handlePublish = () => {
    console.log(`"title:" ${title}, "location:" ${location}`);
    setTitle("");
    setLocationText("");
    setPhoto("");
    setLocation(null);
    navigation.navigate("Posts", {
      location,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              {photo && (
                <View>
                  <Image source={{ uri: photo }} style={styles.previewPhoto} />
                </View>
              )}
              <TouchableOpacity
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
                style={styles.btnChangeType}
                disabled={photo}
              >
                <Icon
                  name="refresh-cw"
                  size={24}
                  color={
                    type === Camera.Constants.Type.back ? "#BDBDBD" : "#FFFFFF"
                  }
                />
              </TouchableOpacity>
              <View style={styles.cameraButton}>
                <TouchableOpacity
                  onPress={handleTakePhoto}
                  style={[
                    styles.btnTakePhoto,
                    {
                      backgroundColor: photo
                        ? "rgba(255, 255, 255, 0.3)"
                        : "#FFFFFF",
                    },
                  ]}
                  disabled={photo}
                >
                  <Icon
                    name="camera"
                    size={24}
                    color={photo ? "#FFFFFF" : "#BDBDBD"}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
          {photo ? (
            <Text style={styles.text}>Редагувати фото</Text>
          ) : (
            <Text style={styles.text}>Завантажте фото</Text>
          )}
          <View style={styles.inputWrap}>
            <TextInput
              style={[styles.input, { fontFamily: "RobotoMedium" }]}
              value={title}
              onChangeText={handleTitleChange}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
            />
            <TextInput
              style={[styles.input, { paddingLeft: 28 }]}
              value={locationText}
              onChangeText={handleLocationChange}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity style={styles.locationIcon}>
              <Icon name="map-pin" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <SubmitButton
            text="Опублікувати"
            onPress={handlePublish}
            disabled={isButtonDisabled}
          />
          <TouchableOpacity style={styles.deleteBtn}>
            <Icon name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
