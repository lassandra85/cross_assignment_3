import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";


type Props = {
title: string;
onPress?: () => void;
type?: "primary" | "secondary";
};


export default function CustomButton({ title, onPress, type = "primary" }: Props) {
return (
<TouchableOpacity
onPress={onPress}
style={[styles.btn, type === "secondary" && styles.secondary]}
>
<Text style={styles.text}>{title}</Text>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
    btn: {
        marginTop: 150,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: SIZES.radius,
    alignItems: "center",
    marginVertical: 8,
},
secondary: {
backgroundColor: COLORS.secondary,
},
text: {
color: COLORS.textLight,
fontSize: 16,
fontWeight: "600",
},
});