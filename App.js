import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

export default function App() {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");

  // const onPressOut = () => {
  //   if (user === "admin" && password === "123456") {
  //     Alert.alert('Dang nhap thanh cong')
  //   }else{
  //     Alert.alert('Dang nhap that bai')
  //   }
  // };

  // return (
  //   <View style={styles.container}>
  //     <View style={{ flex: 1, justifyContent: "center", alignSelf: "flex-start" }}>
  //       <Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text>
  //     </View>
  //     <View style={{ flex: 1, width: "100%" }}>
  //       <View style={{}}>
  //         <TextInput style={styles.input} placeholder="Username" value={user} onChangeText={(value) => setUser(value)} />
  //       </View>
  //       <View style={styles.containerPassword}>
  //         <TextInput style={styles.input} label="Password" placeholder="Password" secureTextEntry value={password} onChangeText={(value) => setPassword(value)} />
  //         {/* <Image source={require('./assets/lock-152879 1.png')} /> */}
  //       </View>
  //     </View>
  //     <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>
  //       <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", padding: 10, height: 45 }} onPressOut={onPressOut}>
  //         <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 700 }}>LOGIN</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <View style={{ flex: 1, justifyContent: "flex-start" }}>
  //       <Text style={{ fontSize: 20, fontWeight: 800 }}>Forgot your Password?</Text>
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return (
    <View style={style2.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image style={{}} source={require("./assets/usb.png")} />
        <Text style={{ fontSize: 20, fontWeight: "500" }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25, fontWeight: "500" }}>Cực kỳ hài lòng</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", borderWidth: 1, borderColor: "blue", alignItems: "center", width: "100%", justifyContent: "center", maxHeight: 80 }}>
        <Image style={{}} source={require("./assets/usb.png")} />
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Thêm hình ảnh</Text>
      </View>
      <View style={{ flex: 1, width: "100%", marginTop: 50 }}>
        <TextInput multiline={true} numberOfLines={10} style={{ height: 200, textAlignVertical: "top", borderWidth: 1, padding: 10 }} placeholder="Hãy chia sẽ nhưng điều bạn thích về sản phẩm" />
      </View>
      <View style={{ flex: 1, marginTop: 100, width: "100%" }}>
        <TouchableOpacity style={{ alignItems: "center", backgroundColor: "#000", padding: 10, height: 45 }}>
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: 700 }}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom, #FBCB00, #BF9A00)",
    // backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  input: {
    height: 54,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const style2 = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 15,
  },
});
