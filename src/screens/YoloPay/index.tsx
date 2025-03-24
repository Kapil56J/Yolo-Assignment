import React from 'react';
import { SafeAreaView, StyleSheet, Animated, Easing, ScrollView } from "react-native";
import {
  Box,
  Card,
  Heading,
  HStack,
  Text,
  Image,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';
import { CopyIcon, EyeIcon, EyeOffIcon, Snowflake } from 'lucide-react-native';

const YoloPay = () => {
  const [isFreeze, setIsFreeze] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isFreeze ? 1 : 0,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isFreeze]);

  return (
    <ScrollView style={styles.container}>
    <SafeAreaView >
      <Box gap={'$3'} mx={'$2'} w={'$full'} bg={'$black'}>
        <Heading size="2xl" color="#fff">
          select payment mode
        </Heading>
        <Text color="#aaa">Choose your preferred payment method to make payment</Text>
      </Box>
      <HStack space="lg">
        <Box alignItems="center" mt={'$5'} w={'$24'} rounded={'$full'} borderColor="white" borderWidth={1} borderBottomWidth={0} p={'$2'}>
          <Heading size="lg" color="#fff">pay</Heading>
        </Box>
        <Box mx={'$2'} alignItems="center" mt={'$5'} w={'$24'} rounded={'$full'} borderColor="red" borderWidth={1} borderBottomWidth={0} p={'$2'}>
          <Heading size="lg" color="red">card</Heading>
        </Box>
      </HStack>
      <Box mt={'$10'} mx={'$2'}>
        <Text color="#aaa">YOUR DIGITAL DEBIT CARD</Text>
        <HStack mt={'$4'} space="lg">
          <Card
            hardShadow="4"
            rounded={'$2xl'}
            w={'$56'}
            borderColor="#474747"
            borderWidth={2}
            bg="black"
            h={'auto'}
            p={'$2'}
          >
            <Animated.View style={{ opacity: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }) }}>
              <HStack justifyContent="space-around" alignItems="center" top={'-$5'}>
                <Image alt="yolo" source={require('../../../Images/yolo.png')} w={'$16'} h={'$16'} />
                <Image alt="yesbank" source={require('../../../Images/yesbank.png')} w={'$20'} h={'$20'} />
              </HStack>
              <HStack space="4xl" mt={'-$2'}>
                <Box ml={'$4'} gap={'$2'}>
                  <Text color="#fff"  size="md" fontStyle="italic">8124</Text>
                  <Text color="#fff" size="md" fontStyle="italic">4212</Text>
                  <Text color="#fff" size="md" fontStyle="italic">3456</Text>
                  <Text color="#fff" size="md" fontStyle="italic">7890</Text>
                </Box>
                <VStack justifyContent="space-between">
                  <Text fontWeight={'$bold'} size="md">expiry</Text>
                  <Text color="white" fontWeight={'$bold'}>01/28</Text>
                  <VStack mt={'$6'}>
                    <Text fontWeight={'$bold'} size="md">CVV</Text>
                    <HStack alignItems="center" space="md">
                      <Heading color="white" fontWeight={'$bold'}>{isCopied ?' 456' :' * * *'}</Heading>
                      <Pressable onPress={() => setIsCopied(prev => !prev)}>
                     {!isCopied ? <EyeOffIcon color={'red'} /> : <EyeIcon color={'white'}/>}
                      </Pressable>
                    </HStack>
                  </VStack>
                </VStack>
              </HStack>
              <Box mt={'$3'} ml={'$1'} p={'$3'}>
                <HStack space="md" alignItems="center">
                  <CopyIcon color="red" size={17} />
                  <Text color="red">copy details</Text>
                </HStack>
              </Box>
              <Box mt={'-$4'} alignItems="flex-end">
                <Image alt="rupay" w={'$24'} source={require('../../../Images/rupay.png')} />
                <Text mt={'-$6'} size="sm" fontWeight={'$bold'} color="white" fontStyle="italic">PREPAID</Text>
              </Box>
            </Animated.View>
          </Card>
          <VStack space="md" alignItems="center" justifyContent="center">
            <Pressable onPress={() => setIsFreeze(prev => !prev)} alignItems="center" justifyContent="center">
              <Box alignItems="center" p={'$7'} rounded={'$full'} borderWidth={0.2} borderBottomWidth={0} borderColor={!isFreeze ? 'white' : 'red'}>
                <Snowflake color={isFreeze ? 'red' : 'white'} />
              </Box>
              <Heading mt={'$1'} color={isFreeze ? 'red' : 'white'}>{isFreeze ? 'unfreeze' : 'freeze'} </Heading>
            </Pressable>
          </VStack>
        </HStack>
      </Box>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default YoloPay;
