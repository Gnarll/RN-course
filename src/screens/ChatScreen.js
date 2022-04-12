import React, { useRef, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import UserTypes from "../components/UserTypes";

const mockAnswers = [
  {
    msg: "How are you?",
    name: "Anonymous",
  },
  {
    msg: "How is your family?",
    name: "Anonymous",
  },
  {
    msg: "What are you doing now?",
    name: "Anonymous",
  },
  {
    msg: "What will you do at the weekends?",
    name: "Anonymous",
  },
  {
    msg: "Would you like to go travelling?",
    name: "Anonymous",
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const pushMessage = (message) => {
    setMessages((prev) => [...prev, { msg: message, name: "You" }]);
  };

  const pushMessageObj = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const clearTextInput = () => {
    setInputText("");
  };

  const [isWaiting, setIsWaiting] = useState(false);

  const waitForAnswer = async () => {
    setIsWaiting((prev) => !prev);
    await setTimeout(() => {
      pushMessageObj(mockAnswers[Math.floor(Math.random() * 4)]);
      setIsWaiting((prev) => !prev);
    }, 3000);
  };

  const scroll = useRef(null);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 10 }}
        style={styles.chat}
        ref={scroll}
        onContentSizeChange={() =>
          scroll.current.scrollToEnd({ animated: true })
        }
      >
        {messages.map((message, index) => {
          return (
            <Text
              key={index}
              style={{
                alignSelf: `${
                  message.name === "You" ? "flex-start" : "flex-end"
                }`,
                fontSize: 20,
                marginVertical: 5,
                marginHorizontal: 10,
                backgroundColor: "rgba(50, 175, 275, 0.3)",
                padding: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: Number(
                  `${message.name === "You" ? 0 : 10}`
                ),
                borderBottomRightRadius: Number(
                  `${message.name === "You" ? 10 : 0}`
                ),
              }}
            >
              {message.name}: {message.msg}
            </Text>
          );
        })}
        {isWaiting ? <UserTypes /> : null}
      </ScrollView>
      <View style={styles.underChat}>
        <TextInput
          placeholder="Write down your message"
          value={inputText}
          onChangeText={(value) => {
            setInputText(value);
          }}
        />
        <TouchableOpacity>
          <Text
            onPress={() => {
              if (inputText) {
                pushMessage(inputText);
                clearTextInput();
                waitForAnswer();
              }
            }}
            style={styles.button}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",
    height: 500,
    width: "95%",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 2,
  },
  underChat: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 5,
    padding: 7,
  },
  button: {
    fontSize: 20,
    padding: 10,
    borderColor: "blue",
    borderWidth: 4,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default ChatScreen;
