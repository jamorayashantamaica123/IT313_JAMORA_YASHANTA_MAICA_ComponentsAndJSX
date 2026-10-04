import { StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  fullLoad: {
    marginTop: 6,
    fontWeight: "bold",
  },
});
