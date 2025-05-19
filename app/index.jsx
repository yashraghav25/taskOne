import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { styles } from "./styles";
import { taskImages } from "../constants/taskImages.js";
import { router } from "expo-router";
import { spaces } from "../constants/spaces.js";
export default function App() {
  //declaring the states will be used to detect whether the option is selected
  const [selected, setSelected] = useState(null);
  const renderItem = ({ item }) => {
    // checks whether the item is selected
    const isSelected = (item.id === selected);
    return (
      <Pressable
        style={[
          styles.itemContainer,
          isSelected && styles.selectedItemContainer
        ]}
        onPress={() => setSelected(item.id)}
        //item.id is the id of the selected item it updates the state and the id is stored
      >
        <View
          style={[styles.iconWrapper, isSelected && styles.selectedIconWrapper]}
        >
          <Image
            source={item.icon}
            tintColor={isSelected ? "white" : "#1a1a1a"}
          />
        </View>
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    );
  };
  //filters the data by category
  const group = {
    "Shops": spaces.filter((d) => d.category === "Shops"),
    "Food Area": spaces.filter((d) => d.category === "Food Area"),
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {selected && (
          <Pressable
            onPress={() => setSelected(null)}
            style={styles.backButton}
          >
            <Image source={taskImages.back} />
          </Pressable>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Write your reviews</Text>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.step}>Step 1 / 2</Text>
          <View style={{ flexDirection: "row", gap: 8, width: "100%" }}>
            <Image
              source={taskImages.filledRect}
              style={{ flex: 1, height: 3 }}
            />
            <Image
              source={taskImages.hollowRect}
              style={{ flex: 1, height: 3 }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.subTitle}>
            Select the space you're facing problem in your city.
          </Text>
          <FlatList
            style={{ flex: 1 }}
            scrollEnabled={true}
            //declaring the data
            data={Object.entries(group)}
            keyExtractor={([category]) => category}
            renderItem={({ item: [category, items] }) => (
              <View>
                <Text style={styles.category}>{category}</Text>
                <FlatList
                  scrollEnabled={true}
                  data={items}
                  renderItem={renderItem}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
      {selected && (
        <View style={styles.buttonContainer}>
          <Image source={taskImages.hollowRect} style={{ width: "100%" }} />
          <Pressable
            style={styles.Button}
            onPress={() => router.push("/final")}
          >
            <Text style={styles.nextText}>Next</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}
