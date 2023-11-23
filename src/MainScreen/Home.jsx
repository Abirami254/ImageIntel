import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { GetImageData } from "../Api/GetImageData";

function Home() {
  // Access the navigation object using the useNavigation hook
  const navigation = useNavigation();

  // State variables for image data and search input
  const [imgData, setImgData] = useState([]);
  const [searchimgData, setSearchImgData] = useState("");

  // Function to fetch image data from the API
  const ImageData = async () => {
    const result = await GetImageData();
    setImgData(result);
  };

  useEffect(() => {
    ImageData();
  }, []);

  // Filter images based on the search input
  const filterImage = imgData?.filter((image) => {
    return image.author?.toLowerCase().includes(searchimgData.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 5,
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 5,
            borderRadius: 10,
          }}
          onChangeText={(value) => setSearchImgData(value)}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={filterImage}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                paddingHorizontal: 20,
                margin: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 15,
                paddingBottom: 15,
                marginBottom: 5,
                shadowColor: "#000",
                elevation: 5,
              }}
            >
              <Image
                source={{ uri: item.download_url }}
                style={{
                  width: 280,
                  height: 250,
                  resizeMode: "cover",
                  borderRadius: 5,
                }}
              />
              <TouchableOpacity
                style={{ backgroundColor: "#FFFF", padding: 5 }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                  }}
                >
                  {item.author}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Info", { imageID: item.id })
                }
                style={styles.button}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}
                >
                  Info
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

// Styles for the Home component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 10,
    margin: 2,
    backgroundColor: "white",
  },
  content: {
    height: "90%",
  },
  button: {
    backgroundColor: "skyblue",
    paddingVertical: 5,
    color: "#fff",
    width: "90%",
    alignItems: "center",
    color: "#fff",
    borderRadius: 5,
  },
});

export default Home;
