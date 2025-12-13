import { View, Text, StyleSheet, ScrollView } from "react-native";
import CategoryCard from "../components/CategoryCard";
import FooterNav from "../components/FooterNav";
import { COLORS, SIZES } from "../constants/theme";
import { categories } from "../data/categories";



export default function HomeScreen() {
return (
<View style={styles.container}>
<Text style={styles.title}>Вітаємо, Гість</Text>


<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
style={{ marginVertical: 20 }}
>
{categories.map((item) => (
  <CategoryCard
    key={item.id}
    title={item.title}
    image={item.image}
  />
))}
</ScrollView>


<FooterNav active="home" />
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
padding: SIZES.padding,
backgroundColor: COLORS.bg,
},
title: {
fontSize: 22,
fontWeight: "700",
color: COLORS.textDark,
},
});