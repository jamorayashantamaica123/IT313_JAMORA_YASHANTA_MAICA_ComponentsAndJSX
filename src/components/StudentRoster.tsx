import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import StudentCard from "./StudentCard";

type Student = {
  id: number;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Ana Cruz",
    course: "BS Information Technology",
    units: 18,
    isFullLoad: true,
  },
  {
    id: 2,
    name: "Bea Santos",
    course: "BS Computer Science",
    units: 15,
    isFullLoad: false,
  },
  {
    id: 3,
    name: "Cid Ramos",
    course: "BS Information Technology",
    units: 21,
    isFullLoad: true,
  },
  {
    id: 4,
    name: "Dex Alonzo",
    course: "BS Information Technology",
    units: 12,
    isFullLoad: false,
  },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>Total Students: {students.length}</Text>

      <View style={styles.list}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>

      <Button title="Reverse Roster" onPress={reverseRoster} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  count: {
    fontSize: 18,
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
});
