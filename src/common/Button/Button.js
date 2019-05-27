/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-27 20:33:15
 * @modify date 2019-05-27 20:33:15
 * @desc [description]
 */
import React from "react";
import { Button } from "react-native-elements";

const CustomButton = ({ title, type = "outline", onPress, ...props }) => {
    return (
        <Button
            buttonStyle={{
                paddingHorizontal: 26,
                paddingVertical: 8,
                borderColor: "#ed4c14"
            }}
            titleStyle={{
                padding: 0,
                color: "#ed4c14",
                fontSize: 12,
                fontFamily: "Poppins-SemiBold"
            }}
            title={title}
            type={type}
            onPress={() => onPress()}
            {...props}
        />
    );
};

export default CustomButton;
