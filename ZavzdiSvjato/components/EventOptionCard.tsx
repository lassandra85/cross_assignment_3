import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";


type Props = {
title: string;
image: any;
};


export default function EventOptionCard({ title, image }: Props) {
return (
<View style={styles.card}>
<Image source={image} style={styles.img} resizeMode="contain" />
<Text style={styles.text}>{title}</Text>
</View>
);
}


const styles = StyleSheet.create({
card: {
width: "48%",
backgroundColor: COLORS.bg,
padding: 12,
borderRadius: SIZES.radius,
marginBottom: 12,
},
img: {
width: "100%",
height: 100,
},
text: {
marginTop: 8,
fontSize: 14,
fontWeight: "600",
color: COLORS.textDark,
},
});