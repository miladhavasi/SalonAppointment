import React from 'react';
import { StyleSheet, View } from 'react-native';

function TimerTest() {
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>

        </View>
    );
}

export default TimerTest;
const styles = StyleSheet.create({
    container: { flex: 1 , backgroundColor: 'khaki', alignItems: 'center', justifyContent: "center" },
    boxContainer: { width:250, justifyContent: "space-between",flexDirection:"row"},
    box: { width: 50, height: 50, backgroundColor: 'red' }
});