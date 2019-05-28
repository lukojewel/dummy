/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-27 19:58:45
 * @modify date 2019-05-27 19:58:45
 * @desc [description]
 */
import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";

let labelStyle = {
    fontFamily: "Poppins-SemiBold",
    fontWeight: "normal",
    fontSize: 8,
    color: "#8b8b8b"
};

let activeLabelStyle = {
    ...labelStyle,
    backgroundColor: "#FFF",
    position: "absolute",
    top: -7,
    left: 10,
    paddingHorizontal: 5
};

let initialLabelStyle = {
    ...labelStyle,
    position: "absolute",
    top: -7,
    left: 10,
    paddingHorizontal: 5
};

const InputField = ({
    placeholder,
    label,
    id,
    focusId,
    onFocus = () => {},
    onBlur = () => {},
    errorMessage,
    type = "text",
    ...props
}) => {
    let _label = label || placeholder;
    return (
        <View style={{ marginVertical: 5, flex: 1 }}>
            <Input
                placeholder={placeholder}
                label={focusId == id ? _label : ""}
                labelStyle={
                    focusId == id ? activeLabelStyle : initialLabelStyle
                }
                containerStyle={{
                    borderWidth: 1,
                    borderColor: focusId == id ? "#8b8b8b" : "#e4e4e4",
                    borderRadius: 6
                }}
                inputContainerStyle={{
                    borderBottomWidth: 0
                }}
                inputStyle={{
                    fontSize: 12,
                    fontFamily: "Poppins-Light",
                    color: "#000000",
                    marginTop: 3
                }}
                onFocus={() => onFocus(id)}
                onBlur={() => onBlur()}
                errorStyle={{ color: "red" }}
                errorMessage={errorMessage}
                type={type}
                {...props}
            />
        </View>
    );
};

export default InputField;
