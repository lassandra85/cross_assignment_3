import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";


type Props = {
title: string;
image: any;
};


export default function CategoryCard({ title, image }: Props) {
return (
<View style={styles.card}>
<Image source={image} style={styles.img} resizeMode="contain" />
<Text style={styles.title}>{title}</Text>
</View>
);
}


const styles = StyleSheet.create({
card: {
width: 140,
backgroundColor: COLORS.bg,
padding: 12,
borderRadius: SIZES.radius,
alignItems: "center",
marginRight: 12,
},
img: {
width: 80,
height: 80,
},
title: {
marginTop: 8,
fontSize: 14,
fontWeight: "600",
color: COLORS.textDark,
},
});