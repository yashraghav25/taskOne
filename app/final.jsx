import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  Image
} from "react-native";
import back from "../assets/images/taskImages/back.png";
import {router} from 'expo-router';
import filledRect  from "../assets/images/taskImages/Rectangle 10.png";
import { styles } from "./styles.js";
import hollowRect from "../assets/images/taskImages/image.png";
export default function ComplaintScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={() => router.push("/")} style={styles.backButton}>
          <Image source={back} />
        </Pressable>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Write your reviews</Text>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.step}>Step 2 / 2</Text>
          <View style={{ flexDirection: "row", gap: 8, width: "100%" }}>
            <Image source={filledRect} style={{ flex: 1, height: 3 }} />
            <Image source={filledRect} style={{ flex: 1, height: 3 }} />
          </View>
        </View>
        <Text style={styles.subTitle}>
          Give info about the issue you're facing
        </Text>
        <Text style={styles.label}>Short title</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. No one is giving Luxor pens"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Briefly explain your issue</Text>
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: "top" }]}
          placeholder="Tell us exactly what’s wrong so it can be fixed faster."
          multiline
          value={description}
          onChangeText={setDescription}
        />

        <Pressable>
          <Text style={styles.addPhotosText}>＋ Add photos</Text>
        </Pressable>


      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <Image source={hollowRect} style={{ width: "100%" }} />
        <Pressable
          style={styles.Button}
          onPress={() => router.back()}
          >
          <Text style={styles.submitText}>Submit Complaint</Text>
        </Pressable>
      </View>
    </>
  );
}