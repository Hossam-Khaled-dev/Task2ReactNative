import Checkbox from "expo-checkbox";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const TodoList = ({ todos, onTodochecked, onTodoDeleted }) => {
  let total = todos.length;
  const [dones, setDones] = useState(1);

  const setChecked = (item) => {
    if (!item.done) {
      setDones(dones + 1);
      onTodochecked(item);
    }
  };
  const setDeleted = (item) => {
    setDones(dones - 1);
    onTodoDeleted(item);
  };

  return (
    <FlatList
      style={styles.listContainer}
      data={todos}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <Text
              style={{ ...styles.txt, ...(item.done ? styles.donetxt : {}) }}
            >
              {item.title}
            </Text>
            <View style={styles.doneContainer}>
              <TouchableOpacity
                style={styles.check}
                onPress={() => {
                  setChecked(item);
                }}
              >
                <Checkbox
                  value={item.done}
                  onValueChange={() => {
                    setChecked(item);
                  }}
                  color={"#FF0066"}
                />

                <Text style={styles.txt}>Done</Text>
              </TouchableOpacity>
            </View>
            {/* DELETE */}
            <View style={styles.doneContainer}>
              <TouchableOpacity
                style={styles.check}
                onPress={() => {
                  setDeleted(item);
                }}
              >
                <Checkbox
                  value={item.delete}
                  onValueChange={() => {
                    setDeleted(item);
                  }}
                  color={"#FF0066"}
                />

                <Text style={styles.txt}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        
        <Text style={styles.listHeader}>
          {dones} done of {total} tasks{" "}
        
        </Text>
       
      )}
     
   
    />
  );
};

export const styles = StyleSheet.create({
  listContainer: {
    margin: 5,
    padding: 20,
    height: "100%",
  },
  listHeader: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    margin: 4,
    borderRadius: 25,
    backgroundColor: "#E8E8E8",
  },
  txt: {
    fontSize: 15,
    paddingLeft: 5, 
  },
  donetxt: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  doneContainer: {
    display: "flex",
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-around",
  },
  check: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checked: {
    width: "20%",
    height: 40,
    marginLeft: 10,
  },
 
});
export default TodoList;
