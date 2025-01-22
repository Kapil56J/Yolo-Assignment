import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Box, Heading } from "@gluestack-ui/themed";

const Ginie = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Box mx={'$2'} h={'$full'} w={'$full'} bg={'$black'} >
                <Heading size='2xl' color="#fff">Ginie</Heading>
            </Box>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default Ginie;