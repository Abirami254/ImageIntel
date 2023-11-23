import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { GetIndividualImage } from "../Api/GetIndividualData";

function InfoScreen(props) {
  // Extract image ID from navigation parameters
  console.log("Route value", props.route.params.imageID);
  const imgid = props.route.params.imageID;

  // State variable to store individual image data
  const [individualData, setIndividualData] = useState("");

  // Function to fetch individual image data based on the image ID
  const IndividualImage = async () => {
    const result = await GetIndividualImage(imgid);
    setIndividualData(result);
  };
  console.log("data>>>>>>>>>>>>>", individualData);
  useEffect(() => {
    IndividualImage();
  }, []);
  return (
    <View>
      <View style={{ height: 350 }}>
        <Image
          source={{ uri: individualData.download_url }}
          style={{ width: 430, height: 300 }}
        />
      </View>
      <View style={styles.content}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20, width: "40%" }}>
            Author Name{" "}
          </Text>
          <Text style={{ fontSize: 16, width: "50%" }}>
            : {individualData.author}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20, width: "40%" }}>
            Download URL{" "}
          </Text>
          <Text style={{ fontSize: 16, width: "50%" }}>
            : {individualData.download_url}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20, width: "40%" }}>
            Image Height{" "}
          </Text>
          <Text style={{ fontSize: 16, width: "50%" }}>
            : {individualData.height}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "blue", fontSize: 20, width: "40%" }}>
            Image Width{" "}
          </Text>
          <Text style={{ fontSize: 16, width: "50%" }}>
            : {individualData.width}
          </Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", padding: 5 }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`${individualData.download_url}`)}
          >
            <Text style={{ fontSize: 18 }}>Click here to open in browser</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Styles for the InfoScreen component
const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ddd",
    paddingVertical: 15,
    paddingHorizontal: 5,
    margin: 10,
    shadowColor: "skyblue",
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 10,
  },
});
export default InfoScreen;
